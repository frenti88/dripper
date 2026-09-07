import type { DropPhase, DropStageConfig, Product, ArchiveDrop, BentoCategory } from '../types';

export const DROP_STAGES: Record<DropPhase, DropStageConfig> = {
  'T-7': {
    phase: 'T-7',
    label: 'T−7 Days',
    badge: 'Concept & Drip',
    headline: 'Something old is coming back.',
    subheadline: 'DROP 001 is forming in the kiln. 7 days until the full reveal.',
    countdownText: '06d : 21h : 44m',
    visualFocus: 'concept',
    storySnippet: 'We took the shapes we once searched for in natural history museums, worn-out encyclopedia pages and toy boxes, and translated them into a functional brewing sculpture.',
    ctaText: 'Notify me when ready',
    ctaAction: 'notify',
    availabilityNotice: 'Previewing drip edition. Production limited to 150 numbered pieces.'
  },
  'T-3': {
    phase: 'T-3',
    label: 'T−3 Days',
    badge: 'Material & Texture',
    headline: 'Feel the volcanic clay.',
    subheadline: 'Close-up on tactile ribs and porous thermal buffers.',
    countdownText: '02d : 16h : 08m',
    visualFocus: 'texture',
    storySnippet: 'Raw mineral stoneware with a volcanic slip finish. The tactile outer ridges insulate heat, while the calibrated internal spiraling forces water evenly through the coffee bed.',
    ctaText: 'Explore material study',
    ctaAction: 'explore',
    availabilityNotice: 'Studio test complete. Kiln cooling in progress.'
  },
  'T-1': {
    phase: 'T-1',
    label: 'T−1 Day',
    badge: 'Silhouette & Geometry',
    headline: 'Tomorrow changes your morning.',
    subheadline: 'The silhouette emerges at 09:00 AM EST.',
    countdownText: '00d : 18h : 32m',
    visualFocus: 'silhouette',
    storySnippet: 'Light and shadow play across geometric plates inspired by fossilized spine segments. Tomorrow it meets your favorite coffee beans.',
    ctaText: 'Set 24h drop alarm',
    ctaAction: 'notify',
    availabilityNotice: 'Packaging inspected. Boxes hand-stamped with batch numbers.'
  },
  'LIVE': {
    phase: 'LIVE',
    label: 'DROP 001 LIVE',
    badge: 'Now Brewing',
    headline: 'PREHISTORIC is alive.',
    subheadline: 'DROP 001 is here. Three new objects landed.',
    countdownText: 'LIVE NOW',
    visualFocus: 'full',
    storySnippet: 'Objects we grew up with. Reimagined for coffee. Small batch ceramics designed to brew slow and live on your open shelf.',
    ctaText: 'Explore Prehistoric',
    ctaAction: 'buy',
    availabilityNotice: 'This one won\'t stay forever. Handcrafted in the Heights of Neblaria.'
  }
};

export const BENTO_CATEGORIES: BentoCategory[] = [
  {
    id: 'prehistoric',
    title: 'PREHISTORIC',
    subtitle: 'Fossilized ribs, vertebrae flutes & Mesozoic ceramic design.',
    tag: 'Drop 001',
    affinityTheme: 'Dinosaurs & Paleontology',
    imageAccent: '#C05A3E',
    gridSpan: 'col-span-12 md:col-span-7',
    badge: 'Active Drop'
  },
  {
    id: 'photography',
    title: 'PHOTOGRAPHY',
    subtitle: 'Analog lenses, 36 exposures & concentric aperture steps.',
    tag: 'Object 05',
    affinityTheme: 'Analog 35mm Cameras',
    imageAccent: '#262422',
    gridSpan: 'col-span-12 md:col-span-5'
  },
  {
    id: 'core',
    title: 'CORE',
    subtitle: 'Raw terracotta foot & pure minimal extraction geometry.',
    tag: 'Origin 00',
    affinityTheme: 'Minimalist Architecture',
    imageAccent: '#A64726',
    gridSpan: 'col-span-12 md:col-span-5'
  },
  {
    id: 'artists',
    title: 'ARTISTS',
    subtitle: 'Hand-sculpted studio collaborations with independent ceramic masters.',
    tag: 'Collaborations',
    affinityTheme: 'Artisanal Sculpture',
    imageAccent: '#5B6652',
    gridSpan: 'col-span-12 md:col-span-7',
    badge: 'Limited Edition'
  }
];

