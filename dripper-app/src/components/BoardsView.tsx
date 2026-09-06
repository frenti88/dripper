import React from 'react';
import { PINTEREST_BOARDS, type PinterestBoard } from '../data/pinterestPinsData';
import { MorphIcon } from 'morphicons/react';
import { Layers, ArrowRight } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';

interface BoardsViewProps {
  onSelectBoard: (board: PinterestBoard) => void;
}

export const BoardsView: React.FC<BoardsViewProps> = ({ onSelectBoard }) => {
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8">
      
      {/* Boards Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#666f68] mb-1">
          <MorphIcon icon={Layers} size={16} strokeWidth={2} reducedMotion="user" className="text-[#c05a3e]" />
          <span>{language === 'es' ? 'Colecciones Curadas' : 'Curated Collections'}</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#151413] tracking-tight mt-1">
          {language === 'es' ? 'Catálogo de Colecciones DRYP' : 'DRYP Collection Catalog'}
        </h2>
        <p className="text-sm text-[#4b514d] mt-1 max-w-2xl">
          {language === 'es'
            ? 'Explora las cafeteras de goteo cónicas artesanales agrupadas por colecciones temáticas: arquitectura, fotografía y cine, retro, naturaleza, música, universo y prehistoria.'
            : 'Explore handcrafted conical pour-over drippers grouped across curated thematic collections: architecture, cinema & photography, retro, nature, music, universe, and prehistory.'}
        </p>
      </div>

      {/* Boards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PINTEREST_BOARDS.map((board) => {
          const boardGlazeClass = 
            board.category === 'Music' ? 'bg-[#6d28d9]/85 text-[#faf8f5] border-[#6d28d9]/40' :
            board.category === 'Cosmos' ? 'bg-[#1e293b]/85 text-[#faf8f5] border-[#1e293b]/40' :
            board.category === 'Nature' ? 'bg-[#15803d]/85 text-[#faf8f5] border-[#15803d]/40' :
            board.category === 'Cinema' ? 'bg-[#c2410c]/85 text-[#faf8f5] border-[#c2410c]/40' :
            board.category === 'Series' ? 'bg-[#ca8a04]/85 text-[#faf8f5] border-[#ca8a04]/40' :
            board.category === 'Retro' ? 'bg-[#d97706]/85 text-[#faf8f5] border-[#d97706]/40' :
            board.category === 'Experimental' ? 'bg-[#2563eb]/85 text-[#faf8f5] border-[#2563eb]/40' :
            board.category === 'Prehistoric' ? 'bg-[#c05a3e]/85 text-[#faf8f5] border-[#c05a3e]/40' :
            board.category === 'Photography' ? 'bg-[#334155]/85 text-[#faf8f5] border-[#334155]/40' :
            board.category === 'Architecture' ? 'bg-[#475569]/85 text-[#faf8f5] border-[#475569]/40' :
            board.category === 'Minerals' ? 'bg-[#0f766e]/85 text-[#faf8f5] border-[#0f766e]/40' :
            board.category === 'Art' || board.category === 'Sculptural' ? 'bg-[#b45309]/85 text-[#faf8f5] border-[#b45309]/40' :
            'bg-[#151413]/75 text-[#faf8f5] border-white/20';

          return (
            <div
              key={board.id}
              onClick={() => onSelectBoard(board)}
              className="group flex flex-col bg-white rounded-3xl p-3 border border-[#e8e3da] hover:border-[#b8b0a2] hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Pinterest Signature 3-part Image Collage */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f4efea] flex gap-1 mb-3">
                
                {/* Large Left Preview */}
                <div className="w-2/3 h-full overflow-hidden bg-[#f4efea]">
                  <img
                    src={board.coverImage}
                    alt={board.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Stacked Right Previews */}
                <div className="w-1/3 h-full flex flex-col gap-1">
                  <div className="w-full h-1/2 overflow-hidden bg-[#f4efea]">
                    <img
                      src={board.previewImages[1] || board.coverImage}
                      alt="Preview 1"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="w-full h-1/2 overflow-hidden bg-[#f4efea]">
                    <img
                      src={board.previewImages[2] || board.coverImage}
                      alt="Preview 2"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* Board Information */}
              <div className="px-2 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border ${boardGlazeClass}`}>
                    {board.tag}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#f4efea] text-[#4b463f] shrink-0 border border-[#e8e3da]">
                    {board.dripsCount ?? board.pinsCount} {language === 'es' ? 'drips' : 'drips'}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#151413] group-hover:text-[#c05a3e] transition-colors line-clamp-1 mb-1">
                  {board.title}
                </h3>

                <p className="text-xs text-[#756f66] line-clamp-2 leading-relaxed mb-3 flex-1">
                  {board.description}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-[#151413] pt-2 border-t border-[#e8e3da]">
                  <span>{language === 'es' ? 'Ver colección' : 'View collection'}</span>
                  <MorphIcon icon={ArrowRight} size={14} strokeWidth={2} spring="snappy" reducedMotion="user" className="group-hover:translate-x-1 transition-transform text-[#c05a3e]" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
