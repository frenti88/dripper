import React, { useState, useEffect, useRef } from 'react';
import type { DrypDrip, PinterestPin } from '../data/pinterestPinsData';
import { DRYP_DRIPS, PINTEREST_PINS } from '../data/pinterestPinsData';
import type { Product } from '../types';
import { MorphIcon } from 'morphicons/react';
import { X, Bookmark, ShoppingBag, Share2, Check, Compass } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';
import { playCeramicChime, playPressStamp } from '../utils/audioSynth';

export interface DripDetailModalProps {
  drip?: DrypDrip | null;
  pin?: PinterestPin | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onAddToCart: (productId: string, selectedColor: string) => void;
  onSelectDrip?: (drip: DrypDrip) => void;
  onSelectPin?: (pin: PinterestPin) => void;
  isAdded?: boolean;
}

export type PinDetailModalProps = DripDetailModalProps;

export const DripDetailModal: React.FC<DripDetailModalProps> = ({
  drip,
  pin,
  onClose,
  isSaved,
  onToggleSave,
  onAddToCart,
  onSelectDrip,
  onSelectPin,
  isAdded = false
}) => {
  const item = drip ?? pin ?? null;
  const { products, language } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [modalImgError, setModalImgError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Link to full product data if applicable
  const product: Product | undefined = item?.productId 
    ? products.find(p => p.id === item.productId) 
    : undefined;

  // Adjust state during render when item changes to avoid cascading renders
  const [prevItemId, setPrevItemId] = useState<string | null>(null);
  if (item && item.id !== prevItemId) {
    setPrevItemId(item.id);
    if (product && product.paletteColors.length > 0) {
      setSelectedColor(product.paletteColors[0].name);
    }
  }

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => closeBtnRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [item, onClose]);

  if (!item) return null;

  const handleSelectRelated = (rDrip: DrypDrip) => {
    if (onSelectDrip) onSelectDrip(rDrip);
    else if (onSelectPin) onSelectPin(rDrip);
  };

  // Related drips for "Más como esto"
  const relatedDrips = (DRYP_DRIPS || PINTEREST_PINS).filter(
    p => p.id !== item.id && (p.category === item.category || p.tags.some(t => item.tags.includes(t)))
  ).slice(0, 4);

  const handleShare = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
        setCopiedLink(true);
        playCeramicChime();
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Graceful fallback for restricted clipboard environments
    }
  };

  const handleToggleSaveClick = () => {
    onToggleSave(item.id);
    if (!isSaved) playCeramicChime();
  };

  const handleAddToCartClick = () => {
    if (item.productId) {
      playPressStamp();
      onAddToCart(item.productId, selectedColor || 'Default');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#121613]/55 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#faf8f5] rounded-[16px] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-[#d8dcd8]"
      >
        {/* ── LEFT COLUMN: VISUAL GALLERY & CRAFT FOUNDATION ─────────────────── */}
        <div className="w-full md:w-[48%] bg-[#f4efea] flex flex-col justify-between p-5 sm:p-6 md:p-7 border-b md:border-b-0 md:border-e border-[#e8e3da] md:overflow-y-auto shrink-0 space-y-4">
          
          {/* Main Visual Display Frame */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[280px] sm:min-h-[340px] max-h-[460px] rounded-[16px] overflow-hidden bg-[#faf8f5] border border-[#e8e3da] shadow-2xs group">
            {item && item.imageSrc && (
              modalImgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#f4efea] text-[#756f66] p-6 text-center">
                  <span className="font-headline text-lg font-bold text-[#151413]">{item.title}</span>
                  <span className="font-mono text-xs text-[#756f66] mt-1">DRYP Atelier Archive</span>
                </div>
              ) : (
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  onError={() => setModalImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                />
              )
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: NARRATIVE, SPECS & INTEGRATED ACTION ─────────────── */}
        <div className="w-full md:w-[52%] p-5 sm:p-7 md:p-8 flex flex-col justify-between md:overflow-y-auto md:max-h-[92vh] space-y-6 bg-[#faf8f5]">
          
          <div className="space-y-6">
            
            {/* Header Navigation Bar */}
            <div className="flex items-center justify-end gap-3">
              {/* Action Controls: Share, Save, Close */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleShare}
                  className="w-9 h-9 rounded-full bg-[#f4efea] hover:bg-[#eae3d8] border border-[#e8e3da] text-[#4b463f] hover:text-[#151413] transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  title={language === 'es' ? 'Copiar enlace' : 'Copy link'}
                  aria-label={language === 'es' ? 'Compartir drip' : 'Share drip'}
                >
                  <MorphIcon 
                    icon={copiedLink ? Check : Share2} 
                    size={16} 
                    strokeWidth={2} 
                    spring="snappy" 
                    reducedMotion="user" 
                    className={copiedLink ? "text-[#15803d]" : ""} 
                  />
                </button>

                <button
                  type="button"
                  onClick={handleToggleSaveClick}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-mono font-bold transition-all shadow-xs cursor-pointer shrink-0 ${
                    isSaved
                      ? 'bg-[#151413] text-[#faf8f5]'
                      : 'bg-[#f4efea] hover:bg-[#eae3d8] text-[#151413] border border-[#e8e3da]'
                  }`}
                >
                  <MorphIcon 
                    icon={isSaved ? Check : Bookmark} 
                    size={15} 
                    strokeWidth={2} 
                    spring="snappy" 
                    reducedMotion="user" 
                  />
                  <span>{isSaved ? (language === 'es' ? 'En tu repisa' : 'Saved') : (language === 'es' ? 'Guardar' : 'Save')}</span>
                </button>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-[#f4efea] hover:bg-[#eae3d8] border border-[#e8e3da] text-[#4b463f] hover:text-[#151413] transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
                >
                  <MorphIcon icon={X} size={18} strokeWidth={2} reducedMotion="user" />
                </button>
              </div>

            </div>

            {/* ── 1. EDITORIAL IDENTITY & NARRATIVE BLOCK ───────────────────── */}
            <div className="space-y-3.5">
              
              {/* Category & Availability Tag Row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="card-category-badge px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-[#e8e3da] bg-[#f4efea] text-[#4b463f] whitespace-nowrap">
                  {item.categoryLabel}
                </span>

                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold whitespace-nowrap tabular-nums ${
                  item.stockStatus === 'sold_out'
                    ? 'bg-[#151413]/5 text-[#756f66] border border-[#e8e3da]'
                    : 'bg-[#15803d]/10 text-[#15803d] border border-[#15803d]/25'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.stockStatus === 'sold_out' ? 'bg-[#756f66]' : 'bg-[#15803d] animate-pulse'
                  }`} />
                  {item.stockStatus === 'sold_out'
                    ? (language === 'es' ? 'Agotado' : 'Sold Out')
                    : (item.stockLabel || (language === 'es' ? 'Disponible (Cumbres de Neblaria)' : 'Available (Neblaria Highlands)'))}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-headline font-bold text-[#151413] tracking-tight leading-[1.15] text-balance">
                {item.title}
              </h1>

              {/* Sensorial Emotion Quote */}
              <div className="ps-3.5 border-s-2 border-[#c05a3e]">
                <p className="font-serif italic text-lg sm:text-xl text-[#151413] leading-relaxed text-pretty">
                  “{item.level01Emotion || item.subtitle}”
                </p>
              </div>

              {/* Synthesized Narrative Concept */}
              <p className="text-base text-[#4b463f] leading-[1.65] font-sans max-w-[65ch] text-pretty">
                {item.subtitle}
              </p>

            </div>

            {/* ── 2. TECHNICAL SPECIFICATIONS CARD ──────────────────────────── */}
            {product && (
              <div className="p-4 sm:p-4.5 bg-[#f4efea] rounded-[16px] border border-[#e8e3da] space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#756f66] flex items-center gap-2">
                  <MorphIcon icon={Compass} size={15} strokeWidth={2} reducedMotion="user" />
                  <span>{language === 'es' ? 'Extracción' : 'Extraction'}</span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 text-xs sm:text-sm font-mono">
                  <div className="min-w-0">
                    <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Filtro' : 'Filter'}</span>
                    <span className="font-bold text-[#151413] block leading-snug break-words tabular-nums">{product.specs.filterType}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Flujo' : 'Flow'}</span>
                    <span className="font-bold text-[#151413] block leading-snug break-words">{product.specs.flowRate}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Capacidad' : 'Capacity'}</span>
                    <span className="font-bold text-[#151413] block leading-snug break-words tabular-nums">{product.specs.capacity.replace('-', '–')}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-[#756f66] block uppercase font-mono tracking-wider mb-0.5">{language === 'es' ? 'Origen' : 'Origin'}</span>
                    <span className="font-bold text-[#151413] block leading-snug break-words">{product.specs.origin}</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── 3. INTEGRATED PURCHASE & GLAZE CONSOLE ─────────────────────── */}
            {item.productId && item.price ? (
              <div className="p-4 sm:p-5 bg-white rounded-[16px] border border-[#e8e3da] shadow-sm space-y-4">
                
                {/* Price */}
                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#151413] tabular-nums tracking-tight">
                      ${item.price}
                    </span>
                    <span className="text-xs font-mono text-[#756f66] tracking-normal">USD</span>
                  </div>
                </div>

                {/* Primary Add to Bag Action CTA */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleAddToCartClick}
                    disabled={item.stockStatus === 'sold_out'}
                    className={`w-full min-h-[48px] py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap ${
                      item.stockStatus === 'sold_out'
                        ? 'bg-[#eae5dd] text-[#8a8377] border border-[#dcd6ca] cursor-not-allowed'
                        : isAdded
                        ? 'bg-[#15803d] text-white shadow-md active:scale-98 cursor-pointer'
                        : 'bg-[#151413] hover:bg-[#252c26] text-[#faf8f5] active:scale-98 cursor-pointer'
                    }`}
                  >
                    <MorphIcon 
                      icon={isAdded ? Check : ShoppingBag} 
                      size={17} 
                      strokeWidth={2.2} 
                      spring="snappy" 
                      reducedMotion="user" 
                      className={item.stockStatus === 'sold_out' ? 'text-[#8a8377]' : 'text-white'} 
                    />
                    <span>
                      {item.stockStatus === 'sold_out'
                        ? (language === 'es' ? 'Agotado por ahora' : 'Sold Out')
                        : isAdded
                        ? (language === 'es' ? 'Añadido a la bolsa' : 'Added to bag')
                        : (language === 'es' ? 'Añadir a la bolsa' : 'Add to bag')}
                    </span>
                  </button>
                </div>

                {/* Trust Points */}
                <div className="pt-2 border-t border-[#e8e3da]/70 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#756f66] font-mono tabular-nums">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Cerámica 1.280\u00A0°C' : '1,280\u00A0°C Ceramic'}
                  </span>
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Envío asegurado' : 'Insured shipping'}
                  </span>
                  <span className="flex items-center gap-1.5 whitespace-nowrap col-span-2 sm:col-span-1">
                    <span className="text-[#15803d]">✓</span> {language === 'es' ? 'Taller Medellín' : 'Medellín Atelier'}
                  </span>
                </div>

              </div>
            ) : (
              <div className="p-4 bg-white rounded-[16px] border border-[#e8e3da] shadow-2xs flex items-center justify-between gap-4">
                <span className="text-xs text-[#756f66] font-mono tracking-wide">
                  {language === 'es' ? 'Drip de Archivo & Cultura DRYP.' : 'DRYP. Cultural & Archive Drip'}
                </span>
                <button
                  type="button"
                  onClick={handleToggleSaveClick}
                  className="px-4 py-2 min-h-[40px] rounded-full bg-[#151413] hover:bg-[#252c26] text-[#faf8f5] text-xs font-mono font-bold transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  {isSaved ? (language === 'es' ? 'En tu repisa' : 'Saved') : (language === 'es' ? 'Guardar' : 'Save')}
                </button>
              </div>
            )}

            {/* ── 4. RELATED DRIPS SECTION ─────────────────────────────────── */}
            {relatedDrips.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#756f66]">
                  {language === 'es' ? 'Más drips del taller' : 'More atelier drips'}
                </h4>
                <div className="grid grid-cols-4 gap-2.5">
                  {relatedDrips.map((rDrip) => (
                    <button
                      key={rDrip.id}
                      type="button"
                      onClick={() => handleSelectRelated(rDrip)}
                      className="group/rel cursor-pointer rounded-[12px] overflow-hidden aspect-square bg-[#f4efea] border border-[#e8e3da] relative shadow-2xs hover:shadow-xs transition-all text-start"
                    >
                      <img src={rDrip.imageSrc} alt={rDrip.title} className="w-full h-full object-cover group-hover/rel:scale-[1.03] transition-transform duration-500" />
                      <div className="absolute inset-0 bg-[#151413]/40 opacity-0 group-hover/rel:opacity-100 transition-opacity flex items-end p-2">
                        <span className="text-xs text-white font-medium line-clamp-1 leading-tight text-pretty font-headline">
                          {rDrip.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export const PinDetailModal = DripDetailModal;

