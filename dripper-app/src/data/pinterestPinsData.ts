export type DripCategory =
  | 'All'
  | 'Music'
  | 'Cosmos'
  | 'Nature'
  | 'Cinema'
  | 'Series'
  | 'Retro'
  | 'Prehistoric'
  | 'Photography'
  | 'Architecture'
  | 'Experimental'
  | 'Minerals'
  | 'Art'
  | 'Sculptural';

export interface DrypDrip {
  id: string;
  productId?: string;
  title: string;
  subtitle: string;
  category: DripCategory;
  categoryLabel: string;
  imageSrc: string;
  aspectRatio: 'aspect-square';
  author: {
    name: string;
    avatar: string;
    handle: string;
    verified?: boolean;
  };
  price?: number;
  stockStatus?: 'available' | 'low_stock' | 'sold_out' | 'upcoming';
  stockLabel?: string;
  likesCount: number;
  savesCount: number;
  boardIds: string[];
  tags: string[];
  badge?: string;
  dropCode?: string;
  level01Emotion?: string;
}

export type PinterestPin = DrypDrip;
export type DripItem = DrypDrip;

export interface PinterestBoard {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  previewImages: string[];
  pinsCount: number;
  dripsCount: number;
  category: DripCategory;
  tag: string;
}

export type DrypBoard = PinterestBoard;

