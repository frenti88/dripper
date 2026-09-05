import React, { useState, useRef, useEffect } from 'react';
import { MorphIcon } from 'morphicons/react';
import { Search, Bookmark, ShoppingBag, X, Sparkles, Compass, Grid } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface PinterestHeaderProps {
  onOpenCart: () => void;
  onOpenNotify?: () => void;
  cartCount: number;
  savedCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currentView: 'explore' | 'boards';
  onViewChange: (view: 'explore' | 'boards') => void;
  isSavedOnly?: boolean;
  onToggleSavedOnly?: () => void;
}

export const PinterestHeader: React.FC<PinterestHeaderProps> = ({
  onOpenCart,
  cartCount,
  savedCount,
  searchQuery,
  onSearchChange,
  currentView,
  onViewChange,
  isSavedOnly = false,
  onToggleSavedOnly
}) => {
  const { language } = useLanguage();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: '/' focuses the search bar
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' && 
        document.activeElement?.tagName !== 'INPUT' && 
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const quickSearchTags = language === 'es'
    ? ['Fósil T', '50mm', 'Neblaria', 'V60 Cono 02', 'Ceniza Volcánica', 'Porcelana Hueso', 'Ritual Lento', 'Drop 001']
    : ['Fossil T', '50mm Lens', 'Neblaria', 'V60 Cone 02', 'Volcanic Ash', 'Bone Porcelain', 'Slow Ritual', 'Drop 001'];

  // Click outside search suggestion box to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e3da] px-4 md:px-8 py-3 transition-colors">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-3 md:gap-6">
        
        {/* Logo & Main Tabs */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <button 
            onClick={() => onViewChange('explore')} 
            className="flex items-center group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#151413] rounded-lg px-1.5 py-1 transition-all cursor-pointer"
            title="DRYP. Tienda Catálogo de Goteros de Café"
            aria-label="DRYP. Inicio"
          >
            <span className="font-bold text-[21px] sm:text-[22px] tracking-tight text-[#151413] leading-none select-none group-hover:text-[#c05a3e] transition-colors">
              DRYP.
            </span>
          </button>

          {/* Navigation View Switcher (Oculto temporalmente) */}
          {false && (
            <nav className="flex items-center gap-1 bg-[#f4efea] p-1 rounded-full text-xs font-semibold border border-[#e8e3da]">
              <button
                onClick={() => onViewChange('explore')}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[34px] rounded-full transition-all cursor-pointer ${
                  currentView === 'explore'
                    ? 'bg-[#151413] text-[#faf8f5] shadow-xs'
                    : 'text-[#4b463f] hover:text-[#151413]'
                }`}
              >
                <MorphIcon icon={Compass} size={14} strokeWidth={2} reducedMotion="user" className="shrink-0" />
                <span className="hidden xs:inline">{language === 'es' ? 'Explorar' : 'Explore'}</span>
              </button>

              <button
                onClick={() => onViewChange('boards')}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[34px] rounded-full transition-all cursor-pointer ${
                  currentView === 'boards'
                    ? 'bg-[#151413] text-[#faf8f5] shadow-xs'
                    : 'text-[#4b463f] hover:text-[#151413]'
                }`}
              >
                <MorphIcon icon={Grid} size={14} strokeWidth={2} reducedMotion="user" className="shrink-0" />
                <span className="hidden xs:inline">{language === 'es' ? 'Tableros' : 'Boards'}</span>
              </button>
            </nav>
          )}
        </div>

        {/* Omnipresent Pinterest Search Bar */}
        <div ref={searchContainerRef} className="flex-1 min-w-[120px] max-w-3xl relative">
          <div className={`relative flex items-center w-full rounded-full transition-all duration-200 border ${
            isSearchFocused 
              ? 'bg-white border-[#151413] ring-1 ring-[#151413]/30 shadow-xs' 
              : 'bg-[#f4efea] border-[#e8e3da] hover:border-[#dcd6cb]'
          }`}>
            <MorphIcon icon={Search} size={16} strokeWidth={2} reducedMotion="user" className="ml-4 text-[#756f66] shrink-0" />
            
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder={language === 'es' 
                ? "Buscar drips en el catálogo (fósil, vinilo, cerámicas, recetas 02)..." 
                : "Search drips in the catalog (fossil, vinyl, ceramics, 02 recipes)..."
              }
              className="w-full py-2.5 pl-3 pr-10 bg-transparent text-base sm:text-sm text-[#151413] placeholder-[#8c857b] focus:outline-none font-sans"
              maxLength={120}
              autoComplete="off"
              spellCheck="false"
            />

            {!searchQuery && !isSearchFocused && (
              <kbd className="hidden lg:inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-mono text-[#756f66] bg-[#faf8f5] border border-[#e8e3da] rounded-md mr-3 shrink-0 shadow-2xs select-none">
                /
              </kbd>
            )}

            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 p-1 rounded-full text-[#756f66] hover:text-[#151413] hover:bg-[#e8e3da] transition-colors cursor-pointer"
                aria-label="Limpiar búsqueda"
              >
                <MorphIcon icon={X} size={14} strokeWidth={2} spring="snappy" reducedMotion="user" />
              </button>
            )}
          </div>

          {/* Quick Suggestions Popover */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#faf8f5] rounded-2xl shadow-lg border border-[#e8e3da] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#756f66] mb-2.5">
                <MorphIcon icon={Sparkles} size={14} strokeWidth={2} reducedMotion="user" className="text-[#c05a3e]" />
                <span>{language === 'es' ? 'Búsquedas sugeridas' : 'Popular tags'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      onSearchChange(tag);
                      setIsSearchFocused(false);
                    }}
                    className="px-3 py-1.5 rounded-full bg-[#f4efea] hover:bg-[#eae4dc] border border-[#e8e3da] text-xs font-medium text-[#4b463f] hover:text-[#151413] transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions: Saved Counter, Language, Bag */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          
          {/* Saved Drips Counter Filter */}
          {onToggleSavedOnly ? (
            <button 
              onClick={onToggleSavedOnly}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 min-h-[34px] rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isSavedOnly
                  ? 'bg-[#151413] text-[#faf8f5] shadow-2xs'
                  : 'bg-[#f4efea] border border-[#e8e3da] text-[#151413] hover:border-[#151413]'
              }`}
              title={language === 'es' 
                ? (isSavedOnly ? 'Viendo guardados (clic para ver todos)' : 'Filtrar solo guardados') 
                : (isSavedOnly ? 'Viewing saved (click for all)' : 'Filter saved only')
              }
            >
              <MorphIcon 
                icon={Bookmark} 
                size={14} 
                strokeWidth={2} 
                spring="snappy" 
                reducedMotion="user" 
                className={isSavedOnly ? 'fill-white text-white' : 'fill-[#151413] text-[#151413]'} 
              />
              <span>{savedCount}</span>
            </button>
          ) : (
            <div 
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 min-h-[34px] rounded-full bg-[#f4efea] border border-[#e8e3da] text-xs font-semibold text-[#151413]"
              title={language === 'es' ? 'Drips guardados' : 'Saved drips'}
            >
              <MorphIcon icon={Bookmark} size={14} strokeWidth={2} reducedMotion="user" className="fill-[#151413] text-[#151413]" />
              <span>{savedCount}</span>
            </div>
          )}

          {/* Language Toggle */}
          <div className="shrink-0">
            <LanguageToggle />
          </div>

          {/* Shopping Bag Button (Basalt with Ember Counter) */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] rounded-full bg-[#151413] text-[#faf8f5] hover:bg-[#252c26] active:scale-[0.98] transition-all shadow-2xs font-medium text-xs tracking-tight shrink-0 cursor-pointer"
            aria-label="Abrir bolsa de compras"
          >
            <MorphIcon icon={ShoppingBag} size={16} strokeWidth={2} reducedMotion="user" className="text-[#faf8f5] shrink-0" />
            <span className="hidden md:inline">{language === 'es' ? 'Bolsa' : 'Bag'}</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[11px] font-mono font-bold bg-[#c05a3e] text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
