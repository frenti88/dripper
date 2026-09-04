import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from './types';
import { UI_TRANSLATIONS, type TranslationKey } from './translations';
import {
  LOCALIZED_DROP_STAGES,
  LOCALIZED_BENTO_CATEGORIES,
  LOCALIZED_AFFINITY_PILLS,
  LOCALIZED_PRODUCTS,
  LOCALIZED_ARCHIVE_DROPS,
  LOCALIZED_BRAND_MANIFESTO_LINES,
  LOCALIZED_COFFEE_ENGINEERING_METRICS,
  LOCALIZED_ARTIST_FEATURE,
  LOCALIZED_FAQS,
  LOCALIZED_SENSORY_ELEMENTS,
  LOCALIZED_BREW_STEPS,
  type FAQItem,
  type SensoryElement,
  type BrewStep
} from './localizedData';
import type { DropPhase, DropStageConfig, Product, ArchiveDrop, BentoCategory } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  dropStages: Record<DropPhase, DropStageConfig>;
  bentoCategories: BentoCategory[];
  affinityPills: string[];
  products: Product[];
  archiveDrops: ArchiveDrop[];
  manifestoLines: string[];
  engineeringMetrics: typeof LOCALIZED_COFFEE_ENGINEERING_METRICS['en'];
  artistFeature: typeof LOCALIZED_ARTIST_FEATURE['en'];
  faqs: FAQItem[];
  sensoryElements: SensoryElement[];
  getBrewSteps: (bloomWater: number, secondPour: number, waterTotal: number) => BrewStep[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'drip_language_preference';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
      // Default to Spanish per user requirement
      return 'es';
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: TranslationKey): string => {
    return UI_TRANSLATIONS[language][key] || UI_TRANSLATIONS.en[key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    dropStages: LOCALIZED_DROP_STAGES[language],
    bentoCategories: LOCALIZED_BENTO_CATEGORIES[language],
    affinityPills: LOCALIZED_AFFINITY_PILLS[language],
    products: LOCALIZED_PRODUCTS[language],
    archiveDrops: LOCALIZED_ARCHIVE_DROPS[language],
    manifestoLines: LOCALIZED_BRAND_MANIFESTO_LINES[language],
    engineeringMetrics: LOCALIZED_COFFEE_ENGINEERING_METRICS[language],
    artistFeature: LOCALIZED_ARTIST_FEATURE[language],
    faqs: LOCALIZED_FAQS[language],
    sensoryElements: LOCALIZED_SENSORY_ELEMENTS[language],
    getBrewSteps: LOCALIZED_BREW_STEPS[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
