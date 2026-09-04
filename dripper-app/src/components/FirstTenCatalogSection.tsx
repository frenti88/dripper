import React, { useState } from 'react';
import { DripperVisual } from './DripperVisual';
import { Plus, Check, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FirstTenCatalogSectionProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  addedProductId: string | null;
  selectedCategoryFilter?: string | null;
}

export const FirstTenCatalogSection: React.FC<FirstTenCatalogSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  addedProductId,
  selectedCategoryFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { products, t, language } = useLanguage();

  const filterTabs = [
    { id: 'all', label: t('filterAll') },
    { id: 'Core', label: t('filterCore') },
    { id: 'Editions', label: t('filterEditions') },
    { id: 'Drops', label: t('filterDrops') },
    { id: 'Artists', label: t('filterArtists') },
    { id: 'Lab', label: t('filterLab') },
  ];

  const currentFilter = selectedCategoryFilter || activeCategory;

  const filteredProducts = currentFilter === 'all'
    ? products
    : products.filter(p => p.categoryTag === currentFilter || p.collection === currentFilter);

  return (
    <section id="the-first-ten" className="py-[110px] bg-[#ffffff] text-[#000000] border-b border-[#d8d8d8]" aria-labelledby="catalog-section-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('catalogBadge')}
            </span>
            <h2 id="catalog-section-title" className="font-heading-custo text-[#000000] text-balance">
              {t('catalogTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('catalogSubtitle')}
            </p>

            {/* Filter Category Pills (8px radius) */}
            <div className="flex flex-wrap items-center gap-2 pt-2" role="group" aria-label="Catalog filters">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-[8px] border text-[14px] transition-colors cursor-pointer ${
                    currentFilter === tab.id
                      ? 'border-[#000000] bg-[#000000] text-[#ffffff]'
                      : 'border-[#d8d8d8] bg-[#ffffff] text-[#000000] hover:border-[#a7aaad]'
                  }`}
                  aria-pressed={currentFilter === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 10 Objects Gallery Grid: 3 columns on desktop (8px radius, Linen Mist #a7aaad border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="card-custo flex flex-col justify-between hover:border-[#000000] transition-colors duration-200 group"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between text-[13px] text-[#8e9194] mb-3">
                    <span className="text-[#000000] font-medium uppercase tracking-wider">
                      {product.eyebrow}
                    </span>
                    <span className="font-mono text-[#8e9194]">
                      {product.currentPieceNumber || product.stockLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading-sm-custo text-[#000000] text-2xl leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-[#8e9194] italic mt-1 line-clamp-1">
                    "{product.headline}"
                  </p>
                </div>

                {/* Real Product Photograph (8px radius inside Anodized Graphite frame) */}
                <div 
                  className="my-6 aspect-square rounded-[8px] overflow-hidden bg-[#4b514d] border border-[#d8d8d8] p-3 flex items-center justify-center cursor-pointer"
                  onClick={() => onSelectProduct(product.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${product.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(product.id);
                    }
                  }}
                >
                  <DripperVisual type={product.visualType} className="w-full h-full object-cover rounded-[6px]" />
                </div>

                {/* Technical specs teaser */}
                <div className="text-[13px] text-[#8e9194] space-y-1 mb-4">
                  <div className="flex justify-between border-b border-[#d8d8d8] pb-1">
                    <span>{t('specExtraction')}</span>
                    <span className="text-[#000000] truncate max-w-[160px]">{product.specs.extractionStyle}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>{t('specMaterial')}</span>
                    <span className="text-[#000000] truncate max-w-[160px]">{product.specs.material}</span>
                  </div>
                </div>

                {/* Bottom Pricing & Ghost Action Buttons */}
                <div className="pt-4 border-t border-[#d8d8d8] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-[#8e9194] uppercase">{language === 'es' ? 'PRECIO' : 'PRICE'}</div>
                    <div className="text-xl font-normal text-[#000000] tabular-nums font-mono">${product.price} USD</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="p-2.5 rounded-[8px] border border-[#d8d8d8] hover:border-[#000000] text-[#000000] transition-colors cursor-pointer"
                      aria-label={`Details for ${product.name}`}
                      title={t('storySpecs')}
                    >
                      <Search className="w-4 h-4" strokeWidth={1.5} />
                    </button>

                    <button
                      onClick={() => onAddToCart(product.id)}
                      className={`btn-pill-ghost-white text-[13px] py-2 px-4 cursor-pointer ${
                        isAdded ? 'bg-[#000000] text-[#ffffff]' : ''
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
                          <span>{t('addedToBag')}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
                          <span>{t('addToBag')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Catalog Verification Summary */}
        <div className="mt-16 text-center text-[13px] text-[#8e9194]">
          {t('showingObjects')} <strong className="text-[#000000]">{filteredProducts.length}</strong> {t('ofTotal')} 10 {t('verifiedObjects')}
        </div>

      </div>
    </section>
  );
};
