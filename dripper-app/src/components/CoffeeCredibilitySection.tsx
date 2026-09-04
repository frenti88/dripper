import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const CoffeeCredibilitySection: React.FC = () => {
  const [dose, setDose] = useState<number>(18);
  const [ratioMultiplier, setRatioMultiplier] = useState<number>(16.6);
  const { engineeringMetrics, getBrewSteps, t, language } = useLanguage();

  const waterTotal = Math.round(dose * ratioMultiplier);
  const bloomWater = Math.round(dose * 3);
  const secondPour = Math.round(waterTotal * 0.6);

  const currentBrewSteps = getBrewSteps(bloomWater, secondPour, waterTotal);

  return (
    <section id="coffee-credibility" className="py-[110px] bg-[#ffffff] text-[#000000] border-b border-[#d8d8d8]" aria-labelledby="credibility-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('extractionPhysicsBadge')}
            </span>
            <h2 id="credibility-title" className="font-heading-custo text-[#000000] text-balance">
              {t('credibilityTitlePart1')} {t('credibilityTitlePart2')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('credibilitySubtitle')}
            </p>
            <div className="text-[13px] text-[#8e9194]">
              {t('thermalLossStat')} • {t('universalFitStat')}
            </div>
          </div>
        </div>

        {/* 4 Laboratory Engineering Points (8px radius cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {engineeringMetrics.points.map((pt, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] space-y-2 hover:border-[#a7aaad] transition-colors"
            >
              <div className="text-[13px] text-[#8e9194] font-mono">0{idx + 1}</div>
              <h3 className="text-[16px] font-medium text-[#000000]">
                {pt.title}
              </h3>
              <p className="text-[13px] text-[#8e9194] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Extraction Schedule Calculator (8px radius container, Aluminum Hairline borders) */}
        <div className="rounded-[8px] border border-[#a7aaad] p-8 lg:p-12 bg-[#ffffff] space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#d8d8d8] pb-6">
            <div>
              <span className="text-[13px] text-[#8e9194] uppercase tracking-wider block">
                {t('liveCalculator')}
              </span>
              <h3 className="font-heading-sm-custo text-[#000000] mt-1">
                {t('calculatorTitle')}
              </h3>
            </div>

            <div className="text-[13px] text-[#000000] px-3.5 py-1.5 rounded-[8px] border border-[#d8d8d8]">
              {t('labTestedBadge')}
            </div>
          </div>

          {/* Interactive Calculator Inputs & Ratio Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Dose Slider & Input */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="dose-input" className="text-[15px] font-medium text-[#000000]">
                  {t('doseLabel')}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="dose-input"
                    type="number"
                    min={12}
                    max={32}
                    value={dose}
                    onChange={(e) => setDose(Math.max(12, Math.min(32, Number(e.target.value) || 12)))}
                    className="w-20 text-center font-mono text-[16px] font-medium py-1 px-2 border border-[#d8d8d8] rounded-[8px] focus:border-[#000000] outline-none"
                  />
                  <span className="text-[13px] text-[#8e9194]">grams</span>
                </div>
              </div>

              <input
                type="range"
                min={12}
                max={32}
                step={1}
                value={dose}
                onChange={(e) => setDose(Number(e.target.value))}
                className="w-full accent-[#000000] cursor-pointer"
                aria-label="Adjust coffee dose in grams"
              />
              <div className="flex justify-between text-[11px] text-[#8e9194] font-mono">
                <span>12g (Single)</span>
                <span>18g (Standard Studio)</span>
                <span>30g (Sharing)</span>
              </div>
            </div>

            {/* Brew Ratio Buttons (8px radius) */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-[15px] font-medium text-[#000000] block">
                {t('brewRatioTarget')}
              </span>
              <div className="grid grid-cols-3 gap-2" role="group" aria-label="Brew extraction ratio target">
                {[
                  { ratio: 15, label: t('ratioRich'), desc: t('richSyrupy') },
                  { ratio: 16.6, label: t('ratioStandard'), desc: t('goldenBalance') },
                  { ratio: 18, label: t('ratioClarity'), desc: t('lightFloral') },
                ].map((item) => (
                  <button
                    key={item.ratio}
                    onClick={() => setRatioMultiplier(item.ratio)}
                    className={`p-3 rounded-[8px] border text-left transition-colors cursor-pointer ${
                      ratioMultiplier === item.ratio
                        ? 'border-[#000000] bg-[#000000] text-[#ffffff]'
                        : 'border-[#d8d8d8] bg-[#ffffff] text-[#000000] hover:border-[#a7aaad]'
                    }`}
                    aria-pressed={ratioMultiplier === item.ratio}
                  >
                    <div className="text-[13px] font-medium">{item.label}</div>
                    <div className={`text-[11px] mt-0.5 ${ratioMultiplier === item.ratio ? 'text-[#a7aaad]' : 'text-[#8e9194]'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Realtime Extraction Step Schedule (8px radius cards) */}
          <div className="pt-6 border-t border-[#d8d8d8]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentBrewSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] space-y-3"
                >
                  <div className="flex items-center justify-between text-[13px] border-b border-[#d8d8d8] pb-2">
                    <span className="text-[#000000] font-medium">{step.title}</span>
                    <span className="text-[#8e9194] font-mono">{step.time}</span>
                  </div>
                  
                  <div className="text-xl font-normal text-[#000000] tabular-nums">
                    {step.target}
                  </div>

                  <p className="text-[13px] text-[#8e9194] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Total Yield Summary Bar */}
            <div className="mt-8 p-4 rounded-[8px] border border-[#a7aaad] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[14px]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[#8e9194] text-[12px] block uppercase">{t('doseLabel')}</span>
                  <strong className="text-[#000000] font-mono">{dose}g</strong>
                </div>
                <div>
                  <span className="text-[#8e9194] text-[12px] block uppercase">RATIO</span>
                  <strong className="text-[#000000] font-mono">1:{ratioMultiplier}</strong>
                </div>
                <div>
                  <span className="text-[#8e9194] text-[12px] block uppercase">{t('totalYieldLabel')}</span>
                  <strong className="text-[#000000] font-mono">{waterTotal}g</strong>
                </div>
              </div>

              <div className="text-[13px] text-[#8e9194]">
                {language === 'es' ? 'Filtro cónico 02 • Molienda media-fina recomendada' : '02 Conical filter • Medium-fine grind recommended'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
