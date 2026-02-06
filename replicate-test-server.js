import express from "express";
import cors from "cors";
import Replicate from "replicate";
import admin from "firebase-admin";

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));

async function pickUrl(output) {
  if (typeof output === "string") return output;

  if (Array.isArray(output)) {
    for (const item of output) {
      const u = await pickUrl(item);
      if (u) return u;
    }
    return null;
  }

  if (output && typeof output === "object") {
    if (output.output) return await pickUrl(output.output);
    if (typeof output.url === "string") return output.url;
    if (typeof output.href === "string") return output.href;

    if (typeof output.url === "function") {
      try {
        const u = await output.url();
        if (typeof u === "string") return u;
      } catch {}
    }

    try {
      const s = String(output);
      if (s.startsWith("http")) return s;
    } catch {}
  }

  return null;
}

// =========================
// Firebase Admin (opcional)
// =========================
function getFirebaseServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON;
  if (!raw) return null;

  try {
    if (raw.trim().startsWith("{")) return JSON.parse(raw);
    const decoded = Buffer.from(raw, "base64").toString("utf8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

let db = null;
let FieldValue = null;

if (!admin.apps.length) {
  const serviceAccount = getFirebaseServiceAccount();
  if (serviceAccount) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    db = admin.firestore();
    FieldValue = admin.firestore.FieldValue;
  }
}

app.get("/health", (req, res) => res.send("ok"));

/**
 * POST /generate-image
 * body:
 * {
 *   quality: "hd" | "4k",
 *   prompt: string,
 *   input_image?: string (dataURL)  // para HD (Replicate)
 *   base64Data?: string             // para 4K (Gemini)
 *   mimeType?: string               // para 4K (Gemini)
 *
 *   // ✅ créditos (opcional)
 *   uid?: string                    // UID do usuário no Firestore (users/{uid})
 *   requestId?: string              // idempotência (evita desconto duplo)
 * }
 * returns: { image_url: string }
 */
app.post("/generate-image", async (req, res) => {
  try {
    const body = req.body || {};
    const quality = body.quality || "hd";
    const prompt = body.prompt;

    if (!prompt) return res.status(400).json({ error: "Faltou 'prompt' no JSON" });

    // =========================
    // ✅ Cálculo de créditos
    // =========================
    const requiredCredits = quality === "4k" ? 4 : 1;
    const uid = typeof body.uid === "string" ? body.uid.trim() : "";
    const requestId = typeof body.requestId === "string" ? body.requestId.trim() : "";

    // ✅ Desconta antes de gerar (evita gerar sem crédito)
    // Só roda se tiver Firebase configurado + uid + requestId
    if (db && FieldValue && uid && requestId) {
      const chargeRef = db.collection("users").doc(uid).collection("charges").doc(requestId);
      const userRef = db.collection("users").doc(uid);

      const chargeResult = await db.runTransaction(async (tx) => {
        const chargeSnap = await tx.get(chargeRef);
        if (chargeSnap.exists) {
          // ✅ já cobrado antes, não cobra de novo
          return { alreadyCharged: true };
        }

        const userSnap = await tx.get(userRef);
        const creditsNow = Number(userSnap.exists ? userSnap.data()?.credits ?? 0 : 0);

        if (creditsNow < requiredCredits) {
          return { insufficient: true, creditsNow };
        }

        tx.set(
          chargeRef,
          {
            createdAt: FieldValue.serverTimestamp(),
            quality,
            requiredCredits,
          },
          { merge: true }
        );

        tx.set(
          userRef,
          {
            credits: FieldValue.increment(-requiredCredits),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );

        return { charged: true };
      });

      if (chargeResult?.insufficient) {
        return res.status(402).json({
          error: "Créditos insuficientes",
          requiredCredits,
          creditsNow: chargeResult.creditsNow ?? 0,
        });
      }
    }

    // =========================
    // 4K -> GEMINI (server-side)
    // =========================
    if (quality === "4k") {
      const googleKey = (process.env.GOOGLE_API_KEY || "").trim();
      if (!googleKey) {
        return res.status(500).json({
          error: "Faltou GOOGLE_API_KEY no ambiente do servidor 5050",
          detail: "Crie um .env (ou set no terminal) com GOOGLE_API_KEY=...",
        });
      }

      const base64Data = body.base64Data;
      const mimeType = body.mimeType;

      if (!base64Data || !mimeType) {
        return res.status(400).json({
          error: "Faltou base64Data/mimeType para 4K (Gemini)",
        });
      }

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${encodeURIComponent(
        googleKey
      )}`;

      const payload = {
        contents: {
          parts: [{ inlineData: { data: base64Data, mimeType } }, { text: prompt }],
        },
        config: {
          responseModalities: ["IMAGE"],
        },
      };

      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await r.json().catch(() => ({}));

      if (!r.ok) {
        return res.status(r.status).json({
          error: json?.error?.message || json?.message || "Erro Gemini",
          detail: json,
        });
      }

      const parts = json?.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part?.inlineData?.data) {
          const image_url = `data:image/png;base64,${part.inlineData.data}`;
          return res.json({ image_url });
        }
      }

      return res.status(500).json({
        error: "Gemini não retornou imagem",
        detail: json,
      });
    }

    // =========================
    // HD -> REPLICATE (Kontext)
    // =========================
    const token = process.env.REPLICATE_API_TOKEN;
    if (!token) {
      return res.status(500).json({
        error: "Faltou REPLICATE_API_TOKEN no ambiente",
        detail: "Crie um arquivo .env na raiz com REPLICATE_API_TOKEN=...",
      });
    }

    const input_image = body.input_image; // dataURL
    if (!input_image) {
      return res.status(400).json({
        error: "Faltou 'input_image' (dataURL) para HD (Replicate)",
      });
    }

    const replicate = new Replicate({ auth: token });

    const output = await replicate.run("black-forest-labs/flux-kontext-pro", {
      input: {
        prompt,
        input_image,
      },
    });

    const image_url = await pickUrl(output);

    if (!image_url) {
      return res.status(500).json({
        error: "Replicate retornou sem URL",
        detail_type: typeof output,
        detail_isArray: Array.isArray(output),
        detail: output,
      });
    }

    return res.json({ image_url });
  } catch (err) {
    return res.status(500).json({
      error: "Erro ao gerar imagem",
      detail: String(err?.message || err),
    });
  }
});

const PORT = process.env.REPLICATE_PORT || 5050;
app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ Replicate server ON na porta", PORT);
});
