import React, { useState, useEffect } from 'react';
import { ShoppingBag, Bell } from 'lucide-react';
import type { DropPhase } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenNotify: () => void;
  cartCount: number;
  currentPhase: DropPhase;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCart,
  onOpenNotify,
  cartCount,
  currentPhase
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#the-first-ten', label: t('navShop') },
    { href: '#find-your-dryp', label: t('navCollections') },
    { href: '#featured-drop', label: t('navDrops') },
    { href: '#artist-story', label: t('navArtists') },
    { href: '#coffee-credibility', label: t('navHowItBrews') },
    { href: '#faq', label: t('navFaq') },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#ffffff] border-b border-[#a7aaad] py-4 text-[#000000]' 
          : 'bg-transparent py-7 text-[#ffffff]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Monolithic Wordmark DRYP® at 16px PP Neue Montreal */}
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="flex items-center gap-0.5 text-[16px] tracking-normal font-normal text-inherit select-none"
            aria-label="DRYP home"
          >
            <span className="font-semibold tracking-tight">DRYP</span>
            <span className="text-[11px] align-super">®</span>
          </a>

          {/* Current Drop status tag */}
          <div className={`hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-[8px] border text-[13px] font-normal ${
            isScrolled ? 'border-[#a7aaad] text-[#8e9194]' : 'border-[#ffffff]/30 text-[#ffffff]/80'
          }`}>
            <span>{t('dropIndicator')}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span className="font-medium text-inherit">{currentPhase}</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links in 15–16px PP Neue Montreal */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 text-[15px]">
          {navItems.map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              className={`transition-colors ${
                isScrolled 
                  ? 'text-[#000000] hover:text-[#8e9194]' 
                  : 'text-[#ffffff] hover:text-[#ffffff]/70'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Toggle, Drop Alerts Pill & Cart Button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <LanguageToggle 
            theme={isScrolled ? 'light' : 'dark'}
            className="hidden sm:inline-flex" 
          />

          {/* Ghost Pill Button for Drop Alerts (31.35px radius) */}
          <button
            onClick={onOpenNotify}
            aria-label={t('dropAlerts')}
            className={`hidden sm:inline-flex items-center gap-2 text-[14px] px-5 py-2.5 rounded-[31.35px] border transition-colors cursor-pointer ${
              isScrolled
                ? 'border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff]'
                : 'border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#000000]'
            }`}
          >
            <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{t('dropAlerts')}</span>
          </button>

          {/* Shopping Bag trigger with 8px radius */}
          <button
            onClick={onOpenCart}
            aria-label={`${t('openBag')} (${cartCount})`}
            className={`relative w-10 h-10 rounded-[8px] border flex items-center justify-center transition-colors cursor-pointer ${
              isScrolled
                ? 'border-[#000000] bg-[#000000] text-[#ffffff] hover:bg-[#4b514d]'
                : 'border-[#ffffff] bg-transparent text-[#ffffff] hover:bg-[#ffffff] hover:text-[#000000]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[11px] font-medium flex items-center justify-center ${
                isScrolled ? 'bg-[#000000] text-[#ffffff] border border-[#ffffff]' : 'bg-[#ffffff] text-[#000000]'
              }`}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            className={`w-10 h-10 rounded-[8px] border lg:hidden flex items-center justify-center cursor-pointer ${
              isScrolled ? 'border-[#a7aaad] text-[#000000]' : 'border-[#ffffff] text-[#ffffff]'
            }`}
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between items-center" aria-hidden="true">
              <span 
                className={`w-4 h-[1px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'absolute top-1.5 rotate-45' : ''
                }`} 
              />
              <span 
                className={`w-4 h-[1px] bg-current transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`w-4 h-[1px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'absolute top-1.5 -rotate-45' : ''
                }`} 
              />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden fixed inset-x-0 top-full bg-[#ffffff] border-b border-[#a7aaad] px-6 py-8 text-[#000000] animate-phase-change">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#d8d8d8]">
            <span className="text-[15px] text-[#8e9194]">{t('languageSelector')}</span>
            <LanguageToggle theme="light" />
          </div>

          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4 text-[16px]">
            {navItems.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#d8d8d8] text-[#000000]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNotify();
              }}
              className="w-full btn-pill-ghost-white py-3.5"
            >
              {t('dropAlerts')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
