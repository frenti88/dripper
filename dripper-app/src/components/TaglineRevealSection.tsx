import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const TaglineRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedIndex, setRevealedIndex] = useState<number>(-1);
  const { language, t } = useLanguage();

  const words = useMemo(() => {
    const textLines = language === 'es' 
      ? [
          "El café se volvió parte de nuestras vidas.",
          "Cosas que recuerdas, hechas para café."
        ]
      : [
          "Coffee became part of our lives.",
          "Things you remember, made for coffee."
        ];
    return textLines.join(" ").split(" ");
  }, [language]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealedIndex(-1);
            words.forEach((_, idx) => {
              const timer = setTimeout(() => {
                setRevealedIndex((prev) => Math.max(prev, idx));
              }, idx * 60);
              timers.push(timer);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [words]);

  return (
    <section 
      ref={containerRef}
      className="py-[110px] bg-[#9ea29f] text-[#ffffff] border-b border-[#ffffff]/20 relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-[15px] uppercase tracking-wider text-[#ffffff]/80 block mb-8">
          {t('thesisBadge')}
        </span>

        <h2 className="font-heading-custo text-[#ffffff] text-balance">
          {words.map((word, idx) => {
            const isRevealed = idx <= revealedIndex;

            return (
              <span
                key={idx}
                className={`inline-block mr-3 my-1 transition-all duration-300 ${
                  isRevealed
                    ? 'text-[#ffffff] opacity-100'
                    : 'text-[#ffffff]/30 translate-y-1'
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

        <p className="mt-12 text-[15px] text-[#ffffff]/70 tracking-normal text-pretty">
          {t('thesisTagline')}
        </p>

      </div>
    </section>
  );
};
