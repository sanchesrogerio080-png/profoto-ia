import React, { useState, useRef, useMemo } from "react";
import {
  Camera,
  Upload,
  Sparkles,
  Layout,
  Users,
  Image as ImageIcon,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import {
  SCENARIOS,
  CHARACTERS,
  FORMATS,
  Scenario,
  Character,
  Format,
} from "../constants";
import { User } from "../types";

interface CreateProps {
  user: User;
  onImageGenerated: (url: string, config: any) => void;
  onCreditError: () => void;
}

type QualityOption = "hd" | "4k";

const Create: React.FC<CreateProps> = ({ user, onImageGenerated, onCreditError }) => {
  const [productImage, setProductImage] = useState<string | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CHARACTERS[0]);
  const [selectedFormat, setSelectedFormat] = useState<Format>(FORMATS[0]);
  const [quality, setQuality] = useState<QualityOption>("hd");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const localGenerateUrl =
    ((import.meta as any).env?.VITE_LOCAL_GENERATE_URL as string | undefined)?.trim() ||
    "http://localhost:5050";

  const requiredCredits = useMemo(() => {
    return quality === "4k" ? 4 : 1;
  }, [quality]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProductImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateImage = async () => {
    if (isGenerating) return;

    if (!user?.uid) {
      setError("Você precisa estar logado para gerar.");
      return;
    }

    const creditsNow = Number((user as any)?.credits ?? 0);
    if (creditsNow < requiredCredits) {
      setError(`Créditos insuficientes. Você precisa de ${requiredCredits} crédito(s).`);
      onCreditError();
      return;
    }

    if (!productImage) {
      setError("Por favor, carregue uma imagem do produto.");
      return;
    }

    setIsGenerating(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 0));

    try {
      const base64Data = productImage.split(",")[1];
      const mimeType = productImage.split(";")[0].split(":")[1];

      const qualityHint =
        quality === "4k"
          ? "Ultra-realistic 4K photography, extreme sharpness, cinematic lighting, perfect textures, maximum detail, professional studio quality."
          : "High-quality professional photography, sharp focus, clean lighting, realistic textures.";

      const fullPrompt = `
SCENE:
${selectedScenario.prompt}

CHARACTER:
${selectedCharacter.prompt ? selectedCharacter.prompt : "No person visible. Focus only on the product."}

MAIN RULES:
- The product from the uploaded image MUST remain identical, unchanged, and perfectly preserved.
- The product is ALWAYS the main hero of the image.
- Perfect commercial photography for selling online.
- Ultra-realistic human appearance when a character is present.
- Natural skin texture, real pores, real wrinkles, real facial expression.
- Correct anatomy: no extra fingers, no extra limbs, no distortions, no AI look, no doll appearance.
- Professional composition and framing based on product type:
  • Accessories → close framing, torso up.
  • Hat or cap → torso up.
  • Shoes → full body allowed, but product dominant.
  • Clothing → full body, centered.
  • Product only → clean or white background.
- Perfect lighting, balanced exposure, realistic shadows.
- High-end commercial photography for Marketplace, Shopee, Amazon, Facebook, Instagram, Reels, TikTok, TikTok Shop.

QUALITY:
${qualityHint}

STYLE:
hyper-realistic photography, professional fashion photography, commercial product photography, 85mm lens, cinematic realism, perfect color grading
`.trim();

      const resp = await fetch(`${localGenerateUrl}/generate-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quality,
          prompt: fullPrompt,
          input_image: productImage,
          base64Data,
          mimeType,

          // ✅ ESSENCIAL PARA DESCONTAR CRÉDITOS
          uid: user.uid,
          requestId: crypto.randomUUID(),
        }),
      });

      const data = await resp.json().catch(() => ({} as any));

      if (!resp.ok) {
        const msg = data?.error || data?.message || `Erro HTTP ${resp.status}`;
        throw new Error(msg);
      }

      const generatedUrl: string | null = data?.image_url || null;
      if (!generatedUrl) throw new Error("Servidor não retornou image_url.");

      onImageGenerated(generatedUrl, {
        scenario: selectedScenario.name,
        character: selectedCharacter.name,
        format: selectedFormat.name,
        quality,
        creditsCost: requiredCredits,
        engine: quality === "4k" ? "gemini-4k" : "replicate-hd",
      });
    } catch (err: any) {
      setError(err?.message || "Falha ao gerar imagem.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
        <h2 className="text-sm font-semibold uppercase mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Qualidade
        </h2>

        <div className="flex gap-2">
          <button onClick={() => setQuality("hd")} className="flex-1 p-3 rounded-xl border text-center">
            <div className="text-sm font-bold">HD</div>
            <div className="text-xs opacity-80">1 crédito</div>
          </button>

          <button onClick={() => setQuality("4k")} className="flex-1 p-3 rounded-xl border text-center">
            <div className="text-sm font-bold">4K</div>
            <div className="text-xs opacity-80">4 créditos</div>
          </button>
        </div>
      </section>

      <button
        onClick={generateImage}
        disabled={isGenerating || !productImage}
        className="w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
      >
        {isGenerating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
        {isGenerating ? "Criando..." : quality === "4k" ? "Gerar Foto 4K (4 créditos)" : "Gerar Foto HD (1 crédito)"}
      </button>
    </div>
  );
};

export default Create;
