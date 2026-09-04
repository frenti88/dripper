import React, { useState } from 'react';
import type { DropPhase } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Flame, ChevronRight, X } from 'lucide-react';

interface DropPinterestBannerProps {
  currentPhase: DropPhase;
  onPhaseChange: (phase: DropPhase) => void;
  onOpenNotify: () => void;
  onExploreDrop: () => void;
}

export const DropPinterestBanner: React.FC<DropPinterestBannerProps> = ({
  currentPhase,
  onPhaseChange,
  onOpenNotify,
  onExploreDrop
}) => {
  const { dropStages, language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const currentStage = dropStages[currentPhase];

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 pt-3 pb-1">
      <div className="bg-[#f6f3ee] text-[#121613] rounded-2xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs border border-[#e8e2d8]">
        
        {/* Drop Status & Headline */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#c05a3e]/10 text-[#c05a3e] border border-[#c05a3e]/25 shrink-0">
            <Flame className="w-3 h-3" />
            <span>{currentStage.badge}</span>
          </span>

          <p className="text-xs text-[#5a625c] truncate">
            <span className="text-[#121613] font-semibold">{currentStage.headline}</span>
            <span className="hidden sm:inline text-[#666f68]"> — {currentStage.subheadline}</span>
          </p>
        </div>

        {/* Phase Simulation Controls & Action */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Phase Selector */}
          <div className="flex items-center gap-0.5 bg-[#ebe6dc] p-0.5 rounded-full text-[10px] font-mono">
            {(['T-7', 'T-3', 'T-1', 'LIVE'] as DropPhase[]).map((phase) => (
              <button
                key={phase}
                onClick={() => onPhaseChange(phase)}
                className={`px-2.5 py-1 min-h-[24px] rounded-full transition-all cursor-pointer ${
                  currentPhase === phase
                    ? 'bg-[#121613] text-white font-medium shadow-2xs'
                    : 'text-[#666f68] hover:text-[#121613]'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Primary Action Button */}
          {currentPhase === 'LIVE' ? (
            <button
              onClick={onExploreDrop}
              className="flex items-center gap-1 px-3.5 py-1 min-h-[28px] rounded-full bg-[#121613] hover:bg-[#252c26] text-white font-medium text-xs transition-colors cursor-pointer shadow-2xs"
            >
              <span>{language === 'es' ? 'Ver piezas' : 'Explore'}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          ) : (
            <button
              onClick={onOpenNotify}
              className="flex items-center gap-1 px-3.5 py-1 min-h-[28px] rounded-full bg-[#c05a3e] hover:bg-[#a64726] text-white font-medium text-xs transition-colors cursor-pointer shadow-2xs"
            >
              <span>{language === 'es' ? 'Avisarme' : 'Notify me'}</span>
            </button>
          )}

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="w-7 h-7 flex items-center justify-center rounded-full text-[#8e9890] hover:text-[#121613] hover:bg-[#ebe6dc] transition-colors cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </div>
  );
};
