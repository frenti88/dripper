import React, { useState } from 'react';
import { PRODUCTS } from '../data/dropsData';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface ProductSectionProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  addedProductId: string | null;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  addedProductId
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Objects' },
    { id: 'PREHISTORIC', label: 'Drop 003: Prehistoric' },
    { id: 'LENS ARCHIVE', label: 'Lens Series' },
    { id: 'ORIGIN', label: 'Origin Core' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.collection === activeFilter);

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#FBF9F5] border-t border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Microcopy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D8]">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C05A3E] font-semibold">
              The Objects
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#151413] tracking-tight">
              Find your DRYP.
            </h2>
            <p className="text-[#55524B] text-base font-light">
              Coffee tastes better with stories around it.
            </p>
          </div>

          {/* Filter Pills with Microcopy */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <SlidersHorizontal className="w-4 h-4 text-[#8A857C] mr-1 hidden sm:block" />
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-tight transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#151413] text-[#FBF9F5]'
                      : 'bg-[#F3EFE6] text-[#55524B] hover:text-[#151413] border border-[#E6E1D8]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              isAdded={addedProductId === product.id}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F3EFE6] border border-[#E6E1D8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl text-[#151413]">
              Your shelf has room for one more.
            </h4>
            <p className="text-sm text-[#55524B]">
              Every DRYP. is hand-stamped, numbered and made to brew slow.
            </p>
          </div>
          <div className="font-mono text-xs text-[#75726B] bg-[#FBF9F5] px-4 py-2 rounded-full border border-[#DDD8CE]">
            Free insured ceramic shipping on all drops
          </div>
        </div>

      </div>
    </section>
  );
};
