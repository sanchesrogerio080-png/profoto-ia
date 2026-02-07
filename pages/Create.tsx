import React, { useMemo, useRef, useState } from "react";
import {
  Camera,
  Sparkles,
  RefreshCw,
  ChevronRight,
  Check,
  ArrowLeft,
  Home as HomeIcon,
  History,
  MessageCircle,
  Settings,
  Image as ImageIcon,
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
type Step = 1 | 2 | 3;

// ✅ NOVO: como o personagem vai interagir com o produto
type UseMode = "wearing" | "holding" | "product_only";

/**
 * ✅ PROMPTS NOVOS (BEM SIMPLES) — objetivo: parar conflito, melhorar qualidade, manter fidelidade do produto
 * - Sem texto gigante
 * - Sem lista enorme de "no..."
 * - Direto ao ponto
 */

// ✅ Produto: preservar 100% + foto pro
const PRODUCT_PROMPT_MASTER = `
Use the EXACT same product from the uploaded photo.
Do NOT change the product: design, shape, colors, logos, text, materials, textures.
Only improve the PHOTO quality: clean professional lighting, sharp details, realistic shadows, true colors.
`.trim();

// ✅ Modo de uso (botões)
const USEMODE_PROMPTS: Record<UseMode, string> = {
  wearing: `
The person is USING / WEARING the product naturally and correctly (real-life use).
Do NOT hold the product in the hands.
Face fully visible and sharp. Natural friendly smile.
Product clearly visible and sharp.
`.trim(),

  holding: `
The person is HOLDING the product in the hands at chest level, centered.
Do NOT wear/use the product.
Face fully visible and sharp. Natural friendly smile.
Product clearly visible and sharp.
`.trim(),

  product_only: `
Product only. No person visible.
Centered hero shot. Sharp and clean professional product photo.
`.trim(),
};

// ✅ Avatares (select): simples e objetivos
const AVATAR_PROMPTS: Record<string, string> = {
  "Nenhum / Aleatório": `
Real person, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Mulher Adulta": `
Real adult woman, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Mulher Plus Size": `
Real plus-size woman, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Homem Adulto": `
Real adult man, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Homem Plus Size": `
Real plus-size man, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Mulher Jovem": `
Real young woman, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Homem Jovem": `
Real young man, natural look, friendly smile.
Face fully visible and sharp.
`.trim(),

  "Adolescente Homem": `
Real teenage boy, natural look, gentle smile.
Face fully visible and sharp.
`.trim(),

  "Adolescente Mulher": `
Real teenage girl, natural look, gentle smile.
Face fully visible and sharp.
`.trim(),

  "Criança Menina": `
Real child girl, gentle smile.
Face fully visible and sharp.
`.trim(),

  "Criança Menino": `
Real child boy, gentle smile.
Face fully visible and sharp.
`.trim(),

  "Bebê Menina": `
Real baby girl, happy gentle expression.
Face fully visible and sharp.
`.trim(),

  "Bebê Menino": `
Real baby boy, happy gentle expression.
Face fully visible and sharp.
`.trim(),
};

const Create: React.FC<CreateProps> = ({ user, onImageGenerated, onCreditError }) => {
  // ✅ passos (tela 1 / 2 / 3)
  const [step, setStep] = useState<Step>(1);

  // ✅ sua lógica (mantida)
  const [productImage, setProductImage] = useState<string | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CHARACTERS[0]);
  const [selectedFormat, setSelectedFormat] = useState<Format>(FORMATS[0]);
  const [quality, setQuality] = useState<QualityOption>("hd");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // UI extra (não mexe no fundamento)
  const [productType, setProductType] = useState<string>(""); // só visual, mas agora entra no prompt como regra de enquadramento

  // ✅ NOVO: instruções do textarea (PROMPT do usuário)
  const [userInstructions, setUserInstructions] = useState<string>("");

  // ✅ NOVO: modo de uso do produto
  const [useMode, setUseMode] = useState<UseMode>("wearing");

  const fileInputGalleryRef = useRef<HTMLInputElement>(null);
  const fileInputCameraRef = useRef<HTMLInputElement>(null);

  /**
   * ✅ CORREÇÃO DEFINITIVA:
   * - Em PRODUÇÃO (profotoia.com.br / Vercel) NUNCA usar localhost.
   * - Só usa Cloud Run via VITE_REPLICATE_API_BASE_URL.
   * - Localhost só é permitido quando o site estiver rodando em "localhost" no navegador.
   */
  const cloudRunBase =
    ((import.meta as any).env?.VITE_REPLICATE_API_BASE_URL as string | undefined)?.trim() || "";

  const localBase =
    ((import.meta as any).env?.VITE_LOCAL_GENERATE_URL as string | undefined)?.trim() || "";

  const isBrowserLocalhost =
    typeof window !== "undefined" && window.location && window.location.hostname === "localhost";

  const apiBaseUrlRaw = cloudRunBase || (isBrowserLocalhost ? localBase : "");
  const apiBaseUrl = apiBaseUrlRaw.replace(/\/+$/, ""); // remove "/" no final

  const requiredCredits = useMemo(() => {
    return quality === "4k" ? 4 : 1;
  }, [quality]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const goNextFromStep1 = () => {
    if (!productImage) {
      setError("Por favor, carregue uma imagem do produto.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const goNextFromStep2 = () => {
    setError(null);
    setStep(3);
  };

  const goBack = () => {
    setError(null);
    setStep((s) => (s === 1 ? 1 : ((s - 1) as Step)));
  };

  const generateImage = async () => {
    if (isGenerating) return;

    if (!user?.uid) {
      setError("Você precisa estar logado para gerar.");
      return;
    }

    // ✅ se não tiver base URL configurada, para aqui (evita cair em localhost)
    if (!apiBaseUrl) {
      setError(
        "API não configurada. Defina VITE_REPLICATE_API_BASE_URL no Vercel com a URL do Cloud Run (ex: https://replicate-api-xxxxx.southamerica-east1.run.app)."
      );
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
          ? "4K ultra-realistic professional commercial photo. Very sharp details. Clean studio lighting."
          : "Professional commercial photo. Sharp details. Clean lighting. True colors.";

      // ✅ enquadramento por tipo (bem simples)
      const framingRule =
        productType === "acessorio"
          ? "Framing: chest-up if person is present, product clearly visible, not too far."
          : productType === "bone"
          ? "Framing: chest-up, face visible, hat/cap worn correctly, product clearly visible, not too far."
          : productType === "calcado"
          ? "Framing: show the shoes clearly and sharp, not too far."
          : productType === "roupa"
          ? "Framing: show clothing fit clearly, face visible, not too far."
          : "Framing: close enough, product clearly visible, not too far.";

      // ✅ modo de uso
      const useModeRule =
        useMode === "product_only"
          ? USEMODE_PROMPTS.product_only
          : useMode === "holding"
          ? USEMODE_PROMPTS.holding
          : USEMODE_PROMPTS.wearing;

      // ✅ personagem (se product_only, força sem pessoa)
      const characterBlock =
        useMode === "product_only"
          ? "No person visible."
          : (AVATAR_PROMPTS[selectedCharacter?.name] ||
              selectedCharacter?.prompt ||
              "Real person, friendly smile, face fully visible and sharp.");

      // ✅ instrução do usuário (textarea)
      const userNotes = (userInstructions || "").trim();

      // ✅ formato (simples)
      const formatHint = `Match the selected format: ${
        selectedFormat?.name || "selected format"
      } aspect ratio and composition.`;

      // ✅ PROMPT FINAL (SIMPLES, DIRETO)
      const fullPrompt = `
SCENE: ${selectedScenario.prompt}

CHARACTER: ${characterBlock}

USE MODE: ${useModeRule}

PRODUCT: ${PRODUCT_PROMPT_MASTER}

PHOTO STYLE:
Professional commercial product photography.
Realistic lighting, sharp focus, true colors.
No blur. Clean background. Realistic shadows.

${framingRule}

FORMAT: ${formatHint}

QUALITY: ${qualityHint}

USER NOTES: ${userNotes ? userNotes : "(none)"}
`.trim();

      // ✅ agora chama o Cloud Run (apiBaseUrl) e NÃO localhost em produção
      const resp = await fetch(`${apiBaseUrl}/generate-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quality,
          prompt: fullPrompt,
          input_image: productImage,
          base64Data,
          mimeType,

          // ✅ ESSENCIAL PARA DESCONTAR CRÉDITOS (mantido)
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

  // UI helpers
  const creditsPill = (
    <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-2">
      <span className="text-yellow-300/90">🪙</span>
      <span className="text-white/80">{Number((user as any)?.credits ?? 0)} créditos</span>
    </div>
  );

  const ProgressBar = () => {
    const pct = step === 1 ? "33%" : step === 2 ? "66%" : "100%";
    return (
      <div className="mt-4">
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600"
            style={{ width: pct }}
          />
        </div>
      </div>
    );
  };

  // ✅ Bottom nav visual (igual o estilo do outro app)
  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="h-20 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md px-3 py-3">
          <div className="grid grid-cols-5 gap-1">
            <button className="flex flex-col items-center justify-center py-2">
              <HomeIcon className="w-5 h-5 text-white/55" />
              <div className="text-[10px] mt-1 text-white/50">INÍCIO</div>
            </button>

            <button className="flex flex-col items-center justify-center py-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              <div className="text-[10px] mt-1 text-sky-400">CRIAR</div>
            </button>

            <button className="flex flex-col items-center justify-center py-2">
              <History className="w-5 h-5 text-white/55" />
              <div className="text-[10px] mt-1 text-white/50">HISTÓRICO</div>
            </button>

            <button className="flex flex-col items-center justify-center py-2">
              <MessageCircle className="w-5 h-5 text-white/55" />
              <div className="text-[10px] mt-1 text-white/50">SUPORTE</div>
            </button>

            <button className="flex flex-col items-center justify-center py-2">
              <Settings className="w-5 h-5 text-white/55" />
              <div className="text-[10px] mt-1 text-white/50">AJUSTES</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-start justify-center py-6">
        <div className="relative w-full max-w-[420px]">
          <div className="absolute -inset-6 rounded-[48px] blur-3xl opacity-40 bg-gradient-to-b from-indigo-600/30 via-blue-600/10 to-transparent pointer-events-none" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-[#0b1224] via-[#0b1224] to-[#070b16] shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
            {/* Top */}
            <div className="px-5 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-500 flex items-center justify-center shadow">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-black tracking-tight">ProFotoIA</div>
              </div>
              {creditsPill}
            </div>

            <div className="px-6 pb-28">
              <ProgressBar />

              {/* ERROR */}
              {error ? (
                <div className="mt-4 rounded-2xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-200 text-sm">
                  {error}
                </div>
              ) : null}

              {/* STEP 1 */}
              {step === 1 && (
                <div className="mt-6">
                  <div className="text-white font-black text-lg">
                    1. Escolha a Foto do Produto
                  </div>
                  <div className="text-white/60 text-sm mt-2">
                    Envie uma foto clara do produto que você deseja usar.
                  </div>

                  <div className="mt-5">
                    <div className="rounded-3xl border border-dashed border-sky-500/60 bg-white/5 p-3">
                      <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/10">
                        {productImage ? (
                          <img
                            src={productImage}
                            alt="Produto"
                            className="w-full h-[260px] object-cover"
                          />
                        ) : (
                          <div className="w-full h-[260px] flex flex-col items-center justify-center text-white/40">
                            <ImageIcon className="w-10 h-10 mb-2" />
                            <div className="text-sm">Nenhuma imagem selecionada</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => fileInputGalleryRef.current?.click()}
                        className="rounded-2xl border border-sky-500/40 bg-white/5 py-3 text-white font-bold flex items-center justify-center gap-2"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Galeria
                      </button>

                      <button
                        onClick={() => fileInputCameraRef.current?.click()}
                        className="rounded-2xl border border-sky-500/40 bg-white/5 py-3 text-white font-bold flex items-center justify-center gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        Câmera
                      </button>

                      <input
                        ref={fileInputGalleryRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />

                      <input
                        ref={fileInputCameraRef}
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    <button
                      onClick={goNextFromStep1}
                      className="mt-4 w-full rounded-2xl py-4 font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_16px_40px_rgba(59,130,246,0.35)] border border-white/10 flex items-center justify-center gap-2"
                    >
                      Próximo Passo <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-black text-lg">2. Configurações</div>
                    <button
                      onClick={goBack}
                      className="text-white/60 text-sm hover:text-white flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Voltar
                    </button>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      TIPO DE PRODUTO
                    </div>
                    <select
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3 outline-none"
                    >
                      <option value="" className="bg-[#0b1224]">
                        Selecione o tipo
                      </option>
                      <option value="acessorio" className="bg-[#0b1224]">
                        Acessório
                      </option>
                      <option value="roupa" className="bg-[#0b1224]">
                        Roupa
                      </option>
                      <option value="calcado" className="bg-[#0b1224]">
                        Calçado
                      </option>
                      <option value="bone" className="bg-[#0b1224]">
                        Boné/Chapéu
                      </option>
                      <option value="outro" className="bg-[#0b1224]">
                        Outro
                      </option>
                    </select>
                  </div>

                  {/* ✅ NOVO: OPÇÃO "USANDO" vs "MOSTRANDO" */}
                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      COMO O PERSONAGEM VAI APARECER
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setUseMode("wearing")}
                        className={`rounded-2xl border px-3 py-3 text-center text-xs font-bold ${
                          useMode === "wearing"
                            ? "bg-blue-600/15 border-sky-500/60 text-sky-200"
                            : "bg-white/5 border-white/10 text-white/75"
                        }`}
                      >
                        Usando / Vestindo
                      </button>

                      <button
                        onClick={() => setUseMode("holding")}
                        className={`rounded-2xl border px-3 py-3 text-center text-xs font-bold ${
                          useMode === "holding"
                            ? "bg-blue-600/15 border-sky-500/60 text-sky-200"
                            : "bg-white/5 border-white/10 text-white/75"
                        }`}
                      >
                        Mostrando (na mão)
                      </button>

                      <button
                        onClick={() => setUseMode("product_only")}
                        className={`rounded-2xl border px-3 py-3 text-center text-xs font-bold ${
                          useMode === "product_only"
                            ? "bg-blue-600/15 border-sky-500/60 text-sky-200"
                            : "bg-white/5 border-white/10 text-white/75"
                        }`}
                      >
                        Só Produto
                      </button>
                    </div>

                    <div className="text-white/45 text-[11px] mt-2 leading-relaxed">
                      ✅ Quando tiver pessoa: rosto sempre visível + sorriso + produto em destaque.
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      FORMATO DA IMAGEM
                    </div>

                    <div className="flex flex-col gap-3">
                      {FORMATS.map((fmt) => {
                        const active = selectedFormat?.name === fmt.name;
                        return (
                          <button
                            key={fmt.name}
                            onClick={() => setSelectedFormat(fmt)}
                            className={`w-full text-left rounded-2xl border px-4 py-4 flex items-center justify-between ${
                              active
                                ? "bg-blue-600/15 border-sky-500/60"
                                : "bg-white/5 border-white/10"
                            }`}
                          >
                            <div>
                              <div
                                className={`font-bold ${
                                  active ? "text-sky-200" : "text-white/85"
                                }`}
                              >
                                {fmt.name}
                              </div>
                              <div className="text-white/40 text-xs mt-1">
                                {fmt.ratio ? `${fmt.ratio} • ` : ""}
                                {fmt.size ? `${fmt.size} • ` : ""}
                                {fmt.label ? fmt.label : ""}
                              </div>
                            </div>

                            <div
                              className={`w-7 h-7 rounded-full border flex items-center justify-center ${
                                active ? "border-sky-400 bg-sky-400/15" : "border-white/15"
                              }`}
                            >
                              {active ? <Check className="w-4 h-4 text-sky-300" /> : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      PERSONAGEM
                    </div>
                    <select
                      value={selectedCharacter?.name}
                      onChange={(e) => {
                        const found = CHARACTERS.find((c) => c.name === e.target.value);
                        if (found) setSelectedCharacter(found);
                      }}
                      className="w-full rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3 outline-none"
                    >
                      {CHARACTERS.map((c) => (
                        <option key={c.name} value={c.name} className="bg-[#0b1224]">
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      CENÁRIO
                    </div>
                    <select
                      value={selectedScenario?.name}
                      onChange={(e) => {
                        const found = SCENARIOS.find((s) => s.name === e.target.value);
                        if (found) setSelectedScenario(found);
                      }}
                      className="w-full rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3 outline-none"
                    >
                      {SCENARIOS.map((s) => (
                        <option key={s.name} value={s.name} className="bg-[#0b1224]">
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={goNextFromStep2}
                    className="mt-6 w-full rounded-2xl py-4 font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_16px_40px_rgba(59,130,246,0.35)] border border-white/10 flex items-center justify-center gap-2"
                  >
                    Configurações Finais <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-black text-lg">3. Detalhes Finais</div>
                    <button
                      onClick={goBack}
                      className="text-white/60 text-sm hover:text-white flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Voltar
                    </button>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      INSTRUÇÕES PARA A IA (OPCIONAL)
                    </div>
                    <textarea
                      value={userInstructions}
                      onChange={(e) => setUserInstructions(e.target.value)}
                      placeholder="Opcional: descreva estilo, cores, iluminação, clima..."
                      className="w-full min-h-[110px] rounded-2xl bg-white/5 border border-white/10 text-white/90 px-4 py-3 outline-none placeholder:text-white/35"
                    />
                    <div className="text-white/35 text-[11px] mt-2">
                      ✅ O que você escrever aqui agora vai junto no prompt.
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 px-4 py-3">
                    <div className="text-sky-300 text-xs font-black">FIDELIDADE GARANTIDA</div>
                    <div className="text-white/60 text-xs mt-1 leading-relaxed">
                      Nossa IA manterá a identidade visual exata do seu produto na nova cena.
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-white/60 text-xs font-bold tracking-wide mb-2">
                      QUALIDADE
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setQuality("hd")}
                        className={`rounded-2xl border px-4 py-4 text-center ${
                          quality === "hd"
                            ? "bg-blue-600/15 border-sky-500/60"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <div
                          className={`font-black ${
                            quality === "hd" ? "text-sky-200" : "text-white/85"
                          }`}
                        >
                          HD
                        </div>
                        <div className="text-white/45 text-xs mt-1">1 crédito</div>
                      </button>

                      <button
                        onClick={() => setQuality("4k")}
                        className={`rounded-2xl border px-4 py-4 text-center ${
                          quality === "4k"
                            ? "bg-blue-600/15 border-sky-500/60"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <div
                          className={`font-black ${
                            quality === "4k" ? "text-sky-200" : "text-white/85"
                          }`}
                        >
                          4K
                        </div>
                        <div className="text-white/45 text-xs mt-1">4 créditos</div>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={generateImage}
                    disabled={isGenerating}
                    className="mt-6 w-full rounded-2xl py-4 font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_16px_40px_rgba(59,130,246,0.35)] border border-white/10 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Criando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Gerar 1 Foto Profissional
                      </>
                    )}
                  </button>

                  <div className="mt-3 text-center text-white/35 text-xs">
                    ⏱️ O processo leva cerca de 30-45 segundos
                  </div>
                </div>
              )}
            </div>

            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
