import React from 'react';
import type { DrypDrip, PinterestPin } from '../data/pinterestPinsData';
import { PinCard } from './PinCard';
import { MorphIcon } from 'morphicons/react';
import { SearchX, Bookmark } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';

interface MasonryFeedProps {
  drips?: DrypDrip[];
  pins?: PinterestPin[];
  savedDripIds?: Set<string>;
  savedPinIds?: Set<string>;
  onToggleSave: (dripId: string) => void;
  onSelectDrip?: (drip: DrypDrip) => void;
  onSelectPin?: (pin: PinterestPin) => void;
  onQuickAddToCart: (productId: string) => void;
  addedProductId: string | null;
  onResetFilters: () => void;
  isSavedOnly?: boolean;
  transitionDripId?: string | null;
}

export const MasonryFeed: React.FC<MasonryFeedProps> = ({
  drips,
  pins,
  savedDripIds,
  savedPinIds,
  onToggleSave,
  onSelectDrip,
  onSelectPin,
  onQuickAddToCart,
  addedProductId,
  onResetFilters,
  isSavedOnly = false,
  transitionDripId
}) => {
  const { language } = useLanguage();
  const items = drips || pins || [];
  const activeSavedIds = savedDripIds || savedPinIds || new Set<string>();
  const handleSelect = onSelectDrip || onSelectPin || (() => {});

  if (items.length === 0) {
    if (isSavedOnly) {
      return (
        <div className="w-full py-24 flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-200">
          <div className="w-16 h-16 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c05a3e] mb-4 shadow-sm">
            <MorphIcon icon={Bookmark} size={32} strokeWidth={1.5} reducedMotion="user" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#121613] mb-1">
            {language === 'es' ? 'Tu repisa está vacía por ahora' : 'Your shelf is empty for now'}
          </h3>
          <p className="text-xs text-[#5a625c] max-w-md mb-6 leading-relaxed">
            {language === 'es'
              ? 'Guarda goteros cerámicos seleccionando el icono de guardar en cualquier pieza para crear tu selección personal de piezas de café.'
              : 'Save ceramic drippers by selecting the save icon on any piece to curate your personal coffee collection.'}
          </p>
          <button
            onClick={onResetFilters}
            className="px-6 py-3 rounded-full bg-[#121613] hover:bg-[#252c26] text-white text-xs font-semibold transition-all cursor-pointer shadow-md active:scale-95"
          >
            {language === 'es' ? 'Explorar catálogo de goteros' : 'Explore drippers catalog'}
          </button>
        </div>
      );
    }

    return (
      <div role="status" aria-live="polite" className="w-full py-24 flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-200">
        <div className="w-16 h-16 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#666f68] mb-4">
          <MorphIcon icon={SearchX} size={32} strokeWidth={1.5} reducedMotion="user" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-[#121613] mb-1 break-words max-w-lg">
          {language === 'es' ? 'No encontramos ningún gotero con esos términos' : 'No drippers found matching your search'}
        </h3>
        <p className="text-xs text-[#5a625c] max-w-md mb-6 leading-relaxed">
          {language === 'es' 
            ? 'Prueba buscando por "arte", "vinilo", "fósil", "arquitectura" o restablece los filtros para ver todo el catálogo.' 
            : 'Try searching for "art", "vinyl", "fossil", "architecture", or reset filters to view the full catalog.'}
        </p>
        <button
          onClick={onResetFilters}
          className="px-6 py-3 rounded-full bg-[#121613] hover:bg-[#252c26] text-white text-xs font-semibold transition-all cursor-pointer shadow-md active:scale-95"
        >
          {language === 'es' ? 'Ver todos los goteros' : 'View all drippers'}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-6">
      
      {/* Uniform Grid: Equal width and height for all drips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <PinCard
            key={item.id}
            drip={item}
            pin={item}
            index={idx}
            isSaved={activeSavedIds.has(item.id)}
            onToggleSave={onToggleSave}
            onSelectPin={handleSelect}
            onQuickAddToCart={onQuickAddToCart}
            isAdded={item.productId === addedProductId}
            isTransitionActive={transitionDripId === item.id}
          />
        ))}
      </div>

    </div>
  );
};

