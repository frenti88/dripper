export type DripCategory =
  | 'All'
  | 'Music'
  | 'Cosmos'
  | 'Nature'
  | 'Cinema'
  | 'Prehistoric'
  | 'Photography'
  | 'Architecture'
  | 'Minerals'
  | 'Sculptural'
  | 'WabiSabi';

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
    title: 'Música & Sonido Analógico',
    description: 'Surcos de vinilo a 33 RPM y reflejos de discos compactos traducidos a dinámica de vertido pour-over.',
    tag: 'Audiofilia',
    category: 'Music',
    coverImage: '/images/products/vinyl-groove.jpg',
    previewImages: [
      '/images/products/vinyl-groove.jpg',
      '/images/products/cd-polycarbonate.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-cosmos',
    title: 'Cosmos & Órbita Estelar',
    description: 'Anillos planetarios de Saturno y regolito lunar Apollo 11 en conos cerámicos de alta inercia térmica.',
    tag: 'Astronomía',
    category: 'Cosmos',
    coverImage: '/images/products/saturn-rings.jpg',
    previewImages: [
      '/images/products/saturn-rings.jpg',
      '/images/products/orbit.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-nature',
    title: 'Naturaleza & Biodiversidad',
    description: 'Plumajes iridiscentes de colibríes andinos que canalizan el agua con fluidez aerodinámica viva.',
    tag: 'Botánica & Fauna',
    category: 'Nature',
    coverImage: '/images/products/colibri-andes.jpg',
    previewImages: [
      '/images/products/colibri-andes.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-cinema',
    title: 'Cine & Cultura Pop',
    description: 'Monolitos enigmáticos de Kubrick y simetrías pasteles de Wes Anderson convertidas en cafeteras de autor.',
    tag: 'Séptimo Arte',
    category: 'Cinema',
    coverImage: '/images/products/monolith-cinema.jpg',
    previewImages: [
      '/images/products/monolith-cinema.jpg',
      '/images/products/wes-anderson.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-prehistoric',
    title: 'Prehistoria & Paleontología',
    description: 'Vértebras fósiles y garras de raptor esculpidas en gres vivo de alta temperatura.',
    tag: 'Drop 001',
    category: 'Prehistoric',
    coverImage: '/images/products/fossil-t-v.jpg',
    previewImages: [
      '/images/products/fossil-t-v.jpg',
      '/images/products/fossil-raptor-v.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-optics',
    title: 'Fotografía & Óptica 35mm',
    description: 'Anillos concéntricos de diafragma y ópticas vintage de 35mm para un control milimétrico del caudal.',
    tag: 'Analógico 35mm',
    category: 'Photography',
    coverImage: '/images/products/lens-50-v.jpg',
    previewImages: [
      '/images/products/lens-50-v.jpg'
    ],
    pinsCount: 1,
    dripsCount: 1
  },
  {
    id: 'board-architecture',
    title: 'Arquitectura & Estructura',
    description: 'Geometría funcional de la Bauhaus y brutalismo en hormigón cerámico con salidas calibradas.',
    tag: 'Arquitectura',
    category: 'Architecture',
    coverImage: '/images/products/bauhaus-dessau.jpg',
    previewImages: [
      '/images/products/bauhaus-dessau.jpg',
      '/images/products/brutalist.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  },
  {
    id: 'board-minerals',
    title: 'Minerales & Arcillas de Origen',
    description: 'Vetas de esmeralda de Muzo, barros rojos de Santa Elena y basalto negro volcánico.',
    tag: 'Geología Viva',
    category: 'Minerals',
    coverImage: '/images/products/emerald-vein.jpg',
    previewImages: [
      '/images/products/emerald-vein.jpg',
      '/images/products/core.jpg',
      '/images/products/core-black-v.jpg',
      '/images/products/medellin.jpg'
    ],
    pinsCount: 4,
    dripsCount: 4
  },
  {
    id: 'board-sculptural',
    title: 'Escultura & Vanguardias',
    description: 'Pliegues geométricos de origami, dinámica de fluidos y cerámicas torneadas a mano en Medellín.',
    tag: 'Arte Contemporáneo',
    category: 'Sculptural',
    coverImage: '/images/products/origami-folded.jpg',
    previewImages: [
      '/images/products/origami-folded.jpg',
      '/images/products/flow-01.jpg',
      '/images/products/artist-001.jpg'
    ],
    pinsCount: 3,
    dripsCount: 3
  },
  {
    id: 'board-wabisabi',
    title: 'Wabi-Sabi & Maestría Oriental',
    description: 'Reparaciones de oro puro Kintsugi de 24k y rituales de vertido matutino que celebran lo auténtico.',
    tag: 'Maestría Zen',
    category: 'WabiSabi',
    coverImage: '/images/products/kintsugi-gold.jpg',
    previewImages: [
      '/images/products/kintsugi-gold.jpg',
      '/images/products/ritual-morning.jpg'
    ],
    pinsCount: 2,
    dripsCount: 2
  }
];

export const DRYP_BOARDS = PINTEREST_BOARDS;

// Catálogo curado: CERO repetidos, cada pieza con fotografía única y tamaño uniforme cuadrado
export const DRYP_DRIPS: DrypDrip[] = [
  // ── MÚSICA (2 drips únicos) ────────────────────────────────────────────────
  {
    id: 'drip-music-vinyl',
    productId: 'music-vinyl-33',
    title: '01 / Vinyl Groove 33 RPM — Cono Concéntrico Mate',
    subtitle: 'Micro-estrías inspiradas en discos de vinilo que desaceleran el agua para resaltar notas dulces.',
    category: 'Music',
    categoryLabel: 'Música & Sonido',
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
    tags: ['Vinilo', 'Música', '33 RPM', 'Concéntrico', 'Negro Mate'],
    badge: 'EDICIÓN VINILO',
    dropCode: 'AUDIO 01',
    level01Emotion: 'El crujido de la aguja tocando el primer surco antes de que empiece la melodía.'
  },
  {
    id: 'drip-music-cd',
    productId: 'music-cd-120',
    title: '02 / Compact Disc 120mm — Esmalte Iridiscente Arcoíris',
    subtitle: 'Vidriado cristalino con reflejo prismático que refracta la luz matutina como un audio CD de los 90.',
    category: 'Music',
    categoryLabel: 'Música & Sonido',
    imageSrc: '/images/products/cd-polycarbonate.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sound Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sound',
      verified: true
    },
    price: 89,
    stockStatus: 'low_stock',
    stockLabel: 'Últimas 5 unidades',
    likesCount: 1890,
    savesCount: 4210,
    boardIds: ['board-music'],
    tags: ['Compact Disc', '90s', 'Iridiscente', 'Arcoíris', 'Luz'],
    badge: 'BRILLO PRISMÁTICO',
    dropCode: 'AUDIO 02',
    level01Emotion: 'Ese haz de arcoíris que aparecía en el techo de tu cuarto cuando la luz del sol tocaba un CD.'
  },

  // ── COSMOS (2 drips únicos) ────────────────────────────────────────────────
  {
    id: 'drip-cosmos-saturn',
    productId: 'cosmos-saturn-rings',
    title: '03 / Saturn Cassini Rings — Collar Orbital Suspendido',
    subtitle: 'Cono cónico de basalto cenizo coronado por un anillo concéntrico exterior en suspensión.',
    category: 'Cosmos',
    categoryLabel: 'Cosmos & Espacio',
    imageSrc: '/images/products/saturn-rings.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Space Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_cosmos',
      verified: true
    },
    price: 94,
    stockStatus: 'low_stock',
    stockLabel: 'Quedan 4 piezas',
    likesCount: 2310,
    savesCount: 5620,
    boardIds: ['board-cosmos'],
    tags: ['Saturno', 'Anillos', 'Cosmos', 'Gravedad', 'Espacio'],
    badge: 'EDICIÓN ORBITAL',
    dropCode: 'SPACE 01',
    level01Emotion: 'La calma silenciosa de las trayectorias gravitacionales en el vacío exterior.'
  },
  {
    id: 'drip-cosmos-orbit',
    productId: 'orbit-01',
    title: '04 / Orbit — Regolito Lunar Apollo 11',
    subtitle: 'Surcos inspirados en las trayectorias elípticas de la misión Apollo. Esmalte ceniza perlado con titanio.',
    category: 'Cosmos',
    categoryLabel: 'Cosmos & Espacio',
    imageSrc: '/images/products/orbit.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Space Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_space',
      verified: true
    },
    price: 85,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1640,
    savesCount: 3890,
    boardIds: ['board-cosmos'],
    tags: ['Luna', 'Apollo 11', 'Regolito', 'Titanio', 'Órbita'],
    badge: 'LUNAR REGOLITH',
    dropCode: 'SPACE 02',
    level01Emotion: 'Mirar al cielo oscuro en los sesenta sabiendo que pronto estaríamos allá arriba.'
  },

  // ── NATURALEZA (1 drip único) ──────────────────────────────────────────────
  {
    id: 'drip-nature-hummingbird',
    productId: 'nature-colibri-andes',
    title: '05 / Colibrí Andino — Plumaje Verde Esmeralda & Caoba',
    subtitle: 'Estrías espirales fluidas inspiradas en el aleteo veloz del colibrí andino sobre base de nogal.',
    category: 'Nature',
    categoryLabel: 'Naturaleza Viva',
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
    stockLabel: 'Disponible (Santa Elena)',
    likesCount: 2450,
    savesCount: 6120,
    boardIds: ['board-nature'],
    tags: ['Colibrí', 'Andes', 'Esmeralda', 'Aves', 'Bosque de Niebla'],
    badge: 'BIODIVERSIDAD',
    dropCode: 'BIO 01',
    level01Emotion: 'El zumbido fugaz en el bebedero del jardín antes de que la niebla cubra la montaña.'
  },

  // ── CINE (2 drips únicos) ──────────────────────────────────────────────────
  {
    id: 'drip-cinema-monolith',
    productId: 'cinema-2001-monolith',
    title: '06 / 2001 Monolith Basalt — Geometría Basalto Kubrick',
    subtitle: 'Inspirado en el monolito negro de Odisea del Espacio. Bloque geométrico en gres basalto negro con cono a 60°.',
    category: 'Cinema',
    categoryLabel: 'Cine & Pantalla',
    imageSrc: '/images/products/monolith-cinema.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Cinema Archives',
      avatar: '/favicon.svg',
      handle: '@dryp_cinema',
      verified: true
    },
    price: 95,
    stockStatus: 'available',
    stockLabel: 'Disponible (Numerado)',
    likesCount: 2890,
    savesCount: 7120,
    boardIds: ['board-cinema'],
    tags: ['2001', 'Kubrick', 'Monolito', 'Basalto', 'Ciencia Ficción'],
    badge: 'MONOLITO BASALTO',
    dropCode: 'CINE 01',
    level01Emotion: 'Ese momento en que la pantalla se queda negra y los timbales retumban en el pecho.'
  },
  {
    id: 'drip-cinema-wes',
    productId: 'cinema-wes-budapest',
    title: '07 / Grand Budapest Pastel — Simetría Rosa & Menta',
    subtitle: 'Composición milimétricamente simétrica en tono rosa empolvado con cuello menta pastel estilo Wes Anderson.',
    category: 'Cinema',
    categoryLabel: 'Cine & Pantalla',
    imageSrc: '/images/products/wes-anderson.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Cinema Archives',
      avatar: '/favicon.svg',
      handle: '@dryp_cinema',
      verified: true
    },
    price: 89,
    stockStatus: 'low_stock',
    stockLabel: 'Quedan 3 piezas',
    likesCount: 3120,
    savesCount: 8450,
    boardIds: ['board-cinema'],
    tags: ['Wes Anderson', 'Pastel', 'Simetría', 'Budapest', 'Diseño'],
    badge: 'SIMETRÍA PASTEL',
    dropCode: 'CINE 02',
    level01Emotion: 'La felicidad obsesiva de que todo en la mesa esté perfectamente alineado.'
  },

  // ── PREHISTORIA (2 drips únicos) ──────────────────────────────────────────
  {
    id: 'drip-fossil-t',
    productId: 'fossil-t',
    title: '08 / 03 Fossil T — Vértebras & Porcelana Calibrada',
    subtitle: 'Inspirado en la estructura torácica de dinosaurios de infancia. Canalización espiral con flujo uniforme.',
    category: 'Prehistoric',
    categoryLabel: 'Drop 001: Prehistoria',
    imageSrc: '/images/products/fossil-t-v.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Studio Medellín',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 78,
    stockStatus: 'available',
    stockLabel: '037 / 150 piezas',
    likesCount: 2890,
    savesCount: 6490,
    boardIds: ['board-prehistoric'],
    tags: ['Fósil T', 'Porcelana', 'Drop 001', 'Cono 02', 'Dinosaurios'],
    badge: 'DROP 001 LIVE',
    dropCode: 'DROP 001',
    level01Emotion: 'Nunca dejamos de asombrarnos con los dinosaurios. Solo cambiamos de juguetes.'
  },
  {
    id: 'drip-fossil-raptor',
    productId: 'fossil-raptor',
    title: '09 / 04 Fossil Raptor — Gres Basalto Volcánico',
    subtitle: 'Silueta esculpida inspirada en falanges de raptor. Extracción ágil para notas frutales y florales nítidas.',
    category: 'Prehistoric',
    categoryLabel: 'Drop 001: Prehistoria',
    imageSrc: '/images/products/fossil-raptor-v.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Studio',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 82,
    stockStatus: 'available',
    stockLabel: '068 / 150 piezas',
    likesCount: 1740,
    savesCount: 4180,
    boardIds: ['board-prehistoric'],
    tags: ['Raptor', 'Basalto', 'Negro Mate', 'Drop 001'],
    badge: 'EDICIÓN NUMERADA',
    dropCode: 'DROP 001',
    level01Emotion: 'Velocidad, filo y huesos enterrados que hoy vuelven al agua caliente.'
  },

  // ── FOTOGRAFÍA (1 drip único) ─────────────────────────────────────────────
  {
    id: 'drip-lens-50',
    productId: 'lens-50',
    title: '10 / 05 Lens 50mm f/1.4 — Anillos Concéntricos',
    subtitle: 'Nostalgia de ópticas analógicas de 35mm. Estrías concéntricas que desaceleran el paso del agua.',
    category: 'Photography',
    categoryLabel: 'Fotografía 35mm',
    imageSrc: '/images/products/lens-50-v.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Studio Medellín',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 74,
    stockStatus: 'low_stock',
    stockLabel: 'Casi agotado (4 restantes)',
    likesCount: 1940,
    savesCount: 4890,
    boardIds: ['board-optics'],
    tags: ['35mm', 'Fotografía', 'Lente 50mm', 'Cono 02'],
    badge: 'OBJETO 05',
    dropCode: 'OBJECT 05',
    level01Emotion: 'El clic del anillo de diafragma antes de congelar un segundo irrepetible.'
  },

  // ── ARQUITECTURA (2 drips únicos) ─────────────────────────────────────────
  {
    id: 'drip-arch-bauhaus',
    productId: 'arch-bauhaus-dessau',
    title: '11 / Bauhaus Dessau 1925 — Cono & Cilindro Puro',
    subtitle: 'La forma sigue estrictamente a la función. Cono de gres refractario arena con asa geométrica y base plana.',
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
    tags: ['Bauhaus', 'Geometría', 'Dessau', 'Funcionalismo', 'Arena'],
    badge: 'BAUHAUS 1925',
    dropCode: 'ARCH 01',
    level01Emotion: 'Eliminar cualquier ornamento superfluo hasta que solo quede la verdad estructural.'
  },
  {
    id: 'drip-brutalist',
    productId: 'brutalist-01',
    title: '12 / 06 Brutalist Monolito — Hormigón Cerámico 70s',
    subtitle: 'Fondo plano con tres orificios calibrados. Geometría brutalista de ángulos limpios y hormigón cerámico.',
    category: 'Architecture',
    categoryLabel: 'Arquitectura',
    imageSrc: '/images/products/brutalist.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Lab',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 79,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1480,
    savesCount: 3680,
    boardIds: ['board-architecture'],
    tags: ['Brutalismo', 'Fondo Plano', 'Hormigón', 'Kalita', 'Estructura'],
    badge: 'FONDO PLANO',
    dropCode: 'OBJECT 06',
    level01Emotion: 'La contundencia del concreto armado de los años setenta convertida en café.'
  },

  // ── MINERALES (4 drips únicos) ────────────────────────────────────────────
  {
    id: 'drip-mineral-emerald',
    productId: 'mineral-emerald-muzo',
    title: '13 / Esmeralda Muzo Verde — Veta de Cristal en Caolín',
    subtitle: 'Porcelana caolín blanca con veta orgánica de cristal verde esmeralda colombiano que resalta al tacto.',
    category: 'Minerals',
    categoryLabel: 'Minerales & Origen',
    imageSrc: '/images/products/emerald-vein.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Geological Studio',
      avatar: '/favicon.svg',
      handle: '@dryp_minerals',
      verified: true
    },
    price: 98,
    stockStatus: 'low_stock',
    stockLabel: 'Quedan 3 piezas',
    likesCount: 3420,
    savesCount: 8910,
    boardIds: ['board-minerals'],
    tags: ['Esmeralda', 'Muzo', 'Veta', 'Caolín', 'Colombia', 'Lujo'],
    badge: 'ESMERALDA COLOMBIANA',
    dropCode: 'GEO 01',
    level01Emotion: 'La veta verde encendida entre la roca caliza que solo la cordillera oriental sabe parir.'
  },
  {
    id: 'drip-core-01',
    productId: 'core-01',
    title: '14 / 01 Core 01 — Porcelana Hueso & Terracota Cruda',
    subtitle: 'El punto de partida. La máxima pureza en extracción cónica sin adornos superficiales.',
    category: 'Minerals',
    categoryLabel: 'Minerales & Origen',
    imageSrc: '/images/products/core.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Studio',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 65,
    stockStatus: 'available',
    stockLabel: 'Colección Permanente',
    likesCount: 1650,
    savesCount: 3620,
    boardIds: ['board-minerals'],
    tags: ['Core', 'Terracota', 'Porcelana', 'Minimal'],
    badge: 'ORIGEN 01',
    dropCode: 'ORIGIN',
    level01Emotion: 'Sin filtros decorativos. Solo tierra, fuego, agua y café.'
  },
  {
    id: 'drip-core-black',
    productId: 'core-black',
    title: '15 / 02 Core Basalt — Ceniza Mineral & Carbón',
    subtitle: 'Pasta cerámica negra de alta densidad térmica. Mantiene el agua a temperatura constante hasta la última gota.',
    category: 'Minerals',
    categoryLabel: 'Minerales & Origen',
    imageSrc: '/images/products/core-black-v.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Studio',
      avatar: '/favicon.svg',
      handle: '@drip_objects',
      verified: true
    },
    price: 68,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1520,
    savesCount: 3390,
    boardIds: ['board-minerals'],
    tags: ['Basalto', 'Térmico', 'Mineral', 'Negro'],
    badge: 'MINERAL TÉRMICO',
    dropCode: 'CORE BLACK',
    level01Emotion: 'El peso mineral que se siente en la palma de la mano cada mañana.'
  },
  {
    id: 'drip-medellin',
    productId: 'medellin-01',
    title: '16 / 09 Medellín — Esmalte Ladrillo de Comuna',
    subtitle: 'El tono exacto del barro cocido de las laderas que forman el anfiteatro natural del valle de Aburrá.',
    category: 'Minerals',
    categoryLabel: 'Minerales & Origen',
    imageSrc: '/images/products/medellin.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Medellín',
      avatar: '/favicon.svg',
      handle: '@drip_medellin',
      verified: true
    },
    price: 72,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1810,
    savesCount: 4790,
    boardIds: ['board-minerals'],
    tags: ['Medellín', 'Terracota', 'Montaña', 'Ladrillo'],
    badge: 'EDICIÓN TERRITORIO',
    dropCode: 'CITY 01',
    level01Emotion: 'El color de una ciudad que florece sobre colinas de barro rojo.'
  },

  // ── ESCULTURA (3 drips únicos) ────────────────────────────────────────────
  {
    id: 'drip-sculpt-origami',
    productId: 'sculpt-origami-20',
    title: '17 / Origami 20 Pliegues — Facetas Geométricas Blancas',
    subtitle: 'Veinte pliegues precisos en porcelana hueso ultrafina que sostienen el filtro en puntos milimétricos.',
    category: 'Sculptural',
    categoryLabel: 'Escultura & Vanguardia',
    imageSrc: '/images/products/origami-folded.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Sculpture Lab',
      avatar: '/favicon.svg',
      handle: '@dryp_sculpt',
      verified: true
    },
    price: 89,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 2940,
    savesCount: 7890,
    boardIds: ['board-sculptural'],
    tags: ['Origami', '20 Pliegues', 'Porcelana', 'Geometría', 'Rápido'],
    badge: 'GEOMETRÍA ORIGAMI',
    dropCode: 'SCULPT 01',
    level01Emotion: 'La pureza de transformar un plano de papel en un objeto tridimensional que desafía la gravedad.'
  },
  {
    id: 'drip-flow-01',
    productId: 'flow-01-lab',
    title: '18 / 10 Flow 01 Lab — Parabólica Azul Cobalto',
    subtitle: 'Diseñado con simulación computacional de fluidos para acelerar la extracción en granos de proceso natural.',
    category: 'Sculptural',
    categoryLabel: 'Escultura & Vanguardia',
    imageSrc: '/images/products/flow-01.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Café Lab',
      avatar: '/favicon.svg',
      handle: '@dripper_lab',
      verified: true
    },
    price: 76,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1670,
    savesCount: 4430,
    boardIds: ['board-sculptural'],
    tags: ['Laboratorio', 'Azul Cobalto', 'Fluido', 'Rápido'],
    badge: 'LAB EXPERIMENTAL',
    dropCode: 'LAB 01',
    level01Emotion: 'La física de fluidos al servicio de la dulzura del café de origen.'
  },
  {
    id: 'drip-artist-001',
    productId: 'artist-001-camilo',
    title: '19 / 08 Artist 001 — Camilo Restrepo (50 Piezas)',
    subtitle: 'Colaboración escultórica con barro extraído a mano en Santa Elena. Cada pieza es única y numerada.',
    category: 'Sculptural',
    categoryLabel: 'Escultura & Vanguardia',
    imageSrc: '/images/products/artist-001.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'Camilo Restrepo',
      avatar: '/favicon.svg',
      handle: '@camilo_ceramista',
      verified: true
    },
    price: 95,
    stockStatus: 'low_stock',
    stockLabel: 'Quedan 3 piezas',
    likesCount: 2240,
    savesCount: 5980,
    boardIds: ['board-sculptural'],
    tags: ['Arte', 'Camilo Restrepo', 'Exclusivo', 'Firmado'],
    badge: 'EDICIÓN DE AUTOR',
    dropCode: 'COLLAB 01',
    level01Emotion: 'Cuando la escultura abandona la galería para entrar en tu cocina.'
  },

  // ── WABI-SABI (2 drips únicos) ─────────────────────────────────────────────
  {
    id: 'drip-wabi-kintsugi',
    productId: 'wabi-kintsugi-gold-24k',
    title: '20 / Kintsugi Oro 24K — Fracturas Selladas con Oro',
    subtitle: 'Fracturas intencionales selladas a mano con laca urushi y polvo de oro de 24k. Exalta las cicatrices de la pieza.',
    category: 'WabiSabi',
    categoryLabel: 'Wabi-Sabi & Zen',
    imageSrc: '/images/products/kintsugi-gold.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Master Kiln',
      avatar: '/favicon.svg',
      handle: '@dryp_wabisabi',
      verified: true
    },
    price: 98,
    stockStatus: 'low_stock',
    stockLabel: 'Quedan 2 piezas únicas',
    likesCount: 3890,
    savesCount: 9450,
    boardIds: ['board-wabisabi'],
    tags: ['Kintsugi', 'Oro 24K', 'Wabi-Sabi', 'Japón', 'Resiliencia'],
    badge: 'KINTSUGI ORO 24K',
    dropCode: 'WABI 01',
    level01Emotion: 'Las cicatrices son los renglones donde el tiempo escribió nuestra historia.'
  },
  {
    id: 'drip-ritual-morning',
    productId: 'ritual-morning-93c',
    title: '21 / Ritual Matutino 93°C — Vertido Lento & Vapor',
    subtitle: 'Cono de gres cálido para vertido constante de 4.2 ml/s. Diseñado para vivir en la repisa abierta.',
    category: 'WabiSabi',
    categoryLabel: 'Wabi-Sabi & Zen',
    imageSrc: '/images/products/ritual-morning.jpg',
    aspectRatio: 'aspect-square',
    author: {
      name: 'DRYP. Café Lab',
      avatar: '/favicon.svg',
      handle: '@dripper_lab',
      verified: true
    },
    price: 82,
    stockStatus: 'available',
    stockLabel: 'Disponible',
    likesCount: 1980,
    savesCount: 4890,
    boardIds: ['board-wabisabi'],
    tags: ['Ritual', 'Vertido Lento', '93°C', 'Calma', 'Mañana'],
    badge: 'RITUAL LENTO',
    dropCode: 'RITUAL 01',
    level01Emotion: 'Verter con calma mientras la luz del amanecer entra por la ventana.'
  }
];

export const PINTEREST_PINS: PinterestPin[] = DRYP_DRIPS;
