import React from 'react';
import type { DropPhase } from '../types';
import { Sparkles, Eye, Compass, Flame } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface DropControllerProps {
  currentPhase: DropPhase;
  onPhaseChange: (phase: DropPhase) => void;
}

export const DropController: React.FC<DropControllerProps> = ({
  currentPhase,
  onPhaseChange
}) => {
  const { dropStages, language } = useLanguage();

  const phaseIcons: Record<DropPhase, React.ReactNode> = {
    'T-7': <Compass className="w-3.5 h-3.5" />,
    'T-3': <Eye className="w-3.5 h-3.5" />,
    'T-1': <Sparkles className="w-3.5 h-3.5" />,
    'LIVE': <Flame className="w-3.5 h-3.5" />
  };

  const phaseKeys: DropPhase[] = ['T-7', 'T-3', 'T-1', 'LIVE'];

  return (
    <div className="w-full bg-[#fafffa] border border-[#232924]/15 rounded-[5px] py-1.5 px-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Helper text explaining the Drop Simulator */}
        <div className="flex items-center gap-2 text-xs text-[#516254]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#c05a3e]" />
          <span className="micro-label font-bold text-[#121613]">
            {language === 'es' ? 'Simulador de Lanzamiento:' : 'Drop Progression Engine:'}
          </span>
        </div>

        {/* Phase selector tabs */}
        <div className="flex items-center gap-1.5 p-0.5 bg-[#c8d2c8]/25 rounded-[5px] w-full sm:w-auto overflow-x-auto">
          {phaseKeys.map((phaseId) => {
            const stage = dropStages[phaseId];
            const isActive = currentPhase === phaseId;
            return (
              <button
                key={phaseId}
                onClick={() => onPhaseChange(phaseId)}
                className={`flex-1 sm:flex-initial flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#121613] text-[#fafffa] shadow-xs font-semibold'
                    : 'text-[#516254] hover:text-[#121613] hover:bg-[#c8d2c8]/40'
                }`}
                aria-pressed={isActive}
              >
                <span className={isActive ? 'text-[#c05a3e]' : 'text-[#516254]'}>
                  {phaseIcons[phaseId]}
                </span>
                <span className="font-mono text-[11px] font-bold tracking-tight">{stage.label}</span>
                <span className={`hidden xl:inline text-[10px] opacity-75 ${isActive ? 'text-[#c8d2c8]' : ''}`}>
                  • {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