export const PINTEREST_BOARDS: PinterestBoard[] = [
  {
    id: 'board-music',
    title: 'Música',
    description: 'Surcos de vinilo a 33 RPM, teclas de piano de cola y ondas sonoras esculpidas para una armonía acústica en cada vertido.',
    tag: 'Música',
    category: 'Music',
    coverImage: '/images/products/music-soundwave.jpg',
    previewImages: [
      '/images/products/music-soundwave.jpg',
      '/images/products/music-piano.jpg',
      '/images/products/vinyl-groove.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-cosmos',
    title: 'Universo',
    description: 'Regolito lunar Apollo, condritas meteóricas con cráteres de impacto y basalto volcánico horneados a 1.280 °C.',
    tag: 'Universo',
    category: 'Cosmos',
    coverImage: '/images/products/cosmos-meteorite.jpg',
    previewImages: [
      '/images/products/cosmos-meteorite.jpg',
      '/images/products/cosmos-lunar-lander.jpg',
      '/images/products/orbit.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-nature',
    title: 'Naturaleza & Biodiversidad',
    description: 'Plumajes de colibríes andinos, siluetas felinas biomiméticas y venaciones aladas en gres horneado a 1.280 °C.',
    tag: 'Botánica & Fauna',
    category: 'Nature',
    coverImage: '/images/products/nature-feline.jpg',
    previewImages: [
      '/images/products/nature-feline.jpg',
      '/images/products/nature-venation.jpg',
      '/images/products/colibri-andes.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-cinema',
    title: 'Fotografía y cine',
    description: 'Ópticas concéntricas de 35mm, cintas de celuloide helicoidales y bobinas de cine en gres horneado a 1.280 °C.',
    tag: 'Cine & Foto',
    category: 'Cinema',
    coverImage: '/images/products/cinema-film-reel.jpg',
    previewImages: [
      '/images/products/cinema-film-reel.jpg',
      '/images/products/lens-50.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-series',
    title: 'Series y TV',
    description: 'Iconografía televisiva de culto, leyendas del anime japonés y siluetas pop a 1.280 °C.',
    tag: 'Series & TV',
    category: 'Series',
    coverImage: '/images/products/series-sailor-moon.jpg',
    previewImages: [
      '/images/products/series-sailor-moon.jpg',
      '/images/products/series-dragon-ball.jpg',
      '/images/products/series-springfield.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-retro',
    title: 'Retro & Vintage',
    description: 'Cámaras instantáneas Polaroid, iconos analógicos y estética arcade vintage en gres de autor a 1.280 °C.',
    tag: 'Retro Gaming',
    category: 'Retro',
    coverImage: '/images/products/retro-polaroid.jpg',
    previewImages: [
      '/images/products/retro-polaroid.jpg',
      '/images/products/retro-atari.jpg',
      '/images/products/retro-super-mushroom.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-prehistoric',
    title: 'Prehistoria & Paleontología',
    description: 'Cráneos fósiles de terópodo, alas biomecánicas de pterosaurio y reptiles marinos del Jurásico esculpidos en gres vivo a 1.280 °C.',
    tag: 'Drop 001',
    category: 'Prehistoric',
    coverImage: '/images/products/prehistoric-pterodactyl.jpg',
    previewImages: [
      '/images/products/prehistoric-pterodactyl.jpg',
      '/images/products/prehistoric-marine.jpg',
      '/images/products/fossil-skull.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-architecture',
    title: 'Arquitectura',
    description: 'Brutalismo monolítico en hormigón visto, geometría Bauhaus de Dessau y aleros escalonados de Kioto a 1.280 °C.',
    tag: 'Arquitectura',
    category: 'Architecture',
    coverImage: '/images/products/arch-brutalism.jpg',
    previewImages: [
      '/images/products/arch-brutalism.jpg',
      '/images/products/arch-origami.jpg',
      '/images/products/bauhaus-dessau.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-experimental',
    title: 'Futurista y Sci-fi',
    description: 'Autómatas robóticos, máquinas del tiempo y estética ciber-futurista horneados a 1.280 °C.',
    tag: 'Futurista y Sci-fi',
    category: 'Experimental',
    coverImage: '/images/products/futurism-time-machine.jpg',
    previewImages: [
      '/images/products/futurism-time-machine.jpg',
      '/images/products/futurism-cyberpunk.jpg',
      '/images/products/exp-robot-automaton.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-art',
    title: 'Arte',
    description: 'La Gorda de Botero, cerámica Wabi-Sabi en Kintsugi de oro y bustos clásicos helénicos a 1.280 °C.',
    tag: 'Arte',
    category: 'Art',
    coverImage: '/images/products/art-botero-volumen.jpg',
    previewImages: [
      '/images/products/art-botero-volumen.jpg',
      '/images/products/art-wabi-sabi.jpg',
      '/images/products/art-classical-muse.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  }
];

export const DRYP_BOARDS = PINTEREST_BOARDS;

// Catálogo curado: CERO repetidos, cada pieza con fotografía única y tamaño uniforme cuadrado
export const DRYP_DRIPS: DrypDrip[] = [
  // ── MÚSICA (1 drip único) ──────────────────────────────────────────────────
  {
    id: 'drip-music-vinyl',
    productId: 'music-vinyl-33',
    title: '01 / Vinyl Groove 33',
    subtitle: 'Cerámica negro piano brillante con microsurcos concéntricos de vinilo, galleta central rojo carmín y asa geométrica ergonómica.',
    category: 'Music',
    categoryLabel: 'Música',
    imageSrc: '/images/products/vinyl-groove.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sound Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sound',
      verified: true
    },
    price: 84,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 1420,
    savesCount: 3840,
    boardIds: ['board-music'],
    tags: ['Vinilo', 'Música', '33 RPM', 'Concéntrico', 'Negro Mate', 'Latón'],
    badge: 'EDICIÓN VINILO',
    dropCode: 'AUDIO 01',
    level01Emotion: 'El crujido cálido del vinilo cuando la aguja toca el primer surco antes de que inicie la melodía matutina.'
  },

  {
    id: 'drip-music-piano',
    productId: 'music-grand-piano',
    title: '23 / Grand Piano Keys',
    subtitle: 'Cerámica negro piano brillante con teclas blancas y negras esculpidas en la cámara interior, fileteado en oro fino y base pedestal con sello dorado DRYP.',
    category: 'Music',
    categoryLabel: 'Música',
    imageSrc: '/images/products/music-piano.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sound Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sound',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 5210,
    savesCount: 12600,
    boardIds: ['board-music'],
    tags: ['Piano', 'Música', 'Teclas', 'Negro Piano', 'Oro', 'Acústico', 'Concierto', 'Clásico'],
    badge: 'GRAND PIANO',
    dropCode: 'AUDIO 02',
    level01Emotion: 'La resonancia de un acorde perfecto en un piano de cola: cada vertido fluye en cadencia armónica hacia tu taza.'
  },

  {
    id: 'drip-music-soundwave',
    productId: 'music-soundwave-resonance',
    title: '37 / Ondas Sonoras Resonance',
    subtitle: 'Gres arena moteado y basalto negro con borde sinusoidal en onda acústica, barras de ecualizador en cascada y base arqueada con sello dorado DRYP.',
    category: 'Music',
    categoryLabel: 'Música',
    imageSrc: '/images/products/music-soundwave.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sound Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sound',
      verified: true
    },
    price: 94,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 4890,
    savesCount: 11200,
    boardIds: ['board-music'],
    tags: ['Ondas Sonoras', 'Música', 'Acústico', 'Frecuencia', 'Ecualizador', 'Gres Arena', 'Negro Basalto', 'Resonancia'],
    badge: 'SOUNDWAVE',
    dropCode: 'AUDIO 03',
    level01Emotion: 'La frecuencia exacta del sonido vibrando en la cerámica: una melodía fluida que resuena en cada gota de café.'
  },

  // ── COSMOS (1 drip único) ──────────────────────────────────────────────────
  {
    id: 'drip-cosmos-orbit',
    productId: 'orbit-space',
    title: '04 / Orbit Lunar Crater',
    subtitle: 'Cerámica de regolito lunar con cráteres esculpidos, cámara interior negra estriada, asa circular lunar y base arqueada con sello DRYP.',
    category: 'Cosmos',
    categoryLabel: 'Universo',
    imageSrc: '/images/products/orbit.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Space Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_space',
      verified: true
    },
    price: 92,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 1980,
    savesCount: 4320,
    boardIds: ['board-cosmos'],
    tags: ['Luna', 'Regolito', 'Basalto', 'Latón', 'Universo', 'Cráteres'],
    badge: 'LUNAR CRATER',
    dropCode: 'SPACE 02',
    level01Emotion: 'La inmensidad silenciosa del regolito lunar bajo la luz de estrellas distantes.'
  },

  {
    id: 'drip-cosmos-lunar-lander',
    productId: 'cosmos-lunar-lander',
    title: '29 / Apollo Lunar Lander',
    subtitle: 'Cerámica aeroespacial blanco hueso con paneles modulares, acentos terracota y base trípode de alunizaje con sello DRYP.',
    category: 'Cosmos',
    categoryLabel: 'Universo',
    imageSrc: '/images/products/cosmos-lunar-lander.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Space Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_space',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 4890,
    savesCount: 11200,
    boardIds: ['board-cosmos'],
    tags: ['Apolo', 'NASA', 'Lunar Lander', 'Módulo Lunar', 'Espacio', 'Aeroespacial', 'Gres Blanco', 'Universo'],
    badge: 'APOLLO LANDER',
    dropCode: 'SPACE 03',
    level01Emotion: 'Contacto confirmado en el Mar de la Tranquilidad: la física del alunizaje convertida en tu ritual matutino.'
  },

  {
    id: 'drip-cosmos-meteorite',
    productId: 'cosmos-meteorite-impact',
    title: '38 / Meteorito Chondrite Crater',
    subtitle: 'Gres basáltico con cráteres de impacto y textura meteórica de regmaglifos, estrías interiores en bronce cobrizo y base poligonal facetada con sello DRYP.',
    category: 'Cosmos',
    categoryLabel: 'Universo',
    imageSrc: '/images/products/cosmos-meteorite.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Space Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_space',
      verified: true
    },
    price: 102,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 6840,
    savesCount: 15900,
    boardIds: ['board-cosmos'],
    tags: ['Meteorito', 'Cráteres', 'Espacio', 'Universo', 'Chondrite', 'Asteroide', 'Basalto', 'Bronce'],
    badge: 'METEORITE',
    dropCode: 'SPACE 04',
    level01Emotion: 'La fuerza geológica del espacio profundo desacelerando en tu ritual: mineralidad, inercia térmica y un vertido sereno.'
  },

  // ── NATURALEZA (2 drips únicos) ──────────────────────────────────────────────
  {
    id: 'drip-nature-hummingbird',
    productId: 'nature-colibri-andes',
    title: '05 / Colibrí Andino',
    subtitle: 'Gres crema moteado con nervaduras en ala aerodinámica, cámara interior en esmalte verde esmeralda brillante, pico alado y peana calada con sello DRYP.',
    category: 'Nature',
    categoryLabel: 'Naturaleza',
    imageSrc: '/images/products/colibri-andes.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Bio Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_nature',
      verified: true
    },
    price: 88,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 2450,
    savesCount: 6120,
    boardIds: ['board-nature'],
    tags: ['Colibrí', 'Cumbres de Neblaria', 'Esmeralda', 'Gres Moteado', 'Bosque de Niebla'],
    badge: 'BOSQUE DE NIEBLA',
    dropCode: 'BIO 01',
    level01Emotion: 'El rocío fresco sobre las hojas verdes del bosque de niebla y el aleteo fugaz de las aves al amanecer.'
  },

  {
    id: 'drip-nature-venation',
    productId: 'nature-botanical-wings',
    title: '06 / Alas de Mariposa Monarca',
    subtitle: 'Cerámica negra mate con paneles alados en esmalte naranja ambarino, festón biomimético, vertedor alado y base helicoidal con sello DRYP.',
    category: 'Nature',
    categoryLabel: 'Naturaleza',
    imageSrc: '/images/products/nature-venation.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Bio Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_nature',
      verified: true
    },
    price: 90,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 3890,
    savesCount: 9140,
    boardIds: ['board-nature'],
    tags: ['Naturaleza', 'Mariposa', 'Monarca', 'Alas', 'Naranja', 'Negro Mate', 'Biomimético'],
    badge: 'MONARCH WINGS',
    dropCode: 'BIO 02',
    level01Emotion: 'La delicadeza ingrávida de las alas de mariposa abriéndose hacia la luz del sol en las mañanas de bosque.'
  },

  {
    id: 'drip-nature-feline',
    productId: 'nature-feline-silhouette',
    title: '36 / Silueta Felina',
    subtitle: 'Cerámica negro grafito mate con orejas felinas en el borde, bigotes y nariz en oro envejecido, cono interior en gres arena marfil con estrías en vórtice y peana calada con huellas doradas y sello DRYP.',
    category: 'Nature',
    categoryLabel: 'Naturaleza',
    imageSrc: '/images/products/nature-feline.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Bio Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_nature',
      verified: true
    },
    price: 96,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 5120,
    savesCount: 12400,
    boardIds: ['board-nature'],
    tags: ['Naturaleza', 'Felino', 'Gato', 'Fauna', 'Biomimético', 'Oro', 'Negro Mate', 'Vórtice'],
    badge: 'FELINE EDITION',
    dropCode: 'BIO 03',
    level01Emotion: 'La calma silenciosa y el sigilo de un felino al amanecer, concentrados en un vertido paciente y armonioso.'
  },

  // ── PREHISTORIA (3 drips únicos) ──────────────────────────────────────────
  {
    id: 'drip-fossil-skull',
    productId: 'fossil-skull-trex',
    title: '07 / Fossil Skull T-Rex',
    subtitle: 'Gres chamotado verde musgo fosilizado con cráneo de terópodo grabado y base trípode en garra. Borde festoneado con estrías de drenaje continuo.',
    category: 'Prehistoric',
    categoryLabel: 'Prehistoria',
    imageSrc: '/images/products/fossil-skull.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Paleo Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_paleo',
      verified: true
    },
    price: 96,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 3450,
    savesCount: 8120,
    boardIds: ['board-prehistoric'],
    tags: ['T-Rex', 'Cráneo Fósil', 'Prehistoria', 'Arenisca', 'Dinosaurios', 'Drop 001'],
    badge: 'PALEO SCULPT',
    dropCode: 'DROP 001',
    level01Emotion: 'Millones de años de evolución y fósiles colosales despertando con la primera gota de agua hirviendo.'
  },

  {
    id: 'drip-prehistoric-marine',
    productId: 'prehistoric-marine-plesiosaur',
    title: '08 / Plesiosaur Marine Spiral',
    subtitle: 'Gres azul petróleo oceánico moteado con estrías helicoidales marinas, borde ondulado en ola, asa en espiral fósil amonita y peana arqueada con sello DRYP.',
    category: 'Prehistoric',
    categoryLabel: 'Prehistoria',
    imageSrc: '/images/products/prehistoric-marine.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Paleo Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_paleo',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 4620,
    savesCount: 10450,
    boardIds: ['board-prehistoric'],
    tags: ['Prehistoria', 'Dinosaurio Marino', 'Plesiosaurio', 'Fósil', 'Azul Petróleo', 'Espiral', 'Amonita', 'Mesozoico'],
    badge: 'MARINE FOSSIL',
    dropCode: 'PALEO 02',
    level01Emotion: 'La marea abisal del Jurásico canalizada en un vertido espiral de aguas profundas y aroma mineral.'
  },

  {
    id: 'drip-prehistoric-pterodactyl',
    productId: 'prehistoric-pterodactyl-wing',
    title: '39 / Ala de Pterodáctilo',
    subtitle: 'Gres arena hueso con armazón esquelético biomecánico, membrana interior cónica en negro carbón con estrías óseas y base aerodinámica calada con sello DRYP.',
    category: 'Prehistoric',
    categoryLabel: 'Prehistoria',
    imageSrc: '/images/products/prehistoric-pterodactyl.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Paleo Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_paleo',
      verified: true
    },
    price: 104,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 5670,
    savesCount: 13800,
    boardIds: ['board-prehistoric'],
    tags: ['Pterodáctilo', 'Pterosaurio', 'Ala', 'Prehistoria', 'Fósil', 'Aerodinámica', 'Hueso', 'Gres'],
    badge: 'PTEROSAUR WING',
    dropCode: 'PALEO 04',
    level01Emotion: 'El primer vuelo de la Tierra canalizado en tu taza: aerodinámica esquelética que convierte la gravedad en un vertido perfecto.'
  },

  // ── FOTOGRAFÍA Y CINE (Objeto 05 Lens) ───────────────────────────────────
  {
    id: 'drip-lens-50',
    productId: 'lens-50',
    title: '10 / Lens 50mm',
    subtitle: 'Cerámica negra mate con aro de enfoque moleteado, punto rojo de montaje índice, botón disparador texturizado y base calada con sello DRYP.',
    category: 'Cinema',
    categoryLabel: 'Fotografía y cine',
    imageSrc: '/images/products/lens-50.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Optics Studio',
      avatar: '/favicon.svg',
      handle: '@dryp_optics',
      verified: true
    },
    price: 74,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 1940,
    savesCount: 4890,
    boardIds: ['board-cinema'],
    tags: ['35mm', 'Fotografía', 'Lente 50mm', 'Apertura', 'Cine', 'Negro Mate'],
    badge: 'APERTURE 50MM',
    dropCode: 'OBJECT 05',
    level01Emotion: 'El clic mecánico del anillo de apertura antes de congelar un segundo irrepetible con tu café.'
  },

  {
    id: 'drip-cinema-film-reel',
    productId: 'cinema-film-reel',
    title: '25 / Cinema Reel 35mm',
    subtitle: 'Gres hueso moteado con cinta de celuloide helicoidal, cámara interior en esmalte negro acanalado, asa en carrete de cine y peana con sello DRYP.',
    category: 'Cinema',
    categoryLabel: 'Fotografía y cine',
    imageSrc: '/images/products/cinema-film-reel.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Cinema Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_cinema',
      verified: true
    },
    price: 92,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 3870,
    savesCount: 9140,
    boardIds: ['board-cinema'],
    tags: ['Cine', 'Fotografía', 'Celuloide', '35mm', 'Carrete', 'Cinta de Cine', 'Gres Moteado', 'Negro Esmaltado'],
    badge: 'CINEMA 35MM',
    dropCode: 'CINEMA 02',
    level01Emotion: 'El giro continuo de la bobina de 35mm proyectando cada gota de extracción como un fotograma de autor.'
  },

  // ── SERIES Y TV ──────────────────────────────────────────────────────────
  {
    id: 'drip-series-springfield',
    productId: 'series-springfield-spikes',
    title: '30 / Springfield Spikes',
    subtitle: 'Gres cerámico amarillo Springfield brillante con borde superior en corona de picos dentados, asa circular ergonómica y peana arqueada con sello DRYP.',
    category: 'Series',
    categoryLabel: 'Series y TV',
    imageSrc: '/images/products/series-springfield.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Pop TV Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_tv',
      verified: true
    },
    price: 88,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 4320,
    savesCount: 9780,
    boardIds: ['board-series'],
    tags: ['Series', 'TV', 'Springfield', 'Amarillo', 'Picos', 'Pop Culture', 'Animación', 'Drop 30'],
    badge: 'SERIES TV',
    dropCode: 'SERIES 01',
    level01Emotion: 'La chispa irreverente de la televisión animada de sobremesa vertida en tu primer café del día.'
  },

  {
    id: 'drip-series-dragon-ball',
    productId: 'series-dragon-ball-4star',
    title: '32 / Dragon Ball 4-Star',
    subtitle: 'Gres naranja Kame con facetas angulares en llamarada Saiyajin, esfera de cuatro estrellas incrustada en el asa circular y base arqueada con sello DRYP.',
    category: 'Series',
    categoryLabel: 'Series y TV',
    imageSrc: '/images/products/series-dragon-ball.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Pop TV Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_tv',
      verified: true
    },
    price: 94,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 5280,
    savesCount: 12400,
    boardIds: ['board-series'],
    tags: ['Dragon Ball', 'Anime', 'Series', 'TV', 'Goku', 'Saiyajin', 'Esfera del Dragón', '4 Estrellas', 'Naranja Kame'],
    badge: 'DRAGON BALL',
    dropCode: 'SERIES 02',
    level01Emotion: 'Toda la energía del Ki concentrada en una extracción legendaria que eleva tu poder matutino a más de 9.000.'
  },

  {
    id: 'drip-series-sailor-moon',
    productId: 'series-sailor-moon-crystal',
    title: '34 / Sailor Moon Cosmic Moon',
    subtitle: 'Porcelana blanco perla con paneles en rosa empolvado, fileteado en oro 24k, cámara interior estriada con estrellas celestiales, asa en media luna dorada con gema cabujón magenta y peana calada con sello DRYP.',
    category: 'Series',
    categoryLabel: 'Series y TV',
    imageSrc: '/images/products/series-sailor-moon.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Pop TV Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_tv',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 6840,
    savesCount: 15900,
    boardIds: ['board-series'],
    tags: ['Sailor Moon', 'Anime', 'Series', 'TV', 'Media Luna', 'Cristal de Plata', 'Rosa Pastel', 'Oro 24k', 'Shoujo', 'Magical Girl'],
    badge: 'SAILOR MOON',
    dropCode: 'SERIES 03',
    level01Emotion: 'Por el poder del Prisma Lunar: la magia y el brillo celestial transforman tu ritual del café en un destello de pura nostalgia de los noventa.'
  },

  // ── RETRO ───────────────────────────────────────────────────────────────
  {
    id: 'drip-retro-super-mushroom',
    productId: 'retro-super-mushroom',
    title: '28 / Super Mushroom 1-UP',
    subtitle: 'Cono de cerámica rojo carmín con lunares blancos moteados y base con los icónicos ojos de Champiñón de Nintendo. Sube de nivel en cada taza.',
    category: 'Retro',
    categoryLabel: 'Retro',
    imageSrc: '/images/products/retro-super-mushroom.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Retro Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_retro',
      verified: true
    },
    price: 90,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 6210,
    savesCount: 13400,
    boardIds: ['board-retro'],
    tags: ['Nintendo', 'Mario', 'Super Mushroom', 'Champiñón', 'Retro', 'Gaming', '8-bit', 'Rojo'],
    badge: 'SUPER MUSHROOM',
    dropCode: 'RETRO 03',
    level01Emotion: 'Ese sonido inconfundible al conseguir una vida extra: energía instantánea para conquistar la mañana.'
  },

  {
    id: 'drip-retro-atari',
    productId: 'retro-atari-2600',
    title: '20 / Atari Fuji 2600',
    subtitle: 'Gres arena moteado con las icónicas franjas Atari en amarillo, naranja y rojo carmín, cámara interior acanalada en negro grafito y base pedestal con sello DRYP.',
    category: 'Retro',
    categoryLabel: 'Retro',
    imageSrc: '/images/products/retro-atari.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Retro Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_retro',
      verified: true
    },
    price: 94,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 5430,
    savesCount: 11800,
    boardIds: ['board-retro'],
    tags: ['Atari', 'Retro', 'Arcade', '2600', 'Gaming', 'Vintage', 'Franjas', 'Gres Moteado'],
    badge: 'ATARI 2600',
    dropCode: 'RETRO 02',
    level01Emotion: 'El destello del televisor de tubo y el joystick listo para la primera partida matutina con aroma a café tostado.'
  },

  {
    id: 'drip-retro-polaroid',
    productId: 'retro-polaroid-rainbow',
    title: '40 / Polaroid Color Spectrum',
    subtitle: 'Gres hueso moteado en pirámide cuadrada invertida con la mítica franja arcoíris Polaroid, cámara interior estriada en negro carbón y pedestal geométrico con sello DRYP.',
    category: 'Retro',
    categoryLabel: 'Retro',
    imageSrc: '/images/products/retro-polaroid.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Retro Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_retro',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 7890,
    savesCount: 17400,
    boardIds: ['board-retro'],
    tags: ['Polaroid', 'Retro', 'Cámara', 'Arcoíris', 'Vintage', 'Instantáneo', 'Fotografía', 'Gres'],
    badge: 'POLAROID SPECTRUM',
    dropCode: 'RETRO 04',
    level01Emotion: 'La magia instantánea de la película revelándose: un instante analógico detenido en cada gota de café.'
  },

  {
    id: 'drip-arch-bauhaus',
    productId: 'arch-bauhaus-dessau',
    title: '11 / Bauhaus Dessau',
    subtitle: 'Gres marfil con bloques geométricos primarios (círculo rojo, cuña amarilla y negro), asa ergonómica ovalada y base arquitectónica calada.',
    category: 'Architecture',
    categoryLabel: 'Arquitectura',
    imageSrc: '/images/products/bauhaus-dessau.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Architecture Unit',
      avatar: '/favicon.svg',
      handle: '@dryp_arch',
      verified: true
    },
    price: 88,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 2540,
    savesCount: 6890,
    boardIds: ['board-architecture'],
    tags: ['Bauhaus', 'Geometría', 'Dessau 1925', 'Funcionalismo', 'Arena', 'Asa Triangular'],
    badge: 'BAUHAUS 1925',
    dropCode: 'ARCH 01',
    level01Emotion: 'Eliminar cualquier ornamento superfluo hasta que solo quede la verdad estructural del vertido.'
  },

  {
    id: 'drip-arch-origami',
    productId: 'arch-origami-fold',
    title: '22 / Pagoda Eaves — Kioto',
    subtitle: 'Gres arena moteado con aleros superpuestos inspirados en las pagodas de Kioto, asa geométrica en ébano y base calada en pilares Torii con sello DRYP.',
    category: 'Architecture',
    categoryLabel: 'Arquitectura',
    imageSrc: '/images/products/arch-origami.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Architecture Unit',
      avatar: '/favicon.svg',
      handle: '@dryp_arch',
      verified: true
    },
    price: 94,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 3820,
    savesCount: 9450,
    boardIds: ['board-architecture'],
    tags: ['Arquitectura', 'Japón', 'Pagoda', 'Kioto', 'Aleros', 'Torii', 'Gres Moteado', 'Geometría'],
    badge: 'PAGODA KIOTO',
    dropCode: 'ARCH 02',
    level01Emotion: 'La calma milenaria de los templos de madera de Kioto: aleros escalonados que guían el agua con serenidad zen.'
  },

  {
    id: 'drip-arch-brutalism',
    productId: 'arch-brutalism-monolith',
    title: '42 / Brutalismo Monolítico',
    subtitle: 'Gres mineral en textura de hormigón visto con facetado hexagonal monolítico, sombras profundas, pilastras interiores de extracción y peana calada con sello DRYP.',
    category: 'Architecture',
    categoryLabel: 'Arquitectura',
    imageSrc: '/images/products/arch-brutalism.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Architecture Unit',
      avatar: '/favicon.svg',
      handle: '@dryp_arch',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 6340,
    savesCount: 14700,
    boardIds: ['board-architecture'],
    tags: ['Brutalismo', 'Arquitectura', 'Hormigón Visto', 'Béton Brut', 'Monolito', 'Sombras Profundas', 'Gres Mineral', 'Geometría'],
    badge: 'BRUTALIST MONOLITH',
    dropCode: 'ARCH 03',
    level01Emotion: 'La presencia imponente del hormigón y la sombra: verdad material y peso arquitectónico en cada gota de café.'
  },

  // ── FUTURISMO (1 drip único) ──────────────────────────────────────────
  {
    id: 'drip-exp-robot-automaton',
    productId: 'exp-robot-automaton',
    title: '31 / Automaton Bot-01',
    subtitle: 'Gres hueso moteado con cabezal robótico facetado, ojos ámbar, cámara interior en cerámica negra estriada y base trípode mecatrónica con sello DRYP.',
    category: 'Experimental',
    categoryLabel: 'Futurista y Sci-fi',
    imageSrc: '/images/products/exp-robot-automaton.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Robotics Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_robotics',
      verified: true
    },
    price: 99,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 4890,
    savesCount: 11200,
    boardIds: ['board-experimental'],
    tags: ['Futurismo', 'Robot', 'Autómata', 'Mecatrónico', 'Cibernética', 'Sci-Fi', 'Gres Moteado', 'Drop BOT'],
    badge: 'FUTURISM BOT',
    dropCode: 'FUTR 01',
    level01Emotion: 'La precisión de los autómatas mecánicos fusionada con la calidez del gres: café preparado con exactitud milimétrica.'
  },

  {
    id: 'drip-futurism-cyberpunk',
    productId: 'futurism-cyberpunk-neon',
    title: '33 / Cyberpunk Neon Circuit',
    subtitle: 'Cerámica negro obsidiana con armadura facetada stealth, circuitos grabados en neón carmesí, asa angular mecatrónica y base poligonal con sello DRYP.',
    category: 'Experimental',
    categoryLabel: 'Futurista y Sci-fi',
    imageSrc: '/images/products/futurism-cyberpunk.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Cyber Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_cyber',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 6890,
    savesCount: 14500,
    boardIds: ['board-experimental'],
    tags: ['Cyberpunk', 'Futurismo', 'Sci-Fi', 'Negro Obsidiana', 'Neón', 'Circuitos', 'Stealth', 'Neo-Tokyo'],
    badge: 'CYBERPUNK NEON',
    dropCode: 'FUTR 02',
    level01Emotion: 'La lluvia ácida y las luces de neón de Neo-Tokyo desvaneciéndose en la primera extracción de alta fidelidad.'
  },

  {
    id: 'drip-futurism-time-machine',
    productId: 'futurism-time-machine-chronos',
    title: '35 / Chronos Time Machine',
    subtitle: 'Gres arena moteado cilíndrico con grabados astrológicos y líneas temporales, cámara cónica interior en basalto negro con estrías en bronce, asa giroscópica orbital y peana graduada con sello DRYP.',
    category: 'Experimental',
    categoryLabel: 'Futurista y Sci-fi',
    imageSrc: '/images/products/futurism-time-machine.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Quantum Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_quantum',
      verified: true
    },
    price: 110,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 7420,
    savesCount: 16800,
    boardIds: ['board-experimental'],
    tags: ['Máquina del Tiempo', 'Chronos', 'Futurista', 'Sci-Fi', 'Astrolabio', 'Órbita', 'Bronce', 'Basalto', 'Tiempo', 'Cuántico'],
    badge: 'TIME MACHINE',
    dropCode: 'FUTR 03',
    level01Emotion: 'El tiempo se pliega en cada vertido: una máquina cuántica de cerámica que detiene los segundos para saborear el instante presente.'
  },

  // ── ARTE (1 drip único) ──────────────────────────────────────────────────
  {
    id: 'drip-art-classical-muse',
    productId: 'art-classical-muse',
    title: '22 / Musa Clásica',
    subtitle: 'Gres arenisca marfil con busto helénico con corona de laurel esculpido a mano, drapeado helicoidal y peana calada con sello DRYP.',
    category: 'Art',
    categoryLabel: 'Arte',
    imageSrc: '/images/products/art-classical-muse.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Classical Arts',
      avatar: '/favicon.svg',
      handle: '@dryp_art',
      verified: true
    },
    price: 94,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 3890,
    savesCount: 8540,
    boardIds: ['board-art'],
    tags: ['Arte', 'Escultura', 'Musa', 'Helénico', 'Corona de Laurel', 'Arenisca', 'Gres Moteado', 'Busto Clásico'],
    badge: 'MUSE SCULPT',
    dropCode: 'ART 01',
    level01Emotion: 'La serenidad del arte helénico y el manto drapeado despertando bajo el aroma del café recién tostado.'
  },

  {
    id: 'drip-art-wabi-sabi',
    productId: 'art-wabi-sabi-kintsugi',
    title: '24 / Wabi-Sabi Kintsugi',
    subtitle: 'Gres dual en marfil moteado y carbón volcánico unidos por costuras de oro 24k en técnica Kintsugi tradicional, con peana calada y sello DRYP.',
    category: 'Art',
    categoryLabel: 'Arte',
    imageSrc: '/images/products/art-wabi-sabi.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Traditional Arts',
      avatar: '/favicon.svg',
      handle: '@dryp_art',
      verified: true
    },
    price: 98,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 7120,
    savesCount: 15300,
    boardIds: ['board-art'],
    tags: ['Arte', 'Wabi-Sabi', 'Kintsugi', 'Cerámica Tradicional', 'Oro', 'Gres Moteado', 'Japón', 'Imperfecto'],
    badge: 'KINTSUGI GOLD',
    dropCode: 'ART 02',
    level01Emotion: 'La belleza de la imperfección y la cicatriz dorada: cada fractura convertida en la parte más valiosa de tu ritual.'
  },

  {
    id: 'drip-art-botero',
    productId: 'art-botero-volumen',
    title: '41 / La Gorda de Botero',
    subtitle: 'Gres arena marfil con curvas voluptuosas monumentales en homenaje al maestro Fernando Botero, asa arqueada, estrías cónicas interiores y peana calada con sello DRYP.',
    category: 'Art',
    categoryLabel: 'Arte',
    imageSrc: '/images/products/art-botero-volumen.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sculpture Studio',
      avatar: '/favicon.svg',
      handle: '@dryp_art',
      verified: true
    },
    price: 105,
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    likesCount: 8920,
    savesCount: 19600,
    boardIds: ['board-art'],
    tags: ['Botero', 'Arte', 'Medellín', 'Escultura', 'Volumen', 'La Gorda', 'Gres Moteado', 'Monumental'],
    badge: 'BOTERO SCULPT',
    dropCode: 'ART 03',
    level01Emotion: 'La plenitud y calidez del volumen boteriano convertidas en una experiencia táctil y sensorial para tus mañanas.'
  }
];

export const PINTEREST_PINS: PinterestPin[] = DRYP_DRIPS;
