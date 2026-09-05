import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MorphIcon } from 'morphicons/react';
import { Globe } from 'lucide';
import { playCeramicChime } from '../utils/audioSynth';

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
  theme?: 'dark' | 'light';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '',
  showIcon = true,
  theme = 'light'
}) => {
  const { language, setLanguage, t } = useLanguage();

  const handleSelect = (lang: 'es' | 'en') => {
    if (language !== lang) {
      setLanguage(lang);
      playCeramicChime();
    }
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className={`inline-flex items-center gap-1 p-1 rounded-[8px] border transition-colors ${
        isDark 
          ? 'border-[#ffffff]/30 bg-transparent text-[#ffffff]' 
          : 'border-[#a7aaad] bg-[#ffffff] text-[#000000]'
      } ${className}`}
      role="radiogroup"
      aria-label={t('languageSelector')}
    >
      {showIcon && (
        <span className={`pl-1 ${isDark ? 'text-[#ffffff]' : 'text-[#8e9194]'}`} aria-hidden="true">
          <MorphIcon icon={Globe} size={14} strokeWidth={1.5} reducedMotion="user" />
        </span>
      )}

      <button
        role="radio"
        aria-checked={language === 'es'}
        onClick={() => handleSelect('es')}
        className={`px-2.5 py-1 min-h-[28px] rounded-[6px] text-[13px] transition-colors duration-150 cursor-pointer ${
          language === 'es'
            ? isDark
              ? 'bg-[#ffffff] text-[#000000]'
              : 'bg-[#000000] text-[#ffffff]'
            : isDark
              ? 'text-[#ffffff]/70 hover:text-[#ffffff]'
              : 'text-[#8e9194] hover:text-[#000000]'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>

      <span className={`${isDark ? 'text-[#ffffff]/30' : 'text-[#d8d8d8]'} text-[12px]`} aria-hidden="true">/</span>

      <button
        role="radio"
        aria-checked={language === 'en'}
        onClick={() => handleSelect('en')}
        className={`px-2.5 py-1 min-h-[28px] rounded-[6px] text-[13px] transition-colors duration-150 cursor-pointer ${
          language === 'en'
            ? isDark
              ? 'bg-[#ffffff] text-[#000000]'
              : 'bg-[#000000] text-[#ffffff]'
            : isDark
              ? 'text-[#ffffff]/70 hover:text-[#ffffff]'
              : 'text-[#8e9194] hover:text-[#000000]'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
