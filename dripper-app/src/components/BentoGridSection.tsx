import React from 'react';
import { DripperVisual } from './DripperVisual';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface BentoGridSectionProps {
  onSelectCategory: (category: string) => void;
}

export const BentoGridSection: React.FC<BentoGridSectionProps> = ({ onSelectCategory }) => {
  const { bentoCategories, affinityPills, t } = useLanguage();

  return (
    <section id="find-your-dryp" className="py-[110px] bg-[#ffffff] border-b border-[#d8d8d8] text-[#000000]" aria-labelledby="bento-section-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('bentoBadge')}
            </span>
            <h2 id="bento-section-title" className="font-heading-custo text-[#000000] text-balance">
              {t('bentoTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('bentoSubtitle')}
            </p>

            {/* Affinity Filter Tags: 15px with 8px radius buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2" role="group" aria-label="Affinity themes">
              {affinityPills.map((pill) => (
                <button
                  key={pill}
                  onClick={() => onSelectCategory(pill)}
                  className="px-3.5 py-1.5 rounded-[8px] border border-[#d8d8d8] hover:border-[#000000] text-[13px] text-[#000000] transition-colors cursor-pointer bg-[#ffffff]"
                  aria-label={`Filter by ${pill}`}
                >
                  #{pill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Image Card Grid (3 cards / 4 cards in row, 8px radius, 1px Linen Mist #a7aaad border, 24px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bentoCategories.map((item) => {
            const visual = 
              item.id === 'prehistoric' ? 'fossil-t' :
              item.id === 'photography' ? 'lens-50' :
              item.id === 'core' ? 'core' : 'artist-001';

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Explore ${item.title}`}
                onClick={() => onSelectCategory(item.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(item.title);
                  }
                }}
                className="card-custo flex flex-col justify-between cursor-pointer hover:border-[#000000] transition-colors duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between text-[13px] text-[#8e9194] mb-2">
                    <span>{item.tag}</span>
                    {item.badge && (
                      <span className="text-[#000000] font-medium px-2 py-0.5 rounded-[4px] border border-[#d8d8d8] text-[11px]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading-sm-custo text-[#000000] text-xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#8e9194] mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Product Photograph (8px radius inside 8px frame) */}
                <div className="my-6 aspect-square rounded-[8px] overflow-hidden bg-[#4b514d] border border-[#d8d8d8] flex items-center justify-center p-2">
                  <DripperVisual type={visual} className="w-full h-full object-cover rounded-[6px]" />
                </div>

                <div className="pt-2 border-t border-[#d8d8d8] flex items-center justify-between text-[13px] text-[#000000]">
                  <span>{item.affinityTheme}</span>
                  <ArrowRight className="w-4 h-4 text-[#8e9194] group-hover:text-[#000000] group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
