import React, { useState, memo } from 'react';
import type { DrypDrip, PinterestPin } from '../data/pinterestPinsData';
import { Bookmark, ShoppingBag, Share2, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export interface DripCardProps {
  drip?: DrypDrip;
  pin?: PinterestPin;
  index?: number;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectDrip?: (drip: DrypDrip) => void;
  onSelectPin?: (pin: PinterestPin) => void;
  onQuickAddToCart?: (productId: string) => void;
  isAdded?: boolean;
}

export type PinCardProps = DripCardProps;

const CATEGORY_GLAZES: Record<string, { badgeBg: string; textHex: string }> = {
  Music: { badgeBg: 'bg-[#6d28d9]/10 text-[#6d28d9] border-[#6d28d9]/25', textHex: '#6d28d9' },
  Cosmos: { badgeBg: 'bg-[#1e293b]/10 text-[#1e293b] border-[#1e293b]/25', textHex: '#1e293b' },
  Nature: { badgeBg: 'bg-[#15803d]/10 text-[#15803d] border-[#15803d]/25', textHex: '#15803d' },
  Cinema: { badgeBg: 'bg-[#c2410c]/10 text-[#c2410c] border-[#c2410c]/25', textHex: '#c2410c' },
  Prehistoric: { badgeBg: 'bg-[#c05a3e]/10 text-[#c05a3e] border-[#c05a3e]/25', textHex: '#c05a3e' },
  Photography: { badgeBg: 'bg-[#334155]/10 text-[#334155] border-[#334155]/25', textHex: '#334155' },
  Architecture: { badgeBg: 'bg-[#475569]/10 text-[#475569] border-[#475569]/25', textHex: '#475569' },
  Minerals: { badgeBg: 'bg-[#0f766e]/10 text-[#0f766e] border-[#0f766e]/25', textHex: '#0f766e' },
  Sculptural: { badgeBg: 'bg-[#b45309]/10 text-[#b45309] border-[#b45309]/25', textHex: '#b45309' },
  WabiSabi: { badgeBg: 'bg-[#78350f]/10 text-[#78350f] border-[#78350f]/25', textHex: '#78350f' },
  All: { badgeBg: 'bg-[#151413]/5 text-[#4b463f] border-[#e8e3da]', textHex: '#4b463f' }
};

export const DripCard = memo<DripCardProps>(({
  drip,
  pin,
  index,
  isSaved,
  onToggleSave,
  onSelectDrip,
  onSelectPin,
  onQuickAddToCart,
  isAdded = false
}) => {
  const item = (drip || pin)!;
  const { language } = useLanguage();
  const [copiedShare, setCopiedShare] = useState(false);
  const [hasImgError, setHasImgError] = useState(false);

  const handleSelect = () => {
    if (onSelectDrip) onSelectDrip(item as DrypDrip);
    else if (onSelectPin) onSelectPin(item as PinterestPin);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSave(item.id);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.productId && onQuickAddToCart) {
      onQuickAddToCart(item.productId);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2000);
      }
    } catch {
      // Graceful fallback for restricted iframe or clipboard policy
    }
  };

  // Craft provenance subtitle
  const craftProvenance = item.stockLabel 
    ? item.stockLabel 
    : item.category === 'WabiSabi'
    ? (language === 'es' ? '1.280°C • Maestría Zen' : '1,280°C • Zen Craft')
    : item.category === 'Minerals'
    ? (language === 'es' ? 'Santa Elena • Gres Mineral' : 'Santa Elena • Mineral Stoneware')
    : item.category === 'Music'
    ? (language === 'es' ? 'Vertido Rítmico • Cono 02' : 'Rhythmic Pour • Cone 02')
    : item.category === 'Cosmos'
    ? (language === 'es' ? 'Inercia Térmica • 93°C' : 'Thermal Inertia • 93°C')
    : (language === 'es' ? 'Edición Taller • Hecho a Mano' : 'Atelier Edition • Handcrafted');

  const glaze = CATEGORY_GLAZES[item.category] || CATEGORY_GLAZES.All;

  return (
    <article 
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${item.title} - ${item.subtitle}`}
      style={{ 
        contentVisibility: index !== undefined && index > 5 ? 'auto' : 'visible', 
        containIntrinsicSize: '1px 360px' 
      }}
      className="group relative flex flex-col h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05a3e] rounded-2xl transition-shadow"
    >
      {/* Pure Visual Image Container: Uniform 1:1 Square (Same Width and Height) */}
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-[#f4efea] border border-[#e8e3da]/70 shadow-2xs group-hover:shadow-md transition-all duration-300">
        {hasImgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#f4efea] text-[#756f66] p-4 text-center">
            <span className="font-serif text-xs font-medium text-[#151413] line-clamp-2">{item.title}</span>
            <span className="font-mono text-[10px] text-[#a39c91] mt-1">DRYP Atelier Archive</span>
          </div>
        ) : (
          <img
            src={item.imageSrc}
            alt={item.title}
            onError={() => setHasImgError(true)}
            loading={index !== undefined && index < 4 ? 'eager' : 'lazy'}
            decoding="async"
            {...(index === 0 ? { fetchPriority: 'high' } : {})}
            className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
          />
        )}

        {/* Discrete Atelier Brand Hallmark stamped small on each drip photo */}
        <div className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 rounded bg-[#151413]/60 backdrop-blur-xs text-[9px] font-mono font-bold tracking-wider text-[#faf8f5]/90 border border-white/10 pointer-events-none select-none shadow-2xs">
          DRYP.
        </div>
      </div>

      {/* Drip Card Information - Cleanly Organized Below Image */}
      <div className="pt-2.5 px-0.5 flex flex-col gap-1.5">
        
        {/* Row 1: Identification Tag (Badge or Category) + Actions (Quick Add, Share, Save) */}
        <div className="flex items-center justify-between gap-2 min-h-[26px]">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase border ${glaze.badgeBg}`}>
            {item.badge || item.categoryLabel}
          </span>

          {/* Clean Action Icons (Quick Add, Share, Save) */}
          <div className="flex items-center gap-1">
            {item.productId && item.price && item.stockStatus !== 'sold_out' && (
              <button
                type="button"
                onClick={handleQuickAdd}
                aria-label={isAdded ? (language === 'es' ? 'Añadido a la bolsa' : 'Added to bag') : (language === 'es' ? 'Añadir a la bolsa' : 'Quick add to bag')}
                title={language === 'es' ? 'Añadir a la bolsa' : 'Quick add to bag'}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  isAdded 
                    ? 'bg-[#c05a3e] text-white shadow-2xs' 
                    : 'text-[#756f66] hover:text-[#151413] hover:bg-[#eae5dd]'
                }`}
              >
                {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
              </button>
            )}

            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-full text-[#756f66] hover:text-[#151413] hover:bg-[#eae5dd] transition-colors cursor-pointer"
              title={copiedShare ? (language === 'es' ? '¡Enlace copiado!' : 'Link copied!') : (language === 'es' ? 'Compartir drip' : 'Share drip')}
              aria-label={copiedShare ? (language === 'es' ? 'Enlace copiado' : 'Link copied') : (language === 'es' ? 'Compartir drip' : 'Share drip')}
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-[#c05a3e]" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={handleSave}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                isSaved 
                  ? 'text-[#c05a3e] bg-[#c05a3e]/10' 
                  : 'text-[#756f66] hover:text-[#151413] hover:bg-[#eae5dd]'
              }`}
              title={isSaved ? (language === 'es' ? 'Drip guardado' : 'Saved drip') : (language === 'es' ? 'Guardar drip' : 'Save drip')}
              aria-label={isSaved ? (language === 'es' ? 'Drip guardado' : 'Saved drip') : (language === 'es' ? 'Guardar drip' : 'Save drip')}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#c05a3e]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Row 2: Title */}
        <h3 className="font-serif text-[15px] font-medium text-[#151413] tracking-tight leading-snug line-clamp-1 group-hover:text-[#c05a3e] transition-colors">
          {item.title}
        </h3>

        {/* Row 3: Provenance & Dedicated Price Area */}
        <div className="flex items-center justify-between text-xs text-[#5a625c] pt-0.5">
          <span className="text-[11px] font-mono tracking-tight text-[#666f68] truncate">
            {craftProvenance}
          </span>
          {item.price ? (
            <span className="font-mono text-[13px] font-semibold text-[#151413] shrink-0 tabular-nums">
              ${item.price} USD
            </span>
          ) : (
            <span 
              className="font-mono text-[10px] uppercase tracking-wider shrink-0 font-medium"
              style={{ color: glaze.textHex }}
            >
              {item.categoryLabel}
            </span>
          )}
        </div>

      </div>
    </article>
  );
});

export const PinCard = DripCard;
