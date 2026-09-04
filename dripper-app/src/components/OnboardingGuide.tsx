import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Bookmark, Flame, ArrowRight, Check, X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { playCeramicChime, playPressStamp } from '../utils/audioSynth';

interface OnboardingGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDrips?: () => void;
  onExplorePins?: () => void;
}

const ONBOARDING_STORAGE_KEY = 'dryp_onboarded_v1';

function markOnboardingSeen(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, 'true');
  }
}

export const OnboardingGuide: React.FC<OnboardingGuideProps> = ({
  isOpen,
  onClose,
  onExploreDrips,
  onExplorePins
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hasPlayedSample, setHasPlayedSample] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDismiss = () => {
    markOnboardingSeen();
    onClose();
  };

  const handleFinish = () => {
    markOnboardingSeen();
    onClose();
    if (onExploreDrips) {
      onExploreDrips();
    } else if (onExplorePins) {
      onExplorePins();
    }
  };

  const handleTestChime = () => {
    playCeramicChime();
    setHasPlayedSample(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121613]/45 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-3xl border border-[#d8dcd8] shadow-2xl p-6 sm:p-8 flex flex-col justify-between animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Step Tracker & Dismiss */}
        <div className="flex items-center justify-between pb-4 border-b border-[#f0f2f0]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#c05a3e]">
              {language === 'es' ? 'Guía del Atelier' : 'Atelier Guide'}
            </span>
            <span className="text-xs text-[#a7aaad]">•</span>
            <span className="text-[11px] font-mono text-[#666f68]">
              {currentStep} / 3
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={handleDismiss}
            aria-label={language === 'es' ? 'Omitir guía' : 'Skip guide'}
            className="text-xs text-[#666f68] hover:text-[#121613] p-1.5 rounded-full hover:bg-[#f0f2f0] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Dots */}
        <div className="flex gap-1.5 mt-4 mb-6">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === currentStep
                  ? 'w-8 bg-[#c05a3e]'
                  : step < currentStep
                  ? 'w-4 bg-[#121613]'
                  : 'w-4 bg-[#e2e5e2]'
              }`}
            />
          ))}
        </div>

        {/* Dynamic Step Content */}
        <div className="min-h-[220px] flex flex-col justify-center">
          {currentStep === 1 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c05a3e]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 id="onboarding-title" className="font-serif text-2xl font-medium text-[#121613] tracking-tight">
                {language === 'es' 
                  ? 'Gres Volcánico & 1.280°C de Fuego Vivo' 
                  : 'Volcanic Stoneware & 1,280°C High Kiln Fire'}
              </h3>
              <p className="text-xs text-[#5a625c] leading-relaxed">
                {language === 'es'
                  ? 'DRYP no es un catálogo masivo. Cada gotero de café es torneado a mano en Santa Elena, Medellín, en lotes estrictamente limitados de 150 piezas numeradas.'
                  : 'DRYP is not a mass-production catalog. Every pour-over dripper is wheel-thrown in Santa Elena, Medellín, in strictly limited batches of 150 numbered pieces.'}
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c05a3e]">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 id="onboarding-title" className="font-serif text-2xl font-medium text-[#121613] tracking-tight">
                {language === 'es' 
                  ? 'La Resonancia de la Porcelana Vitrificada' 
                  : 'The Acoustic Resonance of Vitrified Porcelain'}
              </h3>
              <p className="text-xs text-[#5a625c] leading-relaxed">
                {language === 'es'
                  ? 'La densidad de nuestra arcilla produce un timbre acústico único. Cada acción en el taller emite sonido háptico sintetizado con Web Audio.'
                  : 'The physical density of our clay creates a singular acoustic ring. Every action triggers organic audio feedback synthesized via Web Audio.'}
              </p>
              
              {/* Interactive Audio Trial Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleTestChime}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8dcd8] bg-[#faf8f5] hover:border-[#121613] text-xs font-semibold text-[#121613] transition-all cursor-pointer shadow-2xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#c05a3e]" />
                  <span>
                    {hasPlayedSample 
                      ? (language === 'es' ? '¡Escuchado! Probar otra vez' : 'Heard! Play again')
                      : (language === 'es' ? 'Tocar timbre de porcelana (93°C)' : 'Test porcelain chime')}
                  </span>
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c05a3e]">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 id="onboarding-title" className="font-serif text-2xl font-medium text-[#121613] tracking-tight">
                {language === 'es' 
                  ? 'Colecciona en tu Tablero & Reserva tu Lote' 
                  : 'Curate Your Board & Secure Kiln Drops'}
              </h3>
              <p className="text-xs text-[#5a625c] leading-relaxed">
                {language === 'es'
                  ? 'Guarda drips en tu repisa personal, simula el vertido en el modal de detalle y activa alertas de horno para recibir aviso antes de cada lanzamiento.'
                  : 'Save drips to your personal shelf, simulate pour dynamics in the detail modal, and enable kiln alerts before drops go live.'}
              </p>
              
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#4b514d] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#c05a3e]" />
                <span>{language === 'es' ? 'Garantía total de tránsito al 100% en cada envío' : '100% transit safe guarantee on every delivery'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Actions */}
        <div className="flex items-center justify-between pt-6 mt-4 border-t border-[#f0f2f0]">
          <button
            type="button"
            onClick={handleDismiss}
            className="text-xs font-medium text-[#666f68] hover:text-[#121613] transition-colors cursor-pointer"
          >
            {language === 'es' ? 'Explorar por mi cuenta' : 'Explore on my own'}
          </button>

          <div className="flex items-center gap-2">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-4 py-2 rounded-full border border-[#d8dcd8] hover:border-[#121613] text-xs font-semibold text-[#121613] transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Atrás' : 'Back'}
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => {
                  playPressStamp();
                  setCurrentStep((prev) => prev + 1);
                }}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#121613] hover:bg-[#252c26] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>{language === 'es' ? 'Siguiente' : 'Next'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinish}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#c05a3e] hover:bg-[#a64726] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
              >
                <span>{language === 'es' ? 'Entrar al Atelier' : 'Enter Atelier'}</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
