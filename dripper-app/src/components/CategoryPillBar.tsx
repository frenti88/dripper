import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles, Disc, Compass, Feather, Film, Building2, Palette, Radio, FlaskConical, Tv } from 'lucide-react';

// Lucide-style Dinosaur icon (Sauropod / Diplodocus)
const DinosaurIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M2 18c3-.8 6-1.8 8.5-1.8 1.8 0 2.8-.8 3.5-2.2.7-1.3 1-3 1.3-5.5.3-2 .8-3.5 2.7-3.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-1c-1 0-1.5.8-1.8 2-.4 1.5-.8 3-1.8 4.2-1.4 1.8-2.8 2.8-4.5 3.3H3" />
    <path d="M8 17.5V21" />
    <path d="M12 17V21" />
    <circle cx="18" cy="6" r="0.75" fill="currentColor" />
  </svg>
);

interface CategoryPillBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  activeFilterStockOnly?: boolean;
  onToggleStockFilter?: () => void;
}

export const CategoryPillBar: React.FC<CategoryPillBarProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { language } = useLanguage();

  const categories = [
    { id: 'All', label: language === 'es' ? 'Todos los Drips' : 'All Drips', icon: Sparkles, glazeColor: '#c05a3e', tintClass: 'hover:bg-[#f4efea]' },
    { id: 'Architecture', label: language === 'es' ? 'Arquitectura' : 'Architecture', icon: Building2, glazeColor: '#475569', tintClass: 'hover:bg-[#f1f5f9]' },
    { id: 'Cinema', label: language === 'es' ? 'Fotografía y cine' : 'Cinema & Photography', icon: Film, glazeColor: '#c2410c', tintClass: 'hover:bg-[#fff7ed]' },
    { id: 'Series', label: language === 'es' ? 'Series y TV' : 'Series & TV', icon: Tv, glazeColor: '#eab308', tintClass: 'hover:bg-[#fefce8]' },
    { id: 'Retro', label: language === 'es' ? 'Retro' : 'Retro 70s', icon: Radio, glazeColor: '#d97706', tintClass: 'hover:bg-[#fffbeb]' },
    { id: 'Experimental', label: language === 'es' ? 'Experimental' : 'Experimental', icon: FlaskConical, glazeColor: '#2563eb', tintClass: 'hover:bg-[#eff6ff]' },
    { id: 'Nature', label: language === 'es' ? 'Naturaleza' : 'Nature & Fauna', icon: Feather, glazeColor: '#15803d', tintClass: 'hover:bg-[#f0fdf4]' },
    { id: 'Music', label: language === 'es' ? 'Música' : 'Music', icon: Disc, glazeColor: '#6d28d9', tintClass: 'hover:bg-[#f5f3ff]' },
    { id: 'Cosmos', label: language === 'es' ? 'Universo' : 'Universe', icon: Compass, glazeColor: '#1e293b', tintClass: 'hover:bg-[#f1f5f9]' },
    { id: 'Prehistoric', label: language === 'es' ? 'Prehistoria' : 'Prehistoric', icon: DinosaurIcon, glazeColor: '#c05a3e', tintClass: 'hover:bg-[#fdf2ee]' },
    { id: 'Art', label: language === 'es' ? 'Arte' : 'Art', icon: Palette, glazeColor: '#b45309', tintClass: 'hover:bg-[#fefce8]' }
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

      </div>
    </div>
  );
};
