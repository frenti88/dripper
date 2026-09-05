import React from 'react';
import type { Product } from '../types';
import { DripperVisual } from './DripperVisual';
import { MorphIcon } from 'morphicons/react';
import { ArrowUpRight, Plus, Sparkles, Check } from 'lucide';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  isAdded?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  isAdded = false
}) => {
  const visualType = product.visualType || 'core';

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-[#F8F6F1] border border-[#E6E1D8] p-6 sm:p-7 hover:border-[#CDC5B8] hover:shadow-xl transition-shadow duration-300">
      
      {/* Top Details & Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#EAE5DC]">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#75726B] uppercase">
            {product.eyebrow}
          </span>

          {/* Microcopy Stock Badge */}
          <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full tabular-nums ${
            product.stockStatus === 'low_stock' 
              ? 'bg-[#C05A3E]/10 text-[#C05A3E] border border-[#C05A3E]/30'
              : 'bg-[#EAE6DF] text-[#55524B]'
          }`}>
            {product.stockLabel}
          </span>
        </div>

        {/* Visual Sculpture Area with Concentric Radius & Image Outline */}
        <div 
          onClick={() => onSelect(product.id)}
          className="my-6 aspect-square w-full cursor-pointer overflow-hidden rounded-2xl relative outline-1 outline-black/5 bg-[#FBF9F5]"
        >
          <DripperVisual type={visualType} className="w-full h-full" />
          
          {/* Quick view hover icon */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FBF9F5]/90 backdrop-blur-sm border border-[#E6E1D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <MorphIcon icon={ArrowUpRight} size={16} strokeWidth={1.5} reducedMotion="user" className="text-[#151413]" />
          </div>
        </div>

        {/* Level 1: EMOCIÓN */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#151413] tracking-tight">
              {product.name}
            </h3>
            <span className="font-serif text-xl font-normal text-[#151413] tabular-nums">
              ${product.price} <span className="text-xs font-mono text-[#75726B]">{product.currency}</span>
            </span>
          </div>

          <p className="font-serif text-base italic text-[#C05A3E] leading-snug">
            "{product.headline}"
          </p>
        </div>

        {/* Level 2: HISTORIA */}
        <p className="mt-3 text-xs sm:text-sm text-[#55524B] leading-relaxed line-clamp-3">
          {product.story}
        </p>

        {/* Glaze Palette Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-mono text-[#8A857C]">Glaze:</span>
          <div className="flex items-center gap-1.5">
            {product.paletteColors.map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className="w-3.5 h-3.5 rounded-full border border-[#D5CFC5] shadow-xs inline-block"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Level 3: Actions & Extraction preview */}
      <div className="mt-6 pt-4 border-t border-[#EAE5DC] flex items-center gap-3">
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={product.stockStatus === 'sold_out'}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-full text-xs font-medium tracking-wide transition-colors duration-200 active:scale-[0.96] active:transition-transform cursor-pointer ${
            isAdded
              ? 'bg-[#5B6652] text-white'
              : 'bg-[#151413] text-[#FBF9F5] hover:bg-[#2C2A28]'
          }`}
        >
          <MorphIcon 
            icon={isAdded ? Check : Plus} 
            size={14} 
            strokeWidth={1.5} 
            spring="snappy" 
            reducedMotion="user" 
            className={isAdded ? "text-white" : "text-[#C05A3E]"} 
          />
          <span>{isAdded ? 'Nice choice. Added!' : 'Add to Bag'}</span>
        </button>

        <button
          onClick={() => onSelect(product.id)}
          aria-label="Story and Coffee Specs"
          className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-[#DDD6C8] hover:border-[#151413] text-[#151413] hover:bg-[#F3EFE6] transition-colors duration-200 active:scale-[0.96] active:transition-transform cursor-pointer"
          title="See full story & brewing specs"
        >
          <MorphIcon icon={Sparkles} size={16} strokeWidth={1.5} reducedMotion="user" className="text-[#75726B]" />
        </button>
      </div>

    </div>
  );
};
