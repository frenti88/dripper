import React from 'react';
import { BRAND_MANIFESTO_LINES } from '../data/dropsData';
import { Heart } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F3EFE6] border-y border-[#E6E1D8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF9F5] border border-[#E6E1D8] text-xs font-mono text-[#75726B]">
          <Heart className="w-3.5 h-3.5 text-[#C05A3E]" />
          <span>The DRYP. Principle</span>
        </div>

        <div className="space-y-4 font-serif text-2xl sm:text-4xl text-[#151413] leading-relaxed">
          {BRAND_MANIFESTO_LINES.slice(0, 5).map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <p className="font-serif text-xl sm:text-2xl text-[#C05A3E] italic">
          Coffee meets handcrafted ceramic drips.
        </p>

      </div>
    </section>
  );
};
