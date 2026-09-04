import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface FooterProps {
  onOpenNotify?: () => void;
  onOpenFAQ?: () => void;
  onOpenExtraction?: () => void;
  onOpenStory?: () => void;
  onSelectCategory?: (category: string) => void;
  onNavigateView?: (view: 'explore' | 'boards') => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenNotify = () => {},
  onOpenFAQ = () => {},
  onOpenExtraction = () => {},
  onOpenStory = () => {},
  onSelectCategory = () => {},
  onNavigateView = () => {}
}) => {
  const { t, language } = useLanguage();

  const handleNavShop = () => {
    onNavigateView('explore');
    onSelectCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavCollections = () => {
    onNavigateView('boards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavDrops = () => {
    onNavigateView('explore');
    onSelectCategory('Drops');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#faf8f5] text-[#121613] border-t border-[#e2e5e2] py-16">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* Top Minimal Info Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#e8e4dc]">
          
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-lg font-black tracking-tight text-[#121613]">
              <span className="font-sans">DRYP.</span>
              <span className="text-[#4b514d] font-normal text-xs ml-1 font-mono tracking-normal">
                — Atelier & Archivo Cerámico de las Cumbres
              </span>
            </div>
            <p className="text-xs text-[#5a625c] max-w-md leading-relaxed">
              {language === 'es'
                ? 'Cerámica colada a mano y torneada en torno manual en las Cumbres de Neblaria y el Valle de Silaria. Cocción de alta temperatura a 1.280°C.'
                : 'Hand-cast and wheel-thrown ceramic objects in the Heights of Neblaria & the Silaria Valley. High-fire cone firing at 1,280°C.'}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <LanguageToggle theme="light" />
            <button
              onClick={onOpenNotify}
              className="px-4 py-2 min-h-[38px] rounded-full border border-[#121613] text-[#121613] hover:bg-[#121613] hover:text-white transition-all text-xs font-semibold cursor-pointer"
            >
              {t('dropAlerts')}
            </button>
          </div>

        </div>

        {/* Minimal Link Row: Pure Functional Interaction, Zero Dead Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#4b514d]">
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-y-3.5 gap-x-6 sm:gap-x-8">
            <button 
              type="button"
              onClick={handleNavShop} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {t('navShop')}
            </button>
            <button 
              type="button"
              onClick={handleNavCollections} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {t('navCollections')}
            </button>
            <button 
              type="button"
              onClick={handleNavDrops} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {t('navDrops')}
            </button>
            <button 
              type="button"
              onClick={onOpenStory} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Historia del Taller' : 'Atelier Story'}
            </button>
            <button 
              type="button"
              onClick={onOpenExtraction} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {t('navHowItBrews')}
            </button>
            <button 
              type="button"
              onClick={onOpenFAQ} 
              className="py-1 hover:text-[#c05a3e] transition-colors cursor-pointer"
            >
              {t('navFaq')} & {language === 'es' ? 'Garantía' : 'Guarantee'}
            </button>
          </nav>

          <div className="text-[12px] text-[#666f68] font-mono text-center sm:text-right shrink-0">
            © {new Date().getFullYear()} DRYP®. {t('copyright')}
          </div>
        </div>

      </div>
    </footer>
  );
};
