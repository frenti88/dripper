import React, { useState, useEffect, useRef } from 'react';
import type { DrypDrip, PinterestPin } from '../data/pinterestPinsData';
import { DRYP_DRIPS, PINTEREST_PINS } from '../data/pinterestPinsData';
import type { Product } from '../types';
import { X, Bookmark, ShoppingBag, Share2, Check, Droplets } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { playWaterDrop, playSteamExhale } from '../utils/audioSynth';

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
  const [activeImage, setActiveImage] = useState<string>(item?.imageSrc || '');
  const [isPouring, setIsPouring] = useState(false);
  const [pourStep, setPourStep] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleSimulatePour = () => {
    if (isPouring) return;
    setIsPouring(true);
    setPourStep(1);
    playWaterDrop();

    setTimeout(() => {
      setPourStep(2);
      playWaterDrop();
    }, 1100);

    setTimeout(() => {
      setPourStep(3);
      playSteamExhale();
    }, 2200);

    setTimeout(() => {
      setIsPouring(false);
      setPourStep(0);
    }, 3600);
  };

  // Link to full product data if applicable
  const product: Product | undefined = item?.productId 
    ? products.find(p => p.id === item.productId) 
    : undefined;

  useEffect(() => {
    if (item) {
      setActiveImage(item.imageSrc);
      if (product && product.paletteColors.length > 0) {
        setSelectedColor(product.paletteColors[0].name);
      }
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, product]);

  if (!item) return null;

  const handleSelectRelated = (rDrip: DrypDrip) => {
    if (onSelectDrip) onSelectDrip(rDrip);
    else if (onSelectPin) onSelectPin(rDrip);
  };

  // Related drips for "Más como esto"
  const relatedDrips = (DRYP_DRIPS || PINTEREST_PINS).filter(
    p => p.id !== item.id && (p.category === item.category || p.tags.some(t => item.tags.includes(t)))
  ).slice(0, 4);

  const [modalImgError, setModalImgError] = useState(false);

  const handleShare = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Graceful fallback for restricted clipboard environments
    }
  };

  const handleAddToCart = () => {
    if (item.productId) {
      onAddToCart(item.productId, selectedColor || 'Default');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#121613]/55 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-[#d8dcd8]"
      >
        {/* Left Column: Visual Pin Gallery (Pinterest Style) */}
        <div className="w-full md:w-[50%] bg-[#f2f4f2] flex flex-col items-center justify-between p-5 sm:p-7 md:p-8 border-b md:border-b-0 md:border-r border-[#e2e5e2] md:overflow-y-auto shrink-0">
          
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[320px] max-h-[540px] rounded-2xl overflow-hidden shadow-2xs bg-white">
            {item && (activeImage || item.imageSrc) && (
              modalImgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#f0ede6] text-[#7d8680] p-6 text-center">
                  <span className="font-serif text-base font-medium text-[#121613]">{item.title}</span>
                  <span className="font-mono text-xs text-[#8a948c] mt-1">DRYP Atelier Archive</span>
                </div>
              ) : (
                <img
                  src={activeImage || item.imageSrc}
                  alt={item.title}
                  onError={() => setModalImgError(true)}
                  className="w-full h-full object-contain p-2"
                />
              )
            )}
            {/* Discrete atelier brand watermark */}
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#151413]/60 backdrop-blur-xs text-[10px] font-mono font-bold tracking-widest text-[#faf8f5]/90 border border-white/10 pointer-events-none select-none shadow-2xs">
              DRYP.
            </div>
          </div>

          {/* Alternate Dripper Perspective Thumbnails */}
          {product && (
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setActiveImage(item.imageSrc)}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === item.imageSrc ? 'border-[#121613] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={item.imageSrc} alt="Vista Principal" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage('/images/products/ritual-morning.jpg')}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === '/images/products/ritual-morning.jpg' ? 'border-[#121613] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src="/images/products/ritual-morning.jpg" alt="Ritual Pour" className="w-full h-full object-cover" />
              </button>
            </div>
          )}

          {/* Tactile Brewing Simulation */}
          <div className="w-full mt-3 p-3.5 bg-[#faf8f5] rounded-xl border border-[#e8e3da] flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#151413]">
                <Droplets className="w-4 h-4 text-[#c05a3e]" />
                <span className="font-semibold">{language === 'es' ? 'Simular Vertido (93°C)' : 'Simulate Pour (93°C)'}</span>
              </div>
              <button
                type="button"
                onClick={handleSimulatePour}
                disabled={isPouring}
                className="text-[11px] font-mono px-3 py-1 rounded-full border border-[#121613] text-[#121613] hover:bg-[#121613] hover:text-white transition-all disabled:opacity-50 cursor-pointer"
              >
                {isPouring ? (language === 'es' ? 'Vertiendo...' : 'Pouring...') : (language === 'es' ? 'Iniciar vertido' : 'Start pour')}
              </button>
            </div>

            {/* Pour Step Visualizer */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className={`h-1.5 rounded-full transition-colors ${pourStep >= 1 ? 'bg-[#c05a3e]' : 'bg-[#e2e5e2]'}`} />
              <div className={`h-1.5 rounded-full transition-colors ${pourStep >= 2 ? 'bg-[#c05a3e]' : 'bg-[#e2e5e2]'}`} />
              <div className={`h-1.5 rounded-full transition-colors ${pourStep >= 3 ? 'bg-[#c05a3e]' : 'bg-[#e2e5e2]'}`} />
            </div>

            <p className="text-[11px] text-[#666f68] leading-tight">
              {pourStep === 0 && (language === 'es' ? 'Pre-infusión seca: prepara 30g de café molido fino-medio.' : 'Dry pre-wet: prepare 30g medium-fine coffee.')}
              {pourStep === 1 && (language === 'es' ? 'Fase 1: Primer vertido concéntrico de 60ml. Floración activa.' : 'Phase 1: 60ml concentric bloom.')}
              {pourStep === 2 && (language === 'es' ? 'Fase 2: Vertido continuo a 4.2 ml/s manteniendo cama plana.' : 'Phase 2: Continuous 4.2 ml/s pour.')}
              {pourStep === 3 && (language === 'es' ? 'Fase 3: Caída final por gravedad. Taza limpia y aromática.' : 'Phase 3: Gravity drawdown.')}
            </p>
          </div>

          {/* Guaranteed Safe Delivery Micro-Badge */}
          <div className="w-full mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#5a625c]">
            <span>{language === 'es' ? 'Envío asegurado • Reposición 100% inmediata sin costo' : '100% insured transit • Free immediate replacement'}</span>
          </div>
        </div>

        {/* Right Column: Drip Details & Storytelling (Editorial Style) */}
        <div className="w-full md:w-[50%] p-5 sm:p-7 md:p-8 flex flex-col justify-between md:overflow-y-auto md:max-h-[92vh]">
          
          <div>
            {/* Header Actions */}
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-[#f0f2f0]">
              
              {/* Atelier Provenance */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#121613] flex items-center justify-center text-white shrink-0">
                  <span className="text-xs font-mono font-bold text-[#c05a3e]">D</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#121613] leading-none">{item.author.name}</h4>
                  <span className="text-[11px] text-[#666f68] font-mono">
                    {language === 'es' ? 'Cumbres de Neblaria • 1.280°C' : 'Heights of Neblaria • 1,280°C'}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Share, Save, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={handleShare}
                  className="w-10 h-10 rounded-full hover:bg-[#f0f2f0] text-[#4b514d] hover:text-[#121613] transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  title="Copiar enlace"
                  aria-label="Compartir drip"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-[#c05a3e]" /> : <Share2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => onToggleSave(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0 ${
                    isSaved
                      ? 'bg-[#121613] text-white'
                      : 'bg-[#c05a3e] hover:bg-[#a64726] text-white'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                  <span>{isSaved ? (language === 'es' ? 'Drip Guardado' : 'Saved') : (language === 'es' ? 'Guardar Drip' : 'Save Drip')}</span>
                </button>

                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full hover:bg-[#f0f2f0] text-[#4b514d] hover:text-[#121613] transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Title & Drop info */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                {item.badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c05a3e] font-bold px-2 py-0.5 rounded-full bg-[#c05a3e]/10 border border-[#c05a3e]/25">
                    {item.badge}
                  </span>
                )}
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#756f66] font-medium">
                  {item.categoryLabel}
                </span>
                {item.dropCode && (
                  <>
                    <span className="text-xs text-[#a7aaad]">•</span>
                    <span className="text-[11px] font-mono text-[#666f68]">{item.dropCode}</span>
                  </>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl font-bold text-[#121613] tracking-tight leading-snug">
                {item.title}
              </h1>

              {/* Level 01: Emotion Quote */}
              <div className="mt-3 p-3.5 bg-[#f4efea] rounded-2xl border border-[#e8e3da]">
                <p className="font-serif italic text-base sm:text-lg text-[#151413] leading-relaxed">
                  "{item.level01Emotion || item.subtitle}"
                </p>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="mt-4 space-y-3">
              <p className="text-xs sm:text-sm text-[#4b463f] leading-relaxed">
                {product ? product.story : item.subtitle}
              </p>
              {product && (
                <p className="text-xs text-[#756f66] leading-relaxed">
                  {product.objectDescription}
                </p>
              )}
            </div>

            {/* Specs & Ceramic Dynamics */}
            {product && (
              <div className="mt-4">

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono p-3 bg-[#f4efea] rounded-xl border border-[#e8e3da]">
                  <div>
                    <span className="text-[10px] text-[#756f66] block uppercase">
                      {language === 'es' ? 'Filtro' : 'Filter'}
                    </span>
                    <span className="font-semibold text-[#151413]">{product.specs.filterType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#756f66] block uppercase">
                      {language === 'es' ? 'Flujo' : 'Flow'}
                    </span>
                    <span className="font-semibold text-[#151413]">{product.specs.flowRate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#756f66] block uppercase">
                      {language === 'es' ? 'Capacidad' : 'Capacity'}
                    </span>
                    <span className="font-semibold text-[#151413]">{product.specs.capacity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#756f66] block uppercase">
                      {language === 'es' ? 'Origen' : 'Origin'}
                    </span>
                    <span className="font-semibold text-[#151413]">{product.specs.origin}</span>
                  </div>
                </div>

                {/* Color Palette Picker */}
                {product.paletteColors.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-[#4b463f]">
                        {language === 'es' ? 'Esmalte & Acabado:' : 'Glaze & Finish:'}
                      </span>
                      <span className="font-mono font-bold text-[#151413]">{selectedColor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.paletteColors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                            selectedColor === color.name
                              ? 'border-[#151413] bg-[#151413] text-[#faf8f5] shadow-xs'
                              : 'border-[#e8e3da] bg-[#faf8f5] text-[#4b463f] hover:border-[#151413] hover:text-[#151413]'
                          }`}
                        >
                          <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                          <span>{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Related Drips Section */}
            {relatedDrips.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#f0f2f0]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#666f68] mb-3">
                  {language === 'es' ? 'Más drips como este' : 'More like this'}
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {relatedDrips.map((rDrip) => (
                    <div
                      key={rDrip.id}
                      onClick={() => handleSelectRelated(rDrip)}
                      className="group/rel cursor-pointer rounded-xl overflow-hidden aspect-square bg-[#e5e8e5] relative shadow-2xs hover:shadow-sm transition-all"
                    >
                      <img src={rDrip.imageSrc} alt={rDrip.title} className="w-full h-full object-cover group-hover/rel:scale-[1.02] transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/rel:opacity-100 transition-opacity flex items-end p-1.5">
                        <span className="text-[9px] text-white font-medium line-clamp-1 leading-tight">
                          {rDrip.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Checkout / Add to Bag Action */}
          {item.productId && item.price ? (
            <div className="mt-6 pt-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] border-t border-[#e2e5e2] flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#666f68] block">
                  {language === 'es' ? 'Precio de Edición' : 'Edition Price'}
                </span>
                <span className="text-2xl font-bold font-mono text-[#121613]">
                  ${item.price} <span className="text-xs font-normal text-[#666f68]">USD</span>
                </span>
              </div>

              <div className="flex-1 max-w-xs">
                <button
                  onClick={handleAddToCart}
                  disabled={item.stockStatus === 'sold_out'}
                  className={`w-full py-3.5 px-6 min-h-[44px] rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                    item.stockStatus === 'sold_out'
                      ? 'bg-[#d8dcd8] text-[#8e9194] cursor-not-allowed'
                      : isAdded
                      ? 'bg-[#c05a3e] text-white'
                      : 'bg-[#121613] hover:bg-[#252c26] text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{language === 'es' ? 'Añadido a la Bolsa' : 'Added to Bag'}</span>
                    </>
                  ) : item.stockStatus === 'sold_out' ? (
                    <span>{language === 'es' ? 'Agotado por ahora' : 'Gone for now'}</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>{language === 'es' ? 'Añadir a la Bolsa' : 'Add to Bag'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 pt-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] border-t border-[#e2e5e2] flex items-center justify-between">
              <span className="text-xs text-[#666f68] font-mono">
                {language === 'es' ? 'Drip de Archivo & Cultura DRYP.' : 'DRYP. Cultural & Archive Drip'}
              </span>
              <button
                onClick={() => onToggleSave(item.id)}
                className="px-5 py-2.5 min-h-[40px] rounded-full bg-[#121613] hover:bg-[#252c26] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                {isSaved ? (language === 'es' ? 'Drip guardado' : 'Saved') : (language === 'es' ? 'Guardar drip' : 'Save drip')}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export const PinDetailModal = DripDetailModal;

