export interface Scenario {
  id: string;
  name: string;
  prompt: string;
}

export interface Character {
  id: string;
  name: string;
  prompt: string;
}

export interface Format {
  id: string;
  name: string;
  aspectRatio: "1:1" | "3:4" | "9:16" | "16:9";
}

/**
 * ✅ PROMPTS CURTOS (pra não dar conflito e ficar consistente)
 * - cenário: só o ambiente
 * - personagem: só quem é
 * - o “prompt final” é montado no Create.tsx
 */

export const SCENARIOS: Scenario[] = [
  {
    id: "foto-produto",
    name: "Foto do produto (fundo branco)",
    prompt: "Clean studio product photo on pure white seamless background. Soft professional lighting. Sharp focus.",
  },
  {
    id: "fundo-original",
    name: "Manter fundo original",
    prompt: "Keep the original real background from the input image. Enhance lighting and sharpness realistically.",
  },
  {
    id: "estudio-fotografico",
    name: "Estúdio fotográfico profissional",
    prompt: "Professional photography studio environment with softboxes. High-end commercial look. Realistic lighting.",
  },
  {
    id: "aeroporto",
    name: "Aeroporto moderno",
    prompt: "Modern airport environment. Natural cinematic lighting. Realistic perspective. Sharp focus.",
  },
  {
    id: "sala-chique",
    name: "Sala bonita e chique",
    prompt: "Elegant luxury living room. Refined decor. Soft premium lighting. Realistic textures.",
  },
  {
    id: "shopping",
    name: "Shopping moderno",
    prompt: "Contemporary shopping mall environment. Natural reflections. Realistic perspective. Sharp focus.",
  },
  {
    id: "praia",
    name: "Praia paradisíaca realista",
    prompt: "Tropical beach environment. Natural sunlight. Realistic sand and ocean. Sharp focus.",
  },
  {
    id: "montanhas",
    name: "Montanhas naturais",
    prompt: "Natural mountain landscape. Atmospheric realistic lighting. Sharp details. Cinematic realism.",
  },
];

export const CHARACTERS: Character[] = [
  { id: "none", name: "Nenhum / Aleatório", prompt: "Real person, natural look, friendly smile, face visible and sharp." },
  { id: "mulher-adulta", name: "Mulher Adulta", prompt: "Real adult woman, natural look, friendly smile, face visible and sharp." },
  { id: "mulher-plus", name: "Mulher Plus Size", prompt: "Real plus-size woman, natural look, friendly smile, face visible and sharp." },
  { id: "homem-adulto", name: "Homem Adulto", prompt: "Real adult man, natural look, friendly smile, face visible and sharp." },
  { id: "homem-plus", name: "Homem Plus Size", prompt: "Real plus-size man, natural look, friendly smile, face visible and sharp." },
  { id: "mulher-jovem", name: "Mulher Jovem", prompt: "Real young woman, natural look, friendly smile, face visible and sharp." },
  { id: "homem-jovem", name: "Homem Jovem", prompt: "Real young man, natural look, friendly smile, face visible and sharp." },
  { id: "adolescente-homem", name: "Adolescente Homem", prompt: "Real teenage boy, gentle smile, face visible and sharp." },
  { id: "adolescente-mulher", name: "Adolescente Mulher", prompt: "Real teenage girl, gentle smile, face visible and sharp." },
  { id: "crianca-menina", name: "Criança Menina", prompt: "Real child girl, gentle smile, face visible and sharp." },
  { id: "crianca-menino", name: "Criança Menino", prompt: "Real child boy, gentle smile, face visible and sharp." },
  { id: "bebe-menina", name: "Bebê Menina", prompt: "Real baby girl, happy gentle expression, face visible and sharp." },
  { id: "bebe-menino", name: "Bebê Menino", prompt: "Real baby boy, happy gentle expression, face visible and sharp." },
];

export const FORMATS: Format[] = [
  { id: "normal", name: "Tamanho normal (automático)", aspectRatio: "1:1" },
  { id: "1:1", name: "1:1 (Quadrado)", aspectRatio: "1:1" },
  { id: "4:5", name: "4:5 (Retrato)", aspectRatio: "3:4" },
  { id: "9:16", name: "9:16 (Stories / Reels / TikTok)", aspectRatio: "9:16" },
  { id: "16:9", name: "16:9 (Paisagem / YouTube)", aspectRatio: "16:9" },
];
