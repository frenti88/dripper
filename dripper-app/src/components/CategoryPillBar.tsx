import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles, Disc, Compass, Feather, Film, Camera, Building2, Gem, Palette, Sun } from 'lucide-react';

interface CategoryPillBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  activeFilterStockOnly: boolean;
  onToggleStockFilter: () => void;
}

export const CategoryPillBar: React.FC<CategoryPillBarProps> = ({
  selectedCategory,
  onSelectCategory,
  activeFilterStockOnly,
  onToggleStockFilter
}) => {
  const { language } = useLanguage();

  const categories = [
    { id: 'All', label: language === 'es' ? 'Todos los Recuerdos' : 'All Memories', icon: Sparkles, glazeColor: '#c05a3e', tintClass: 'hover:bg-[#f4efea]' },
    { id: 'Music', label: language === 'es' ? 'Música & Audio' : 'Music & Audio', icon: Disc, glazeColor: '#6d28d9', tintClass: 'hover:bg-[#f5f3ff]' },
    { id: 'Cosmos', label: language === 'es' ? 'Cosmos & Órbita' : 'Cosmos & Space', icon: Compass, glazeColor: '#1e293b', tintClass: 'hover:bg-[#f1f5f9]' },
    { id: 'Nature', label: language === 'es' ? 'Naturaleza' : 'Nature & Fauna', icon: Feather, glazeColor: '#15803d', tintClass: 'hover:bg-[#f0fdf4]' },
    { id: 'Cinema', label: language === 'es' ? 'Cine & Pantalla' : 'Cinema & Screen', icon: Film, glazeColor: '#c2410c', tintClass: 'hover:bg-[#fff7ed]' },
    { id: 'Prehistoric', label: language === 'es' ? 'Prehistoria' : 'Prehistoric', glazeColor: '#c05a3e', tintClass: 'hover:bg-[#fdf2ee]' },
    { id: 'Photography', label: language === 'es' ? 'Fotografía 35mm' : '35mm Optics', icon: Camera, glazeColor: '#334155', tintClass: 'hover:bg-[#f8fafc]' },
    { id: 'Architecture', label: language === 'es' ? 'Arquitectura' : 'Architecture', icon: Building2, glazeColor: '#475569', tintClass: 'hover:bg-[#f1f5f9]' },
    { id: 'Minerals', label: language === 'es' ? 'Minerales & Origen' : 'Minerals & Clay', icon: Gem, glazeColor: '#0f766e', tintClass: 'hover:bg-[#f0fdfa]' },
    { id: 'Sculptural', label: language === 'es' ? 'Escultura' : 'Sculptural', icon: Palette, glazeColor: '#b45309', tintClass: 'hover:bg-[#fefce8]' },
    { id: 'WabiSabi', label: language === 'es' ? 'Wabi-Sabi' : 'Wabi-Sabi', icon: Sun, glazeColor: '#78350f', tintClass: 'hover:bg-[#fef3c7]' }
  ];

  return (
    <div className="w-full bg-[#faf8f5] border-b border-[#e8e3da] py-2.5 px-4 md:px-8 transition-colors">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-3 md:gap-4">
        
        {/* Pills scroll track with dedicated overflow container */}
        <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-0.5 pr-4 shrink-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 min-h-[36px] rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#151413] text-[#faf8f5] border-[#151413] shadow-xs'
                      : `bg-[#f4efea] text-[#4b463f] border-[#e8e3da] ${cat.tintClass} hover:text-[#151413] hover:border-[#dcd6cb]`
                  }`}
                >
                  {Icon ? (
                    <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: isSelected ? cat.glazeColor : undefined }} />
                  ) : (
                    <span 
                      className="w-2 h-2 rounded-full shrink-0 transition-transform" 
                      style={{ 
                        backgroundColor: cat.glazeColor,
                        opacity: isSelected ? 1 : 0.65,
                        transform: isSelected ? 'scale(1.15)' : 'scale(1)'
                      }} 
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* In-Stock Only Quick Filter (Docked & Persistently Reachable) */}
        <div className="shrink-0 pl-3 border-l border-[#e8e3da] flex items-center">
          <button
            onClick={onToggleStockFilter}
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-medium border transition-colors cursor-pointer ${
              activeFilterStockOnly
                ? 'bg-[#3d5948]/10 border-[#3d5948] text-[#2d4235] font-semibold'
                : 'bg-[#f4efea] border-[#e8e3da] text-[#4b463f] hover:border-[#151413] hover:text-[#151413]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full shrink-0 ${activeFilterStockOnly ? 'bg-[#3d5948]' : 'bg-[#a39c91]'}`} />
            <span className="hidden sm:inline">{language === 'es' ? 'Disponibles ahora' : 'In Stock Only'}</span>
            <span className="sm:hidden">{language === 'es' ? 'Disponibles' : 'In Stock'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
