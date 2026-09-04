import React, { useState } from 'react';
import { DripperVisual } from './DripperVisual';
import { Plus, Check, Search, Shield, Zap, Sparkles, Scale } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductRevealSectionProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  isAdded: boolean;
}

export const ProductRevealSection: React.FC<ProductRevealSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  isAdded
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t('feature1Title'),
      desc: t('feature1Desc')
    },
    {
      icon: Zap,
      title: t('feature2Title'),
      desc: t('feature2Desc')
    },
    {
      icon: Scale,
      title: t('feature3Title'),
      desc: t('feature3Desc')
    },
    {
      icon: Shield,
      title: t('feature4Title'),
      desc: t('feature4Desc')
    }
  ];

  return (
    <section className="py-[110px] bg-[#4b514d] text-[#ffffff] border-b border-[#3e4340] relative" aria-labelledby="macro-inspection-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#a7aaad] uppercase tracking-wider block">
              {t('macroInspectionBadge')}
            </span>
            <h2 id="macro-inspection-title" className="font-heading-custo text-[#ffffff] text-balance">
              {t('macroTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#ffffff]/90 max-w-xl text-pretty">
              {t('macroSubtitle')}
            </p>

            {/* Macro Zoom Controls (8px radius) */}
            <div className="flex items-center gap-2 pt-2" role="group" aria-label="Macro magnification controls">
              <span className="text-[13px] text-[#a7aaad] mr-2">
                {language === 'es' ? 'Aumento:' : 'Zoom:'}
              </span>
              {[
                { level: 1, label: `1x ${t('zoomNormal')}` },
                { level: 2, label: `2x ${t('zoom2x')}` },
                { level: 3, label: `4x ${t('zoom4x')}` },
              ].map((btn) => (
                <button
                  key={btn.level}
                  onClick={() => setZoomLevel(btn.level)}
                  className={`px-3.5 py-1.5 rounded-[8px] border text-[13px] transition-colors cursor-pointer ${
                    zoomLevel === btn.level
                      ? 'border-[#ffffff] bg-[#ffffff] text-[#000000] font-medium'
                      : 'border-[#8e9194] bg-transparent text-[#ffffff] hover:border-[#ffffff]'
                  }`}
                  aria-pressed={zoomLevel === btn.level}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Macro Inspection Canvas & 4 Technical Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 6 cols: High-Res Real Macro Sculpture Canvas (8px radius) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[460px] aspect-square rounded-[8px] overflow-hidden bg-[#000000]/30 border border-[#8e9194] p-4 flex items-center justify-center relative">
              <DripperVisual 
                type="fossil-t" 
                zoomLevel={zoomLevel}
                className="w-full h-full object-cover rounded-[6px]" 
              />
              
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-[6px] bg-[#000000]/80 text-[#ffffff] border border-[#8e9194] text-[11px] font-mono">
                {zoomLevel}X OPTICAL VIEW
              </div>
            </div>
          </div>

          {/* Right 6 cols: 4 Technical Architecture Points + Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-5 rounded-[8px] border border-[#8e9194]/60 bg-[#000000]/20 space-y-2"
                  >
                    <IconComponent className="w-4 h-4 text-[#ffffff]" strokeWidth={1.5} />
                    <h3 className="text-[16px] font-medium text-[#ffffff]">
                      {feat.title}
                    </h3>
                    <p className="text-[13px] text-[#a7aaad] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions Block */}
            <div className="pt-4 border-t border-[#8e9194] flex flex-wrap items-center justify-between gap-4">
              <div className="text-[15px] text-[#ffffff]">
                <span className="text-[#a7aaad] block text-[12px]">{language === 'es' ? 'VALOR' : 'PRICE'}</span>
                <strong>$69 USD</strong> • 037 / 150
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectProduct('fossil-t')}
                  className="btn-secondary-custo text-[#ffffff] border-[#8e9194] hover:border-[#ffffff] hover:bg-[#ffffff]/10"
                >
                  <Search className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
                  <span>{t('inspectFullObject')}</span>
                </button>

                <button
                  onClick={() => onAddToCart('fossil-t')}
                  className={`btn-pill-ghost-graphite ${
                    isAdded ? 'bg-[#ffffff] text-[#000000]' : ''
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5" strokeWidth={2} />
                      <span>{t('addedToBag')}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 mr-1.5" strokeWidth={2} />
                      <span>{t('addToBag')} — $69</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
