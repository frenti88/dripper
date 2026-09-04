import React from 'react';
import { Lock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ArchiveSection: React.FC = () => {
  const { archiveDrops, t, language } = useLanguage();

  return (
    <section id="archive" className="py-[110px] bg-[#4b514d] text-[#ffffff] border-b border-[#3e4340]" aria-labelledby="archive-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#a7aaad] uppercase tracking-wider block">
              {t('archiveBadge')}
            </span>
            <h2 id="archive-title" className="font-heading-custo text-[#ffffff] text-balance">
              {t('archiveTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#ffffff]/90 max-w-xl text-pretty">
              {t('archiveSubtitle')}
            </p>
            <div className="text-[13px] text-[#a7aaad] font-mono">
              {language === 'es' ? 'Ediciones Archivadas en Estudio: ' : 'Studio Archived Editions: '}
              <strong className="text-[#ffffff]">{archiveDrops.length} {language === 'es' ? 'Lotes' : 'Batches'}</strong>
            </div>
          </div>
        </div>

        {/* 3 Archive Cards Grid (8px radius, Anodized Graphite with Linen Mist border) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {archiveDrops.map((drop) => (
            <div
              key={drop.id}
              className="p-8 rounded-[8px] border border-[#8e9194] bg-[#000000]/20 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between text-[13px] text-[#a7aaad] mb-3">
                  <span className="font-mono">{drop.code} • {drop.year}</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] border border-[#8e9194] text-[11px] text-[#ffffff]">
                    <Lock className="w-3 h-3 text-[#a7aaad]" strokeWidth={1.5} />
                    <span>{drop.status}</span>
                  </span>
                </div>

                <h3 className="font-heading-sm-custo text-[#ffffff] text-2xl">
                  {drop.title}
                </h3>
                
                <p className="text-[14px] text-[#a7aaad] italic mt-1 mb-3">
                  "{drop.headline}"
                </p>

                <p className="text-[13px] text-[#ffffff]/80 leading-relaxed font-light">
                  {drop.story}
                </p>
              </div>

              <div className="pt-4 border-t border-[#8e9194]/40 flex items-center justify-between text-[12px] text-[#a7aaad] font-mono">
                <span>{language === 'es' ? `${drop.itemsCount} piezas producidas` : `${drop.itemsCount} units produced`}</span>
                <span>Carmen de Viboral</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
