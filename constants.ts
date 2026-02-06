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
  aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export const SCENARIOS: Scenario[] = [
  { 
    id: 'foto-produto', 
    name: 'Foto do produto (fundo branco)', 
    prompt: `
Ultra realistic professional studio product photography.
Pure white seamless background, perfect commercial lighting, sharp shadows, maximum texture detail.
No people, no blur, no noise, no distortion.
Perfect focus across the entire product.
High-end advertising photography, 8K realism, flawless edges.
The product must remain identical to the original image.
`.trim()
  },
  { 
    id: 'fundo-original', 
    name: 'Manter fundo original', 
    prompt: `
Keep the original real background from the input image.
Enhance lighting, contrast, sharpness and realism to professional commercial photography level.
No artificial blur, no fake background, no distortion.
Ultra realistic, natural colors, perfect camera exposure.
The product must remain identical and perfectly detailed.
`.trim()
  },
  { 
    id: 'estudio-fotografico', 
    name: 'Estúdio fotográfico profissional', 
    prompt: `
Professional photography studio environment with softboxes and controlled cinematic lighting.
Clean, elegant, high-end commercial mood.
Ultra realistic textures, sharp focus, realistic shadows, no blur.
Advertising-level fashion/product photography.
The product is the hero of the image and must stay perfectly faithful to the original.
`.trim()
  },
  { id: 'aeroporto', name: 'Aeroporto moderno', prompt: `Ultra realistic modern airport environment, cinematic lighting, sharp focus, no blur, commercial photography quality, product perfectly highlighted and unchanged.` },
  { id: 'sala-chique', name: 'Sala bonita e chique', prompt: `Elegant luxury living room, refined decor, perfect lighting, ultra realistic textures, no blur, high-end advertising photography, product clearly highlighted.` },
  { id: 'shopping', name: 'Shopping moderno', prompt: `Realistic contemporary shopping mall, natural reflections, accurate perspective, sharp focus, no blur, professional retail photography, product dominant and preserved.` },
  { id: 'praia', name: 'Praia paradisíaca realista', prompt: `Ultra realistic tropical beach, natural sunlight, detailed sand and ocean, cinematic realism, no blur, high-end lifestyle photography, product perfectly sharp.` },
  { id: 'montanhas', name: 'Montanhas naturais', prompt: `Ultra realistic mountain landscape, natural atmospheric lighting, sharp terrain detail, cinematic realism, no blur, professional outdoor photography, product visually central.` }
];

export const CHARACTERS: Character[] = [
  { id: 'none', name: 'Nenhum / Aleatório', prompt: '' },
  { id: 'mulher-adulta', name: 'Mulher Adulta', prompt: 'Adult woman, authentic human appearance, visible pores, natural skin.' },
  { id: 'mulher-plus', name: 'Mulher Plus Size', prompt: 'Plus-size adult woman, authentic human appearance, natural skin.' },
  { id: 'homem-adulto', name: 'Homem Adulto', prompt: 'Adult man, authentic human appearance, realistic skin texture.' },
  { id: 'homem-plus', name: 'Homem Plus Size', prompt: 'Plus-size adult man, authentic human appearance, natural skin.' },
  { id: 'mulher-jovem', name: 'Mulher Jovem', prompt: 'Young woman (18-25), fresh natural look, authentic skin.' },
  { id: 'homem-jovem', name: 'Homem Jovem', prompt: 'Young man (18-25), modern friendly appearance, authentic skin.' },
  { id: 'adolescente-homem', name: 'Adolescente Homem', prompt: 'Teenage boy, natural smile, authentic human features.' },
  { id: 'adolescente-mulher', name: 'Adolescente Mulher', prompt: 'Teenage girl, natural smile, authentic human features.' },
  { id: 'crianca-menina', name: 'Criança Menina', prompt: 'Young girl, happy expression, natural child proportions.' },
  { id: 'crianca-menino', name: 'Criança Menino', prompt: 'Young boy, happy expression, natural child proportions.' },
  { id: 'bebe-menina', name: 'Bebê Menina', prompt: 'Baby girl, soft natural appearance, calm expression.' },
  { id: 'bebe-menino', name: 'Bebê Menino', prompt: 'Baby boy, soft natural appearance, calm expression.' }
];

export const FORMATS: Format[] = [
  { id: 'normal', name: 'Tamanho normal (automático)', aspectRatio: '1:1' },
  { id: '1:1', name: '1:1 (Quadrado)', aspectRatio: '1:1' },
  { id: '4:5', name: '4:5 (Retrato)', aspectRatio: '3:4' },
  { id: '9:16', name: '9:16 (Stories / Reels / TikTok)', aspectRatio: '9:16' }
];
