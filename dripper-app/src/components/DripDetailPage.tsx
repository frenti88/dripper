import React, { useState, useEffect } from 'react';
import type { DrypDrip } from '../data/pinterestPinsData';
import { DRYP_DRIPS } from '../data/pinterestPinsData';
import type { Product } from '../types';
import { PinCard } from './PinCard';
import { MorphIcon } from 'morphicons/react';
import { 
  ArrowLeft, 
  Bookmark, 
  ShoppingBag, 
  Share2, 
  Check, 
  ArrowUpRight,
  Compass
} from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';
import { playCeramicChime, playPressStamp } from '../utils/audioSynth';

export interface DripDetailPageProps {
  drip: DrypDrip;
  onBack: () => void;
  onSelectDrip: (drip: DrypDrip) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onAddToCart: (productId: string, selectedColor: string) => void;
  isAdded?: boolean;
  savedDripIds?: Set<string>;
  addedProductId?: string | null;
}



export const DripDetailPage: React.FC<DripDetailPageProps> = ({
  drip,
  onBack,
  onSelectDrip,
  isSaved,
  onToggleSave,
  onAddToCart,
  isAdded = false,
  savedDripIds,
  addedProductId
}) => {
  const { products, language } = useLanguage();

  // Match full product specs from localized data
  const product: Product | undefined = drip.productId
    ? products.find(p => p.id === drip.productId)
    : undefined;

  const [prevDripId, setPrevDripId] = useState(drip.id);
  const [selectedColor, setSelectedColor] = useState<string>(
    () => (product && product.paletteColors.length > 0 ? product.paletteColors[0].name : '')
  );
  const [copiedLink, setCopiedLink] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (drip.id !== prevDripId) {
    setPrevDripId(drip.id);
    if (product && product.paletteColors.length > 0) {
      setSelectedColor(product.paletteColors[0].name);
    }
    setQuantity(1);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [drip.id]);

  const handleShare = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Ignore in restricted environments
    }
  };

  const handleAddToCartClick = () => {
    if (drip.productId) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(drip.productId, selectedColor || 'Standard');
      }
      playPressStamp();
    }
  };

  // Filter related drippers (exclusive of current drip)
  const relatedDrippers = DRYP_DRIPS.filter(d => d.id !== drip.id).sort((a, b) => {
    // Prioritize same category first
    if (a.category === drip.category && b.category !== drip.category) return -1;
    if (b.category === drip.category && a.category !== drip.category) return 1;
    return 0;
  }).slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] text-[#151413] pb-28 lg:pb-24 animate-in fade-in duration-300">
      
      {/* ── STICKY TOP BAR: UNIFIED BREADCRUMB + DIRECT ACTIONS ────────────── */}
      <nav 
        aria-label="Navegación de producto"
        className="sticky top-[65px] z-30 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e3da] px-4 md:px-8 py-3.5 transition-colors"
      >
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          
          {/* Unified Back & Breadcrumb Link */}
          <div className="flex items-center min-w-0">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2.5 text-base font-mono text-[#4b463f] hover:text-[#151413] transition-colors cursor-pointer min-w-0"
              title={language === 'es' ? 'Volver al catálogo' : 'Back to catalog'}
            >
              <span className="w-8 h-8 rounded-full bg-[#f4efea] border border-[#e8e3da] flex items-center justify-center group-hover:bg-[#eae3d8] transition-colors shrink-0">
                <MorphIcon icon={ArrowLeft} size={16} strokeWidth={2.2} reducedMotion="user" className="group-hover:-translate-x-0.5 transition-transform" />
              </span>
              <span className="font-semibold text-[#151413] whitespace-nowrap">
                {language === 'es' ? 'Catálogo' : 'Catalog'}
              </span>
              <span className="text-[#c8c2b7] select-none">/</span>
              <span className="text-[#756f66] group-hover:text-[#151413] truncate max-w-[180px] sm:max-w-[340px]">
                {drip.title.split('—')[0].trim()}
              </span>
            </button>
          </div>

          {/* Direct Quick Actions: Share & Save */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e8e3da] bg-[#f4efea] hover:bg-[#eae3d8] text-[#4b463f] hover:text-[#151413] text-base font-mono transition-colors cursor-pointer whitespace-nowrap"
              title={language === 'es' ? 'Copiar enlace directo' : 'Copy direct link'}
            >
              <MorphIcon 
                icon={copiedLink ? Check : Share2} 
                size={16} 
                strokeWidth={2} 
                className={copiedLink ? 'text-[#15803d]' : ''} 
                reducedMotion="user" 
              />
              <span>{copiedLink ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Compartir' : 'Share')}</span>
            </button>

            <button
              onClick={() => {
                onToggleSave(drip.id);
                if (!isSaved) playCeramicChime();
              }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isSaved 
                  ? 'bg-[#151413] text-[#faf8f5] shadow-xs' 
                  : 'bg-[#f4efea] hover:bg-[#eae3d8] text-[#151413] border border-[#e8e3da]'
              }`}
            >
              <MorphIcon 
                icon={isSaved ? Check : Bookmark} 
                size={16} 
                strokeWidth={2} 
                reducedMotion="user" 
              />
              <span>{isSaved ? (language === 'es' ? 'En tu repisa' : 'Saved to shelf') : (language === 'es' ? 'Guardar' : 'Save')}</span>
            </button>
          </div>

        </div>
      </nav>

      {/* ── MAIN EDITORIAL SHOWCASE SECTION ─────────────────────────────────── */}
      <main className="max-w-[1360px] mx-auto px-4 md:px-8 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* ── LEFT 7-COLS: VISUAL GALLERY (STICKY VIEWPORT ANCHOR) ─────────── */}
          <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-[92px] self-start">
            
            {/* Primary High-Resolution Ceramic Showcase Frame */}
            <div 
              style={{ viewTransitionName: 'drip-hero-image' }}
              className="relative w-full aspect-square rounded-[16px] overflow-hidden bg-[#f4efea] border border-[#e8e3da] shadow-xs flex items-center justify-center group"
            >
              <img
                src={drip.imageSrc}
                alt={drip.title}
                width={800}
                height={800}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* ── RIGHT 5-COLS: NARRATIVE, SPECS & PURCHASING ─────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Header, Identity & Narrative Block */}
            <div className="space-y-4">
              {/* Category & Availability Tag Row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#e8e3da] bg-[#f4efea] text-[#4b463f] whitespace-nowrap card-category-badge">
                  {drip.categoryLabel}
                </span>

                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap tabular-nums ${
                  drip.stockStatus === 'sold_out'
                    ? 'bg-[#151413]/5 text-[#756f66] border border-[#e8e3da]'
                    : 'bg-[#15803d]/10 text-[#15803d] border border-[#15803d]/25'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    drip.stockStatus === 'sold_out' ? 'bg-[#756f66]' : 'bg-[#15803d] animate-pulse'
                  }`} />
                  {drip.stockStatus === 'sold_out'
                    ? (language === 'es' ? 'Agotado' : 'Sold Out')
                    : (drip.stockLabel || (language === 'es' ? 'Disponible (Cumbres de Neblaria)' : 'Available (Neblaria Highlands)'))}
                </span>
              </div>

              {/* Title */}
              <h1 
                style={{ viewTransitionName: 'drip-hero-title' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-headline font-bold text-[#151413] tracking-tight leading-[1.1] text-balance"
              >
                {drip.title}
              </h1>

              {/* Sensorial Emotion Callout */}
              <div className="ps-3.5 border-s-2 border-[#c05a3e]">
                <p className="font-serif italic text-lg sm:text-xl text-[#151413] leading-relaxed text-pretty">
                  “{drip.level01Emotion || drip.subtitle}”
                </p>
              </div>

              {/* Synthesized Narrative Concept */}
              <p className="text-base sm:text-lg text-[#4b463f] leading-[1.65] font-sans max-w-[65ch] text-pretty">
                {drip.subtitle}
              </p>
            </div>

            {/* 2. Technical Specifications - Refined Minimalist Data Card */}
            <div className="p-4 sm:p-5 bg-[#f4efea] rounded-[16px] border border-[#e8e3da] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#756f66] flex items-center gap-2">
                <MorphIcon icon={Compass} size={16} strokeWidth={2} reducedMotion="user" />
                <span>{language === 'es' ? 'Extracción' : 'Extraction'}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 text-xs sm:text-sm font-mono">
                <div className="min-w-0">
                  <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Filtro' : 'Filter'}</span>
                  <span className="font-bold text-[#151413] block leading-snug break-words tabular-nums">{product?.specs.filterType || 'Cónico 60°'}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Flujo' : 'Flow'}</span>
                  <span className="font-bold text-[#151413] block leading-snug break-words">{product?.specs.flowRate || '4.2 ml/s'}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Capacidad' : 'Capacity'}</span>
                  <span className="font-bold text-[#151413] block leading-snug break-words tabular-nums">{(product?.specs.capacity || '1–4 tazas').replace('-', '–')}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Origen' : 'Origin'}</span>
                  <span className="font-bold text-[#151413] block leading-snug break-words">{product?.specs.origin || 'Medellín'}</span>
                </div>
              </div>
            </div>

            {/* 3. Integrated Purchase & Glaze Configuration Console */}
            <div className="p-6 bg-white rounded-[16px] border border-[#e8e3da] shadow-sm space-y-5">
              
              {/* Price */}
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-[#151413] tabular-nums tracking-tight">
                    ${drip.price || product?.price || 84}
                  </span>
                  <span className="text-sm font-mono text-[#756f66] tracking-normal">USD</span>
                </div>
              </div>

              {/* Quantity Selector & Add to Bag CTA */}
              <div className="flex items-center gap-3 pt-1">
                
                {/* Quantity Buttons (40px Accessible Hit Area) */}
                <div className={`flex items-center border border-[#e8e3da] rounded-full bg-[#faf8f5] p-1 shrink-0 ${drip.stockStatus === 'sold_out' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1 || drip.stockStatus === 'sold_out'}
                    aria-label="Reducir cantidad"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium text-[#151413] hover:bg-[#eae3d8] disabled:opacity-30 cursor-pointer transition-colors select-none"
                  >
                    -
                  </button>
                  <span className="w-9 text-center text-sm font-mono font-bold text-[#151413] tabular-nums select-none">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                    disabled={drip.stockStatus === 'sold_out'}
                    aria-label="Aumentar cantidad"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium text-[#151413] hover:bg-[#eae3d8] disabled:opacity-30 cursor-pointer transition-colors select-none"
                  >
                    +
                  </button>
                </div>

                {/* Big Primary Action Button */}
                <button
                  type="button"
                  onClick={handleAddToCartClick}
                  disabled={drip.stockStatus === 'sold_out'}
                  className={`flex-1 min-h-[52px] py-3.5 px-6 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap ${
                    drip.stockStatus === 'sold_out'
                      ? 'bg-[#eae5dd] text-[#8a8377] border border-[#dcd6ca] cursor-not-allowed'
                      : isAdded
                      ? 'bg-[#15803d] text-white shadow-md active:scale-98 cursor-pointer'
                      : 'bg-[#151413] hover:bg-[#252c26] text-[#faf8f5] active:scale-98 cursor-pointer'
                  }`}
                >
                  <MorphIcon 
                    icon={isAdded ? Check : ShoppingBag} 
                    size={18} 
                    strokeWidth={2.2} 
                    spring="snappy" 
                    reducedMotion="user" 
                    className={drip.stockStatus === 'sold_out' ? 'text-[#8a8377]' : ''}
                  />
                  <span>
                    {drip.stockStatus === 'sold_out'
                      ? (language === 'es' ? 'Agotado por ahora' : 'Sold Out')
                      : isAdded 
                      ? (language === 'es' ? 'Añadido a la bolsa' : 'Added to bag')
                      : (language === 'es' ? 'Añadir a la bolsa' : 'Add to bag')}
                  </span>
                </button>
              </div>

              {/* Atelier Trust Bullet Points */}
              <div className="pt-3 border-t border-[#e8e3da]/70 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#756f66] font-mono tabular-nums">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Cerámica 1.280\u00A0°C' : '1,280\u00A0°C Ceramic'}
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Envío asegurado' : 'Insured shipping'}
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Taller Medellín' : 'Medellín Atelier'}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ── BOTTOM SECTION: RELATED DRIPPERS GRID ───────────────────────── */}
        <section aria-labelledby="related-drippers-title" className="mt-16 pt-10 border-t border-[#e8e3da]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-7">
            <h2 id="related-drippers-title" className="text-xl sm:text-2xl font-headline font-bold text-[#151413] tracking-tight leading-tight">
              {language === 'es' ? 'Más del taller' : 'More from the atelier'}
            </h2>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#151413] hover:text-[#c05a3e] transition-colors cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>{language === 'es' ? 'Ver catálogo completo' : 'View full catalog'}</span>
              <MorphIcon icon={ArrowUpRight} size={17} strokeWidth={2} reducedMotion="user" />
            </button>
          </div>

          {/* 4-Column Card Grid of Related Drippers using canonical PinCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedDrippers.map((rDrip, idx) => (
              <PinCard
                key={rDrip.id}
                drip={rDrip}
                index={idx}
                isSaved={savedDripIds?.has(rDrip.id) ?? false}
                onToggleSave={onToggleSave}
                onSelectDrip={(selDrip) => {
                  onSelectDrip(selDrip);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onQuickAddToCart={(prodId) => onAddToCart(prodId, 'Standard')}
                isAdded={rDrip.productId === addedProductId}
              />
            ))}
          </div>

        </section>

      </main>

      {/* ── MOBILE STICKY ACTION BAR (HOLDS PRIMARY CTA ACCESSIBLE ON PHONES) ── */}
      <aside 
        aria-label="Acción rápida de compra"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#faf8f5]/95 backdrop-blur-md border-t border-[#e8e3da] px-4 py-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg flex items-center justify-between gap-3"
      >
        <div className="min-w-0">
          <span className="text-base font-mono text-[#756f66] uppercase block truncate tracking-wider">
            {drip.title.split('—')[0].trim()}
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold font-mono text-[#151413] tabular-nums tracking-tight">
              ${drip.price || product?.price || 84}
            </span>
            <span className="text-base font-mono text-[#756f66]">USD</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddToCartClick}
          disabled={drip.stockStatus === 'sold_out'}
          className={`min-h-[46px] py-2.5 px-5 rounded-full font-bold text-base uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 whitespace-nowrap ${
            drip.stockStatus === 'sold_out'
              ? 'bg-[#eae5dd] text-[#8a8377] border border-[#dcd6ca] cursor-not-allowed'
              : isAdded
              ? 'bg-[#15803d] text-white active:scale-95 cursor-pointer'
              : 'bg-[#151413] text-[#faf8f5] active:scale-95 cursor-pointer'
          }`}
        >
          <MorphIcon 
            icon={isAdded ? Check : ShoppingBag} 
            size={17} 
            strokeWidth={2.2} 
            spring="snappy" 
            reducedMotion="user" 
            className={drip.stockStatus === 'sold_out' ? 'text-[#8a8377]' : ''}
          />
          <span>
            {drip.stockStatus === 'sold_out'
              ? (language === 'es' ? 'Agotado' : 'Sold Out')
              : isAdded 
              ? (language === 'es' ? 'Añadido a la bolsa' : 'Added to bag')
              : (language === 'es' ? 'Añadir a la bolsa' : 'Add to bag')}
          </span>
        </button>
      </aside>

    </div>
  );
};
