import React from 'react';
import { DripperVisual } from './DripperVisual';
import { MorphIcon } from 'morphicons/react';
import { Plus, Check } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';

interface FeaturedDropSectionProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  addedProductId: string | null;
}

export const FeaturedDropSection: React.FC<FeaturedDropSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  addedProductId
}) => {
  const { products, t, language } = useLanguage();
  const prehistoricProducts = products.filter(p => p.collection === 'Prehistoric');

  return (
    <section id="featured-drop" className="py-[110px] bg-[#9ea29f] text-[#ffffff] border-b border-[#ffffff]/20" aria-labelledby="featured-drop-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: 2-Column Text Block on Gunmetal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#ffffff]/80 uppercase tracking-wider block">
              {t('featuredDropBadge')}
            </span>
            <h2 id="featured-drop-title" className="font-heading-custo text-[#ffffff] text-balance">
              {t('featuredDropTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#ffffff]/90 max-w-xl text-pretty">
              {t('featuredDropSubtitle')}
            </p>
            <div className="text-[13px] text-[#ffffff]/70 font-mono">
              {t('threePiecesNumbered')} • {t('editorialVerification')}
            </div>
          </div>
        </div>

        {/* 2/3-Card Grid of Drop 001 Objects (8px radius, Linen Mist border, Anodized Graphite backdrop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prehistoricProducts.map((prod) => {
            const isAdded = addedProductId === prod.id;

            return (
              <div 
                key={prod.id}
                className="rounded-[8px] border border-[#ffffff]/30 bg-[#4b514d] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[13px] text-[#a7aaad] mb-2">
                    <span className="text-[#ffffff] font-medium">{prod.eyebrow}</span>
                    <span className="border border-[#ffffff]/20 px-2 py-0.5 rounded-[4px] text-[11px] text-[#ffffff]">
                      {prod.currentPieceNumber || prod.stockLabel}
                    </span>
                  </div>

                  <h3 className="font-heading-sm-custo text-[#ffffff] text-2xl">
                    {prod.name}
                  </h3>
                  
                  <p className="text-[15px] text-[#a7aaad] italic mt-1">
                    "{prod.headline}"
                  </p>

                  <p className="text-[14px] text-[#ffffff]/80 font-light mt-3 line-clamp-3">
                    {prod.story}
                  </p>
                </div>

                {/* Product Photograph (8px radius) */}
                <div 
                  className="my-6 aspect-square rounded-[8px] overflow-hidden bg-[#000000]/20 border border-[#ffffff]/20 p-2 flex items-center justify-center cursor-pointer"
                  onClick={() => onSelectProduct(prod.id)}
                >
                  <DripperVisual type={prod.visualType} className="w-full h-full object-cover rounded-[6px]" />
                </div>

                {/* Actions: Price + Ghost Pill Buttons */}
                <div className="pt-4 border-t border-[#ffffff]/20 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] text-[#a7aaad] uppercase">{language === 'es' ? 'PRECIO' : 'PRICE'}</div>
                    <div className="text-xl font-normal text-[#ffffff] tabular-nums">${prod.price} USD</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(prod.id)}
                      className="text-[14px] text-[#ffffff] hover:underline underline-offset-4 px-3 py-2 cursor-pointer"
                    >
                      {t('storySpecs')}
                    </button>

                    <button
                      onClick={() => onAddToCart(prod.id)}
                      className={`btn-pill-ghost-graphite text-[14px] py-2 px-5 cursor-pointer ${
                        isAdded ? 'bg-[#ffffff] text-[#000000]' : ''
                      }`}
                    >
                      <MorphIcon 
                        icon={isAdded ? Check : Plus} 
                        size={14} 
                        strokeWidth={2} 
                        spring="snappy" 
                        reducedMotion="user" 
                        className="mr-1.5" 
                      />
                      <span>{isAdded ? t('addedToBag') : t('addToBag')}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
