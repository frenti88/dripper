export type DropPhase = 'T-7' | 'T-3' | 'T-1' | 'LIVE';

export interface DropStageConfig {
  phase: DropPhase;
  label: string;
  badge: string;
  headline: string;
  subheadline: string;
  countdownText?: string;
  visualFocus: 'concept' | 'texture' | 'silhouette' | 'full';
  storySnippet: string;
  ctaText: string;
  ctaAction: 'notify' | 'explore' | 'preorder' | 'buy';
  availabilityNotice: string;
}

export interface CoffeeSpec {
  extractionStyle: string; // e.g. "Clean, dynamic body with pronounced aromatics"
  flowRate: string; // e.g. "Medium-fast spiral drainage via internal rib architecture"
  capacity: string; // e.g. "1–2 Cups (15g–30g coffee dose)"
  filterType: string; // e.g. "Standard 02 Conical paper filters (V60 / Cafec)"
  material: string; // e.g. "High-fired vitrified porcelain with mineral glaze"
  origin: string; // e.g. "Medellín / Kyoto studio"
  weight: string; // e.g. "290g"
  idealRecipe: {
    dose: string;
    water: string;
    temperature: string;
    brewTime: string;
    ratio: string;
    grindSize: string;
  };
}

export interface Product {
  id: string;
  numberCode: string; // e.g. "01", "02", "03"
  collection: string; // "Core", "Prehistoric", "Lens", "Artists", "Architecture", "Space", "Cities"
  categoryTag: 'Core' | 'Editions' | 'Artists' | 'Drops' | 'Lab';
  eyebrow: string;
  name: string;
  headline: string; // Level 1: EMOCIÓN (e.g. "You never really outgrow dinosaurs.")
  story: string; // Level 2: HISTORIA (2-3 sentences)
  objectDescription: string; // Level 3: OBJETO (Geometry, tactile texture, flow dynamics)
  price: number;
  currency: string;
  editionTotal?: number; // e.g. 150
  currentPieceNumber?: string; // e.g. "037 / 150"
  stockStatus: 'available' | 'low_stock' | 'sold_out' | 'upcoming';
  stockLabel: string; // "Pick your favorite", "Almost gone", "Gone for now", "037 / 150"
  stockCountRemaining?: number;
  specs: CoffeeSpec;
  paletteColors: { name: string; hex: string }[];
  tagline: string;
  dropCode: string;
  isHero?: boolean;
  visualType: 'fossil-t' | 'fossil-raptor' | 'core' | 'core-black' | 'lens-50' | 'brutalist' | 'orbit' | 'artist-001' | 'medellin' | 'flow-01';
  artistName?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface ArchiveDrop {
  id: string;
  code: string;
  title: string;
  theme: string;
  year: string;
  headline: string;
  story: string;
  itemsCount: number;
  status: 'Gone for now' | 'Archived';
  coverAccent: string;
}

export interface BentoCategory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  affinityTheme: string;
  imageAccent: string;
  gridSpan: string;
  badge?: string;
}
