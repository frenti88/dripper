import React from 'react';
import { DripperVisual } from './DripperVisual';
import { ArrowRight, MapPin, Flame, UserCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ArtistStorySectionProps {
  onSelectArtistProduct: () => void;
}

export const ArtistStorySection: React.FC<ArtistStorySectionProps> = ({ onSelectArtistProduct }) => {
  const { artistFeature, t, language } = useLanguage();

  return (
    <section id="artist-story" className="py-[110px] bg-[#9ea29f] text-[#ffffff] border-b border-[#ffffff]/20" aria-labelledby="artist-section-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#ffffff]/80 uppercase tracking-wider block">
              {t('artistBadge')}
            </span>
            <h2 id="artist-section-title" className="font-heading-custo text-[#ffffff] text-balance">
              {t('artistSectionTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#ffffff]/90 max-w-xl text-pretty">
              {t('artistSectionSubtitle')}
            </p>
            <p className="text-[15px] text-[#ffffff] italic">
              "{artistFeature.quote}" — {artistFeature.name}
            </p>
          </div>
        </div>

        {/* 2-Column Artist Profile & 4-Step Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 5 cols: Artist Piece Portrait & Workshop Meta (8px radius) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-square rounded-[8px] overflow-hidden bg-[#4b514d] border border-[#ffffff]/30 p-4 flex items-center justify-center">
              <DripperVisual type="artist-001" className="w-full h-full object-cover rounded-[6px]" />
            </div>

            {/* Workshop Meta Badges (8px radius) */}
            <div className="p-6 rounded-[8px] bg-[#4b514d] border border-[#ffffff]/20 space-y-3 text-[13px]">
              <div className="flex items-center gap-3 text-[#ffffff]">
                <UserCheck className="w-4 h-4 text-[#ffffff]" strokeWidth={1.5} />
                <span>{artistFeature.name} • {artistFeature.role}</span>
              </div>
              <div className="flex items-center gap-3 text-[#a7aaad]">
                <MapPin className="w-4 h-4 text-[#ffffff]" strokeWidth={1.5} />
                <span>{artistFeature.location}</span>
              </div>
              <div className="flex items-center gap-3 text-[#a7aaad]">
                <Flame className="w-4 h-4 text-[#ffffff]" strokeWidth={1.5} />
                <span>{language === 'es' ? 'Horno de leña tradicional a 1280°C' : 'Traditional wood-fired kiln at 1280°C'}</span>
              </div>
            </div>

            <button
              onClick={onSelectArtistProduct}
              className="btn-pill-ghost-gunmetal w-full"
            >
              <span>{t('exploreArtistPiece')}</span>
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right 7 cols: 4-Step Craft Process (8px radius cards) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading-sm-custo text-[#ffffff] text-xl mb-4">
              {t('craftProcessTitle')}
            </h3>

            <div className="space-y-4">
              {artistFeature.processSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-[8px] bg-[#4b514d] border border-[#ffffff]/20 space-y-1"
                >
                  <h4 className="text-[16px] font-medium text-[#ffffff]">
                    {step.name}
                  </h4>
                  <p className="text-[14px] text-[#a7aaad] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