export const AFFINITY_PILLS = [
  'Prehistoric',
  'Photography',
  'Music',
  'Architecture',
  'Space',
  'Cities',
  'Games',
  'Art'
];

export const PRODUCTS: Product[] = [
  {
    id: 'core-01',
    numberCode: '01',
    collection: 'Core',
    categoryTag: 'Core',
    dropCode: 'ORIGIN',
    eyebrow: 'ORIGIN 01',
    name: 'Core 01',
    headline: 'The one that started everything.',
    story: 'No theme. No collaboration. Just the purest expression of what we think a DRYP. should be. Born in our Medellín studio.',
    objectDescription: 'A classic 60° cone with 12 continuous flutes. Hand-finished raw terracotta base meets a silky satin glaze bowl for effortless rinsing and thermal equilibrium.',
    price: 56,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 34,
    paletteColors: [
      { name: 'Raw Terracotta & Sand', hex: '#C27453' },
      { name: 'Chalk White', hex: '#FAF9F6' }
    ],
    specs: {
      extractionStyle: 'Balanced, round cup profile with highlighted sweetness',
      flowRate: 'Responsive linear flow responsive to pour technique',
      capacity: '1–2 Cups (15g–30g dose)',
      filterType: 'Standard 02 Conical filters (V60 / Cafec)',
      material: 'Vitrified high-fired stoneware & red earthenware base',
      origin: 'Sacred Kilns of Neblaria',
      weight: '280g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '93°C',
        brewTime: '2:45 min',
        ratio: '1:16.6',
        grindSize: 'Medium-Fine'
      }
    },
    tagline: 'Something familiar. Something new.',
    visualType: 'core',
    isHero: false
  },
  {
    id: 'core-black',
    numberCode: '02',
    collection: 'Core',
    categoryTag: 'Core',
    dropCode: 'ORIGIN',
    eyebrow: 'ORIGIN 02',
    name: 'Core Black',
    headline: 'Quiet mornings require honest weight.',
    story: 'Basalt porcelain colored entirely with raw iron oxides. A piece that absorbs morning light and grounds the ritual before the day starts.',
    objectDescription: 'Matte dark exterior with a micro-textured satin interior that prevents paper adhesion and channels clean water drainage.',
    price: 58,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 21,
    paletteColors: [
      { name: 'Basalt Black', hex: '#1C1B1A' },
      { name: 'Charcoal Mist', hex: '#383633' }
    ],
    specs: {
      extractionStyle: 'Clean, dense mouthfeel with accented chocolate and caramel notes',
      flowRate: 'Medium-linear extraction with zero side-channel leakage',
      capacity: '1–2 Cups (15g–28g dose)',
      filterType: 'Standard 02 Conical paper filters',
      material: 'High-density basalt stoneware with mineral slip',
      origin: 'Neblaria Mountain Studio',
      weight: '305g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '94°C',
        brewTime: '3:00 min',
        ratio: '1:16.6',
        grindSize: 'Medium'
      }
    },
    tagline: 'The weight of quiet mornings.',
    visualType: 'core-black'
  },
  {
    id: 'fossil-t',
    numberCode: '03',
    collection: 'Prehistoric',
    categoryTag: 'Drops',
    dropCode: 'DROP 001',
    eyebrow: 'PREHISTORIC 01',
    name: 'Fossil T',
    headline: 'You never really outgrow dinosaurs.',
    story: 'Some obsessions stay with us. Fossil T takes the shapes we once searched for in books, museums and toy boxes and turns them into something made for our morning ritual.',
    objectDescription: 'Segmented vertebral ribs mimic fossilized spine anatomy. The outer ridges provide a natural finger thermal grip, while internal helical grooves prevent suction for vibrant floral acidity.',
    price: 69,
    currency: 'USD',
    editionTotal: 150,
    currentPieceNumber: '037 / 150',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 18,
    paletteColors: [
      { name: 'Bone White Porcelain', hex: '#EAE6DF' },
      { name: 'Volcanic Ash', hex: '#2A2927' }
    ],
    specs: {
      extractionStyle: 'High clarity, bright aromatics, and floral precision in light roasts',
      flowRate: 'Fast-spiral bypass drainage with 3 bottom relief ports',
      capacity: '1–2 Cups (15g–28g coffee bed)',
      filterType: 'Standard 02 Conical filters (Hario V60 / Cafec Abaca)',
      material: 'Hand-cast porcelain stoneware with reactive feldspar glaze',
      origin: 'Silaria Valley & Neblaria Heights',
      weight: '310g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '94°C',
        brewTime: '2:50 min',
        ratio: '1:16.6',
        grindSize: 'Medium-Fine'
      }
    },
    tagline: '68 million years later. It makes coffee.',
    visualType: 'fossil-t',
    isHero: true
  },
  {
    id: 'fossil-raptor',
    numberCode: '04',
    collection: 'Prehistoric',
    categoryTag: 'Drops',
    dropCode: 'DROP 001',
    eyebrow: 'PREHISTORIC 02',
    name: 'Fossil Raptor',
    headline: 'Speed, agility and sharp thermal lines.',
    story: 'Inspired by Cretaceous aerodynamic skeletons. Steeper 58° cone angle that accelerates flow for expressive, tea-like Geisha extractions.',
    objectDescription: 'Sharp sweeping flutes carved directly into the plaster master. Glazed in dry matte volcanic obsidian with exposed iron speckles.',
    price: 72,
    currency: 'USD',
    editionTotal: 100,
    currentPieceNumber: '018 / 100',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 6,
    paletteColors: [
      { name: 'Obsidian Matte', hex: '#1F1E1C' },
      { name: 'Amber Bone', hex: '#C49B74' }
    ],
    specs: {
      extractionStyle: 'Fast, delicate, tea-like complexity with high citric vibrancy',
      flowRate: 'Accelerated flow with sharp vertical vortex ridges',
      capacity: '1–2 Cups (15g–25g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'Iron-rich stoneware cast in artisanal limited molds',
      origin: 'Silaria Valley Mountain Kilns',
      weight: '295g',
      idealRecipe: {
        dose: '16g',
        water: '270ml',
        temperature: '95°C',
        brewTime: '2:30 min',
        ratio: '1:16.8',
        grindSize: 'Medium'
      }
    },
    tagline: 'Made to brew fast and light.',
    visualType: 'fossil-raptor'
  },
  {
    id: 'lens-50',
    numberCode: '05',
    collection: 'Photography',
    categoryTag: 'Editions',
    dropCode: 'OBJECT 05',
    eyebrow: 'OBJECT 05',
    name: 'Lens 50',
    headline: 'Some moments were only 36 photos long.',
    story: 'Before everything lived on a screen, some moments had to wait. Lens 50 borrows the concentric forms of classic 50mm manual camera lenses and brings them into the morning coffee ritual.',
    objectDescription: 'Concentric stepped interior aperture channels slow water bypass, extending dwell time. Delivers deep sweetness, dense caramelized body and chocolate-toned notes.',
    price: 74,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 23,
    paletteColors: [
      { name: 'Optical Matte Black', hex: '#1C1B1A' },
      { name: 'Anodized Silver Rim', hex: '#C0BCB6' }
    ],
    specs: {
      extractionStyle: 'Deep caramelized sweetness, dense syrupy mouthfeel',
      flowRate: 'Regulated stepped dwell with single central restriction aperture',
      capacity: '1–3 Cups (18g–36g coffee bed)',
      filterType: 'Flat bottom basket filters (Kalita 185) or 02 Cone',
      material: 'Semi-vitrified stoneware with knurled grip rings and food-grade mineral glaze',
      origin: 'Neblaria Studio',
      weight: '345g',
      idealRecipe: {
        dose: '20g',
        water: '320ml',
        temperature: '92°C',
        brewTime: '3:15 min',
        ratio: '1:16',
        grindSize: 'Medium-Coarse'
      }
    },
    tagline: 'Coffee tastes better with stories around it.',
    visualType: 'lens-50'
  },
  {
    id: 'brutalist-01',
    numberCode: '06',
    collection: 'Architecture',
    categoryTag: 'Editions',
    dropCode: 'EDITION 03',
    eyebrow: 'ARCHITECTURE 01',
    name: 'Brutalist 01',
    headline: 'Heavy geometry. Uncompromising extraction.',
    story: 'Inspired by the bold concrete forms of 1960s architectural monuments. Unpolished grog clay captures heat and maintains strict thermal discipline.',
    objectDescription: 'Sharp polygonal exterior with faceted chamfers. The heavy ceramic mass acts as a thermal flywheel during multi-pour blooming recipes.',
    price: 78,
    currency: 'USD',
    editionTotal: 120,
    currentPieceNumber: '044 / 120',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 28,
    paletteColors: [
      { name: 'Cast Concrete Grey', hex: '#8A8780' },
      { name: 'Terracotta Foundation', hex: '#B85838' }
    ],
    specs: {
      extractionStyle: 'Unrivaled temperature stability, high extraction yield and balance',
      flowRate: 'Medium steady drainage through 4 recessed geometric relief wells',
      capacity: '1–2 Cups (15g–30g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'Heavy grog refractory stoneware, high-fired at 1280°C',
      origin: 'Highland Ateliers of Neblaria',
      weight: '410g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '94°C',
        brewTime: '3:00 min',
        ratio: '1:16.6',
        grindSize: 'Medium'
      }
    },
    tagline: 'Thermal mass for serious brewing.',
    visualType: 'brutalist'
  },
  {
    id: 'orbit-space',
    numberCode: '07',
    collection: 'Space',
    categoryTag: 'Editions',
    dropCode: 'OBJECT 07',
    eyebrow: 'SPACE 01',
    name: 'Orbit',
    headline: 'Looking up at things far away.',
    story: 'Textures inspired by Apollo command module heat shields and lunar regolith. A spherical base collar meets a conical ceramic funnel.',
    objectDescription: 'Hand-stippled porous surface glaze creates a micro-insulating air layer between the ceramic and the barista’s hand.',
    price: 82,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 4,
    paletteColors: [
      { name: 'Lunar Dust Grey', hex: '#D5D0C7' },
      { name: 'Solar Gold Rim', hex: '#C59A45' }
    ],
    specs: {
      extractionStyle: 'Clean, sweet, transparent cup with prolonged finish',
      flowRate: 'Medium-fast circular centrifugal drainage',
      capacity: '1–2 Cups (15g–28g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'High-fire mineral composite ceramic',
      origin: 'Cumbres de Neblaria',
      weight: '330g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '93°C',
        brewTime: '2:55 min',
        ratio: '1:16.6',
        grindSize: 'Medium'
      }
    },
    tagline: 'A little cosmos with your morning coffee.',
    visualType: 'orbit'
  },
  {
    id: 'artist-001-camilo',
    numberCode: '08',
    collection: 'Artists',
    categoryTag: 'Artists',
    dropCode: 'ARTIST 001',
    eyebrow: 'ARTIST 001',
    name: 'Artist 001 — Camilo R.',
    headline: 'Coffee objects shouldn\'t all look the same.',
    story: 'Created in collaboration with ceramic sculptor Camilo Restrepo in his mountain sanctuary in the Heights of Neblaria. Hand-pinched asymmetric contours.',
    objectDescription: 'Each piece carries unique finger impressions along the outer wall, making every single dripper an unrepeatable sculpture with calibrated extraction flutes.',
    price: 88,
    currency: 'USD',
    editionTotal: 150,
    currentPieceNumber: '082 / 150',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 12,
    paletteColors: [
      { name: 'Raw Neblaria Sandstone', hex: '#D0C8B8' },
      { name: 'Oxide Ochre', hex: '#A36838' }
    ],
    specs: {
      extractionStyle: 'Artisanal dynamic extraction, rich aromatic clarity and nuanced sweetness',
      flowRate: 'Organically spiraled internal flutes calibrated for uniform bed saturation',
      capacity: '1–2 Cups (15g–30g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'Hand-thrown native mountain clay with wood-fired slip',
      origin: 'Mist Summit Atelier, Neblaria',
      weight: '360g',
      idealRecipe: {
        dose: '18g',
        water: '300ml',
        temperature: '94°C',
        brewTime: '3:05 min',
        ratio: '1:16.6',
        grindSize: 'Medium-Fine'
      }
    },
    tagline: 'Sculpted by hand in the Heights of Neblaria.',
    visualType: 'artist-001',
    artistName: 'Camilo Restrepo'
  },
  {
    id: 'medellin-city',
    numberCode: '09',
    collection: 'Cities',
    categoryTag: 'Editions',
    dropCode: 'CITY 01',
    eyebrow: 'CITIES 01',
    name: 'Neblaria',
    headline: 'Sacred terracotta terraces and eternal mountain mist.',
    story: 'A tribute to the ancestral terraces carved into the slopes of the Neblaria Heights. Rich terracotta stoneware fired with sacred mountain red clay.',
    objectDescription: 'Stepped brickwork exterior grooves evoke the terraced mountain topography of Neblaria, guiding warmth into the coffee vessel below.',
    price: 70,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 19,
    paletteColors: [
      { name: 'Neblaria Red Clay', hex: '#B85838' },
      { name: 'Mountain Fog White', hex: '#F2EFE9' }
    ],
    specs: {
      extractionStyle: 'Rich body, prominent caramelization and dense chocolate sweetness',
      flowRate: 'Medium extraction with stepped atmospheric relief',
      capacity: '1–2 Cups (15g–30g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'Native mountain red earthenware stoneware',
      origin: 'Silaria Valley Kilns',
      weight: '320g',
      idealRecipe: {
        dose: '19g',
        water: '300ml',
        temperature: '93°C',
        brewTime: '3:00 min',
        ratio: '1:15.8',
        grindSize: 'Medium'
      }
    },
    tagline: 'The warmth of our sacred mountain.',
    visualType: 'medellin'
  },
  {
    id: 'flow-01-lab',
    numberCode: '10',
    collection: 'Lab',
    categoryTag: 'Lab',
    dropCode: 'LAB 01',
    eyebrow: 'DRYP LAB 01',
    name: 'Flow 01',
    headline: 'Fluid dynamics pushed to the absolute edge.',
    story: 'An experimental piece developed in our prototyping workshop to test continuous parabolic drainage angles and zero-resistance air venting.',
    objectDescription: 'Ultra-thin wall porcelain with 24 continuous parabolic ribs that maximize flow rate for high-density Ethiopian and Gesha microlots.',
    price: 64,
    currency: 'USD',
    stockStatus: 'sold_out',
    stockLabel: 'Agotado',
    stockCountRemaining: 15,
    paletteColors: [
      { name: 'High-Gloss Pure White', hex: '#FAF9F6' },
      { name: 'Cobalt Line', hex: '#2A4D7A' }
    ],
    specs: {
      extractionStyle: 'Ultra-clean, crisp floral aromatics, zero astringency',
      flowRate: 'Ultra-fast parabolic laminar flow with 360° air gap',
      capacity: '1–2 Cups (12g–25g dose)',
      filterType: 'Standard 02 Conical filters',
      material: 'Precision slip-cast technical porcelain',
      origin: 'Neblaria Mountain Lab',
      weight: '240g',
      idealRecipe: {
        dose: '15g',
        water: '250ml',
        temperature: '95°C',
        brewTime: '2:15 min',
        ratio: '1:16.6',
        grindSize: 'Fine-Medium'
      }
    },
    tagline: 'Lab tested for extreme clarity.',
    visualType: 'flow-01'
  }
];

