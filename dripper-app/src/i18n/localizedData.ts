import type { DropPhase, DropStageConfig, Product, ArchiveDrop, BentoCategory } from '../types';
import type { Language } from './types';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SensoryElement {
  id: string;
  name: string;
  detail: string;
  cue: string;
}

export interface BrewStep {
  title: string;
  time: string;
  target: string;
  desc: string;
}

export const LOCALIZED_DROP_STAGES: Record<Language, Record<DropPhase, DropStageConfig>> = {
  en: {
    'T-7': {
      phase: 'T-7',
      label: 'T−7 Days',
      badge: 'Concept & Memory',
      headline: 'Something old is coming back.',
      subheadline: 'DROP 001 is forming in the kiln. 7 days until the full reveal.',
      countdownText: '06d : 21h : 44m',
      visualFocus: 'concept',
      storySnippet: 'We took the shapes we once searched for in natural history museums, worn-out encyclopedia pages and toy boxes, and translated them into a functional brewing sculpture.',
      ctaText: 'Notify me when ready',
      ctaAction: 'notify',
      availabilityNotice: 'Previewing memory. Production limited to 150 numbered pieces.'
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
      availabilityNotice: "This one won't stay forever. Made in Colombia."
    }
  },
  es: {
    'T-7': {
      phase: 'T-7',
      label: 'T−7 Días',
      badge: 'Concepto y Memoria',
      headline: 'Algo antiguo está regresando.',
      subheadline: 'El LANZAMIENTO 001 se está formando en el horno. 7 días para la revelación completa.',
      countdownText: '06d : 21h : 44m',
      visualFocus: 'concept',
      storySnippet: 'Tomamos las formas que alguna vez buscamos en museos de historia natural, enciclopedias desgastadas y cajas de juguetes, y las convertimos en una escultura funcional para café.',
      ctaText: 'Avisarme cuando esté listo',
      ctaAction: 'notify',
      availabilityNotice: 'Previsualizando memoria. Producción limitada a 150 piezas numeradas.'
    },
    'T-3': {
      phase: 'T-3',
      label: 'T−3 Días',
      badge: 'Materia y Textura',
      headline: 'Siente la arcilla volcánica.',
      subheadline: 'Acercamiento a las estrías táctiles y aislantes térmicos porosos.',
      countdownText: '02d : 16h : 08m',
      visualFocus: 'texture',
      storySnippet: 'Gres mineral crudo con engobe volcánico. Las nervaduras exteriores aíslan el calor, mientras las espirales internas canalizan el agua de manera uniforme por la cama de café.',
      ctaText: 'Explorar estudio material',
      ctaAction: 'explore',
      availabilityNotice: 'Prueba de estudio superada. Enfriamiento de horno en curso.'
    },
    'T-1': {
      phase: 'T-1',
      label: 'T−1 Día',
      badge: 'Silueta y Geometría',
      headline: 'Mañana cambia tu mañana.',
      subheadline: 'La silueta emerge a las 09:00 AM hora Colombia.',
      countdownText: '00d : 18h : 32m',
      visualFocus: 'silhouette',
      storySnippet: 'La luz y las sombras juegan sobre placas geométricas inspiradas en segmentos vertebrales fosilizados. Mañana se encuentra con tus granos de café favoritos.',
      ctaText: 'Activar alarma 24h',
      ctaAction: 'notify',
      availabilityNotice: 'Empaque inspeccionado. Cajas selladas a mano con número de lote.'
    },
    'LIVE': {
      phase: 'LIVE',
      label: 'LANZAMIENTO 001 EN VIVO',
      badge: 'Filtrando Ahora',
      headline: 'PREHISTÓRICO está vivo.',
      subheadline: 'El LANZAMIENTO 001 llegó. Tres nuevos objetos disponibles.',
      countdownText: 'EN VIVO AHORA',
      visualFocus: 'full',
      storySnippet: 'Objetos con los que crecimos. Reimaginados para el café. Cerámica de lote pequeño diseñada para filtrar sin prisa y habitar tu repisa abierta.',
      ctaText: 'Explorar Prehistórico',
      ctaAction: 'buy',
      availabilityNotice: 'Esta edición no estará para siempre. Hecho en Colombia.'
    }
  }
};

