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
    coverImage: '/images/products/series-dragon-ball.jpg',
    previewImages: [
      '/images/products/series-dragon-ball.jpg',
      '/images/products/series-springfield.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-retro',
    title: 'Retro & Vintage',
    description: 'Diseño analógico, iconos de videojuegos clásicos y estética vintage en gres de autor.',
    tag: 'Retro Gaming',
    category: 'Retro',
    coverImage: '/images/products/retro-super-mushroom.jpg',
    previewImages: [
      '/images/products/retro-super-mushroom.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-prehistoric',
    title: 'Prehistoria & Paleontología',
    description: 'Cráneos fósiles de terópodo y reptiles marinos del Jurásico esculpidos en gres vivo a 1.280 °C.',
    tag: 'Drop 001',
    category: 'Prehistoric',
    coverImage: '/images/products/prehistoric-marine.jpg',
    previewImages: [
      '/images/products/prehistoric-marine.jpg',
      '/images/products/fossil-skull.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
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
    description: 'Autómatas robóticos, exoesqueletos cinéticos y conos mecatrónicos para desafiar las leyes del vertido.',
    tag: 'Experimental',
    category: 'Experimental',
    coverImage: '/images/products/exp-robot-automaton.jpg',
    previewImages: [
      '/images/products/exp-robot-automaton.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-art',
    title: 'Arte',
    description: 'Bustos clásicos helénicos esculpidos a mano en gres cerámico a 1.280 °C.',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Cumbres de Neblaria)',
    likesCount: 3890,
    savesCount: 9140,
    boardIds: ['board-nature'],
    tags: ['Naturaleza', 'Mariposa', 'Monarca', 'Alas', 'Naranja', 'Negro Mate', 'Biomimético'],
    badge: 'MONARCH WINGS',
    dropCode: 'BIO 02',
    level01Emotion: 'La delicadeza ingrávida de las alas de mariposa abriéndose hacia la luz del sol en las mañanas de bosque.'
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Marina)',
    likesCount: 4620,
    savesCount: 10450,
    boardIds: ['board-prehistoric'],
    tags: ['Prehistoria', 'Dinosaurio Marino', 'Plesiosaurio', 'Fósil', 'Azul Petróleo', 'Espiral', 'Amonita', 'Mesozoico'],
    badge: 'MARINE FOSSIL',
    dropCode: 'PALEO 02',
    level01Emotion: 'La marea abisal del Jurásico canalizada en un vertido espiral de aguas profundas y aroma mineral.'
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Celuloide)',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Series)',
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Shenron)',
    likesCount: 5280,
    savesCount: 12400,
    boardIds: ['board-series'],
    tags: ['Dragon Ball', 'Anime', 'Series', 'TV', 'Goku', 'Saiyajin', 'Esfera del Dragón', '4 Estrellas', 'Naranja Kame'],
    badge: 'DRAGON BALL',
    dropCode: 'SERIES 02',
    level01Emotion: 'Toda la energía del Ki concentrada en una extracción legendaria que eleva tu poder matutino a más de 9.000.'
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Kioto)',
    likesCount: 3820,
    savesCount: 9450,
    boardIds: ['board-architecture'],
    tags: ['Arquitectura', 'Japón', 'Pagoda', 'Kioto', 'Aleros', 'Torii', 'Gres Moteado', 'Geometría'],
    badge: 'PAGODA KIOTO',
    dropCode: 'ARCH 02',
    level01Emotion: 'La calma milenaria de los templos de madera de Kioto: aleros escalonados que guían el agua con serenidad zen.'
  },

  // ── EXPERIMENTAL (1 drip único) ──────────────────────────────────────────
  {
    id: 'drip-exp-robot-automaton',
    productId: 'exp-robot-automaton',
    title: '31 / Automaton Bot-01',
    subtitle: 'Gres hueso moteado con cabezal robótico facetado, ojos ámbar, cámara interior en cerámica negra estriada y base trípode mecatrónica con sello DRYP.',
    category: 'Experimental',
    categoryLabel: 'Experimental',
    imageSrc: '/images/products/exp-robot-automaton.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Robotics Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_robotics',
      verified: true
    },
    price: 99,
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Bot)',
    likesCount: 4890,
    savesCount: 11200,
    boardIds: ['board-experimental'],
    tags: ['Experimental', 'Robot', 'Autómata', 'Mecatrónico', 'Cibernética', 'Sci-Fi', 'Gres Moteado', 'Drop EXP'],
    badge: 'ROBOTIC LAB',
    dropCode: 'EXP 02',
    level01Emotion: 'La precisión de los autómatas mecánicos fusionada con la calidez del gres: café preparado con exactitud milimétrica.'
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
    stockStatus: 'available',
    stockLabel: 'Disponible (Edición Arte)',
    likesCount: 3890,
    savesCount: 8540,
    boardIds: ['board-art'],
    tags: ['Arte', 'Escultura', 'Musa', 'Helénico', 'Corona de Laurel', 'Arenisca', 'Gres Moteado', 'Busto Clásico'],
    badge: 'MUSE SCULPT',
    dropCode: 'ART 01',
    level01Emotion: 'La serenidad del arte helénico y el manto drapeado despertando bajo el aroma del café recién tostado.'
  }
];

export const PINTEREST_PINS: PinterestPin[] = DRYP_DRIPS;
