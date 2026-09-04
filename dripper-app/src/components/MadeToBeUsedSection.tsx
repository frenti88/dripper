import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Coffee } from 'lucide-react';
import { playWaterDrop, playCeramicChime, playSteamExhale, playPressStamp } from '../utils/audioSynth';
import { useLanguage } from '../i18n/LanguageContext';

interface MadeToBeUsedSectionProps {
  onExploreBrewing: () => void;
}

export const MadeToBeUsedSection: React.FC<MadeToBeUsedSectionProps> = ({ onExploreBrewing }) => {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const { sensoryElements, t } = useLanguage();

  const handleTriggerSound = (id: string) => {
    setActiveSound(id);
    if (id === 'water') playWaterDrop();
    if (id === 'porcelain') playCeramicChime();
    if (id === 'steam') playSteamExhale();
    if (id === 'silence') playPressStamp();

    setTimeout(() => {
      setActiveSound(null);
    }, 1800);
  };

  return (
    <section className="py-[110px] bg-[#ffffff] text-[#000000] border-b border-[#d8d8d8]" aria-labelledby="made-to-use-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('sensoryBadge')}
            </span>
            <h2 id="made-to-use-title" className="font-heading-custo text-[#000000] text-balance">
              {t('madeToUseTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('madeToUseSubtitle')}
            </p>
          </div>
        </div>

        {/* 4 Sensory Trigger Cards in Anodized Graphite #4b514d (8px radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sensoryElements.map((elem) => {
            const isPlaying = activeSound === elem.id;

            return (
              <button
                key={elem.id}
                onClick={() => handleTriggerSound(elem.id)}
                className={`p-6 rounded-[8px] border text-left transition-colors cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isPlaying
                    ? 'bg-[#000000] border-[#000000] text-[#ffffff]'
                    : 'bg-[#4b514d] border-[#8e9194] text-[#ffffff] hover:border-[#ffffff]'
                }`}
                aria-label={`${elem.name}: ${elem.cue}`}
              >
                <div>
                  <div className="flex items-center justify-between text-[13px] text-[#a7aaad] mb-3">
                    <span className="font-mono">0{elem.id === 'water' ? 1 : elem.id === 'porcelain' ? 2 : elem.id === 'steam' ? 3 : 4}</span>
                    <span className="flex items-center gap-1">
                      {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#ffffff] animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 text-[#a7aaad]" />}
                      <span className="text-[11px]">{isPlaying ? t('playingAudio') : t('tapForSound')}</span>
                    </span>
                  </div>

                  <h3 className="text-[18px] font-medium text-[#ffffff]">
                    {elem.name}
                  </h3>

                  <p className="text-[13px] text-[#a7aaad] mt-2 leading-relaxed">
                    {elem.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8e9194]/40 text-[12px] text-[#ffffff]/80 flex items-center justify-between">
                  <span>{elem.cue}</span>
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Sensory Action Banner (8px radius, Canvas Gunmetal #9ea29f surface) */}
        <div className="p-8 lg:p-12 rounded-[8px] bg-[#9ea29f] text-[#ffffff] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading-sm-custo text-[#ffffff]">
              {t('transformMorningTitle')}
            </h3>
            <p className="text-[15px] text-[#ffffff]/90 max-w-lg">
              {t('transformMorningSubtitle')}
            </p>
          </div>

          <button
            onClick={onExploreBrewing}
            className="btn-pill-ghost-gunmetal self-start sm:self-auto"
          >
            <Coffee className="w-4 h-4 mr-2" strokeWidth={1.5} />
            <span>{t('brewWithDrip')}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
