// PRO FOTO/replicate-api/index.js  (ESM)
import express from "express";
import cors from "cors";
import Replicate from "replicate";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ✅ Gemini
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Firebase Admin (para descontar créditos)
import admin from "firebase-admin";

// ✅ resolve __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Carrega .env do ROOT do projeto (PRO FOTO/.env e PRO FOTO/.env.local)
dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const app = express();

// ✅ payload grande (base64)
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

function resolveMaybeRelative(p) {
  if (!p) return "";
  return path.isAbsolute(p) ? p : path.resolve(__dirname, p);
}

// ✅ Lê o Service Account do Firebase pelo ARQUIVO
function loadFirebaseServiceAccount() {
  const filePathRaw = (process.env.FIREBASE_SERVICE_ACCOUNT_PATH || "").trim();
  if (!filePathRaw) return null;

  const filePath = resolveMaybeRelative(filePathRaw);
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}

// =========================
// ✅ Firebase init (sem quebrar)
// =========================
let db = null;
let FieldValue = null;

function ensureFirebase() {
  if (db && FieldValue) return true;

  try {
    const sa = loadFirebaseServiceAccount();
    if (!sa) return false;

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(sa),
      });
    }

    db = admin.firestore();
    FieldValue = admin.firestore.FieldValue;
    return true;
  } catch {
    return false;
  }
}

