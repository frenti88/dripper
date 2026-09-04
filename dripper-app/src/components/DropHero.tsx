import React from 'react';
import type { DropPhase } from '../types';
import { DripperVisual } from './DripperVisual';
import { ArrowRight, Coffee, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface DropHeroProps {
  phase: DropPhase;
  onPhaseChange: (phase: DropPhase) => void;
}

export const DropHero: React.FC<DropHeroProps> = ({
  phase,
  onPhaseChange
}) => {
  const { dropStages, t, language } = useLanguage();
  const currentStage = dropStages[phase];

  const stages: DropPhase[] = ['T-7', 'T-3', 'T-1', 'LIVE'];

  const visualType = 
    phase === 'T-7' ? 'concept' :
    phase === 'T-3' ? 'texture' :
    phase === 'T-1' ? 'silhouette' : 'fossil-t';

  return (
    <section 
      className="relative bg-[#9ea29f] text-[#ffffff] pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden min-h-[92vh] flex flex-col justify-between"
      aria-label="Hero Exhibition"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          
          {/* Left Column: 38px Feature Heading & 15px Caption */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[15px] text-[#ffffff]/80 uppercase tracking-wider">
              {currentStage.badge} — {currentStage.label}
            </div>

            <h1 className="font-heading-custo text-[#ffffff] text-balance">
              {t('heroHeadlinePart1')} {t('heroHeadlinePart2')}
            </h1>

            <p className="font-body-custo text-[#ffffff]/90 max-w-xl text-pretty">
              {t('heroParagraph')}
            </p>

            {/* CTAs: Ghost Pill Button (31.35px radius) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#find-your-dryp"
                className="btn-pill-ghost-gunmetal"
              >
                <span>{t('exploreObjects')}</span>
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </a>

              <a
                href="#coffee-credibility"
                className="inline-flex items-center gap-2 text-[15px] text-[#ffffff] hover:underline underline-offset-4 px-2 py-3 cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-[#ffffff]" strokeWidth={1.5} />
                <span>{t('howItBrews')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Timeline Controls & Stage Narrative (8px radius) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Stage Selector Pills (8px radius) */}
            <div className="p-1 rounded-[8px] border border-[#ffffff]/30 bg-[#4b514d]/40 flex items-center justify-between gap-1" role="tablist" aria-label="Drop stage timeline">
              {stages.map((p) => {
                const isActive = phase === p;
                return (
                  <button
                    key={p}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onPhaseChange(p)}
                    className={`flex-1 py-2 px-2 text-center text-[13px] rounded-[6px] transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#ffffff] text-[#000000] font-medium'
                        : 'text-[#ffffff]/80 hover:text-[#ffffff] hover:bg-[#ffffff]/10'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {/* Narrative Box (8px radius, Anodized Graphite #4b514d surface) */}
            <div className="p-6 rounded-[8px] border border-[#ffffff]/20 bg-[#4b514d] text-[#ffffff] space-y-3">
              <div className="flex items-center justify-between text-[13px] text-[#a7aaad]">
                <span className="text-[#ffffff]">{currentStage.badge}</span>
                <span className="font-mono">{currentStage.countdownText}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#ffffff]/90">
                "{currentStage.storySnippet}"
              </p>
              <div className="pt-2 flex items-center gap-2 text-[13px] text-[#a7aaad] border-t border-[#ffffff]/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffffff]" strokeWidth={1.5} />
                <span>
                  {phase === 'LIVE' ? t('certificateNoteLive') : t('certificateNotePreorder')}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Center Gallery Showcase: Anodized Graphite #4b514d frame with 8px radius */}
        <div className="relative w-full max-w-2xl mx-auto my-8">
          <div className="aspect-4/3 rounded-[8px] overflow-hidden border border-[#ffffff]/30 bg-[#4b514d] p-4 flex items-center justify-center">
            <DripperVisual type={visualType} className="w-full h-full object-cover" />
          </div>
          
          <div className="mt-3 flex items-center justify-between text-[13px] text-[#ffffff]/80 px-1">
            <span>{currentStage.visualFocus.toUpperCase()} // VALLE DE SILARIA</span>
            <span>{language === 'es' ? 'COLECCIÓN NUMERADA' : 'NUMBERED EDITION'}</span>
          </div>
        </div>

      </div>

      {/* Bottom Architectural Monolithic Wordmark DRYP® at 57px PP Neue Montreal */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 border-t border-[#ffffff]/20 flex items-end justify-between">
        <div className="font-display-custo text-[#ffffff] leading-none select-none tracking-tight flex items-baseline">
          <span>DRYP</span>
          <span className="text-[28px] ml-1">®</span>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right text-[13px] text-[#ffffff]/80 font-normal">
          <span>CUMBRES DE NEBLARIA × VALLE DE SILARIA</span>
          <span className="text-[#ffffff]/60">HANDCRAFTED COFFEE DRIPPERS</span>
        </div>
      </div>
    </section>
  );
};
