import React, { useState, memo } from 'react';
import type { DrypDrip, PinterestPin } from '../data/pinterestPinsData';
import { MorphIcon } from 'morphicons/react';
import { Bookmark, ShoppingBag, Share2, Check } from 'lucide';
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
  isTransitionActive?: boolean;
}

export type PinCardProps = DripCardProps;

const CATEGORY_GLAZES: Record<string, { badgeBg: string; textHex: string }> = {
  Music: { badgeBg: 'bg-[#6d28d9]/10 text-[#6d28d9] border-[#6d28d9]/25', textHex: '#6d28d9' },
  Cosmos: { badgeBg: 'bg-[#1e293b]/10 text-[#1e293b] border-[#1e293b]/25', textHex: '#1e293b' },
  Nature: { badgeBg: 'bg-[#15803d]/10 text-[#15803d] border-[#15803d]/25', textHex: '#15803d' },
  Cinema: { badgeBg: 'bg-[#c2410c]/10 text-[#c2410c] border-[#c2410c]/25', textHex: '#c2410c' },
  Series: { badgeBg: 'bg-[#ca8a04]/10 text-[#a16207] border-[#ca8a04]/25', textHex: '#a16207' },
  Retro: { badgeBg: 'bg-[#d97706]/10 text-[#d97706] border-[#d97706]/25', textHex: '#d97706' },
  Experimental: { badgeBg: 'bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/25', textHex: '#2563eb' },
  Prehistoric: { badgeBg: 'bg-[#c05a3e]/10 text-[#c05a3e] border-[#c05a3e]/25', textHex: '#c05a3e' },
  Photography: { badgeBg: 'bg-[#334155]/10 text-[#334155] border-[#334155]/25', textHex: '#334155' },
  Architecture: { badgeBg: 'bg-[#475569]/10 text-[#475569] border-[#475569]/25', textHex: '#475569' },
  Minerals: { badgeBg: 'bg-[#0f766e]/10 text-[#0f766e] border-[#0f766e]/25', textHex: '#0f766e' },
  Art: { badgeBg: 'bg-[#b45309]/10 text-[#b45309] border-[#b45309]/25', textHex: '#b45309' },
  Sculptural: { badgeBg: 'bg-[#b45309]/10 text-[#b45309] border-[#b45309]/25', textHex: '#b45309' },
  All: { badgeBg: 'bg-[#151413]/5 text-[#4b463f] border-[#e8e3da]', textHex: '#4b463f' }
};

