export interface Scenario {
  id: string;
  name: string;
  prompt: string;
  personAllowed: boolean; // ✅ novo: evita conflito "No people" vs personagem
}

export interface Character {
  id: string;
  name: string;
  prompt: string;
}

export interface Format {
  id: string;
  name: string;
  aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export const SCENARIOS: Scenario[] = [
  {
    id: "foto-produto",
    name: "Foto do produto (fundo branco)",
    personAllowed: false,
    prompt: `
Ultra realistic professional studio product photography.
Pure white seamless background, perfect commercial lighting, sharp shadows, maximum texture detail.
No people visible.
Perfect focus across the entire product.
High-end advertising photography, 8K realism, flawless edges.
The product must remain identical to the original image.
`.trim(),
  },
  {
    id: "fundo-original",
    name: "Manter fundo original",
    personAllowed: true,
    prompt: `
Keep the original real background from the input image.
Enhance lighting, contrast, sharpness and realism to professional commercial photography level.
Ultra realistic, natural colors, perfect camera exposure.
The product must remain identical and perfectly detailed.
`.trim(),
  },
  {
    id: "estudio-fotografico",
    name: "Estúdio fotográfico profissional",
    personAllowed: true,
    prompt: `
Professional photography studio environment with softboxes and controlled cinematic lighting.
Clean, elegant, high-end commercial mood.
Ultra realistic textures, sharp focus, realistic shadows, no blur.
Advertising-level fashion/product photography.
The product is the hero of the image and must stay perfectly faithful to the original.
`.trim(),
  },
  {
    id: "aeroporto",
    name: "Aeroporto moderno",
    personAllowed: true,
    prompt:
      "Ultra realistic modern airport environment, cinematic lighting, sharp focus, no blur, commercial photography quality, product perfectly highlighted and unchanged.",
  },
  {
    id: "sala-chique",
    name: "Sala bonita e chique",
    personAllowed: true,
    prompt:
      "Elegant luxury living room, refined decor, perfect lighting, ultra realistic textures, no blur, high-end advertising photography, product clearly highlighted.",
  },
  {
    id: "shopping",
    name: "Shopping moderno",
    personAllowed: true,
    prompt:
      "Realistic contemporary shopping mall, natural reflections, accurate perspective, sharp focus, no blur, professional retail photography, product dominant and preserved.",
  },
  {
    id: "praia",
    name: "Praia paradisíaca realista",
    personAllowed: true,
    prompt:
      "Ultra realistic tropical beach, natural sunlight, detailed sand and ocean, cinematic realism, no blur, high-end lifestyle photography, product perfectly sharp.",
  },
  {
    id: "montanhas",
    name: "Montanhas naturais",
    personAllowed: true,
    prompt:
      "Ultra realistic mountain landscape, natural atmospheric lighting, sharp terrain detail, cinematic realism, no blur, professional outdoor photography, product visually central.",
  },
];

export const CHARACTERS: Character[] = [
  { id: "none", name: "Nenhum / Aleatório", prompt: "" },

  {
    id: "mulher-adulta",
    name: "Mulher Adulta",
    prompt:
      "Real adult woman, friendly smile, face fully visible and sharp, authentic human appearance, visible pores, natural skin.",
  },
  {
    id: "mulher-plus",
    name: "Mulher Plus Size",
    prompt:
      "Real plus-size adult woman, friendly smile, face fully visible and sharp, authentic human appearance, natural skin.",
  },
  {
    id: "homem-adulto",
    name: "Homem Adulto",
    prompt:
      "Real adult man, friendly smile, face fully visible and sharp, authentic human appearance, realistic skin texture.",
  },
  {
    id: "homem-plus",
    name: "Homem Plus Size",
    prompt:
      "Real plus-size adult man, friendly smile, face fully visible and sharp, authentic human appearance, natural skin.",
  },
  {
    id: "mulher-jovem",
    name: "Mulher Jovem",
    prompt:
      "Real young woman (18-25), friendly smile, face fully visible and sharp, fresh natural look, authentic skin.",
  },
  {
    id: "homem-jovem",
    name: "Homem Jovem",
    prompt:
      "Real young man (18-25), friendly smile, face fully visible and sharp, modern friendly appearance, authentic skin.",
  },
  {
    id: "adolescente-homem",
    name: "Adolescente Homem",
    prompt:
      "Real teenage boy, gentle smile, face fully visible and sharp, authentic human features.",
  },
  {
    id: "adolescente-mulher",
    name: "Adolescente Mulher",
    prompt:
      "Real teenage girl, gentle smile, face fully visible and sharp, authentic human features.",
  },
  {
    id: "crianca-menina",
    name: "Criança Menina",
    prompt:
      "Real young child girl, gentle smile, face fully visible and sharp, natural child proportions.",
  },
  {
    id: "crianca-menino",
    name: "Criança Menino",
    prompt:
      "Real young child boy, gentle smile, face fully visible and sharp, natural child proportions.",
  },
  {
    id: "bebe-menina",
    name: "Bebê Menina",
    prompt:
      "Real baby girl, happy gentle expression, face visible, natural baby proportions.",
  },
  {
    id: "bebe-menino",
    name: "Bebê Menino",
    prompt:
      "Real baby boy, happy gentle expression, face visible, natural baby proportions.",
  },
];

export const FORMATS: Format[] = [
  { id: "normal", name: "Tamanho normal (automático)", aspectRatio: "1:1" },
  { id: "1:1", name: "1:1 (Quadrado)", aspectRatio: "1:1" },
  { id: "4:5", name: "4:5 (Retrato)", aspectRatio: "3:4" },
  { id: "9:16", name: "9:16 (Stories / Reels / TikTok)", aspectRatio: "9:16" },
];