export const LOCALIZED_BENTO_CATEGORIES: Record<Language, BentoCategory[]> = {
  en: [
    {
      id: 'prehistoric',
      title: 'PREHISTORIC',
      subtitle: 'Fossilized ribs, vertebrae flutes & Mesozoic memory.',
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
  ],
  es: [
    {
      id: 'prehistoric',
      title: 'PREHISTÓRICO',
      subtitle: 'Costillas fosilizadas, estrías vertebrales y memoria mesozoica.',
      tag: 'Lanzamiento 001',
      affinityTheme: 'Dinosaurios y Paleontología',
      imageAccent: '#C05A3E',
      gridSpan: 'col-span-12 md:col-span-7',
      badge: 'Lanzamiento Activo'
    },
    {
      id: 'photography',
      title: 'FOTOGRAFÍA',
      subtitle: 'Lentes análogos, 36 exposiciones y pasos de apertura concéntricos.',
      tag: 'Objeto 05',
      affinityTheme: 'Cámaras Análogas de 35mm',
      imageAccent: '#262422',
      gridSpan: 'col-span-12 md:col-span-5'
    },
    {
      id: 'core',
      title: 'COLECCIÓN BASE',
      subtitle: 'Base de terracota pura y geometría de extracción minimalista.',
      tag: 'Origen 00',
      affinityTheme: 'Arquitectura Minimalista',
      imageAccent: '#A64726',
      gridSpan: 'col-span-12 md:col-span-5'
    },
    {
      id: 'artists',
      title: 'ARTISTAS',
      subtitle: 'Colaboraciones esculpidas a mano con maestros ceramistas independientes.',
      tag: 'Colaboraciones',
      affinityTheme: 'Escultura Alfarera',
      imageAccent: '#5B6652',
      gridSpan: 'col-span-12 md:col-span-7',
      badge: 'Edición Limitada'
    }
  ]
};

export const LOCALIZED_AFFINITY_PILLS: Record<Language, string[]> = {
  en: ['Prehistoric', 'Photography', 'Music', 'Architecture', 'Space', 'Cities', 'Games', 'Art'],
  es: ['Prehistoria', 'Fotografía', 'Música', 'Arquitectura', 'Espacio', 'Ciudades', 'Juegos', 'Arte']
};

export const LOCALIZED_PRODUCTS: Record<Language, Product[]> = {
  en: [
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
      stockStatus: 'available',
      stockLabel: 'Your shelf has room for one more.',
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
        origin: 'Medellín Ceramic Workshop, Colombia',
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
      stockStatus: 'available',
      stockLabel: 'In stock',
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
        origin: 'Medellín Studio, Colombia',
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
      stockStatus: 'low_stock',
      stockLabel: '037 / 150 • Almost gone',
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
        origin: 'Carmen de Viboral & Medellín, Colombia',
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
      stockStatus: 'low_stock',
      stockLabel: '018 / 100 • 6 units remaining',
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
        origin: 'Carmen de Viboral, Colombia',
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
      headline: 'Some memories were only 36 photos long.',
      story: 'Before everything lived on a screen, some moments had to wait. Lens 50 borrows the concentric forms of classic 50mm manual camera lenses and brings them into the morning coffee ritual.',
      objectDescription: 'Concentric stepped interior aperture channels slow water bypass, extending dwell time. Delivers deep sweetness, dense caramelized body and chocolate-toned notes.',
      price: 74,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Pick your favorite',
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
        origin: 'Medellín Studio, Colombia',
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
      stockStatus: 'available',
      stockLabel: 'Edition of 120',
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
        origin: 'Bogotá / Medellín Studio, Colombia',
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
      stockStatus: 'low_stock',
      stockLabel: 'Almost gone • 4 units left',
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
        origin: 'Medellín, Colombia',
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
      headline: "Coffee objects shouldn't all look the same.",
      story: 'Created in collaboration with ceramic sculptor Camilo Restrepo in his mountain studio in Santa Elena, Medellín. Hand-pinched asymmetric contours.',
      objectDescription: 'Each piece carries unique finger impressions along the outer wall, making every single dripper an unrepeatable sculpture with calibrated extraction flutes.',
      price: 88,
      currency: 'USD',
      editionTotal: 150,
      currentPieceNumber: '082 / 150',
      stockStatus: 'low_stock',
      stockLabel: '082 / 150 • Limited Edition',
      stockCountRemaining: 12,
      paletteColors: [
        { name: 'Raw Andes Sandstone', hex: '#D0C8B8' },
        { name: 'Oxide Ochre', hex: '#A36838' }
      ],
      specs: {
        extractionStyle: 'Artisanal dynamic extraction, rich aromatic clarity and nuanced sweetness',
        flowRate: 'Organically spiraled internal flutes calibrated for uniform bed saturation',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Hand-thrown native Antioquian clay with wood-fired slip',
        origin: 'Santa Elena Studio, Medellín, Colombia',
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
      tagline: 'Sculpted by hand in Santa Elena.',
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
      name: 'Medellín',
      headline: 'Red brick hills and eternal spring mornings.',
      story: 'A tribute to the brick architecture clinging to the mountainsides of the Aburrá Valley. Rich terracotta stoneware fired with native red clay.',
      objectDescription: 'Stepped brickwork exterior grooves evoke the terraced urban topography of Medellín, guiding warmth into the coffee vessel below.',
      price: 70,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Pick your favorite',
      stockCountRemaining: 19,
      paletteColors: [
        { name: 'Andean Red Brick', hex: '#B85838' },
        { name: 'Mountain Fog White', hex: '#F2EFE9' }
      ],
      specs: {
        extractionStyle: 'Rich body, prominent caramelization and dense chocolate sweetness',
        flowRate: 'Medium extraction with stepped atmospheric relief',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Native Antioquia red earthenware stoneware',
        origin: 'Carmen de Viboral, Colombia',
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
      tagline: 'The warmth of our hometown.',
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
      stockStatus: 'available',
      stockLabel: 'Lab Prototype Batch',
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
        origin: 'Medellín Prototyping Lab, Colombia',
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
  ],
  es: [
    {
      id: 'core-01',
      numberCode: '01',
      collection: 'Core',
      categoryTag: 'Core',
      dropCode: 'ORIGEN',
      eyebrow: 'ORIGEN 01',
      name: 'Core 01',
      headline: 'La pieza con la que todo comenzó.',
      story: 'Sin temáticas. Sin colaboraciones. Solo la expresión más pura de lo que concebimos como un DRYP. Nacido en nuestro taller de Medellín.',
      objectDescription: 'Un cono clásico de 60° con 12 nervaduras continuas. La base de terracota pura acabada a mano se une a un cuenco satinado para un lavado impecable y equilibrio térmico.',
      price: 56,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Tu repisa tiene lugar para uno más.',
      stockCountRemaining: 34,
      paletteColors: [
        { name: 'Terracota Cruda y Arena', hex: '#C27453' },
        { name: 'Blanco Tiza', hex: '#FAF9F6' }
      ],
      specs: {
        extractionStyle: 'Perfil de taza balanceado y redondo con dulzura pronunciada',
        flowRate: 'Flujo lineal receptivo a la técnica de vertido',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02 (V60 / Cafec)',
        material: 'Gres vitrificado de alta temperatura y base de barro rojo',
        origin: 'Taller Cerámico Medellín, Colombia',
        weight: '280g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Algo familiar. Algo nuevo.',
      visualType: 'core',
      isHero: false
    },
    {
      id: 'core-black',
      numberCode: '02',
      collection: 'Core',
      categoryTag: 'Core',
      dropCode: 'ORIGEN',
      eyebrow: 'ORIGEN 02',
      name: 'Core Black',
      headline: 'Las mañanas silenciosas piden peso honesto.',
      story: 'Porcelana de basalto teñida enteramente con óxidos de hierro puros. Una pieza que absorbe la luz matutina y asienta el ritual antes de iniciar el día.',
      objectDescription: 'Exterior mate oscuro con un interior satinado micro-texturado que evita la adherencia del papel y canaliza una extracción limpia.',
      price: 58,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'En stock',
      stockCountRemaining: 21,
      paletteColors: [
        { name: 'Negro Basalto', hex: '#1C1B1A' },
        { name: 'Niebla de Carbón', hex: '#383633' }
      ],
      specs: {
        extractionStyle: 'Cuerpo denso y limpio con notas acentuadas a chocolate y caramelo',
        flowRate: 'Extracción lineal media sin fugas laterales',
        capacity: '1–2 Tazas (dosis de 15g–28g)',
        filterType: 'Filtros de papel cónicos estándar 02',
        material: 'Gres de basalto de alta densidad con engobe mineral',
        origin: 'Taller de Medellín, Colombia',
        weight: '305g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '3:00 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'El peso de las mañanas tranquilas.',
      visualType: 'core-black'
    },
    {
      id: 'fossil-t',
      numberCode: '03',
      collection: 'Prehistoric',
      categoryTag: 'Drops',
      dropCode: 'DROP 001',
      eyebrow: 'PREHISTÓRICO 01',
      name: 'Fossil T',
      headline: 'Uno nunca deja de amar los dinosaurios.',
      story: 'Ciertas obsesiones nos acompañan toda la vida. Fossil T toma las formas que alguna vez buscamos en libros, museos y cajas de juguetes y las convierte en parte de nuestro ritual del café.',
      objectDescription: 'Costillas vertebrales segmentadas que replican la anatomía de una columna fosilizada. Las crestas externas brindan un agarre térmico natural, mientras las ranuras helicoidales internas potencian la acidez floral.',
      price: 69,
      currency: 'USD',
      editionTotal: 150,
      currentPieceNumber: '037 / 150',
      stockStatus: 'low_stock',
      stockLabel: '037 / 150 • Casi agotado',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Porcelana Blanco Hueso', hex: '#EAE6DF' },
        { name: 'Ceniza Volcánica', hex: '#2A2927' }
      ],
      specs: {
        extractionStyle: 'Alta claridad, aromáticos brillantes y precisión floral en tuestes claros',
        flowRate: 'Drenaje espiral rápido con 3 puertos inferiores de alivio',
        capacity: '1–2 Tazas (cama de café de 15g–28g)',
        filterType: 'Filtros cónicos estándar 02 (Hario V60 / Cafec Abaca)',
        material: 'Gres porcelánico colado a mano con esmalte reactivo de feldespato',
        origin: 'Carmen de Viboral y Medellín, Colombia',
        weight: '310g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:50 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: '68 millones de años después. Hace café.',
      visualType: 'fossil-t',
      isHero: true
    },
    {
      id: 'fossil-raptor',
      numberCode: '04',
      collection: 'Prehistoric',
      categoryTag: 'Drops',
      dropCode: 'DROP 001',
      eyebrow: 'PREHISTÓRICO 02',
      name: 'Fossil Raptor',
      headline: 'Velocidad, agilidad y líneas térmicas afiladas.',
      story: 'Inspirado en esqueletos aerodinámicos del Cretácico. Ángulo de cono más pronunciado de 58° que acelera el flujo para extracciones expresivas tipo té en cafés Geisha.',
      objectDescription: 'Estrías dinámicas talladas directamente en la matriz de yeso. Esmaltado en obsidiana volcánica mate seca con motas de hierro visibles.',
      price: 72,
      currency: 'USD',
      editionTotal: 100,
      currentPieceNumber: '018 / 100',
      stockStatus: 'low_stock',
      stockLabel: '018 / 100 • 6 unidades restantes',
      stockCountRemaining: 6,
      paletteColors: [
        { name: 'Obsidiana Mate', hex: '#1F1E1C' },
        { name: 'Hueso Ámbar', hex: '#C49B74' }
      ],
      specs: {
        extractionStyle: 'Complejidad rápida, delicada, sedosa y con alta vivacidad cítrica',
        flowRate: 'Flujo acelerado con crestas verticales de vórtice',
        capacity: '1–2 Tazas (dosis de 15g–25g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres rico en hierro fundido en moldes artesanales limitados',
        origin: 'Carmen de Viboral, Colombia',
        weight: '295g',
        idealRecipe: {
          dose: '16g',
          water: '270ml',
          temperature: '95°C',
          brewTime: '2:30 min',
          ratio: '1:16.8',
          grindSize: 'Media'
        }
      },
      tagline: 'Hecho para filtrados rápidos y ligeros.',
      visualType: 'fossil-raptor'
    },
    {
      id: 'lens-50',
      numberCode: '05',
      collection: 'Photography',
      categoryTag: 'Editions',
      dropCode: 'OBJECT 05',
      eyebrow: 'OBJETO 05',
      name: 'Lens 50',
      headline: 'Algunas memorias duraban solo 36 fotos.',
      story: 'Antes de que todo viviera en pantallas, los momentos sabían esperar. Lens 50 toma las formas concéntricas de los lentes manuales clásicos de 50mm y las traslada al ritual del café.',
      objectDescription: 'Canales de apertura escalonados concéntricos que regulan el paso del agua y prolongan el contacto. Entrega dulzura profunda, cuerpo caramelizado y notas a chocolate.',
      price: 74,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Elige tu favorito',
      stockCountRemaining: 23,
      paletteColors: [
        { name: 'Negro Óptico Mate', hex: '#1C1B1A' },
        { name: 'Borde Plata Anodizado', hex: '#C0BCB6' }
      ],
      specs: {
        extractionStyle: 'Dulzura caramelizada profunda y sensación en boca densa',
        flowRate: 'Tiempo de contacto regulado con orificio de restricción central',
        capacity: '1–3 Tazas (cama de café de 18g–36g)',
        filterType: 'Filtros de fondo plano (Kalita 185) o cono 02',
        material: 'Gres semi-vitrificado con anillos estriados y esmalte mineral apto para alimentos',
        origin: 'Taller de Medellín, Colombia',
        weight: '345g',
        idealRecipe: {
          dose: '20g',
          water: '320ml',
          temperature: '92°C',
          brewTime: '3:15 min',
          ratio: '1:16',
          grindSize: 'Media-Gruesa'
        }
      },
      tagline: 'El café sabe mejor cuando tiene historias alrededor.',
      visualType: 'lens-50'
    },
    {
      id: 'brutalist-01',
      numberCode: '06',
      collection: 'Architecture',
      categoryTag: 'Editions',
      dropCode: 'EDITION 03',
      eyebrow: 'ARQUITECTURA 01',
      name: 'Brutalist 01',
      headline: 'Geometría pesada. Extracción sin concesiones.',
      story: 'Inspirado en los volúmenes de concreto de los monumentos arquitectónicos de los años 60. La chamota gruesa sin pulir retiene el calor y mantiene una disciplina térmica estricta.',
      objectDescription: 'Exterior poligonal afilado con biseles facetados. La masa cerámica pesada actúa como volante térmico durante recetas de múltiples vertidos.',
      price: 78,
      currency: 'USD',
      editionTotal: 120,
      currentPieceNumber: '044 / 120',
      stockStatus: 'available',
      stockLabel: 'Edición de 120 piezas',
      stockCountRemaining: 28,
      paletteColors: [
        { name: 'Gris Concreto Colado', hex: '#8A8780' },
        { name: 'Base de Terracota', hex: '#B85838' }
      ],
      specs: {
        extractionStyle: 'Estabilidad de temperatura inigualable, alto rendimiento y balance',
        flowRate: 'Drenaje constante medio a través de 4 pozos geométricos de alivio',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres refractario con chamota gruesa, cocido a 1280°C',
        origin: 'Taller Bogotá / Medellín, Colombia',
        weight: '410g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '3:00 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Masa térmica para filtrados de alta precisión.',
      visualType: 'brutalist'
    },
    {
      id: 'orbit-space',
      numberCode: '07',
      collection: 'Space',
      categoryTag: 'Editions',
      dropCode: 'OBJECT 07',
      eyebrow: 'ESPACIO 01',
      name: 'Orbit',
      headline: 'Mirando hacia cosas lejanas.',
      story: 'Texturas inspiradas en los escudos térmicos del módulo de comando Apolo y el regolito lunar. Un collar base esférico que sostiene un embudo cerámico cónico.',
      objectDescription: 'Esmalte poroso punteado a mano que genera una micro-capa de aire aislante entre la cerámica y la mano del barista.',
      price: 82,
      currency: 'USD',
      stockStatus: 'low_stock',
      stockLabel: 'Casi agotado • 4 unidades disponibles',
      stockCountRemaining: 4,
      paletteColors: [
        { name: 'Gris Polvo Lunar', hex: '#D5D0C7' },
        { name: 'Borde Oro Solar', hex: '#C59A45' }
      ],
      specs: {
        extractionStyle: 'Taza limpia, dulce y transparente con final prolongado',
        flowRate: 'Drenaje centrífugo circular medio-rápido',
        capacity: '1–2 Tazas (dosis de 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Compuesto cerámico mineral de alta temperatura',
        origin: 'Medellín, Colombia',
        weight: '330g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:55 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Un poco de cosmos con tu café matutino.',
      visualType: 'orbit'
    },
    {
      id: 'artist-001-camilo',
      numberCode: '08',
      collection: 'Artists',
      categoryTag: 'Artists',
      dropCode: 'ARTIST 001',
      eyebrow: 'ARTISTA 001',
      name: 'Artist 001 — Camilo R.',
      headline: 'Los objetos para café no deberían ser todos iguales.',
      story: 'Creado en colaboración con el escultor ceramista Camilo Restrepo en su taller de montaña en Santa Elena, Medellín. Contornos asimétricos modelados a mano.',
      objectDescription: 'Cada pieza lleva las huellas dactilares únicas del artesano sobre la pared exterior, haciendo de cada gotero una escultura irrepetible con estrías de extracción calibradas.',
      price: 88,
      currency: 'USD',
      editionTotal: 150,
      currentPieceNumber: '082 / 150',
      stockStatus: 'low_stock',
      stockLabel: '082 / 150 • Edición Limitada',
      stockCountRemaining: 12,
      paletteColors: [
        { name: 'Arenisca Andina Cruda', hex: '#D0C8B8' },
        { name: 'Óxido Ocre', hex: '#A36838' }
      ],
      specs: {
        extractionStyle: 'Extracción dinámica artesanal, rica claridad aromática y dulzura sutil',
        flowRate: 'Estrías espirales orgánicas calibradas para una saturación uniforme',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Barro nativo antioqueño torneado a mano con engobe a leña',
        origin: 'Taller de Santa Elena, Medellín, Colombia',
        weight: '360g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '3:05 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Esculpido a mano en Santa Elena.',
      visualType: 'artist-001',
      artistName: 'Camilo Restrepo'
    },
    {
      id: 'medellin-city',
      numberCode: '09',
      collection: 'Cities',
      categoryTag: 'Editions',
      dropCode: 'CITY 01',
      eyebrow: 'CIUDADES 01',
      name: 'Medellín',
      headline: 'Colinas de ladrillo rojo y mañanas de eterna primavera.',
      story: 'Un homenaje a la arquitectura de ladrillo que abraza las laderas del Valle de Aburrá. Gres de barro rojo cocido con arcillas nativas.',
      objectDescription: 'Ranuras exteriores escalonadas que evocan la topografía urbana de Medellín, conduciendo el calor hacia la jarra inferior.',
      price: 70,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Elige tu favorito',
      stockCountRemaining: 19,
      paletteColors: [
        { name: 'Ladrillo Rojo Andino', hex: '#B85838' },
        { name: 'Blanco Niebla de Montaña', hex: '#F2EFE9' }
      ],
      specs: {
        extractionStyle: 'Cuerpo rico, caramelización sobresaliente y densa dulzura chocolatada',
        flowRate: 'Extracción media con alivio atmosférico escalonado',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Barro rojo nativo de Antioquia vitrificado',
        origin: 'Carmen de Viboral, Colombia',
        weight: '320g',
        idealRecipe: {
          dose: '19g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '3:00 min',
          ratio: '1:15.8',
          grindSize: 'Media'
        }
      },
      tagline: 'La calidez de nuestra tierra natal.',
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
      headline: 'Dinámica de fluidos llevada al límite absoluto.',
      story: 'Una pieza experimental desarrollada en nuestro taller de prototipado para evaluar ángulos de drenaje parabólico continuo y ventilación sin resistencia.',
      objectDescription: 'Porcelana de pared ultra-delgada con 24 nervaduras parabólicas continuas que maximizan la velocidad de flujo en microlotes etíopes y Geishas.',
      price: 64,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Lote Prototipo de Laboratorio',
      stockCountRemaining: 15,
      paletteColors: [
        { name: 'Blanco Puro Brillante', hex: '#FAF9F6' },
        { name: 'Línea de Cobalto', hex: '#2A4D7A' }
      ],
      specs: {
        extractionStyle: 'Ultra-limpio, notas florales nítidas, cero astringencia',
        flowRate: 'Flujo laminar parabólico ultra-rápido con cámara de aire 360°',
        capacity: '1–2 Tazas (dosis de 12g–25g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Porcelana técnica colada de alta precisión',
        origin: 'Laboratorio de Prototipos Medellín, Colombia',
        weight: '240g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '95°C',
          brewTime: '2:15 min',
          ratio: '1:16.6',
          grindSize: 'Fina-Media'
        }
      },
      tagline: 'Probado en laboratorio para una claridad extrema.',
      visualType: 'flow-01'
    }
  ]
};

export const LOCALIZED_ARCHIVE_DROPS: Record<Language, ArchiveDrop[]> = {
  en: [
    {
      id: 'drop-001',
      code: 'DROP 001',
      title: 'PREHISTORIC',
      theme: 'Paleontology, Fossil Vertebrae & Mesozoic Fascination',
      year: '2026',
      headline: 'You never really outgrow dinosaurs.',
      story: 'Vertebral stoneware flutes and volcanic grog clay. 150 numbered units hand-stamped in Carmen de Viboral.',
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
      headline: 'Some memories were only 36 photos long.',
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
      headline: "Coffee objects shouldn't all look the same.",
      story: "Santa Elena wood-fired batch. Each unit carried individual thumb impressions from the potter's wheel.",
      itemsCount: 150,
      status: 'Gone for now',
      coverAccent: '#5B6652'
    }
  ],
  es: [
    {
      id: 'drop-001',
      code: 'DROP 001',
      title: 'PREHISTÓRICO',
      theme: 'Paleontología, Vértebras Fósiles y Fascinación Mesozoica',
      year: '2026',
      headline: 'Uno nunca deja de amar los dinosaurios.',
      story: 'Estrías vertebrales de gres y arcilla con chamota volcánica. 150 unidades numeradas y selladas a mano en Carmen de Viboral.',
      itemsCount: 150,
      status: 'Gone for now',
      coverAccent: '#C05A3E'
    },
    {
      id: 'drop-002',
      code: 'DROP 002',
      title: 'ARCHIVO DE LENTES',
      theme: 'Fotografía Análoga de 35mm y Pasos de Apertura Concéntricos',
      year: '2025',
      headline: 'Algunas memorias duraban solo 36 fotos.',
      story: 'Cuchillas de apertura concéntricas y anillos de enfoque estriados convertidos en recipientes de extracción térmica.',
      itemsCount: 120,
      status: 'Gone for now',
      coverAccent: '#1F1E1C'
    },
    {
      id: 'artist-001-archive',
      code: 'ARTISTA 001',
      title: 'TALLER CAMILO R.',
      theme: 'Esculturas de Montaña Modeladas a Mano',
      year: '2025',
      headline: 'Los objetos para café no deberían ser todos iguales.',
      story: 'Lote de quema a leña en Santa Elena. Cada unidad conserva la huella dactilar individual del torno alfarero.',
      itemsCount: 150,
      status: 'Gone for now',
      coverAccent: '#5B6652'
    }
  ]
};

export const LOCALIZED_BRAND_MANIFESTO_LINES: Record<Language, string[]> = {
  en: [
    'Coffee became part of our lives.',
    'So did music.',
    'Cameras.',
    'Dinosaurs.',
    'Cities.',
    'Games.',
    'Objects.',
    'Memories.',
    'We put them together.'
  ],
  es: [
    'El café se volvió parte de nuestras vidas.',
    'También la música.',
    'Las cámaras.',
    'Los dinosaurios.',
    'Las ciudades.',
    'Los juegos.',
    'Los objetos.',
    'Las memorias.',
    'Los juntamos todos.'
  ]
};

export const LOCALIZED_COFFEE_ENGINEERING_METRICS: Record<Language, {
  dose: string;
  water: string;
  temperature: string;
  brewTime: string;
  ratio: string;
  grind: string;
  points: { title: string; desc: string }[];
}> = {
  en: {
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
  },
  es: {
    dose: '18 g',
    water: '300 ml',
    temperature: '94 °C',
    brewTime: '2:45 – 3:15',
    ratio: '1:16.6',
    grind: 'Media-Fina',
    points: [
      {
        title: 'Porcelana Vitrificada de Alta Temperatura',
        desc: 'Cocida a 1280°C para garantizar cero porosidad en la superficie de contacto, preservando el 100% de los aceites y aromas.'
      },
      {
        title: 'Geometría Helicoidal de Estrías Internas',
        desc: 'Las ranuras en espiral evitan el efecto vacío con el papel y generan una ventilación de aire 360° sin estancamientos.'
      },
      {
        title: 'Compatibilidad Universal con Filtro Cónico 02',
        desc: 'Diseñado para filtros cónicos estándar 02 (Hario V60, Cafec Abaca, Sibarist, Origami) disponibles globalmente.'
      },
      {
        title: 'Estabilidad Térmica de la Masa Cerámica',
        desc: 'La masa de gres calibrada aísla la temperatura del agua durante la fase crucial de preinfusión de 30 segundos.'
      }
    ]
  }
};

export const LOCALIZED_ARTIST_FEATURE: Record<Language, {
  name: string;
  location: string;
  role: string;
  quote: string;
  story: string;
  processSteps: { name: string; desc: string }[];
}> = {
  en: {
    name: 'Camilo Restrepo',
    location: 'Santa Elena, Medellín (2,200m altitude)',
    role: 'Ceramic Sculptor & Studio Potter',
    quote: "Coffee objects shouldn't all look the same.",
    story: 'Working out of his wood-fired mountain workshop in Santa Elena, Camilo pinches and throws each piece using native iron-rich clays from the Antioquian Andes.',
    processSteps: [
      { name: '01. Clay Selection', desc: 'Native iron-dense clays mixed with silica grog for thermal buffer.' },
      { name: '02. Hand-Carved Master', desc: 'Vertebrae and spiral contours carved directly into wet plaster.' },
      { name: '03. Bisque & Slip Glaze', desc: 'Dipped in natural feldspar and volcanic ash mineral slip.' },
      { name: '04. 1280°C High-Firing', desc: '14 hours in the reduction kiln creating unique flame marks.' }
    ]
  },
  es: {
    name: 'Camilo Restrepo',
    location: 'Santa Elena, Medellín (2.200m de altitud)',
    role: 'Escultor Ceramista y Maestro Alfarero',
    quote: 'Los objetos para café no deberían ser todos iguales.',
    story: 'Desde su taller de montaña a leña en Santa Elena, Camilo modela y tornea cada pieza utilizando arcillas andinas ricas en hierro extraídas de la cordillera antioqueña.',
    processSteps: [
      { name: '01. Selección de Arcilla', desc: 'Barros nativos densos en hierro con chamota de sílice para inercia térmica.' },
      { name: '02. Matriz Tallada a Mano', desc: 'Contornos vertebrales y espirales esculpidos directamente sobre yeso húmedo.' },
      { name: '03. Bizcocho y Engobe', desc: 'Inmersión en engobe mineral de feldespato natural y cenizas volcánicas.' },
      { name: '04. Quema a 1280°C', desc: '14 horas en horno de reducción creando huellas de llama irrepetibles.' }
    ]
  }
};

export const LOCALIZED_FAQS: Record<Language, FAQItem[]> = {
  en: [
    {
      question: "Is this a functional coffee dripper or only a decorative sculpture?",
      answer: "Every DRYP object is engineered as a precision extraction vessel first. The internal spiral fluting, cone angle, and bottom aperture are calibrated to prevent vacuum stalling and ensure uniform water saturation through your coffee bed."
    },
    {
      question: "What paper filters are compatible with DRYP?",
      answer: "All DRYP pieces utilize universal standard 02 conical paper filters (including Hario V60 02, Cafec Abaca, Sibarist Fast, and Origami). Lens 50 can also accommodate flat-bottom basket filters like Kalita 185."
    },
    {
      question: "How does the ceramic mass maintain brewing temperature?",
      answer: "We use high-density vitrified porcelain and refractory grog stoneware fired at 1280°C. Once pre-heated with rinse water, the heavy ceramic walls act as a thermal flywheel, keeping slurry temperatures steady across your entire 3-minute brew."
    },
    {
      question: "Are the mineral glazes 100% food-safe and dishwasher-safe?",
      answer: "Yes. All our glazes are certified food-safe, lead-free, and cadmium-free. While they are dishwasher-safe, we recommend a simple warm water rinse after brewing to preserve the satin tactile luster of the outer ridges."
    },
    {
      question: "How many pieces exist in each limited edition?",
      answer: "Each cultural drop is strictly limited to 100 to 150 individually numbered pieces. Once a batch is marked 'Gone for now', the plaster master is retired into our studio archive."
    },
    {
      question: "Where are DRYP objects made and how are they shipped?",
      answer: "Every piece is hand-cast, glazed, and fired in artisan workshops in Carmen de Viboral and Santa Elena, Antioquia, Colombia. We ship globally in custom shock-absorbing molded fiber packaging with full transit insurance."
    }
  ],
  es: [
    {
      question: "¿Es este un gotero de café funcional o solo una escultura decorativa?",
      answer: "Cada objeto DRYP está diseñado ante todo como un recipiente de extracción de alta precisión. Las estrías en espiral, el ángulo cónico y el orificio inferior están calibrados para evitar el estancamiento por vacío y asegurar una saturación uniforme en toda la cama de café."
    },
    {
      question: "¿Qué filtros de papel son compatibles con las piezas DRYP?",
      answer: "Todas las piezas DRYP utilizan filtros cónicos estándar tamaño 02 (incluyendo Hario V60 02, Cafec Abaca, Sibarist Fast y Origami). Lens 50 también admite filtros de canasta de fondo plano como Kalita 185."
    },
    {
      question: "¿Cómo conserva la masa cerámica la temperatura durante la preparación?",
      answer: "Utilizamos porcelana vitrificada de alta densidad y gres refractario con chamota cocidos a 1280°C. Al precalentarse con agua de enjuague, las paredes cerámicas pesadas retienen el calor y estabilizan la temperatura durante los 3 minutos del filtrado."
    },
    {
      question: "¿Los esmaltes minerales son 100% aptos para alimentos y lavavajillas?",
      answer: "Sí. Todos nuestros esmaltes están certificados como libres de plomo y cadmio, 100% seguros para alimentos. Aunque son aptos para lavavajillas, recomendamos un enjuague suave con agua tibia después de cada uso para preservar el brillo táctil satinado."
    },
    {
      question: "¿Cuántas piezas existen en cada edición limitada?",
      answer: "Cada lanzamiento cultural está estrictamente limitado a lotes de 100 a 150 unidades numeradas individualmente. Cuando un lote se marca como 'Agotado por ahora', la matriz de yeso se retira definitivamente al archivo del taller."
    },
    {
      question: "¿Dónde se fabrican los objetos DRYP y cómo se envían?",
      answer: "Cada pieza se cuela, esmalta y quema a mano en talleres artesanales de Carmen de Viboral y Santa Elena, Antioquia, Colombia. Realizamos envíos a todo el mundo en empaques especiales de fibra moldeada amortiguada con seguro total de transporte."
    }
  ]
};

export const LOCALIZED_SENSORY_ELEMENTS: Record<Language, SensoryElement[]> = {
  en: [
    { 
      id: 'water',
      name: 'Water Spiral', 
      detail: '94°C spring water poured in calibrated spirals.',
      cue: 'Tap to trigger water drop'
    },
    { 
      id: 'porcelain',
      name: 'Porcelain Mass', 
      detail: 'Vitrified high-density stoneware locking extraction heat.',
      cue: 'Tap to trigger ceramic chime'
    },
    { 
      id: 'steam',
      name: 'Steam Exhale', 
      detail: 'Freshly roasted aromatics filling the quiet kitchen.',
      cue: 'Tap to trigger steam bloom'
    },
    { 
      id: 'silence',
      name: 'Morning Silence', 
      detail: 'A quiet, unhurried 3 minutes before the world wakes up.',
      cue: 'Tap to center the morning'
    }
  ],
  es: [
    { 
      id: 'water',
      name: 'Espiral de Agua', 
      detail: 'Agua pura a 94°C vertida en círculos calibrados.',
      cue: 'Toca para activar gota de agua'
    },
    { 
      id: 'porcelain',
      name: 'Masa Porcelánica', 
      detail: 'Gres vitrificado de alta densidad que retiene el calor.',
      cue: 'Toca para activar campana cerámica'
    },
    { 
      id: 'steam',
      name: 'Salida de Vapor', 
      detail: 'Aromas de café recién tostado llenando la cocina.',
      cue: 'Toca para activar salida de vapor'
    },
    { 
      id: 'silence',
      name: 'Silencio Matutino', 
      detail: '3 minutos de calma absoluta antes de que el mundo despierte.',
      cue: 'Toca para pausar la mañana'
    }
  ]
};

export const LOCALIZED_BREW_STEPS: Record<Language, (bloomWater: number, secondPour: number, waterTotal: number) => BrewStep[]> = {
  en: (bloomWater, secondPour, waterTotal) => [
    { 
      title: "01. Bloom", 
      time: "0:00 - 0:45", 
      target: `${bloomWater}g water`,
      desc: `Pour ${bloomWater}g of spring water in outward spirals. The spiral vertebral flutes allow trapped CO2 gases to escape freely without dry channel stalling.` 
    },
    { 
      title: "02. Core Saturation", 
      time: "0:45 - 1:45", 
      target: `${secondPour}g water`,
      desc: `Pour steadily up to ${secondPour}g. The vitrified high-density porcelain thermal flywheel maintains slurry temperature locked between 92°C and 94°C.` 
    },
    { 
      title: "03. Drawdown", 
      time: "1:45 - 3:00", 
      target: `${waterTotal}g total`,
      desc: `Final gentle pour up to ${waterTotal}g. Clean laminar drawdown through the 60° calibrated bottom aperture leaves a flat, uniform coffee bed.` 
    }
  ],
  es: (bloomWater, secondPour, waterTotal) => [
    { 
      title: "01. Preinfusión (Bloom)", 
      time: "0:00 - 0:45", 
      target: `${bloomWater}g agua`,
      desc: `Vierte ${bloomWater}g de agua en espirales hacia afuera. Las estrías vertebrales permiten que los gases de CO2 atrapados escapen libremente sin canalizaciones secas.` 
    },
    { 
      title: "02. Saturación Central", 
      time: "0:45 - 1:45", 
      target: `${secondPour}g agua`,
      desc: `Vierte de forma continua hasta ${secondPour}g. La masa de porcelana vitrificada retiene la temperatura del filtrado firme entre 92°C y 94°C.` 
    },
    { 
      title: "03. Drenaje Final", 
      time: "1:45 - 3:00", 
      target: `${waterTotal}g total`,
      desc: `Vertido final suave hasta ${waterTotal}g. El drenaje laminar limpio a través del orificio inferior de 60° deja una cama de café perfectamente plana.` 
    }
  ]
};
