export type DripCategory =
  | 'All'
  | 'Music'
  | 'Cosmos'
  | 'Nature'
  | 'Cinema'
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
    description: 'Surcos de vinilo a 33 RPM y acústica concéntrica traducidos a dinámica de vertido pour-over.',
    tag: 'Música',
    category: 'Music',
    coverImage: '/images/products/vinyl-groove.jpg',
    previewImages: [
      '/images/products/vinyl-groove.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-cosmos',
    title: 'Universo',
    description: 'Regolito lunar Apollo y basalto volcánico texturizado en conos cerámicos de alta inercia térmica.',
    tag: 'Universo',
    category: 'Cosmos',
    coverImage: '/images/products/orbit.jpg',
    previewImages: [
      '/images/products/orbit.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-nature',
    title: 'Naturaleza & Biodiversidad',
    description: 'Plumajes de colibríes andinos y venaciones biomiméticas de alas de libélula en porcelana marfil.',
    tag: 'Botánica & Fauna',
    category: 'Nature',
    coverImage: '/images/products/nature-venation.jpg',
    previewImages: [
      '/images/products/nature-venation.jpg',
      '/images/products/colibri-andes.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-cinema',
    title: 'Fotografía y cine',
    description: 'Ópticas concéntricas de 35mm, escala de diafragma y cuerpo cerámico negro anodizado.',
    tag: 'Cine & Foto',
    category: 'Cinema',
    coverImage: '/images/products/lens-50.jpg',
    previewImages: [
      '/images/products/lens-50.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-retro',
    title: 'Retro & Vintage',
    description: 'Líneas de velocidad setenteras, diseño analógico y estética vintage en gres de autor.',
    tag: 'Retro 1974',
    category: 'Retro',
    coverImage: '/images/products/retro-stripes.jpg',
    previewImages: [
      '/images/products/retro-stripes.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-prehistoric',
    title: 'Prehistoria & Paleontología',
    description: 'Cráneos fósiles de terópodo esculpidos a mano en gres vivo de arenisca a alta temperatura.',
    tag: 'Drop 001',
    category: 'Prehistoric',
    coverImage: '/images/products/fossil-skull.jpg',
    previewImages: [
      '/images/products/fossil-skull.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-architecture',
    title: 'Arquitectura',
    description: 'Geometría funcional de la Bauhaus de Dessau: minimalismo estructural y estrías de extracción directa.',
    tag: 'Arquitectura',
    category: 'Architecture',
    coverImage: '/images/products/bauhaus-dessau.jpg',
    previewImages: [
      '/images/products/bauhaus-dessau.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-experimental',
    title: 'Experimental & Cinético',
    description: 'Estructuras giroscópicas, exoesqueletos cerámicos y anillos de latón en suspensión para desafiar las leyes del vertido.',
    tag: 'Experimental',
    category: 'Experimental',
    coverImage: '/images/products/orbital-kinetic.jpg',
    previewImages: [
      '/images/products/orbital-kinetic.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-art',
    title: 'Arte',
    description: 'Bustos clásicos helénicos y escultura anatómica esculpida a mano en gres cerámico a 1.280 °C.',
    tag: 'Arte',
    category: 'Art',
    coverImage: '/images/products/art-classical-muse.jpg',
    previewImages: [
      '/images/products/art-classical-muse.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
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
    subtitle: 'Gres negro mate con microsurcos de vinilo y núcleo de latón. Calibrado para notas dulces y cuerpo balanceado.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (80 piezas)',
    likesCount: 1420,
    savesCount: 3840,
    boardIds: ['board-music'],
    tags: ['Vinilo', 'Música', '33 RPM', 'Concéntrico', 'Negro Mate', 'Latón'],
    badge: 'EDICIÓN VINILO',
    dropCode: 'AUDIO 01',
    level01Emotion: 'El crujido cálido del vinilo cuando la aguja toca el primer surco antes de que inicie la melodía matutina.'
  },

  {
    id: 'drip-music-waveform',
    productId: 'music-waveform-gold',
    title: '23 / Waveform Gold',
    subtitle: 'Porcelana blanca marfil con onda de sonido serigrafíada en oro mate y anillo base dorado. El pulso de la música traducido en gres.',
    category: 'Music',
    categoryLabel: 'Música',
    imageSrc: '/images/products/music-waveform.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sound Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sound',
      verified: true
    },
    price: 96,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Oro)',
    likesCount: 4120,
    savesCount: 9380,
    boardIds: ['board-music'],
    tags: ['Música', 'Onda de Sonido', 'Oro', 'Porcelana', 'Waveform', 'Minimalista', 'Latón'],
    badge: 'WAVEFORM GOLD',
    dropCode: 'AUDIO 02',
    level01Emotion: 'El instante en que el silencio se convierte en frecuencia: la onda que dibuja la mañana antes del primer sorbo.'
  },

  // ── COSMOS (1 drip único) ──────────────────────────────────────────────────
  {
    id: 'drip-cosmos-orbit',
    productId: 'orbit-space',
    title: '04 / Orbit Lunar',
    subtitle: 'Basalto volcánico texturizado con cráteres esculpidos y base de latón. Inercia térmica superior para extracciones limpias.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Lunar)',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Apolo)',
    likesCount: 4890,
    savesCount: 11200,
    boardIds: ['board-cosmos'],
    tags: ['Apolo', 'NASA', 'Lunar Lander', 'Módulo Lunar', 'Espacio', 'Aeroespacial', 'Gres Blanco', 'Universo'],
    badge: 'APOLLO LANDER',
    dropCode: 'SPACE 03',
    level01Emotion: 'Contacto confirmado en el Mar de la Tranquilidad: la física del alunizaje convertida en tu ritual matutino.'
  },

  // ── NATURALEZA (2 drips únicos) ──────────────────────────────────────────────
  {
    id: 'drip-nature-hummingbird',
    productId: 'nature-colibri-andes',
    title: '05 / Colibrí Andino',
    subtitle: 'Gres crema con nervaduras verde esmeralda y asa ergonómica. Flujo ágil que resalta notas florales y cítricas.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Cumbres de Neblaria)',
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
    title: '06 / Alas de Libélula',
    subtitle: 'Porcelana marfil con relieve biomimético y canales de ventilación. Extracción dulce de máxima claridad aromática.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Cumbres de Neblaria)',
    likesCount: 3120,
    savesCount: 7450,
    boardIds: ['board-nature'],
    tags: ['Naturaleza', 'Nervadura', 'Libélula', 'Botánica', 'Marfil', 'Caramelo'],
    badge: 'BOTÁNICA VIVA',
    dropCode: 'BIO 02',
    level01Emotion: 'La perfección fractal de las alas de una libélula posada sobre el agua cristalina del río al amanecer.'
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
    stockStatus: 'available',
    stockLabel: 'Disponible (042 / 100 piezas)',
    likesCount: 3450,
    savesCount: 8120,
    boardIds: ['board-prehistoric'],
    tags: ['T-Rex', 'Cráneo Fósil', 'Prehistoria', 'Arenisca', 'Dinosaurios', 'Drop 001'],
    badge: 'PALEO SCULPT',
    dropCode: 'DROP 001',
    level01Emotion: 'Millones de años de evolución y fósiles colosales despertando con la primera gota de agua hirviendo.'
  },

  // ── FOTOGRAFÍA Y CINE (Objeto 05 Lens) ───────────────────────────────────
  {
    id: 'drip-lens-50',
    productId: 'lens-50',
    title: '10 / Lens 50mm',
    subtitle: 'Cuerpo cerámico negro mate con escala de diafragma y estrías de enfoque. Geometría óptica de vertido milimétrico.',
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
    stockStatus: 'low_stock',
    stockLabel: 'Casi agotado (4 restantes)',
    likesCount: 1940,
    savesCount: 4890,
    boardIds: ['board-cinema'],
    tags: ['35mm', 'Fotografía', 'Lente 50mm', 'Apertura', 'Cine', 'Negro Mate'],
    badge: 'APERTURE 50MM',
    dropCode: 'OBJECT 05',
    level01Emotion: 'El clic mecánico del anillo de apertura antes de congelar un segundo irrepetible con tu café.'
  },

  {
    id: 'drip-cinema-35mm',
    productId: 'cinema-35mm-film',
    title: '25 / 35mm Film',
    subtitle: 'Gres negro mate con perforaciones de tira de película en el borde superior y base moleteada con sello DRYP. El fotograma que contiene el vertido.',
    category: 'Cinema',
    categoryLabel: 'Fotografía y cine',
    imageSrc: '/images/products/cinema-35mm.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Optics Studio',
      avatar: '/favicon.svg',
      handle: '@dryp_optics',
      verified: true
    },
    price: 89,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Celuloide)',
    likesCount: 4750,
    savesCount: 10200,
    boardIds: ['board-cinema'],
    tags: ['Cine', 'Película 35mm', 'Fotograma', 'Negro Mate', 'Celuloide', 'Fotografía', 'Latón'],
    badge: '35MM FILM',
    dropCode: 'CINEMA 01',
    level01Emotion: 'El avance cuadro a cuadro de la película analógica: cada gota de café, un fotograma irrepetible.'
  },

  {
    id: 'drip-cinema-popcorn-yellow',
    productId: 'cinema-popcorn-yellow',
    title: '26 / Matinée Popcorn Yellow',
    subtitle: 'Cerámica bicolor amarillo manteca y blanco con borde festoneado y base dentada inspirada en los cubos de palomitas del cine clásico.',
    category: 'Cinema',
    categoryLabel: 'Fotografía y cine',
    imageSrc: '/images/products/cinema-popcorn-yellow.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Cinema Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_cinema',
      verified: true
    },
    price: 86,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Matinée)',
    likesCount: 3980,
    savesCount: 7850,
    boardIds: ['board-cinema'],
    tags: ['Cine', 'Matinée', 'Popcorn', 'Amarillo', 'Festoneado', 'Palomitas', 'Vintage Cinema'],
    badge: 'MATINÉE YELLOW',
    dropCode: 'CINEMA 02',
    level01Emotion: 'El crujido dulce en la sala oscura antes de que se apaguen las luces y comience la función.'
  },

  // ── RETRO (1 drip único - Categoría Nueva) ────────────────────────────────
  {
    id: 'drip-retro-stripes',
    productId: 'retro-stripes-70s',
    title: '19 / Retro Stripes 1974',
    subtitle: 'Gres moteado beige con bandas cromáticas setenteras. Estética rally vintage con estabilidad térmica constante.',
    category: 'Retro',
    categoryLabel: 'Retro',
    imageSrc: '/images/products/retro-stripes.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Retro Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_retro',
      verified: true
    },
    price: 86,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Retro)',
    likesCount: 2780,
    savesCount: 5920,
    boardIds: ['board-retro'],
    tags: ['Retro', 'Vintage', '70s', 'Speed Stripes', 'Rally', 'Gres Moteado'],
    badge: 'RETRO 1974',
    dropCode: 'RETRO 01',
    level01Emotion: 'La calidez nostálgica de las cintas de cassette, vinilos y autos deportivos en las carreteras del 74.'
  },

  {
    id: 'drip-retro-nes',
    productId: 'retro-nes-8bit',
    title: '20 / NES — Brew Play Repeat',
    subtitle: 'Gres blanco humo con asa angular inspirada en el gamepad de 8 bits. El vertido más icónico de tu infancia.',
    category: 'Retro',
    categoryLabel: 'Retro',
    imageSrc: '/images/products/retro-nes.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Retro Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_retro',
      verified: true
    },
    price: 92,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición 8-bit)',
    likesCount: 3840,
    savesCount: 7210,
    boardIds: ['board-retro'],
    tags: ['Retro', 'Vintage', '8-bit', 'Gaming', 'NES', 'Pixel', 'Arcade', 'Consola'],
    badge: 'RETRO 8-BIT',
    dropCode: 'RETRO 02',
    level01Emotion: 'El sábado por la mañana de 1988: cafetera encendida, cartucho insertado, el día empieza en pausa.'
  },

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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición 1-UP)',
    likesCount: 6210,
    savesCount: 13400,
    boardIds: ['board-retro'],
    tags: ['Nintendo', 'Mario', 'Super Mushroom', 'Champiñón', 'Retro', 'Gaming', '8-bit', 'Rojo'],
    badge: 'SUPER MUSHROOM',
    dropCode: 'RETRO 03',
    level01Emotion: 'Ese sonido inconfundible al conseguir una vida extra: energía instantánea para conquistar la mañana.'
  },

  {
    id: 'drip-arch-bauhaus',
    productId: 'arch-bauhaus-dessau',
    title: '11 / Bauhaus Dessau',
    subtitle: 'Gres arena con asa trapezoidal y estrías de extracción directa. Funcionalismo puro horneado a 1.280°C.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible',
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
    title: '22 / Origami Fold',
    subtitle: 'Gres moteado blanco arena con facetas plegadas inspiradas en el origami japonés. Base de nogal macizo. Geometría que honra el agua.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Origami)',
    likesCount: 3290,
    savesCount: 8140,
    boardIds: ['board-architecture'],
    tags: ['Arquitectura', 'Origami', 'Japón', 'Facetado', 'Nogal', 'Gres Blanco', 'Geometría'],
    badge: 'ORIGAMI FOLD',
    dropCode: 'ARCH 02',
    level01Emotion: 'El silencio de un pliegue perfecto: cada faceta dirige el agua como los ángulos de un tejado japonés guían la lluvia.'
  },

  // ── EXPERIMENTAL (1 drip único) ──────────────────────────────────────────
  {
    id: 'drip-exp-orbital-gyro',
    productId: 'orbital-gyro-kinetic',
    title: '21 / Orbital Gyro',
    subtitle: 'Gres moteado arena con exoesqueleto helicoidal y anillo orbital de latón macizo. Suspensión cinética para un vertido laminar continuo.',
    category: 'Experimental',
    categoryLabel: 'Experimental',
    imageSrc: '/images/products/orbital-kinetic.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Kinetic Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_kinetic',
      verified: true
    },
    price: 98,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Experimental)',
    likesCount: 3120,
    savesCount: 7450,
    boardIds: ['board-experimental'],
    tags: ['Experimental', 'Cinético', 'Giroscopio', 'Latón', 'Gres Moteado', 'Orbital', 'Drop EXP'],
    badge: 'KINETIC LAB',
    dropCode: 'EXP 01',
    level01Emotion: 'La gravedad suspendida en el aire mientras el anillo de latón orbita el gres caliente en pleno vertido.'
  },

  // ── ARTE (1 drip único) ──────────────────────────────────────────────────
  {
    id: 'drip-art-classical-muse',
    productId: 'art-classical-muse',
    title: '22 / Musa Clásica',
    subtitle: 'Gres marmóreo texturizado con busto helénico esculpido a mano. Las ondas del cabello guían el flujo interior hacia un vertido dulce y cristalino.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Arte)',
    likesCount: 2890,
    savesCount: 6540,
    boardIds: ['board-art'],
    tags: ['Arte', 'Escultura', 'Musa', 'Helénico', 'Mármol', 'Gres Moteado', 'Busto Clásico'],
    badge: 'MUSE SCULPT',
    dropCode: 'ART 01',
    level01Emotion: 'La serenidad del mármol clásico despertando bajo el aroma del café recién tostado.'
  },

  {
    id: 'drip-art-calder-primary',
    productId: 'art-calder-primary',
    title: '24 / Calder Primary',
    subtitle: 'Gres blanco moteado con formas geométricas primarias inspiradas en los móviles de Calder. Rojo, azul, negro y amarillo: el equilibrio que mueve el mundo.',
    category: 'Art',
    categoryLabel: 'Arte',
    imageSrc: '/images/products/art-calder.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Classical Arts',
      avatar: '/favicon.svg',
      handle: '@dryp_art',
      verified: true
    },
    price: 98,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Arte)',
    likesCount: 3610,
    savesCount: 8920,
    boardIds: ['board-art'],
    tags: ['Arte', 'Calder', 'Abstracto', 'Colores Primarios', 'Geométrico', 'Móvil', 'Bauhaus'],
    badge: 'CALDER PRIMARY',
    dropCode: 'ART 02',
    level01Emotion: 'El equilibrio imposible de un móvil de Calder suspendido en el aire: gravedad domada por la gracia de la forma.'
  },

  {
    id: 'drip-art-figma-canvas',
    productId: 'art-figma-canvas',
    title: '27 / Figma Vector Canvas',
    subtitle: 'Cerámica modular facetada en pétalos de colores icónicos de Figma (naranja, rojo, violeta, azul y verde) sobre gres crema con base cuádruple articulada.',
    category: 'Art',
    categoryLabel: 'Arte',
    imageSrc: '/images/products/art-figma-canvas.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Digital Atelier',
      avatar: '/favicon.svg',
      handle: '@dryp_design',
      verified: true
    },
    price: 99,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Figma)',
    likesCount: 5420,
    savesCount: 11800,
    boardIds: ['board-art'],
    tags: ['Figma', 'UI/UX', 'Diseño', 'Arte', 'Vector', 'Modular', 'Colores Digitales', 'Edición Especial'],
    badge: 'FIGMA EDITION',
    dropCode: 'ART 03',
    level01Emotion: 'Diseñado en vectores, horneado a 1.280°C: donde el lienzo infinito de Figma se vuelve cerámica tangible.'
  }
];

export const PINTEREST_PINS: PinterestPin[] = DRYP_DRIPS;
