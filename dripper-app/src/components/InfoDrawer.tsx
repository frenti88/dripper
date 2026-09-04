import React, { useEffect, useRef, useState } from 'react';
import { X, Plus, Minus, ShieldCheck, Flame } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export type InfoDrawerType = 'faq' | 'extraction' | 'story' | null;

interface InfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  type: InfoDrawerType;
}

export const InfoDrawer: React.FC<InfoDrawerProps> = ({
  isOpen,
  onClose,
  type
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const { faqs, engineeringMetrics, artistFeature, t, language } = useLanguage();

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Extraction calculator state
  const [dose, setDose] = useState<number>(18);
  const [ratioMultiplier, setRatioMultiplier] = useState<number>(16.6);

  const waterTotal = Math.round(dose * ratioMultiplier);
  const bloomWater = Math.round(dose * 3);
  const secondPour = Math.round(waterTotal * 0.6);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap focus
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="info-drawer-title"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-[#121613]/45 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div 
          ref={drawerRef}
          className="w-screen max-w-2xl bg-[#ffffff] text-[#121613] border-l border-[#d8dcd8] flex flex-col justify-between animate-drawer-in shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[#e2e5e2] flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#c05a3e] font-bold block">
                {type === 'faq' && (language === 'es' ? 'Atención & Soporte' : 'Care & Support')}
                {type === 'extraction' && (language === 'es' ? 'Laboratorio de Vertido' : 'Pour-Over Lab')}
                {type === 'story' && (language === 'es' ? 'Atelier & Horno' : 'Atelier & Kiln')}
              </span>
              <h2 id="info-drawer-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#121613] tracking-tight">
                {type === 'faq' && (language === 'es' ? 'Preguntas Frecuentes & Garantía' : 'FAQ & Transit Guarantee')}
                {type === 'extraction' && (language === 'es' ? 'Física de Extracción & Ratios' : 'Extraction Dynamics & Ratios')}
                {type === 'story' && (language === 'es' ? 'Historia del Taller en las Cumbres de Neblaria' : 'Heights of Neblaria Atelier Story')}
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Cerrar panel"
              className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-[#d8dcd8] hover:border-[#121613] hover:bg-[#f0f2f0] flex items-center justify-center transition-colors cursor-pointer text-[#121613] shrink-0"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Drawer Body Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* TYPE: FAQ */}
            {type === 'faq' && (
              <div className="space-y-6">
                {/* Transit Safe Highlight Banner */}
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e6e1d8] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white border border-[#e2e5e2] text-[#c05a3e] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-medium text-[#121613]">
                      {language === 'es' ? 'Garantía Total de Tránsito de Cerámica' : '100% Ceramic Transit Guarantee'}
                    </h3>
                    <p className="text-xs text-[#5a625c] leading-relaxed">
                      {language === 'es' 
                        ? 'Enviamos cada goteador en nidos de pulpa moldeada sin plásticos. Si tu pieza sufre daño en el viaje, te enviamos una reposición de inmediato sin costo ni trámites engorrosos.' 
                        : 'Every dripper is encased in plastic-free molded pulp cradles. If damage occurs during shipping, we dispatch an immediate replacement at zero cost.'}
                    </p>
                  </div>
                </div>

                {/* FAQ Accordion Items */}
                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-[#e2e5e2] bg-white overflow-hidden transition-all shadow-2xs"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fafafa]"
                        >
                          <span className="font-serif text-base font-medium text-[#121613]">
                            {faq.question}
                          </span>
                          <div className="w-7 h-7 rounded-full border border-[#d8dcd8] flex items-center justify-center text-[#121613] shrink-0">
                            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs text-[#4b514d] leading-relaxed border-t border-[#f0f2f0]">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TYPE: EXTRACTION / COFFEE CREDIBILITY */}
            {type === 'extraction' && (
              <div className="space-y-8">
                {/* 4 Laboratory Engineering Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {engineeringMetrics.points.map((pt, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl border border-[#e2e5e2] bg-[#ffffff] space-y-2 hover:border-[#121613] transition-colors shadow-2xs"
                    >
                      <span className="text-[11px] text-[#c05a3e] font-mono font-bold">0{idx + 1}</span>
                      <h4 className="font-serif text-base font-medium text-[#121613]">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-[#5a625c] leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interactive Ratio Calculator */}
                <div className="p-6 rounded-3xl border border-[#e2e5e2] bg-[#faf8f5] space-y-6">
                  <div className="flex items-center justify-between border-b border-[#e8e4dc] pb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#c05a3e] font-bold block">
                        {t('liveCalculator')}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#121613] mt-0.5">
                        {t('calculatorTitle')}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white border border-[#d8dcd8] text-[#121613]">
                      1.280°C Calibrado
                    </span>
                  </div>

                  {/* Dose input */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <label htmlFor="dose-slider" className="font-medium text-[#121613]">
                        {t('doseLabel')}
                      </label>
                      <span className="font-mono font-bold text-base text-[#121613]">{dose} g</span>
                    </div>
                    <input
                      id="dose-slider"
                      type="range"
                      min={12}
                      max={30}
                      step={1}
                      value={dose}
                      onChange={(e) => setDose(Number(e.target.value))}
                      className="w-full accent-[#c05a3e] cursor-pointer"
                    />
                  </div>

                  {/* Ratio Selector */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-[#121613] block">
                      {language === 'es' ? 'Proporción de Vertido (Ratio)' : 'Brew Ratio'}
                    </span>
                    <div className="flex gap-2">
                      {[
                        { label: '1:15', value: 15 },
                        { label: '1:16.6 (Golden)', value: 16.6 },
                        { label: '1:17', value: 17 }
                      ].map((r) => (
                        <button
                          key={r.label}
                          onClick={() => setRatioMultiplier(r.value)}
                          className={`flex-1 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            ratioMultiplier === r.value
                              ? 'bg-[#121613] text-white font-bold shadow-xs'
                              : 'bg-white border border-[#d8dcd8] text-[#4b514d] hover:border-[#121613]'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculated Steps */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-3 rounded-xl bg-white border border-[#e8e4dc] text-center">
                      <span className="text-[10px] font-mono uppercase text-[#666f68] block">Pre-infusión</span>
                      <span className="text-sm font-mono font-bold text-[#121613]">{bloomWater} ml</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#e8e4dc] text-center">
                      <span className="text-[10px] font-mono uppercase text-[#666f68] block">2º Vertido</span>
                      <span className="text-sm font-mono font-bold text-[#121613]">{secondPour} ml</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#e8e4dc] text-center">
                      <span className="text-[10px] font-mono uppercase text-[#666f68] block">Agua Total</span>
                      <span className="text-sm font-mono font-bold text-[#c05a3e]">{waterTotal} ml</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TYPE: STORY / ATELIER */}
            {type === 'story' && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-[#121613] text-white space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c05a3e]">
                    <Flame className="w-4 h-4" />
                    <span>{artistFeature.location} • 1.280°C</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    "{artistFeature.quote}"
                  </h3>
                  <p className="text-xs text-[#a7aaad] leading-relaxed">
                    {language === 'es'
                      ? 'En las altas montañas de las Cumbres de Neblaria, el alfarero Camilo Restrepo moldea cada pieza en torno manual. La cocción en cono de alta temperatura vitrifica el gres volcánico para lograr una porosidad nula y una inercia térmica excepcional.'
                      : 'In the sacred mountain peaks of Neblaria, master ceramist Camilo Restrepo throws each dripper on a manual wheel. High-fire cone vitrification cures volcanic stoneware to zero porosity and exceptional thermal inertia.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-[#e2e5e2] bg-white space-y-2">
                    <span className="text-xs font-mono font-bold text-[#c05a3e] uppercase">01. Arcillas Vivas</span>
                    <h4 className="font-serif text-base font-medium text-[#121613]">Gres Volcánico</h4>
                    <p className="text-xs text-[#5a625c] leading-relaxed">
                      {language === 'es' 
                        ? 'Mezcla de arcillas minerales ricas en hierro que conservan el calor del vertido a 93°C sin transmitir sabores extraños.'
                        : 'Iron-rich mineral clays engineered to retain pour-over heat at 93°C without contaminating flavor notes.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#e2e5e2] bg-white space-y-2">
                    <span className="text-xs font-mono font-bold text-[#c05a3e] uppercase">02. Alta Temperatura</span>
                    <h4 className="font-serif text-base font-medium text-[#121613]">1.280°C Vitrificación</h4>
                    <p className="text-xs text-[#5a625c] leading-relaxed">
                      {language === 'es' 
                        ? '14 horas ininterrumpidas de fuego. Cada pieza resiste el choque térmico y adquiere variaciones orgánicas irrepetibles.'
                        : '14 continuous hours in the kiln. Every piece resists thermal shock with irreplaceable organic variations.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer of Drawer */}
          <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-[#e2e5e2] bg-[#ffffff] flex items-center justify-between">
            <span className="text-xs font-mono text-[#666f68]">
              DRYP®. Functional Ceramic Atelier • Medellín
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 min-h-[38px] rounded-full bg-[#121613] hover:bg-[#252c26] text-white text-xs font-semibold transition-all cursor-pointer"
            >
              {language === 'es' ? 'Cerrar' : 'Close'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