export const ARCHIVE_DROPS: ArchiveDrop[] = [
  {
    id: 'drop-001',
    code: 'DROP 001',
    title: 'PREHISTORIC',
    theme: 'Paleontology, Fossil Vertebrae & Mesozoic Fascination',
    year: '2026',
    headline: 'You never really outgrow dinosaurs.',
    story: 'Vertebral stoneware flutes and volcanic grog clay. 150 numbered units hand-stamped in Silaria Valley.',
    itemsCount: 150,
    status: 'Gone for now',
    coverAccent: '#C05A3E'
  },
  {
    id: 'drop-002',
    code: 'DROP 002',
    title: 'LENS ARCHIVE',
    theme: 'Analog 35mm Photography & Concentric Aperture Steps',
    year: '2025',
    headline: 'Some moments were only 36 photos long.',
    story: 'Concentric aperture blades and knurled focus rings turned into thermal extraction vessels.',
    itemsCount: 120,
    status: 'Gone for now',
    coverAccent: '#1F1E1C'
  },
  {
    id: 'artist-001-archive',
    code: 'ARTIST 001',
    title: 'CAMILO R. STUDIO',
    theme: 'Hand-Pinched Mountain Sculptures',
    year: '2025',
    headline: 'Coffee objects shouldn\'t all look the same.',
    story: 'Neblaria wood-fired batch. Each unit carried individual thumb impressions from the potter\'s wheel.',
    itemsCount: 150,
    status: 'Gone for now',
    coverAccent: '#5B6652'
  }
];

