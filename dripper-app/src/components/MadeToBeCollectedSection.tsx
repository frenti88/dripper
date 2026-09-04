import React from 'react';
import { DripperVisual } from './DripperVisual';
import { Award, Box, History, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface MadeToBeCollectedSectionProps {
  onSelectProduct: (productId: string) => void;
  onExploreArchive: () => void;
}

export const MadeToBeCollectedSection: React.FC<MadeToBeCollectedSectionProps> = ({
  onSelectProduct,
  onExploreArchive
}) => {
  const { products, t } = useLanguage();
  const shelfPieces = products.slice(0, 4);

  return (
    <section className="py-[110px] bg-[#ffffff] text-[#000000] border-b border-[#d8d8d8]" aria-labelledby="made-to-collect-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('collectedBadge')}
            </span>
            <h2 id="made-to-collect-title" className="font-heading-custo text-[#000000] text-balance">
              {t('madeToCollectTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('madeToCollectSubtitle')}
            </p>
          </div>
        </div>

        {/* 4-Piece Open Collector Shelf Display (8px radius cards, Linen Mist borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {shelfPieces.map((piece) => (
            <div
              key={piece.id}
              onClick={() => onSelectProduct(piece.id)}
              className="card-custo cursor-pointer hover:border-[#000000] transition-colors flex flex-col justify-between"
              role="button"
              tabIndex={0}
              aria-label={`View ${piece.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProduct(piece.id);
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between text-[13px] text-[#8e9194] mb-2">
                  <span>{piece.collection}</span>
                  <span className="font-mono text-[#000000]">{piece.numberCode}</span>
                </div>
                <h3 className="font-heading-sm-custo text-[#000000] text-lg">
                  {piece.name}
                </h3>
              </div>

              {/* Photo Frame in Anodized Graphite (8px radius) */}
              <div className="my-5 aspect-square rounded-[8px] overflow-hidden bg-[#4b514d] border border-[#d8d8d8] p-3 flex items-center justify-center">
                <DripperVisual type={piece.visualType} className="w-full h-full object-cover rounded-[6px]" />
              </div>

              <div className="pt-2 border-t border-[#d8d8d8] flex items-center justify-between text-[13px]">
                <span className="text-[#8e9194]">{piece.currentPieceNumber || piece.stockLabel}</span>
                <span className="text-[#000000] font-mono">${piece.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Collector Trust Pillars (8px radius cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] space-y-3">
            <Award className="w-5 h-5 text-[#000000]" strokeWidth={1.5} />
            <h4 className="text-[16px] font-medium text-[#000000]">
              {t('certificateBadge')}
            </h4>
            <p className="text-[13px] text-[#8e9194] leading-relaxed">
              {t('certificateDesc')}
            </p>
          </div>

          <div className="p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] space-y-3">
            <Box className="w-5 h-5 text-[#000000]" strokeWidth={1.5} />
            <h4 className="text-[16px] font-medium text-[#000000]">
              {t('shelfPresenceBadge')}
            </h4>
            <p className="text-[13px] text-[#8e9194] leading-relaxed">
              {t('shelfPresenceDesc')}
            </p>
          </div>

          <div className="p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <History className="w-5 h-5 text-[#000000]" strokeWidth={1.5} />
              <h4 className="text-[16px] font-medium text-[#000000]">
                {t('permanentArchiveBadge')}
              </h4>
              <p className="text-[13px] text-[#8e9194] leading-relaxed">
                {t('permanentArchiveDesc')}
              </p>
            </div>

            <button
              onClick={onExploreArchive}
              className="text-link-custo pt-4 text-[14px] cursor-pointer"
            >
              <span>{t('viewTheArchive')}</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
