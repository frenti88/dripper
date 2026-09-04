import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Bell, Shield } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen,
  onClose,
  productName = 'Fossil T & Drop 001'
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { t, language } = useLanguage();

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      return;
    }

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
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setValidationError(
        language === 'es' 
          ? 'Por favor ingresa un correo electrónico válido' 
          : 'Please enter a valid email address'
      );
      return;
    }

    setValidationError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setName('');
        onClose();
      }, 2400);
    }, 400);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#121613]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-md rounded-3xl bg-[#faf8f5] text-[#151413] border border-[#e8e3da] p-6 sm:p-8 animate-modal-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label={t('closeModal')}
          className="absolute top-5 right-5 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-[#e8e3da] hover:border-[#151413] hover:bg-[#f4efea] flex items-center justify-center text-[#151413] transition-colors cursor-pointer shrink-0"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4" role="status" aria-live="polite">
            <div className="w-14 h-14 rounded-2xl bg-[#151413] text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-7 h-7 text-[#c05a3e]" strokeWidth={2.5} />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-medium text-[#151413]">
                {t('notifySuccessTitle')}
              </h3>
              <p className="text-xs text-[#756f66]">
                {t('notifySuccessDesc')}
              </p>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c05a3e] font-bold">
                <Bell className="w-3.5 h-3.5 text-[#c05a3e]" strokeWidth={2} />
                <span>{t('dropAlerts')}</span>
              </div>
              <h3 id="notify-modal-title" className="font-serif text-2xl font-medium text-[#151413] pt-1">
                {t('notifyModalTitle')}
              </h3>
              <p className="text-xs text-[#756f66] leading-relaxed">
                {t('notifyModalSubtitle')}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#151413] text-white text-xs flex items-center justify-between">
              <span className="font-medium truncate pr-2">{productName}</span>
              <span className="text-white/70 font-mono text-[11px] shrink-0">150 {language === 'es' ? 'piezas' : 'units'}</span>
            </div>

            <div className="space-y-3">
              <div>
                <label htmlFor="notify-email" className="block text-xs font-medium text-[#151413] mb-1">
                  {language === 'es' ? 'Correo electrónico *' : 'Email address *'}
                </label>
                <input
                  id="notify-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="ritual@dryp.coffee"
                  maxLength={90}
                  className={`w-full px-4 py-2.5 rounded-xl border transition-colors text-base sm:text-xs text-[#151413] bg-white focus:outline-none ${
                    validationError 
                      ? 'border-[#c05a3e] focus:ring-1 focus:ring-[#c05a3e]' 
                      : 'border-[#e8e3da] focus:border-[#151413] focus:ring-1 focus:ring-[#151413]'
                  }`}
                />
                {validationError && (
                  <p className="text-[11px] text-[#c05a3e] font-medium mt-1 animate-in fade-in duration-150">
                    {validationError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="notify-name" className="block text-xs font-medium text-[#151413] mb-1">
                  {t('notifyNamePlaceholder')}
                </label>
                <input
                  id="notify-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'es' ? 'Ej. Mateo' : 'e.g. Mateo'}
                  maxLength={60}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e8e3da] bg-white focus:border-[#151413] focus:outline-none focus:ring-1 focus:ring-[#151413] text-base sm:text-xs text-[#151413]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className={`w-full py-3.5 px-6 min-h-[44px] rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer mt-2 flex items-center justify-center gap-2 ${
                isSubmitting || !email.trim()
                  ? 'bg-[#e8e3da] text-[#a39c91] cursor-not-allowed'
                  : 'bg-[#c05a3e] hover:bg-[#a84b32] text-white'
              }`}
            >
              {isSubmitting ? (
                <span>{language === 'es' ? 'Registrando...' : 'Securing...'}</span>
              ) : (
                <span>{t('notifySubmitBtn')}</span>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5a625c] pt-1">
              <Shield className="w-3.5 h-3.5 text-[#121613]" strokeWidth={1.5} />
              <span>{t('privacyNotice')}</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
