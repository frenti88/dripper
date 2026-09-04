import React from 'react';
import { Compass, Eye, Sparkles, Flame, Archive } from 'lucide-react';

export const DropTimeline: React.FC = () => {
  const steps = [
    {
      code: 'T−7',
      title: 'Design & Concept',
      desc: 'We share the cultural artifact, the era, the inspiration that sparked the drip. No product renders yet—just the idea taking root.',
      icon: <Compass className="w-5 h-5 text-[#C05A3E]" />
    },
    {
      code: 'T−3',
      title: 'Material & Texture',
      desc: 'Close-ups of raw stoneware, volcanic grog slip and tactile rib testing straight from the kiln. How it feels in the hand.',
      icon: <Eye className="w-5 h-5 text-[#C05A3E]" />
    },
    {
      code: 'T−1',
      title: 'Silhouette & Geometry',
      desc: 'Light and shadow reveal the dripper form. 24-hour countdown begins. Private batch allocations reserved for drop alert members.',
      icon: <Sparkles className="w-5 h-5 text-[#C05A3E]" />
    },
    {
      code: 'LAUNCH',
      title: 'The Drop Goes Live',
      desc: 'Numbered small batches (100–150 units). When they are gone, they rest. "This one won\'t stay forever."',
      icon: <Flame className="w-5 h-5 text-[#C05A3E]" />
    },
    {
      code: 'ARCHIVE',
      title: 'Things Along The Way',
      desc: 'Sold out editions enter the archive. "Gone for now." Drips catalogued and never identical in future iterations.',
      icon: <Archive className="w-5 h-5 text-[#75726B]" />
    }
  ];

  return (
    <section id="ritual" className="py-16 sm:py-24 bg-[#F3EFE6] border-t border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C05A3E] font-semibold">
            The Cadence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#151413] tracking-tight mt-2">
            Drops as cultural moments.
          </h2>
          <p className="text-base sm:text-lg text-[#55524B] mt-3 font-light">
            We don't do seasonal catalogs or continuous mass manufacturing. Each DRYP. is released in small, deliberate editions through a progressive countdown.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-[#FBF9F5] border border-[#E6E1D8] flex flex-col justify-between hover:border-[#CDC5B8] transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C05A3E] bg-[#F3EFE6] px-2.5 py-1 rounded-md border border-[#E6E1D8]">
                    {step.code}
                  </span>
                  <div>{step.icon}</div>
                </div>

                <h3 className="font-serif text-xl text-[#151413] mt-5">
                  {step.title}
                </h3>

                <p className="text-xs text-[#55524B] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EAE5DC] text-[10px] font-mono text-[#8A857C]">
                0{idx + 1} / 05
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
