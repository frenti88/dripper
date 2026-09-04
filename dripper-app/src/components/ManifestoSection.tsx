import React from 'react';
import { DripperVisual } from './DripperVisual';
import { useLanguage } from '../i18n/LanguageContext';

export const ManifestoSection: React.FC = () => {
  const { manifestoLines, t } = useLanguage();

  return (
    <section id="manifesto" className="py-[110px] bg-[#ffffff] border-b border-[#d8d8d8] text-[#000000]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: ~280px Caption Label in Obsidian (15px) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[15px] font-normal uppercase tracking-wider text-[#8e9194] block">
              {t('manifestoBadge')}
            </span>
            <p className="text-[15px] text-[#000000] leading-relaxed max-w-[280px]">
              {t('objectsWithStories')}
            </p>

            {/* Small Product Card Preview (8px radius) */}
            <div className="pt-6 hidden lg:block">
              <div className="w-44 aspect-square rounded-[8px] border border-[#a7aaad] p-3 bg-[#ffffff] overflow-hidden">
                <DripperVisual type="core" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: 38px Heading and 19px Body Lines */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-heading-custo text-[#000000] text-balance">
              {manifestoLines[0]}
            </h2>

            <div className="space-y-4 pt-2">
              {manifestoLines.slice(1).map((line, idx) => {
                const isLast = idx === manifestoLines.length - 2;
                return (
                  <p 
                    key={idx} 
                    className={
                      isLast 
                        ? "font-subheading-custo text-[#000000] font-medium pt-4 border-t border-[#d8d8d8]" 
                        : "font-body-custo text-[#8e9194] hover:text-[#000000] transition-colors"
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