const CATEGORY_NAMES: Record<string, { es: string; en: string }> = {
  Music: { es: 'Música', en: 'Music' },
  Cosmos: { es: 'Universo', en: 'Universe' },
  Nature: { es: 'Naturaleza', en: 'Nature' },
  Cinema: { es: 'Fotografía y cine', en: 'Cinema & Photography' },
  Series: { es: 'Series y TV', en: 'Series & TV' },
  Retro: { es: 'Retro', en: 'Retro' },
  Experimental: { es: 'Futurista y Sci-fi', en: 'Futurism & Sci-Fi' },
  Prehistoric: { es: 'Prehistoria', en: 'Prehistoric' },
  Photography: { es: 'Fotografía y cine', en: 'Cinema & Photography' },
  Architecture: { es: 'Arquitectura', en: 'Architecture' },
  Minerals: { es: 'Minerales', en: 'Minerals' },
  Art: { es: 'Arte', en: 'Art' },
  Sculptural: { es: 'Arte', en: 'Art' },
  All: { es: 'Todos los Drips', en: 'All Drips' }
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
  isAdded = false,
  isTransitionActive = false
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
    if (onToggleSave && item?.id) {
      onToggleSave(item.id);
    }
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

  const glaze = CATEGORY_GLAZES[item.category] || CATEGORY_GLAZES.All;
  const categoryName = CATEGORY_NAMES[item.category]?.[language as 'es' | 'en'] || item.categoryLabel || item.category;

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
        containIntrinsicSize: '1px 400px',
        contain: 'layout style paint'
      }}
      className="group relative flex flex-col h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c05a3e] rounded-[16px] transition-shadow"
    >
      {/* Pure Visual Image Container: Uniform 1:1 Square (Same Width and Height) */}
      <div 
        style={{ viewTransitionName: isTransitionActive ? 'drip-hero-image' : undefined }}
        className="relative w-full aspect-square overflow-hidden rounded-[16px] bg-[#f4efea] border border-[#e8e3da]/70 shadow-2xs group-hover:shadow-md transition-all duration-300"
      >
        {hasImgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#f4efea] text-[#756f66] p-4 text-center">
            <span className="font-headline text-xs font-medium text-[#151413] line-clamp-2">{item.title}</span>
            <span className="font-mono text-[10px] text-[#a39c91] mt-1">DRYP Atelier Archive</span>
          </div>
        ) : (
          <img
            src={item.imageSrc}
            alt={item.title}
            width={400}
            height={400}
            onError={() => setHasImgError(true)}
            loading={index !== undefined && index < 4 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index !== undefined && index < 2 ? 'high' : 'auto'}
            className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
          />
        )}
      </div>

      {/* Drip Card Information - Cleanly Organized Below Image */}
      <div className="pt-3 px-0.5 flex flex-col gap-2">
        
        {/* Row 1: Identification Tag (Category) + Actions (Quick Add, Share, Save) */}
        <div className="flex items-center justify-between gap-2 min-h-[28px]">
          <span 
            style={{ 
              viewTransitionName: isTransitionActive ? 'drip-hero-badge' : undefined,
              fontSize: '12px',
              lineHeight: '1.2'
            }}
            className={`px-2 py-0.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border whitespace-nowrap card-category-badge ${glaze.badgeBg}`}
          >
            {categoryName}
          </span>

          {/* Clean Action Icons (Quick Add, Share, Save) */}
          <div className="flex items-center gap-1.5">
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
                <MorphIcon 
                  icon={isAdded ? Check : ShoppingBag} 
                  size={16} 
                  strokeWidth={2}
                  spring="snappy"
                  reducedMotion="user"
                  className="w-4 h-4" 
                />
              </button>
            )}

            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-full text-[#756f66] hover:text-[#151413] hover:bg-[#eae5dd] transition-colors cursor-pointer"
              title={copiedShare ? (language === 'es' ? '¡Enlace copiado!' : 'Link copied!') : (language === 'es' ? 'Compartir drip' : 'Share drip')}
              aria-label={copiedShare ? (language === 'es' ? 'Enlace copiado' : 'Link copied') : (language === 'es' ? 'Compartir drip' : 'Share drip')}
            >
              <MorphIcon 
                icon={copiedShare ? Check : Share2} 
                size={16} 
                strokeWidth={2}
                spring="snappy"
                reducedMotion="user"
                className={`w-4 h-4 ${copiedShare ? 'text-[#c05a3e]' : ''}`} 
              />
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
              <MorphIcon 
                icon={isSaved ? Check : Bookmark} 
                size={16} 
                strokeWidth={2}
                spring="snappy"
                reducedMotion="user"
                className="w-4 h-4" 
              />
            </button>
          </div>
        </div>

        {/* Row 2: Title */}
        <h3 
          style={{ viewTransitionName: isTransitionActive ? 'drip-hero-title' : undefined }}
          className="font-headline text-[18px] sm:text-[19px] font-medium text-[#151413] tracking-tight leading-snug line-clamp-1 group-hover:text-[#c05a3e] transition-colors text-balance"
        >
          {item.title}
        </h3>

        {/* Row 3: Drip Description */}
        <p className="text-base text-[#525a54] line-clamp-2 leading-relaxed font-sans text-pretty">
          {item.subtitle}
        </p>

        {/* Row 4: Dedicated Price Area */}
        <div className="flex items-center justify-between text-base text-[#5a625c] pt-0.5">
          {item.price ? (
            <span className="font-mono text-base font-semibold text-[#151413] tabular-nums tracking-tight whitespace-nowrap">
              ${item.price}&nbsp;USD
            </span>
          ) : (
            <span 
              className="font-mono text-base uppercase tracking-wider font-medium whitespace-nowrap"
              style={{ color: glaze.textHex }}
            >
              {categoryName}
            </span>
          )}

          {item.stockStatus === 'sold_out' && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-[#151413] text-[#faf8f5] shadow-2xs">
              {language === 'es' ? 'Agotado' : 'Sold Out'}
            </span>
          )}
        </div>

      </div>
    </article>
  );
});

export const PinCard = DripCard;
