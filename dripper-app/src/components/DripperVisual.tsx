import React, { useState } from 'react';

interface DripperVisualProps {
  type: 
    | 'fossil-t' 
    | 'fossil-raptor' 
    | 'core' 
    | 'core-black' 
    | 'lens-50' 
    | 'brutalist' 
    | 'orbit' 
    | 'artist-001' 
    | 'medellin' 
    | 'flow-01' 
    | 'texture' 
    | 'silhouette' 
    | 'concept';
  className?: string;
  zoomLevel?: number; // 1 to 3 for progressive reveal
  alt?: string;
}

const PRODUCT_IMAGE_MAP: Record<string, { src: string; label: string }> = {
  'fossil-t': {
    src: '/images/products/fossil-t.jpg',
    label: '03 / Fossil T — Vertebrae Porcelain'
  },
  'fossil-raptor': {
    src: '/images/products/fossil-raptor.jpg',
    label: '04 / Fossil Raptor — Obsidian Stoneware'
  },
  'core': {
    src: '/images/products/core.jpg',
    label: '01 / Core 01 — Bone Porcelain & Terracotta'
  },
  'core-black': {
    src: '/images/products/core-black.jpg',
    label: '02 / Core Basalt Black Stoneware'
  },
  'lens-50': {
    src: '/images/products/lens-50.jpg',
    label: '05 / Lens 50mm f/1.4 Concentric Ribs'
  },
  'brutalist': {
    src: '/images/products/brutalist.jpg',
    label: '06 / Brutalist 01 Monolithic Concrete Ceramic'
  },
  'orbit': {
    src: '/images/products/orbit.jpg',
    label: '07 / Orbit Space Apollo Lunar Regolith'
  },
  'artist-001': {
    src: '/images/products/artist-001.jpg',
    label: '08 / Artist 001 — Camilo Restrepo Neblaria Mountain Clay'
  },
  'medellin': {
    src: '/images/products/medellin.jpg',
    label: '09 / Neblaria Sacred Terraces Earthenware'
  },
  'flow-01': {
    src: '/images/products/flow-01.jpg',
    label: '10 / Flow 01 Lab — Parabolic Cobalt Blue'
  },
  'texture': {
    src: '/images/products/kintsugi-gold.jpg',
    label: 'Kintsugi Gold 24K Conical Pour-Over Dripper'
  },
  'silhouette': {
    src: '/images/products/monolith-cinema.jpg',
    label: '2001 Monolith Basalt Conical Pour-Over Dripper'
  },
  'concept': {
    src: '/images/products/bauhaus-dessau.jpg',
    label: 'Bauhaus Dessau 1925 Conical Pour-Over Dripper'
  }
};

export const DripperVisual: React.FC<DripperVisualProps> = ({
  type,
  className = '',
  zoomLevel = 1,
  alt
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imgData = PRODUCT_IMAGE_MAP[type] || {
    src: `/images/products/${type}.jpg`,
    label: type
  };

  const zoomStyle = zoomLevel === 3 
    ? 'scale-[2.4] -translate-y-[18%]' 
    : zoomLevel === 2 
    ? 'scale-[1.7] -translate-y-[8%]' 
    : 'scale-100 translate-y-0';

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-[8px] flex items-center justify-center bg-[#4b514d]/10 ${className}`}>
      {!imageError ? (
        <img
          src={imgData.src}
          alt={alt || imgData.label}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover object-center rounded-[8px] transition-all duration-700 ease-out ${zoomStyle} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Fallback placeholder if image fails */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#4b514d] text-[#ffffff] rounded-[8px]">
          <span className="font-mono text-xs text-[#a7aaad] font-bold uppercase">{type}</span>
          <span className="text-[11px] text-[#ffffff] mt-1">DRYP® Handcrafted Object</span>
        </div>
      )}
    </div>
  );
};
