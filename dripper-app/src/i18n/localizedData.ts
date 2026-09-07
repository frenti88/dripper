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
      availabilityNotice: "This one won't stay forever. Handcrafted in the Heights of Neblaria."
    }
  },
  es: {
    'T-7': {
      phase: 'T-7',
      label: 'T−7 Días',
      badge: 'Concepto y Drip',
      headline: 'Algo antiguo está regresando.',
      subheadline: 'El LANZAMIENTO 001 se está formando en el horno. 7 días para la revelación completa.',
      countdownText: '06d : 21h : 44m',
      visualFocus: 'concept',
      storySnippet: 'Tomamos las formas que alguna vez buscamos en museos de historia natural, enciclopedias desgastadas y cajas de juguetes, y las convertimos en una escultura funcional para café.',
      ctaText: 'Avisarme cuando esté listo',
      ctaAction: 'notify',
      availabilityNotice: 'Previsualizando edición de drip. Producción limitada a 150 piezas numeradas.'
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
      subheadline: 'La silueta emerge a las 09:00 AM hora de las Cumbres.',
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
      availabilityNotice: 'Esta edición no estará para siempre. Hecho en las Cumbres de Neblaria.'
    }
  }
};

export const LOCALIZED_BENTO_CATEGORIES: Record<Language, BentoCategory[]> = {
  en: [
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
  ],
  es: [
    {
      id: 'prehistoric',
      title: 'PREHISTÓRICO',
      subtitle: 'Costillas fosilizadas, estrías vertebrales y diseño cerámico mesozoico.',
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
      story: 'No theme. No collaboration. Just the purest expression of what we think a DRYP. should be. Born in our mountain atelier in Neblaria.',
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
      tagline: 'Aerodynamics of the Cretaceous.',
      visualType: 'fossil-raptor'
    },
    {
      id: 'lens-50',
      numberCode: '05',
      collection: 'Lens',
      categoryTag: 'Editions',
      dropCode: 'EDITION 02',
      eyebrow: 'LENS 01',
      name: 'Lens 50mm f/1.4',
      headline: 'Click into focus.',
      story: 'Crafted from matte black stoneware directly celebrating classic Leica and rangefinder prime lenses. Features a precision-knurled focus barrel ring, iconic red index alignment dot, a tactile shutter button thumb rest, and an arched architectural base stamped with DRYP.',
      objectDescription: 'Internal geometric vertical drainage flutes ensure uniform air circulation and laminar flow, translating precision optical mechanical discipline into balanced, sweet coffee extractions.',
      price: 74,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'In stock • Low inventory',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Matte Barrel Black', hex: '#1C1B1A' },
        { name: 'Rangefinder Red Dot', hex: '#D62828' },
        { name: 'Knurled Silver Rim', hex: '#C0C0C0' }
      ],
      specs: {
        extractionStyle: 'Deep caramelized sweetness, dense syrupy mouthfeel',
        flowRate: 'Regulated stepped dwell with single central restriction aperture',
        capacity: '1–2 Cups (15g–30g coffee bed)',
        filterType: 'Standard 02 Conical filters',
        material: 'Matte black semi-vitrified stoneware with knurled grip rings',
        origin: 'Valle de Silaria',
        weight: '345g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '3:00 min',
          ratio: '1:16.6',
          grindSize: 'Medium'
        }
      },
      tagline: 'Coffee tastes better with stories around it.',
      visualType: 'lens-50'
    },
    {
      id: 'cinema-35mm-film',
      numberCode: '25',
      collection: 'Cinema',
      categoryTag: 'Editions',
      dropCode: 'CINEMA 01',
      eyebrow: 'CINEMA 01',
      name: '35mm Film',
      headline: 'Frame by frame, drop by drop: each pour, an unrepeatable take.',
      story: 'Matte black stoneware cone with hand-fired film perforation cutouts circling the upper rim and a knurled base ring engraved with DRYP. — a direct translation of 35mm celluloid into functional ceramic.',
      objectDescription: 'The perforated rim creates air ventilation channels that regulate internal thermal convection during the bloom phase. A brass dial knob on the tripod leg is purely decorative — a nod to vintage camera mechanics.',
      price: 89,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Celluloid Edition',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Matte Film Black', hex: '#1A1A1A' },
        { name: 'Brass Dial Gold', hex: '#C9A050' }
      ],
      specs: {
        extractionStyle: 'Bold, rich body with dark chocolate and toasted grain notes',
        flowRate: 'Medium-slow controlled drawdown',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Matte black high-fire stoneware with brass accent',
        origin: 'Valle de Silaria',
        weight: '370g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '92°C',
          brewTime: '3:10 min',
          ratio: '1:16.5',
          grindSize: 'Medium'
        }
      },
      tagline: 'Every morning is a scene worth shooting.',
      visualType: 'lens-50'
    },
    {
      id: 'series-springfield-spikes',
      numberCode: '30',
      collection: 'Series & TV',
      categoryTag: 'Editions',
      dropCode: 'SERIES 01',
      eyebrow: 'SERIES 01',
      name: 'Springfield Spikes',
      headline: 'The irreverent pop silhouette of animated television, cast in vibrant yellow ceramic.',
      story: 'High-fire ceramic in vibrant Springfield cartoon yellow with a signature jagged spike rim inspired by iconic animated TV crowns. Features vertical interior extraction flutes, a bold circular loop handle, and an arched dual-window pedestal base stamped with the DRYP seal.',
      objectDescription: 'The fluted interior ribs ensure smooth and steady conical extraction, while the thermal mass of 1,280°C fired ceramic keeps brew temperatures dialed in for bright, punchy citrus and caramelized sweetness.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Series Edition',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Springfield Yellow', hex: '#F2CD24' },
        { name: 'Clay Biscuit', hex: '#D6A83C' }
      ],
      specs: {
        extractionStyle: 'Vibrant, bright fruit acidity with clean caramelized finish',
        flowRate: 'Medium conical flow, even drawdown',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-temperature glazed stoneware (1,280°C)',
        origin: 'Pop TV Atelier • Medellín',
        weight: '360g',
        idealRecipe: {
          dose: '16.5g',
          water: '270ml',
          temperature: '93°C',
          brewTime: '2:50 min',
          ratio: '1:16.3',
          grindSize: 'Medium'
        }
      },
      tagline: 'Don’t have a cow, man. Just pour slow.',
      visualType: 'core'
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
      name: 'Orbit Lunar Crater',
      headline: 'Looking up at things far away.',
      story: 'Speckled lunar regolith stoneware cone deeply sculpted with impact craters, an integrated circular crater loop handle, a contrasting matte dark chamber with spiraled drainage flutes, and an arched pedestal base stamped with DRYP.',
      objectDescription: 'The micro-textured lunar surface provides natural finger grip and tactile wonder, while internal aerodynamic spiral flutes guide uniform extraction down to a silky, balanced cup.',
      price: 92,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Lunar Edition',
      stockCountRemaining: 14,
      paletteColors: [
        { name: 'Lunar Regolith Grey', hex: '#D1CEC7' },
        { name: 'Crater Shadow Carbon', hex: '#2A2928' }
      ],
      specs: {
        extractionStyle: 'Clean, sweet, transparent cup with prolonged finish',
        flowRate: 'Medium-fast circular centrifugal drainage',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Porous basalt stoneware with machined solid brass base',
        origin: 'Cumbres de Neblaria',
        weight: '380g',
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
      id: 'cosmos-lunar-lander',
      numberCode: '29',
      collection: 'Space',
      categoryTag: 'Editions',
      dropCode: 'SPACE 03',
      eyebrow: 'SPACE 02',
      name: 'Apollo Lunar Lander',
      headline: 'Contact light in the Sea of Tranquility: aerospace engineering meets ceramic ritual.',
      story: 'High-density ceramic dripper modeled directly after the Apollo lunar descent module. Features modular heat-shield paneling, subtle terracotta-orange thruster markers, and an articulated tripod descent landing gear with the engraved DRYP. hallmark.',
      objectDescription: 'Vertical internal flutes emulate aerospace rocket nozzle aerodynamics, maintaining balanced thermal stability and an agile drawdown that highlights crisp floral and fruit aromatics.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Apollo Edition',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Heatshield Bone White', hex: '#EDE9E2' },
        { name: 'Thruster Terracotta', hex: '#B85D35' },
        { name: 'Spacecraft Black', hex: '#222222' }
      ],
      specs: {
        extractionStyle: 'Crisp, crystalline acidity with balanced sweet finish',
        flowRate: 'Aero-calibrated linear flow',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire semi-vitrified ceramic with tripod landing struts',
        origin: 'Space Lab • Valle de Silaria',
        weight: '410g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Medium'
        }
      },
      tagline: 'One small pour for your cup, one giant leap for your morning.',
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
      story: 'Created in collaboration with ceramic sculptor Camilo Restrepo in his mountain sanctuary in the Heights of Neblaria. Hand-pinched asymmetric contours.',
      objectDescription: 'Each piece carries unique finger impressions along the outer wall, making every single dripper an unrepeatable sculpture with calibrated extraction flutes.',
      price: 88,
      currency: 'USD',
      editionTotal: 150,
      currentPieceNumber: '082 / 150',
      stockStatus: 'low_stock',
      stockLabel: '082 / 150 • Limited Edition',
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
      stockStatus: 'available',
      stockLabel: 'Pick your favorite',
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
    },
    {
      id: 'music-vinyl-33',
      numberCode: '11',
      collection: 'Music',
      categoryTag: 'Editions',
      dropCode: 'AUDIO 01',
      eyebrow: 'AUDIO 01',
      name: 'Vinyl Groove 33 RPM',
      headline: 'The warm tactile crackle before the morning melody begins.',
      story: 'High-gloss piano black ceramic conical dripper sculpted with concentric 33 RPM vinyl micro-grooves spiraling inward and a vibrant crimson-red center label disc. Features a geometric loop handle and an arched pedestal base stamped with DRYP.',
      objectDescription: 'Micro-concentric exterior and interior ridges slow down channel bypassing, maximizing sweetness extraction and caramel notes in medium-dark and washed specialty coffees.',
      price: 84,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available (80 pieces)',
      stockCountRemaining: 80,
      paletteColors: [
        { name: 'Piano Gloss Black', hex: '#111111' },
        { name: 'Record Label Crimson', hex: '#D62828' }
      ],
      specs: {
        extractionStyle: 'High sweetness, rich body, controlled acidity',
        flowRate: 'Controlled medium laminar drainage',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Conical 01 / 02 filters',
        material: 'High-density matte ceramic with brass center insert',
        origin: 'Valle de Silaria',
        weight: '340g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '92°C',
          brewTime: '3:05 min',
          ratio: '1:16.25',
          grindSize: 'Medium'
        }
      },
      tagline: 'Acoustic concentric geometry for deliberate morning rituals.',
      visualType: 'core-black'
    },
    {
      id: 'music-waveform-gold',
      numberCode: '23',
      collection: 'Music',
      categoryTag: 'Editions',
      dropCode: 'AUDIO 02',
      eyebrow: 'AUDIO 02',
      name: 'Waveform Gold',
      headline: 'The moment silence becomes frequency: the wave that draws the morning before the first sip.',
      story: 'Ivory white porcelain cone with a precision screen-printed golden sound-wave motif and a matte brass accent ring at the base. A small brass dial stud marks the handle grip.',
      objectDescription: 'High-fire porcelain with a smooth matte ivory glaze. The waveform is applied with metallic gold luster fired at a second temperature, creating a tactile relief against the raw white surface.',
      price: 96,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Gold Edition',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Ivory Matte White', hex: '#F0EDE6' },
        { name: 'Matte Gold Luster', hex: '#C9A050' }
      ],
      specs: {
        extractionStyle: 'Delicate, floral clarity with a long resonant finish',
        flowRate: 'Medium even drawdown',
        capacity: '1–2 Cups (14g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire porcelain with gold luster detailing and brass ring',
        origin: 'Valle de Silaria',
        weight: '330g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '93°C',
          brewTime: '2:50 min',
          ratio: '1:16.7',
          grindSize: 'Medium'
        }
      },
      tagline: 'Every pour, a frequency.',
      visualType: 'core-black'
    },
    {
      id: 'nature-colibri-andes',
      numberCode: '12',
      collection: 'Nature',
      categoryTag: 'Editions',
      dropCode: 'BIO 01',
      eyebrow: 'BIO 01',
      name: 'Colibrí & Bosque de Niebla',
      headline: 'Morning dew on mountain leaves and swift hummingbird wings.',
      story: 'Sculpted from speckled ivory cloud stoneware with sweeping aerodynamic wing-feather contours on the exterior, an extended wing-tip pouring grip, and a deep glossy emerald-forest green glazed interior chamber, resting on a helical arched base debossed with DRYP.',
      objectDescription: 'Internal vertical emerald flutes guide fast, laminar water drainage with zero dry-channel stalling, highlighting intense floral aromatics, jasmine, and sparkling citrus clarity.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available (Cumbres de Neblaria)',
      stockCountRemaining: 25,
      paletteColors: [
        { name: 'Speckled Cloud Cream', hex: '#EAE5D9' },
        { name: 'Deep Emerald Forest Glaze', hex: '#1C4B3A' }
      ],
      specs: {
        extractionStyle: 'High clarity, pronounced floral and bright fruit aromatics',
        flowRate: 'Agile aerodynamic spiral flow',
        capacity: '1–2 Cups (15g–25g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Speckled mountain stoneware with reactive botanical glaze',
        origin: 'Cumbres de Neblaria',
        weight: '310g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '94°C',
          brewTime: '2:20 min',
          ratio: '1:16.6',
          grindSize: 'Medium-Fine'
        }
      },
      tagline: 'Aerodynamic vitality born from high mist-covered peaks.',
      visualType: 'artist-001'
    },
    {
      id: 'arch-bauhaus-dessau',
      numberCode: '13',
      collection: 'Architecture',
      categoryTag: 'Editions',
      dropCode: 'ARCH 01',
      eyebrow: 'ARCH 01',
      name: 'Bauhaus Dessau 1925',
      headline: 'Form strictly following coffee extraction physics.',
      story: 'Ivory grog stoneware dripper celebrating the quintessential Bauhaus chromatic grammar: pure red circle, golden yellow wedge, and deep carbon black quadrants, paired with an ergonomic black-accented tab handle and a slotted architectural base stamped with DRYP.',
      objectDescription: 'Internal vertical drainage flutes guide continuous laminar drawdown, while the pierced geometric pedestal allows full visual monitoring of your coffee stream.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Bauhaus Edition',
      stockCountRemaining: 30,
      paletteColors: [
        { name: 'Bauhaus Ivory Cream', hex: '#EDE8DF' },
        { name: 'Primary Cadmium Red', hex: '#D62828' },
        { name: 'Geometric Mustard Yellow', hex: '#D4A017' },
        { name: 'Carbon Black', hex: '#1C1C1C' }
      ],
      specs: {
        extractionStyle: 'Clean, transparent, crisp geometric separation of notes',
        flowRate: 'Medium-fast direct linear descent',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Refractory sand-grog stoneware fired at 1280°C',
        origin: 'Atelier Bauhaus • Cumbres de Neblaria',
        weight: '360g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Medium'
        }
      },
      tagline: 'Pure functionalist architecture for your morning counter.',
      visualType: 'brutalist'
    },
    {
      id: 'arch-origami-fold',
      numberCode: '22',
      collection: 'Architecture',
      categoryTag: 'Editions',
      dropCode: 'ARCH 02',
      eyebrow: 'ARCH 02',
      name: 'Pagoda Eaves — Kyoto',
      headline: 'Tiered architectural roofs taming water into mindful extraction.',
      story: 'Speckled sand-beige stoneware dripper directly drawing from the stepped rooflines of classical Kyoto pagodas. Features cascading cantilevered ceramic eaves, dual spouts, an ebony-black geometric handle, and an open timber-framed Torii-inspired base stamped with DRYP.',
      objectDescription: 'Vertical internal flutes emulate classical Japanese wooden beam joinery, promoting balanced airflow and an even drawdown that coaxes gentle sweetness and low acidity from light to medium roasts.',
      price: 94,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Kyoto Edition',
      stockCountRemaining: 22,
      paletteColors: [
        { name: 'Kyoto Sandstone Beige', hex: '#DDD8CE' },
        { name: 'Charred Ebony Black', hex: '#1C1B1A' }
      ],
      specs: {
        extractionStyle: 'Soft, rounded body with gentle sweetness and low acidity',
        flowRate: 'Slow-medium even drawdown',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire speckled stoneware with Torii-framed base',
        origin: 'Architecture Unit • Cumbres de Neblaria',
        weight: '380g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '93°C',
          brewTime: '3:00 min',
          ratio: '1:16.5',
          grindSize: 'Medium-coarse'
        }
      },
      tagline: 'Stepped pagoda eaves. One mindful morning pour.',
      visualType: 'brutalist'
    },
    {
      id: 'retro-super-mushroom',
      numberCode: '28',
      collection: 'Retro',
      categoryTag: 'Editions',
      dropCode: 'RETRO 03',
      eyebrow: 'RETRO 03',
      name: 'Super Mushroom 1-UP',
      headline: 'Level up your morning brew.',
      story: 'High-fire ceramic dripper directly honoring Nintendo\'s iconic Super Mushroom. Finished in vibrant crimson-red glaze with large speckled cream polka dots, paired with a hollow arch base sporting the legendary oval black eyes and engraved DRYP. logotype.',
      objectDescription: 'Vertical internal ribs promote fast, even aeration and drawdown. The rounded cap architecture traps aromatic volatiles while preserving peak bloom temperatures for sweet, berry-forward extractions.',
      price: 90,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • 1-UP Edition',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Mushroom Crimson Red', hex: '#D62828' },
        { name: 'Speckled Cream White', hex: '#EBE7DF' },
        { name: '8-bit Eye Black', hex: '#111111' }
      ],
      specs: {
        extractionStyle: 'Juicy, fruit-forward acidity with a plush body and caramel finish',
        flowRate: 'Medium-fast energetic drainage',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire glossy glazed stoneware with matte arch base',
        origin: 'Retro Lab • Cumbres de Neblaria',
        weight: '375g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '93°C',
          brewTime: '2:35 min',
          ratio: '1:16.25',
          grindSize: 'Medium'
        }
      },
      tagline: 'Extra life for your morning routine.',
      visualType: 'core'
    },
    {
      id: 'nature-botanical-wings',
      numberCode: '15',
      collection: 'Nature',
      categoryTag: 'Editions',
      dropCode: 'BIO 02',
      eyebrow: 'BIO 02',
      name: 'Alas de Mariposa Monarca',
      headline: 'Weightless elegance inspired by monarch butterfly wings and morning forest light.',
      story: 'Sculpted in velvety matte charcoal-black ceramic with wing-cellular panels filled in rich amber-orange reactive glaze, an undulating petal rim, an extended wing-tip grip, and an open helical base stamped with DRYP.',
      objectDescription: 'The fluted wing ribs create natural air-relief channels that promote uniform extraction and optimal thermal stability, accentuating bright floral notes, peach sweetness, and sparkling citrus acidity.',
      price: 90,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available (Cumbres de Neblaria)',
      stockCountRemaining: 20,
      paletteColors: [
        { name: 'Monarch Amber Orange', hex: '#E07A2B' },
        { name: 'Matte Wing Charcoal', hex: '#1F1F1F' }
      ],
      specs: {
        extractionStyle: 'Silky mouthfeel, intense jasmine florals, and sparkling acidity',
        flowRate: 'Aerodynamic convective drainage',
        capacity: '1–2 Cups (15g–26g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Fine ivory porcelain with botanical reactive glaze relief',
        origin: 'Bio Atelier • Cumbres de Neblaria',
        weight: '320g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '94°C',
          brewTime: '2:25 min',
          ratio: '1:16.6',
          grindSize: 'Medium-Fine'
        }
      },
      tagline: 'Biomimetic wing venation translating nature into liquid craft.',
      visualType: 'artist-001'
    },
    {
      id: 'fossil-skull-trex',
      numberCode: '16',
      collection: 'Prehistoric',
      categoryTag: 'Editions',
      dropCode: 'DROP 001',
      eyebrow: 'PALEO 03',
      name: 'Fossil Skull T-Rex',
      headline: 'Millions of years of apex evolution awakening with the first hot pour.',
      story: 'Sculpted in deep moss-green fossilized grog stoneware with an engraved theropod skull profile, scalloped vertebrae rim, and a sturdy tripod claw base stamped with the DRYP. seal.',
      objectDescription: 'Cream-glazed interior chamber with vertical vertebral flutes delivers clean, regulated drainage, while the heavy volcanic grog stoneware ensures extraordinary thermal inertia.',
      price: 96,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available (042 / 100 numbered pieces)',
      stockCountRemaining: 42,
      paletteColors: [
        { name: 'Fossil Moss Green', hex: '#3E4E43' },
        { name: 'Bone Cream Glaze', hex: '#EAE5D9' }
      ],
      specs: {
        extractionStyle: 'Deep, rich extraction with bold caramelized body and low astringency',
        flowRate: 'Steady linear vertical drainage',
        capacity: '1–2 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire porous sandstone stoneware fired at 1280°C',
        origin: 'Paleo Atelier • Valle de Silaria',
        weight: '390g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:50 min',
          ratio: '1:16.6',
          grindSize: 'Medium'
        }
      },
      tagline: 'Apex predator architecture translated into artisanal coffee ritual.',
      visualType: 'fossil-t'
    },
    {
      id: 'prehistoric-marine-plesiosaur',
      numberCode: '08',
      collection: 'Prehistoric',
      categoryTag: 'Editions',
      dropCode: 'PALEO 02',
      eyebrow: 'PALEO 02',
      name: 'Plesiosaur Marine Spiral',
      headline: 'The abyssal spiral of the Jurassic ocean, preserved in speckled teal stoneware.',
      story: 'Handcrafted stoneware in deep oceanic petrol teal glaze with sweeping spiral shell grooves, a scalloped wave-form rim, and an exquisite coiled ammonite tail handle. Supported by an arched pedestal base stamped with the DRYP seal.',
      objectDescription: 'The helical interior channels guide a swirling vortex drawdown, aerating the coffee slurry for remarkable cup clarity, sparkling sweetness, and deep mineral undertones.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Marine Edition',
      stockCountRemaining: 26,
      paletteColors: [
        { name: 'Abyssal Petrol Teal', hex: '#2D6A75' },
        { name: 'Warm Clay Bisque', hex: '#B88F68' }
      ],
      specs: {
        extractionStyle: 'Vibrant cup clarity, pronounced floral aromatics, and deep mineral finish',
        flowRate: 'Smooth vortex helical drainage',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-temperature glazed grog stoneware (1,280°C)',
        origin: 'Paleo Atelier • Cumbres de Neblaria',
        weight: '385g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '93°C',
          brewTime: '2:45 min',
          ratio: '1:16.25',
          grindSize: 'Medium'
        }
      },
      tagline: 'Ancient ocean depths. A mindful morning tide.',
      visualType: 'core'
    },
    {
      id: 'orbital-gyro-kinetic',
      numberCode: '21',
      collection: 'Experimental',
      categoryTag: 'Lab',
      dropCode: 'EXP 01',
      eyebrow: 'EXPERIMENTAL 01',
      name: '21 / Orbital Gyro',
      headline: 'Orbital physics and gyroscopic suspension sculpted in volcanic stoneware and brass.',
      story: 'Speckled sand stoneware cone with a ventilated helical exoskeleton and solid brass orbital ring. Inspired by nautical gyroscopes and celestial orbits to keep pour dynamics suspended in equilibrium.',
      objectDescription: 'Internal spiral flutes guide 93°C water in a continuous laminar stream, while the metallic ring mass acts as kinetic counterweight and exterior thermal stabilizer.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Experimental Edition',
      stockCountRemaining: 25,
      paletteColors: [
        { name: 'Speckled Sand Stoneware', hex: '#E2DDD3' },
        { name: 'Raw Solid Brass', hex: '#C4A35A' },
        { name: 'Raw Terracotta', hex: '#A85A3C' }
      ],
      specs: {
        extractionStyle: 'Constant laminar flow, bright sweetness and silky suspended body',
        flowRate: '3.8 ml/s continuous laminar stream',
        capacity: '1–3 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire speckled stoneware (1,280°C) with solid brass orbital axis',
        origin: 'Kinetic Atelier • Medellín',
        weight: '390g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:40 min',
          ratio: '1:16.6',
          grindSize: 'Medium-Fine'
        }
      },
      tagline: 'Experimental gyroscopic sculpture engineered for mindful slow coffee rituals.',
      visualType: 'core'
    },
    {
      id: 'art-classical-muse',
      numberCode: '22',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 01',
      eyebrow: 'ART 01',
      name: '22 / Musa Clásica',
      headline: 'Classical Hellenic marble sculpture translated into functional pour-over geometry.',
      story: 'Textured marble-grog stoneware with a hand-sculpted Hellenic muse bust. The cascading hair waves guide internal extraction flutes for a sweet, crystalline cup.',
      objectDescription: 'Interior vertical ribs seamlessly emerge from the classical sculpted hair locks, providing balanced air suspension and smooth drawdown for conical filters.',
      price: 94,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Art Edition',
      stockCountRemaining: 20,
      paletteColors: [
        { name: 'Classical Ivory Marble', hex: '#E6E0D4' },
        { name: 'Warm Cream Sandstone', hex: '#D8CEBE' },
        { name: 'Raw Terracotta', hex: '#A85A3C' }
      ],
      specs: {
        extractionStyle: 'Clear, balanced, sweet aromatics with silky mouthfeel',
        flowRate: '4.0 ml/s steady spiral descent',
        capacity: '1–3 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Fine ivory grog stoneware & quartz powder fired at 1,280°C',
        origin: 'Classical Art Atelier • Medellín',
        weight: '410g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Medium'
        }
      },
      tagline: 'Hand-sculpted classical bust honoring the timeless ritual of coffee extraction.',
      visualType: 'artist-001'
    },
    {
      id: 'art-calder-primary',
      numberCode: '24',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 02',
      eyebrow: 'ART 02',
      name: 'Calder Primary',
      headline: 'The impossible balance of a Calder mobile suspended mid-air: gravity tamed by the grace of form.',
      story: 'Speckled white stoneware cone painted with bold primary geometric shapes — red, blue, black, yellow — divided by thin painted lines, inspired by Alexander Calder\'s kinetic mobiles. Tripod base with black accent ring.',
      objectDescription: 'High-fire speckled stoneware with hand-applied ceramic underglaze. Each geometric field is painted individually before the final firing, making each piece a unique composition within the same pattern.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Art Edition',
      stockCountRemaining: 16,
      paletteColors: [
        { name: 'Speckled Natural White', hex: '#EAE7E1' },
        { name: 'Calder Red', hex: '#CC2929' },
        { name: 'Primary Blue', hex: '#1A3A6B' },
        { name: 'Golden Yellow', hex: '#D4A017' }
      ],
      specs: {
        extractionStyle: 'Vivid, bright acidity balanced with a sweet rounded body',
        flowRate: 'Medium balanced drawdown',
        capacity: '1–3 Cups (15g–30g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'High-fire speckled stoneware with ceramic underglaze',
        origin: 'Classical Art Atelier • Medellín',
        weight: '390g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '93°C',
          brewTime: '2:55 min',
          ratio: '1:16.5',
          grindSize: 'Medium'
        }
      },
      tagline: 'Primary colors. Pure form. One perfect pour.',
      visualType: 'artist-001'
    },
    {
      id: 'art-figma-canvas',
      numberCode: '27',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 03',
      eyebrow: 'FIGMA 01',
      name: 'Figma Vector Canvas',
      headline: 'Crafted in Bézier curves, vitrified at 1,280°C.',
      story: 'Sculptural modular stoneware dripper directly celebrating Figma\'s iconic color system. Features five multi-colored glazed ceramic petals in Figma coral, orange, violet, electric blue, and neon green, resting on an articulated four-pod cream base with DRYP. branding.',
      objectDescription: 'The segmented petal architecture creates distinct interior vertical flow channels for balanced, aromatic extraction. Each color block is individually hand-glazed with high-precision matte ceramic pigments.',
      price: 99,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Available • Figma Edition',
      stockCountRemaining: 15,
      paletteColors: [
        { name: 'Figma Coral Red', hex: '#F24E1E' },
        { name: 'Figma Orange', hex: '#FF7262' },
        { name: 'Figma Violet', hex: '#A259FF' },
        { name: 'Figma Blue', hex: '#1ABCFE' },
        { name: 'Figma Green', hex: '#0ACF83' }
      ],
      specs: {
        extractionStyle: 'Vibrant, nuanced acidity with velvety body and crisp notes',
        flowRate: 'Multi-channel petal drainage',
        capacity: '1–2 Cups (15g–28g dose)',
        filterType: 'Standard 02 Conical filters',
        material: 'Modular colored glazed stoneware & bone white grog base',
        origin: 'Digital Atelier • Medellín',
        weight: '420g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:50 min',
          ratio: '1:16.6',
          grindSize: 'Medium-Fine'
        }
      },
      tagline: 'From digital canvas to tactile morning ritual.',
      visualType: 'artist-001'
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
      story: 'Sin temáticas. Sin colaboraciones. Solo la expresión más pura de lo que concebimos como un DRYP. Nacido en nuestro taller de montaña en Neblaria.',
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
        origin: 'Hornos Sagrados de Neblaria',
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
        origin: 'Taller de Montaña de Neblaria',
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
        origin: 'Valle de Silaria y Cumbres de Neblaria',
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
        origin: 'Hornos de Montaña del Valle de Silaria',
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
      name: 'Lens 50mm f/1.4',
      headline: 'El clic mecánico del diafragma antes de congelar un segundo irrepetible.',
      story: 'Inspirado en los objetivos analógicos telemétricos tipo Leica. Fabricado en gres negro mate semi-vitrificado con anillo de enfoque moleteado, el icónico punto rojo de montaje índice, botón disparador texturizado de apoyo y base arquitectónica calada con el sello DRYP.',
      objectDescription: 'Nervaduras interiores verticales que aseguran un flujo de aire continuo y drenaje laminar limpio, traduciendo la disciplina de la mecánica óptica en una taza balanceada, dulce y cristalina.',
      price: 74,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Pocas unidades',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Negro Anodizado Mate', hex: '#1C1B1A' },
        { name: 'Punto Rojo Telemétrico', hex: '#D62828' },
        { name: 'Borde Plateado Moleteado', hex: '#C0C0C0' }
      ],
      specs: {
        extractionStyle: 'Dulzura profunda, cuerpo aterciopelado y acidez balanceada',
        flowRate: 'Tiempo de contacto regulado con extracción laminar',
        capacity: '1–2 Tazas (cama de café de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres negro mate semi-vitrificado con anillos estriados de agarre',
        origin: 'Valle de Silaria',
        weight: '345g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '3:00 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Fotografía analógica y ritual de café en una sola pieza de autor.',
      visualType: 'lens-50'
    },
    {
      id: 'cinema-35mm-film',
      numberCode: '25',
      collection: 'Cinema',
      categoryTag: 'Editions',
      dropCode: 'CINEMA 01',
      eyebrow: 'CINE 01',
      name: '35mm Film',
      headline: 'Cuadro a cuadro, gota a gota: cada vertido, una toma irrepetible.',
      story: 'Cono de gres negro mate con perforaciones de tira de película de 35mm horneadas en el borde superior y base moleteada con el sello DRYP. grabado — una traducción directa del celuloide analógico en cerámica funcional.',
      objectDescription: 'El borde perforado crea canales de ventilación de aire que regulan la convección térmica interna durante la fase de preinfusión. El botón de latón en la pata del trípode es puramente decorativo — un guiño a la mecánica de las cámaras vintage.',
      price: 89,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Celuloide',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Negro Película Mate', hex: '#1A1A1A' },
        { name: 'Latón Dorado', hex: '#C9A050' }
      ],
      specs: {
        extractionStyle: 'Cuerpo robusto y profundo con notas de chocolate negro y grano tostado',
        flowRate: 'Medio-lento, drenaje controlado',
        capacity: '1–2 Tazas (dosis 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres negro de alta temperatura con detalle en latón',
        origin: 'Valle de Silaria',
        weight: '370g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '92°C',
          brewTime: '3:10 min',
          ratio: '1:16.5',
          grindSize: 'Media'
        }
      },
      tagline: 'Cada mañana es una escena que vale la pena rodar.',
      visualType: 'lens-50'
    },
    {
      id: 'series-springfield-spikes',
      numberCode: '30',
      collection: 'Series y TV',
      categoryTag: 'Editions',
      dropCode: 'SERIES 01',
      eyebrow: 'SERIES 01',
      name: 'Springfield Spikes',
      headline: 'La irreverente silueta pop de la televisión animada, horneada en cerámica amarillo Springfield.',
      story: 'Cerámica de alta temperatura en amarillo Springfield brillante con un característico borde superior dentado en picos que evoca la silueta más icónica de la televisión animada. Cuenta con nervaduras interiores verticales de extracción uniforme, asa circular ergonómica y una peana arqueada con doble ventana grabada con el sello DRYP.',
      objectDescription: 'Nervaduras interiores que guían el flujo de manera constante y fluida. La cerámica horneada a 1.280°C retiene el calor de manera óptima para resaltar la acidez cítrica brillante y el dulzor acaramelado de cafés de especialidad.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Series',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Amarillo Springfield', hex: '#F2CD24' },
        { name: 'Bizcocho Cerámico', hex: '#D6A83C' }
      ],
      specs: {
        extractionStyle: 'Acidez brillante, notas frutales vivas y final dulce acaramelado',
        flowRate: 'Medio y fluido, drenaje uniforme',
        capacity: '1–2 Tazas (dosis 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres esmaltado de alta temperatura (1.280°C)',
        origin: 'Taller Pop TV • Medellín',
        weight: '360g',
        idealRecipe: {
          dose: '16.5g',
          water: '270ml',
          temperature: '93°C',
          brewTime: '2:50 min',
          ratio: '1:16.3',
          grindSize: 'Media'
        }
      },
      tagline: 'Empieza la mañana con humor y buen café.',
      visualType: 'core'
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
        origin: 'Ateliers de Altura de Neblaria',
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
      name: 'Orbit Lunar Crater',
      headline: 'La inmensidad silenciosa del regolito lunar.',
      story: 'Cono de gres cerámico en acabado regolito lunar esculpido con cráteres de impacto, asa circular integrada, cámara interior en carbono oscuro con estrías espirales de drenaje y base arqueada con sello grabado DRYP.',
      objectDescription: 'La superficie lunar micro-texturizada ofrece un agarre táctil inigualable, mientras que las estrías aerodinámicas interiores aseguran un drenaje uniforme y una taza balanceada, dulce y sedosa.',
      price: 92,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Lunar',
      stockCountRemaining: 14,
      paletteColors: [
        { name: 'Regolito Lunar Gris', hex: '#D1CEC7' },
        { name: 'Sombra de Cráter Carbón', hex: '#2A2928' }
      ],
      specs: {
        extractionStyle: 'Taza limpia, dulce y balanceada con cuerpo sedoso',
        flowRate: 'Drenaje centrífugo circular medio-rápido',
        capacity: '1–2 Tazas (dosis de 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres de basalto poroso y peana de latón macizo mecanizado',
        origin: 'Cumbres de Neblaria',
        weight: '380g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:55 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Un pedazo de cosmos en tu ritual matutino.',
      visualType: 'orbit'
    },
    {
      id: 'cosmos-lunar-lander',
      numberCode: '29',
      collection: 'Space',
      categoryTag: 'Editions',
      dropCode: 'SPACE 03',
      eyebrow: 'ESPACIO 02',
      name: 'Apollo Lunar Lander',
      headline: 'Contacto confirmado en el Mar de la Tranquilidad: ingeniería aeroespacial convertida en ritual de café.',
      story: 'Gotero cerámico de alta densidad inspirado directamente en el módulo de descenso lunar de las misiones Apolo. Destaca por sus paneles con aspecto de escudo térmico, detalles terracota que evocan los propulsores y una base trípode de aterrizaje con el grabado DRYP.',
      objectDescription: 'Sus nervaduras verticales interiores emulan la aerodinámica de toberas espaciales, favoreciendo una oxigenación constante y un drenaje ágil que resalta notas florales y frutales cristalinas.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Apolo',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Blanco Escudo Térmico', hex: '#EDE9E2' },
        { name: 'Terracota Propulsor', hex: '#B85D35' },
        { name: 'Negro Aeroespacial', hex: '#222222' }
      ],
      specs: {
        extractionStyle: 'Acidez nítida y cristalina con final dulce y balanceado',
        flowRate: 'Flujo lineal aerocalibrado',
        capacity: '1–2 Tazas (dosis 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Cerámica semi-vitrificada de alta temperatura con patas trípode de apoyo',
        origin: 'Space Lab • Valle de Silaria',
        weight: '410g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Un pequeño vertido para tu taza, un gran salto para tu mañana.',
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
      story: 'Creado en colaboración con el escultor ceramista Camilo Restrepo en su santuario de montaña en las Cumbres de Neblaria. Contornos asimétricos modelados a mano.',
      objectDescription: 'Cada pieza lleva las huellas dactilares únicas del artesano sobre la pared exterior, haciendo de cada gotero una escultura irrepetible con estrías de extracción calibradas.',
      price: 88,
      currency: 'USD',
      editionTotal: 150,
      currentPieceNumber: '082 / 150',
      stockStatus: 'low_stock',
      stockLabel: '082 / 150 • Edición Limitada',
      stockCountRemaining: 12,
      paletteColors: [
        { name: 'Arenisca Pura de Neblaria', hex: '#D0C8B8' },
        { name: 'Óxido Ocre', hex: '#A36838' }
      ],
      specs: {
        extractionStyle: 'Extracción dinámica artesanal, rica claridad aromática y dulzura sutil',
        flowRate: 'Estrías espirales orgánicas calibradas para una saturación uniforme',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres modelado a mano con arcillas nativas de montaña y engobe de leña',
        origin: 'Taller Cumbre de la Niebla, Neblaria',
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
      tagline: 'Esculpido a mano en las Cumbres de Neblaria.',
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
      name: 'Neblaria',
      headline: 'Terrazas de arcilla roja y mañanas de niebla perpetua.',
      story: 'Un tributo a la arquitectura ancestral esculpida en las laderas de las Cumbres de Neblaria. Gres de terracota enriquecido con arcillas rojas nativas de la cordillera sagrada.',
      objectDescription: 'Ranuras exteriores escalonadas que evocan la topografía mística de las Cumbres de Neblaria, conduciendo el calor hacia la jarra inferior.',
      price: 70,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Elige tu favorito',
      stockCountRemaining: 19,
      paletteColors: [
        { name: 'Arcilla de Neblaria', hex: '#B85838' },
        { name: 'Blanco Niebla de Montaña', hex: '#F2EFE9' }
      ],
      specs: {
        extractionStyle: 'Cuerpo rico, caramelización sobresaliente y densa dulzura chocolatada',
        flowRate: 'Extracción media con alivio atmosférico escalonado',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres de loza roja nativa de la cordillera de montaña',
        origin: 'Hornos del Valle de Silaria',
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
      tagline: 'La calidez de nuestra cumbre ancestral.',
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
        origin: 'Laboratorio de Prototipos de Neblaria',
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
    },
    {
      id: 'music-vinyl-33',
      numberCode: '11',
      collection: 'Music',
      categoryTag: 'Editions',
      dropCode: 'AUDIO 01',
      eyebrow: 'AUDIO 01',
      name: 'Vinyl Groove 33 RPM',
      headline: 'El crujido cálido del vinilo antes de que inicie la melodía.',
      story: 'Gotero cerámico cónico en negro piano brillante con microsurcos concéntricos inspirados en discos de vinilo de 33 RPM y galleta central roja. Cuenta con asa geométrica de perfil plano y base arqueada con sello DRYP.',
      objectDescription: 'Las micro-estrías concéntricas reducen los canales de bypass acelerado, prolongando el contacto hidrodinámico para resaltar notas achocolatadas, melazas y cuerpo dulce.',
      price: 84,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible (80 piezas)',
      stockCountRemaining: 80,
      paletteColors: [
        { name: 'Negro Piano Brillante', hex: '#111111' },
        { name: 'Galleta Rojo Carmín', hex: '#D62828' }
      ],
      specs: {
        extractionStyle: 'Dulzura profunda, cuerpo aterciopelado y acidez redonda',
        flowRate: 'Drenaje laminar controlado medio',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 01 / 02',
        material: 'Cerámica negra mate de alta densidad con núcleo de latón',
        origin: 'Valle de Silaria',
        weight: '340g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '92°C',
          brewTime: '3:05 min',
          ratio: '1:16.25',
          grindSize: 'Media'
        }
      },
      tagline: 'Acústica concéntrica para rituales matutinos conscientes.',
      visualType: 'core-black'
    },
    {
      id: 'music-waveform-gold',
      numberCode: '23',
      collection: 'Music',
      categoryTag: 'Editions',
      dropCode: 'AUDIO 02',
      eyebrow: 'AUDIO 02',
      name: 'Waveform Gold',
      headline: 'El instante en que el silencio se convierte en frecuencia: la onda que dibuja la mañana antes del primer sorbo.',
      story: 'Cono de porcelana blanca marfil con una onda de sonido serigrafíada en oro mate de precisión y un anillo base dorado en latón mate. Un pequeño tachón de latón marca el grip del asa.',
      objectDescription: 'Porcelana de alta temperatura con esmalte marfil liso y mate. La forma de onda se aplica con lustre metálico dorado cocido en una segunda temperatura, creando un relieve táctil sobre la superficie blanca cruda.',
      price: 96,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Oro',
      stockCountRemaining: 18,
      paletteColors: [
        { name: 'Blanco Marfil Mate', hex: '#F0EDE6' },
        { name: 'Lustre Oro Mate', hex: '#C9A050' }
      ],
      specs: {
        extractionStyle: 'Delicado, claridad floral con un final largo y resonante',
        flowRate: 'Drenaje uniforme medio',
        capacity: '1–2 Tazas (dosis 14g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Porcelana de alta temperatura con detallado en lustre dorado y anillo de latón',
        origin: 'Valle de Silaria',
        weight: '330g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '93°C',
          brewTime: '2:50 min',
          ratio: '1:16.7',
          grindSize: 'Media'
        }
      },
      tagline: 'Cada vertido, una frecuencia.',
      visualType: 'core-black'
    },
    {
      id: 'nature-colibri-andes',
      numberCode: '12',
      collection: 'Nature',
      categoryTag: 'Editions',
      dropCode: 'BIO 01',
      eyebrow: 'BIO 01',
      name: 'Colibrí & Bosque de Niebla',
      headline: 'El rocío fresco sobre las hojas verdes y el aleteo fugaz al amanecer.',
      story: 'Esculpido en gres crema moteado con nervaduras exteriores en forma de alas aerodinámicas, un agarre en pico alado y una cámara interior en esmalte verde bosque esmeralda brillante, apoyado sobre una peana calada helicoidal con el sello grabado DRYP.',
      objectDescription: 'Las nervaduras interiores verticales bañadas en esmalte esmeralda canalizan un drenaje laminar rápido sin estancamientos, reteniendo la acidez viva, notas florales de jazmín y perfiles cítricos cristalinos.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible (Cumbres de Neblaria)',
      stockCountRemaining: 25,
      paletteColors: [
        { name: 'Gres Crema Moteado', hex: '#EAE5D9' },
        { name: 'Verde Bosque Esmeralda', hex: '#1C4B3A' }
      ],
      specs: {
        extractionStyle: 'Claridad floral brillante, notas cítricas vivas y final limpio',
        flowRate: 'Flujo espiral aerodinámico ágil',
        capacity: '1–2 Tazas (dosis de 15g–25g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres de alta montaña con esmalte vegetal reactivo',
        origin: 'Cumbres de Neblaria',
        weight: '310g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '94°C',
          brewTime: '2:20 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Vitalidad aerodinámica nacida en los bosques de niebla.',
      visualType: 'artist-001'
    },
    {
      id: 'arch-bauhaus-dessau',
      numberCode: '13',
      collection: 'Architecture',
      categoryTag: 'Editions',
      dropCode: 'ARCH 01',
      eyebrow: 'ARQUITECTURA 01',
      name: 'Bauhaus Dessau 1925',
      headline: 'La forma sigue estrictamente a la física del café.',
      story: 'Gotero cerámico en gres marfil chamotado que rinde homenaje a la gramática cromática pura de la Bauhaus: círculo rojo primario, cuña amarillo mostaza y cuadrantes en negro carbón, con asa ergonómica ovalada y base arquitectónica perforada con el grabado DRYP.',
      objectDescription: 'Nervaduras verticales interiores que sostienen el filtro en suspensión uniforme para un drenaje continuo, mientras que la peana calada permite supervisar visualmente la caída de cada gota.',
      price: 88,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Bauhaus',
      stockCountRemaining: 30,
      paletteColors: [
        { name: 'Gres Marfil Bauhaus', hex: '#EDE8DF' },
        { name: 'Rojo Cadmio Primario', hex: '#D62828' },
        { name: 'Amarillo Mostaza Geométrico', hex: '#D4A017' },
        { name: 'Negro Carbón Mate', hex: '#1C1C1C' }
      ],
      specs: {
        extractionStyle: 'Claridad cristalina, notas dulces definidas y balance limpio',
        flowRate: 'Descenso directo lineal medio-rápido',
        capacity: '1–2 Tazas (dosis de 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres refractario arena cocido a 1280°C',
        origin: 'Atelier Bauhaus • Cumbres de Neblaria',
        weight: '360g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Arquitectura funcionalista pura para tu mesa de café.',
      visualType: 'brutalist'
    },
    {
      id: 'arch-origami-fold',
      numberCode: '22',
      collection: 'Architecture',
      categoryTag: 'Editions',
      dropCode: 'ARCH 02',
      eyebrow: 'ARQUITECTURA 02',
      name: 'Pagoda Eaves — Kioto',
      headline: 'Aleros arquitectónicos escalonados que guían el agua con serenidad zen.',
      story: 'Gotero cerámico de gres arena moteado inspirado en los aleros voladizos de las pagodas clásicas de Kioto. Cuenta con techumbre cerámica escalonada, doble pico vertedor, asa geométrica en ébano negro y una peana calada en pilares estilo Torii con sello DRYP.',
      objectDescription: 'Nervaduras interiores verticales que emulan la carpintería tradicional de vigas japonesas, permitiendo una desgasificación uniforme y un drenaje continuo que resalta la dulzura delicada y baja acidez del café.',
      price: 94,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Kioto',
      stockCountRemaining: 22,
      paletteColors: [
        { name: 'Gres Arena Kioto', hex: '#DDD8CE' },
        { name: 'Ébano Negro Quemado', hex: '#1C1B1A' }
      ],
      specs: {
        extractionStyle: 'Cuerpo suave y redondo con dulzura delicada y baja acidez',
        flowRate: 'Lento-medio, drenaje uniforme',
        capacity: '1–2 Tazas (dosis 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres moteado de alta temperatura con base calada estilo Torii',
        origin: 'Unidad de Arquitectura • Cumbres de Neblaria',
        weight: '380g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '93°C',
          brewTime: '3:00 min',
          ratio: '1:16.5',
          grindSize: 'Media-gruesa'
        }
      },
      tagline: 'Aleros de pagoda escalonados. Un vertido consciente cada mañana.',
      visualType: 'brutalist'
    },
    {
      id: 'retro-super-mushroom',
      numberCode: '28',
      collection: 'Retro',
      categoryTag: 'Editions',
      dropCode: 'RETRO 03',
      eyebrow: 'RETRO 03',
      name: 'Super Mushroom 1-UP',
      headline: 'Ese sonido inconfundible al conseguir una vida extra: energía instantánea para conquistar la mañana.',
      story: 'Gotero cerámico cocido a 1.280°C que homenajea directamente al legendario Super Champiñón de Nintendo. Esmaltado en rojo carmín vibrante con grandes lunares blanco crema moteados, sobre una base arqueada con los icónicos ojos negros ovalados y el grabado DRYP.',
      objectDescription: 'Nervaduras verticales interiores que favorecen una oxigenación constante y drenaje equilibrado. La silueta redondeada tipo cúpula ayuda a concentrar los aromas más dulces y frutales del café.',
      price: 90,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición 1-UP',
      stockCountRemaining: 24,
      paletteColors: [
        { name: 'Rojo Carmín Champiñón', hex: '#D62828' },
        { name: 'Blanco Crema Moteado', hex: '#EBE7DF' },
        { name: 'Negro Ojo 8-bit', hex: '#111111' }
      ],
      specs: {
        extractionStyle: 'Acidez jugosa y brillante con notas de frutos rojos y final acaramelado',
        flowRate: 'Drenaje medio-rápido y enérgico',
        capacity: '1–2 Tazas (dosis 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres esmaltado brillante con base arqueada mate',
        origin: 'Retro Lab • Cumbres de Neblaria',
        weight: '375g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '93°C',
          brewTime: '2:35 min',
          ratio: '1:16.25',
          grindSize: 'Media'
        }
      },
      tagline: 'Una vida extra para tu ritual de cada mañana.',
      visualType: 'core'
    },
    {
      id: 'nature-botanical-wings',
      numberCode: '15',
      collection: 'Nature',
      categoryTag: 'Editions',
      dropCode: 'BIO 02',
      eyebrow: 'BIO 02',
      name: 'Alas de Mariposa Monarca',
      headline: 'La delicadeza ingrávida de las alas de mariposa abriéndose a la luz matutina.',
      story: 'Esculpido en cerámica negra aterciopelada con celdas aladas esmaltadas en un vivo naranja ambarino, borde ondulado en pétalos, vertedor de apoyo en ala y base helicoidal calada con el sello grabado DRYP.',
      objectDescription: 'Las nervaduras interiores acanaladas actúan como conductos de ventilación natural, logrando una extracción uniforme y una gran estabilidad térmica que resalta notas florales, dulzor a melocotón y una acidez brillante.',
      price: 90,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible (Cumbres de Neblaria)',
      stockCountRemaining: 20,
      paletteColors: [
        { name: 'Naranja Monarca Ámbar', hex: '#E07A2B' },
        { name: 'Negro Carbón Aterciopelado', hex: '#1F1F1F' }
      ],
      specs: {
        extractionStyle: 'Sensación sedosa en boca, intensas notas florales de jazmín y acidez brillante',
        flowRate: 'Drenaje aerodinámico convectivo',
        capacity: '1–2 Tazas (dosis de 15g–26g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Porcelana fina marfil con relieve botánico en esmalte reactivo',
        origin: 'Bio Atelier • Cumbres de Neblaria',
        weight: '320g',
        idealRecipe: {
          dose: '15g',
          water: '250ml',
          temperature: '94°C',
          brewTime: '2:25 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Venación biomimética que traduce la naturaleza en café extraordinario.',
      visualType: 'artist-001'
    },
    {
      id: 'fossil-skull-trex',
      numberCode: '16',
      collection: 'Prehistoric',
      categoryTag: 'Editions',
      dropCode: 'DROP 001',
      eyebrow: 'PALEO 03',
      name: 'Fossil Skull T-Rex',
      headline: 'Millones de años de evolución colosal despertando con la primera gota de agua hirviendo.',
      story: 'Esculpido en gres chamotado verde musgo fosilizado con el perfil grabado de un cráneo de terópodo, borde festoneado en vértebras y una robusta base trípode en garra con el sello DRYP.',
      objectDescription: 'El interior esmaltado en crema con nervaduras vertebrales verticales asegura un drenaje lineal equilibrado, mientras que el denso gres volcánico proporciona una inercia térmica excepcional.',
      price: 96,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible (042 / 100 piezas numeradas)',
      stockCountRemaining: 42,
      paletteColors: [
        { name: 'Verde Musgo Fosilizado', hex: '#3E4E43' },
        { name: 'Esmalte Hueso Crema', hex: '#EAE5D9' }
      ],
      specs: {
        extractionStyle: 'Extracción profunda y dulce, cuerpo caramelizado denso y acidez redonda',
        flowRate: 'Drenaje vertical directo constante',
        capacity: '1–2 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres arenisca poroso de alta temperatura horneado a 1280°C',
        origin: 'Paleo Atelier • Valle de Silaria',
        weight: '390g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:50 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Anatomía de depredador mesozoico traducida en un ritual de café inolvidable.',
      visualType: 'fossil-t'
    },
    {
      id: 'prehistoric-marine-plesiosaur',
      numberCode: '08',
      collection: 'Prehistoric',
      categoryTag: 'Editions',
      dropCode: 'PALEO 02',
      eyebrow: 'PALEO 02',
      name: 'Plesiosaur Marine Spiral',
      headline: 'La espiral abisal de los mares jurásicos, fosilizada en gres azul petróleo.',
      story: 'Gotero cerámico cocido a 1.280°C en esmalte azul petróleo marino moteado con estrías helicoidales continuas, borde superior ondulado en forma de ola marina y una majestuosa asa en espiral fósil de amonita. Reposa sobre una peana trípode arqueada con doble ventana grabada con el sello DRYP.',
      objectDescription: 'Las nervaduras helicoidales internas inducen un flujo en vórtice controlado que oxigena la extracción y favorece una solubilidad uniforme, resaltando la nitidez aromática, acidez limpia y notas minerales de cafés de origen.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Marina',
      stockCountRemaining: 26,
      paletteColors: [
        { name: 'Azul Petróleo Abisal', hex: '#2D6A75' },
        { name: 'Bizcocho Cerámico Cálido', hex: '#B88F68' }
      ],
      specs: {
        extractionStyle: 'Claridad aromática superior, acidez marina limpia y dulzura estructurada',
        flowRate: 'Fluido helicoidal constante, drenaje en vórtice',
        capacity: '1–2 Tazas (dosis 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres chamotado de alta temperatura esmaltado a 1.280°C',
        origin: 'Taller Paleo • Cumbres de Neblaria',
        weight: '385g',
        idealRecipe: {
          dose: '16g',
          water: '260ml',
          temperature: '93°C',
          brewTime: '2:45 min',
          ratio: '1:16.25',
          grindSize: 'Media'
        }
      },
      tagline: 'Mareas jurásicas milenarias en cada vertido.',
      visualType: 'core'
    },
    {
      id: 'orbital-gyro-kinetic',
      numberCode: '21',
      collection: 'Experimental',
      categoryTag: 'Lab',
      dropCode: 'EXP 01',
      eyebrow: 'EXPERIMENTAL 01',
      name: '21 / Orbital Gyro',
      headline: 'La física orbital y la suspensión giroscópica esculpidas en gres volcánico y latón.',
      story: 'Cono de gres moteado arena con exoesqueleto helicoidal ventilado y anillo orbital de latón macizo. Inspirado en giroscopios náuticos y órbitas celestes para mantener la inercia del vertido suspendida en equilibrio.',
      objectDescription: 'Las estrías espirales interiores guían el agua a 93\u00A0°C con un caudal laminar continuo, mientras la masa del anillo metálico actúa como contrapeso cinético y estabilizador térmico exterior.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Experimental',
      stockCountRemaining: 25,
      paletteColors: [
        { name: 'Gres Arena Moteado', hex: '#E2DDD3' },
        { name: 'Latón Macizo Dorado', hex: '#C4A35A' },
        { name: 'Terracota Volcánico', hex: '#A85A3C' }
      ],
      specs: {
        extractionStyle: 'Flujo laminar constante, acidez brillante y cuerpo sedoso suspendido',
        flowRate: '3.8 ml/s continuo laminar',
        capacity: '1–3 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres chamotado arena horneado a 1.280\u00A0°C con eje y esfera de latón macizo',
        origin: 'Atelier Experimental • Medellín',
        weight: '390g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:40 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Escultura giroscópica experimental para el ritual de café lento.',
      visualType: 'core'
    },
    {
      id: 'art-classical-muse',
      numberCode: '22',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 01',
      eyebrow: 'ARTE 01',
      name: '22 / Musa Clásica',
      headline: 'La escultura clásica helénica traducida a geometría de vertido funcional.',
      story: 'Gres marmóreo texturizado con busto helénico esculpido a mano. Las ondas del cabello guían el flujo interior hacia un vertido dulce y cristalino.',
      objectDescription: 'Las nervaduras interiores nacen orgánicamente del cabello esculpido clásico, suspendiendo el filtro cónico en cámara de aire para una extracción homogénea y limpia.',
      price: 94,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Arte',
      stockCountRemaining: 20,
      paletteColors: [
        { name: 'Mármol Marfil Clásico', hex: '#E6E0D4' },
        { name: 'Arenisca Crema Cálida', hex: '#D8CEBE' },
        { name: 'Terracota Volcánico', hex: '#A85A3C' }
      ],
      specs: {
        extractionStyle: 'Extracción cristalina, dulzor floral equilibrado y tacto sedoso en boca',
        flowRate: '4.0 ml/s espiral fluido continuo',
        capacity: '1–3 Tazas (dosis de 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres fino chamotado marfil y polvo de cuarzo cocido a 1.280\u00A0°C',
        origin: 'Atelier de Arte Clásico • Medellín',
        weight: '410g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '93°C',
          brewTime: '2:45 min',
          ratio: '1:16.6',
          grindSize: 'Media'
        }
      },
      tagline: 'Busto clásico esculpido a mano en homenaje al ritual eterno del café.',
      visualType: 'artist-001'
    },
    {
      id: 'art-calder-primary',
      numberCode: '24',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 02',
      eyebrow: 'ARTE 02',
      name: 'Calder Primary',
      headline: 'El equilibrio imposible de un móvil de Calder suspendido en el aire: gravedad domada por la gracia de la forma.',
      story: 'Cono de gres blanco moteado pintado con formas geométricas primarias en rojo, azul, negro y amarillo — divididas por líneas pintadas a mano — inspiradas en los móviles cinéticos de Alexander Calder. Base trípode con anillo negro.',
      objectDescription: 'Gres moteado de alta temperatura con esmalte bajo cubierta aplicado a mano. Cada campo de color es pintado individualmente antes de la cocción final, haciendo de cada pieza una composición única dentro del mismo patrón.',
      price: 98,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Arte',
      stockCountRemaining: 16,
      paletteColors: [
        { name: 'Blanco Natural Moteado', hex: '#EAE7E1' },
        { name: 'Rojo Calder', hex: '#CC2929' },
        { name: 'Azul Primario', hex: '#1A3A6B' },
        { name: 'Amarillo Dorado', hex: '#D4A017' }
      ],
      specs: {
        extractionStyle: 'Acidez viva y brillante balanceada con un cuerpo dulce y redondo',
        flowRate: 'Drenaje equilibrado medio',
        capacity: '1–3 Tazas (dosis 15g–30g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres moteado de alta temperatura con esmalte bajo cubierta',
        origin: 'Atelier de Arte Clásico • Medellín',
        weight: '390g',
        idealRecipe: {
          dose: '17g',
          water: '280ml',
          temperature: '93°C',
          brewTime: '2:55 min',
          ratio: '1:16.5',
          grindSize: 'Media'
        }
      },
      tagline: 'Colores primarios. Forma pura. Un vertido perfecto.',
      visualType: 'artist-001'
    },
    {
      id: 'art-figma-canvas',
      numberCode: '27',
      collection: 'Art',
      categoryTag: 'Artists',
      dropCode: 'ART 03',
      eyebrow: 'FIGMA 01',
      name: 'Figma Vector Canvas',
      headline: 'Diseñado en curvas Bézier, vitrificado a 1.280°C.',
      story: 'Gotero cerámico escultórico y modular que rinde homenaje directo al icónico sistema de color de Figma. Presenta cinco pétalos cerámicos esmaltados en los tonos rojo coral, naranja, violeta, azul eléctrico y verde de la marca, apoyados sobre una base articulada de cuatro apoyos con sello DRYP.',
      objectDescription: 'La arquitectura segmentada en pétalos genera canales de flujo vertical internos independientes para una extracción balanceada y limpia. Cada bloque de color es esmaltado a mano con pigmentos cerámicos mates de alta precisión.',
      price: 99,
      currency: 'USD',
      stockStatus: 'available',
      stockLabel: 'Disponible • Edición Figma',
      stockCountRemaining: 15,
      paletteColors: [
        { name: 'Rojo Coral Figma', hex: '#F24E1E' },
        { name: 'Naranja Figma', hex: '#FF7262' },
        { name: 'Violeta Figma', hex: '#A259FF' },
        { name: 'Azul Figma', hex: '#1ABCFE' },
        { name: 'Verde Figma', hex: '#0ACF83' }
      ],
      specs: {
        extractionStyle: 'Acidez brillante y llena de matices con cuerpo sedoso y notas cristalinas',
        flowRate: 'Drenaje multicanal por pétalos',
        capacity: '1–2 Tazas (dosis 15g–28g)',
        filterType: 'Filtros cónicos estándar 02',
        material: 'Gres modular con esmaltes de color y base blanca hueso chamotada',
        origin: 'Atelier Digital • Medellín',
        weight: '420g',
        idealRecipe: {
          dose: '18g',
          water: '300ml',
          temperature: '94°C',
          brewTime: '2:50 min',
          ratio: '1:16.6',
          grindSize: 'Media-Fina'
        }
      },
      tagline: 'Del lienzo digital al ritual táctil de cada mañana.',
      visualType: 'artist-001'
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
      headline: "Coffee objects shouldn't all look the same.",
      story: "Neblaria wood-fired batch. Each unit carried individual thumb impressions from the potter's wheel.",
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
      story: 'Estrías vertebrales de gres y arcilla con chamota volcánica. 150 unidades numeradas y selladas a mano en el Valle de Silaria.',
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
      headline: 'Algunos momentos duraban solo 36 fotos.',
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
      story: 'Lote de quema a leña en Neblaria. Cada unidad conserva la huella dactilar individual del torno alfarero.',
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
    'Drips.',
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
    'Los drips.',
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
    location: 'Heights of Neblaria (2,800m altitude)',
    role: 'Ceramic Sculptor & Studio Potter',
    quote: "Coffee objects shouldn't all look the same.",
    story: 'Working out of his wood-fired mountain sanctuary in the Heights of Neblaria, Camilo pinches and throws each piece using native iron-rich clays from the sacred mountain ranges.',
    processSteps: [
      { name: '01. Clay Selection', desc: 'Native iron-dense clays mixed with silica grog for thermal buffer.' },
      { name: '02. Hand-Carved Master', desc: 'Vertebrae and spiral contours carved directly into wet plaster.' },
      { name: '03. Bisque & Slip Glaze', desc: 'Dipped in natural feldspar and volcanic ash mineral slip.' },
      { name: '04. 1280°C High-Firing', desc: '14 hours in the reduction kiln creating unique flame marks.' }
    ]
  },
  es: {
    name: 'Camilo Restrepo',
    location: 'Cumbres de Neblaria (2.800m de altitud)',
    role: 'Escultor Ceramista y Maestro Alfarero',
    quote: 'Los objetos para café no deberían ser todos iguales.',
    story: 'Desde su taller de montaña a leña en las Cumbres de Neblaria, Camilo modela y tornea cada pieza utilizando arcillas ricas en hierro extraídas de las cordilleras sagradas.',
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
      answer: "Every piece is hand-cast, glazed, and fired in artisan workshops across the Heights of Neblaria and the sacred kilns of Silaria Valley. We ship globally in custom shock-absorbing molded fiber packaging with full transit insurance."
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
      answer: "Cada pieza se cuela, esmalta y quema a mano en talleres artesanales de las Cumbres de Neblaria y los hornos sagrados del Valle de Silaria. Realizamos envíos a todo el mundo en empaques especiales de fibra moldeada amortiguada con seguro total de transporte."
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