export const BRAND_MANIFESTO_LINES = [
  'Coffee became part of our lives.',
  'So did music.',
  'Cameras.',
  'Dinosaurs.',
  'Cities.',
  'Games.',
  'Objects.',
  'Drips.',
  'We put them together.'
];

export const COFFEE_ENGINEERING_METRICS = {
  dose: '18 g',
  water: '300 ml',
  temperature: '94 °C',
  brewTime: '2:45 – 3:15',
  ratio: '1:16.6',
  grind: 'Medium-Fine',
  points: [
    {
      title: 'Food-Safe High-Fired Vitrified Porcelain',
      desc: 'Fired at 1280°C to guarantee zero porosity on the brew surface, keeping 100% of the coffee oil flavors intact.'
    },
    {
      title: 'Optimized Internal Rib Geometry',
      desc: 'Helical channel fluting prevents paper filter vacuum suction and creates an effortless 360° air bypass.'
    },
    {
      title: 'Universal Standard 02 Filter Compatibility',
      desc: 'Designed for standard conical 02 filters (Hario V60, Cafec Abaca, Sibarist, Origami) available worldwide.'
    },
    {
      title: 'Thermal Buffer Stability',
      desc: 'Calibrated stoneware mass insulates the coffee slurry temperature through the crucial 30-second bloom.'
    }
  ]
};

export const ARTIST_FEATURE = {
  name: 'Camilo Restrepo',
  location: 'Heights of Neblaria (2,800m altitude)',
  role: 'Ceramic Sculptor & Studio Potter',
  quote: 'Coffee objects shouldn\'t all look the same.',
  story: 'Working out of his wood-fired mountain workshop in the Heights of Neblaria, Camilo pinches and throws each piece using native iron-rich clays from the sacred mountain ranges.',
  processSteps: [
    { name: '01. Clay Selection', desc: 'Native iron-dense clays mixed with silica grog for thermal buffer.' },
    { name: '02. Hand-Carved Master', desc: 'Vertebrae and spiral contours carved directly into wet plaster.' },
    { name: '03. Bisque & Slip Glaze', desc: 'Dipped in natural feldspar and volcanic ash mineral slip.' },
    { name: '04. 1280°C High-Firing', desc: '14 hours in the reduction kiln creating unique flame marks.' }
  ]
};