// =========================
// ✅ Cobrança com idempotência (sem duplicar)
// =========================
async function chargeCreditsOrFail({ uid, requestId, quality }) {
  const requiredCredits = quality === "4k" ? 4 : 1;

  if (!ensureFirebase()) return { skipped: true, requiredCredits };
  if (!uid || !requestId) return { skipped: true, requiredCredits };

  const userRef = db.collection("users").doc(uid);
  const chargeRef = userRef.collection("charges").doc(requestId);

  const result = await db.runTransaction(async (tx) => {
    const chargeSnap = await tx.get(chargeRef);
    if (chargeSnap.exists) {
      return { ok: true, alreadyCharged: true, requiredCredits };
    }

    const userSnap = await tx.get(userRef);
    const creditsNow = Number(userSnap.exists ? userSnap.data()?.credits ?? 0 : 0);

    if (creditsNow < requiredCredits) {
      return { ok: false, insufficient: true, creditsNow, requiredCredits };
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

    return { ok: true, charged: true, requiredCredits };
  });

  return result;
}

app.get("/health", (_req, res) => {
  let firebaseOk = false;
  try {
    const sa = loadFirebaseServiceAccount();
    firebaseOk = !!sa?.client_email;
  } catch {
    firebaseOk = false;
  }

  return res.json({
    ok: true,
    has_REPLICATE_API_TOKEN: !!process.env.REPLICATE_API_TOKEN,
    has_GOOGLE_API_KEY: !!process.env.GOOGLE_API_KEY,
    port: Number(process.env.REPLICATE_PORT || 5050),
    model: (process.env.REPLICATE_MODEL || "black-forest-labs/flux-kontext-pro").trim(),
    firebase_service_account_loaded: firebaseOk,
    firebase_service_account_path: process.env.FIREBASE_SERVICE_ACCOUNT_PATH || null,
  });
});

// =========================
// ✅ Helpers Replicate
// =========================
async function waitPrediction(replicate, predictionId, timeoutMs = 180000) {
  const started = Date.now();

  while (true) {
    const p = await replicate.predictions.get(predictionId);

    if (p.status === "succeeded") return p;
    if (p.status === "failed" || p.status === "canceled") return p;

    if (Date.now() - started > timeoutMs) {
      throw new Error("Timeout esperando o Replicate finalizar.");
    }

    await new Promise((r) => setTimeout(r, 1200));
  }
}

async function extractImageUrl(anyOutput) {
  if (Array.isArray(anyOutput)) {
    const first = anyOutput[0];
    if (!first) return null;

    if (typeof first === "string") return first;

    if (first && typeof first === "object") {
      if (typeof first.url === "string") return first.url;
      if (typeof first.href === "string") return first.href;

      if (typeof first.url === "function") {
        const u = await first.url();
        if (typeof u === "string") return u;
      }

      const s = String(first);
      if (s && s.startsWith("http")) return s;
    }
    return null;
  }

  if (typeof anyOutput === "string") return anyOutput;

  if (anyOutput && typeof anyOutput === "object") {
    if (typeof anyOutput.image === "string") return anyOutput.image;
    if (typeof anyOutput.url === "string") return anyOutput.url;

    if (typeof anyOutput.url === "function") {
      const u = await anyOutput.url();
      if (typeof u === "string") return u;
    }

    const a = anyOutput?.output?.[0] || anyOutput?.[0];
    if (typeof a === "string") return a;

    const s = String(anyOutput);
    if (s && s.startsWith("http")) return s;
  }

  return null;
}

// =========================
// ✅ Helpers Gemini
// =========================
function parseDataUrl(dataUrl) {
  const s = (dataUrl || "").toString().trim();
  if (!s) return { mimeType: "image/jpeg", base64: "" };

  if (s.startsWith("data:") && s.includes("base64,")) {
    const mimeType = s.slice(5, s.indexOf(";")) || "image/jpeg";
    const base64 = s.split("base64,")[1] || "";
    return { mimeType, base64 };
  }

  return { mimeType: "image/jpeg", base64: s };
}

// =========================
// ✅ ROTA HD (Replicate)
// =========================
app.post("/generate-image", async (req, res) => {
  try {
    const token = (process.env.REPLICATE_API_TOKEN || "").trim();
    if (!token) {
      return res.status(500).json({
        error: "Faltou REPLICATE_API_TOKEN no ambiente",
      });
    }

    const body = req.body || {};
    const input_image = body.input_image || body.image;
    const prompt = (body.prompt || "").toString().trim();
    const quality = (body.quality || "hd").toString();

    const uid = (body.uid || "").toString().trim();
    const requestId = (body.requestId || "").toString().trim();

    if (!input_image) return res.status(400).json({ error: 'Faltou "input_image"' });
    if (!prompt) return res.status(400).json({ error: 'Faltou "prompt"' });

    const charge = await chargeCreditsOrFail({ uid, requestId, quality });
    if (charge?.insufficient) {
      return res.status(402).json({
        error: "Créditos insuficientes",
        requiredCredits: charge.requiredCredits,
        creditsNow: charge.creditsNow ?? 0,
      });
    }

    const model = (process.env.REPLICATE_MODEL || "black-forest-labs/flux-kontext-pro").trim();
    const replicate = new Replicate({ auth: token });

    const created = await replicate.predictions.create({
      model,
      input: {
        prompt,
        input_image,
        num_outputs: 1,
        output_format: "png",
      },
    });

    const finished = await waitPrediction(replicate, created.id);

    if (finished.status !== "succeeded") {
      return res.status(500).json({ error: "Replicate falhou" });
    }

    const image_url = await extractImageUrl(finished.output);

    return res.json({
      image_url,
      prediction_id: finished.id,
      charged: !!charge?.charged,
      alreadyCharged: !!charge?.alreadyCharged,
      requiredCredits: charge?.requiredCredits ?? (quality === "4k" ? 4 : 1),
    });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao gerar imagem" });
  }
});

// =========================
// ✅ ROTA 4K (Gemini)
// =========================
app.post("/generate-image-4k", async (req, res) => {
  try {
    const apiKey = (process.env.GOOGLE_API_KEY || "").trim();
    if (!apiKey) {
      return res.status(500).json({ error: "Faltou GOOGLE_API_KEY" });
    }

    const body = req.body || {};
    const input_image = body.input_image || body.image;
    const prompt = (body.prompt || "").toString().trim();

    const uid = (body.uid || "").toString().trim();
    const requestId = (body.requestId || "").toString().trim();

    if (!input_image) return res.status(400).json({ error: 'Faltou "input_image"' });
    if (!prompt) return res.status(400).json({ error: 'Faltou "prompt"' });

    const charge = await chargeCreditsOrFail({ uid, requestId, quality: "4k" });
    if (charge?.insufficient) {
      return res.status(402).json({
        error: "Créditos insuficientes",
        requiredCredits: charge.requiredCredits,
        creditsNow: charge.creditsNow ?? 0,
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const out = await model.generateContent(prompt);
    const improvedPrompt = (out?.response?.text?.() || "").trim() || prompt;

    return res.json({
      ok: true,
      provider: "gemini",
      quality: "4k",
      improved_prompt: improvedPrompt,
      charged: !!charge?.charged,
      alreadyCharged: !!charge?.alreadyCharged,
      requiredCredits: charge?.requiredCredits ?? 4,
    });
  } catch {
    return res.status(500).json({ error: "Erro no Gemini (4K)" });
  }
});

const PORT = Number(process.env.REPLICATE_PORT || 5050);
app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ Replicate server ON na porta", PORT);
});
