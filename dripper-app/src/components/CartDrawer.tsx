import React, { useEffect, useRef, useState } from 'react';
import type { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check, Package } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { playPressStamp } from '../utils/audioSynth';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const { t, language } = useLanguage();
  const [receiptNumber, setReceiptNumber] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setReceiptNumber(null);
      setIsCheckingOut(false);
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

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleProceedCheckout = () => {
    if (isCheckingOut) return;
    setIsCheckingOut(true);
    playPressStamp();
    setTimeout(() => {
      const orderNum = 'DRYP-KLN-' + Math.floor(1000 + Math.random() * 9000);
      setReceiptNumber(orderNum);
      setIsCheckingOut(false);
    }, 250);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cart-drawer-title"
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
          className="w-screen max-w-md bg-[#faf8f5] text-[#151413] border-l border-[#e8e3da] flex flex-col justify-between animate-drawer-in shadow-2xl"
        >
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#e8e3da] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 id="cart-drawer-title" className="font-serif text-2xl text-[#151413] font-medium tracking-tight">
                {receiptNumber 
                  ? (language === 'es' ? 'Comprobante de Horno' : 'Kiln Allocation Receipt')
                  : t('bagTitle')
                }
              </h2>
              {!receiptNumber && (
                <span className="text-[12px] font-mono text-[#4b463f] px-2.5 py-0.5 rounded-full bg-[#f4efea] border border-[#e8e3da]">
                  {items.length} {language === 'es' ? (items.length === 1 ? 'pieza' : 'piezas') : (items.length === 1 ? 'piece' : 'pieces')}
                </span>
              )}
            </div>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label={t('closeBag')}
              className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-[#e8e3da] hover:border-[#151413] hover:bg-[#f4efea] flex items-center justify-center transition-colors cursor-pointer text-[#151413] shrink-0"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {receiptNumber ? (
              /* Reassuring In-Drawer Order Receipt */
              <div className="py-4 space-y-6 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-2xl bg-[#121613] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-7 h-7 text-[#c05a3e]" strokeWidth={2.5} />
                </div>

                <div className="text-center space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c05a3e] font-bold">
                    {language === 'es' ? 'Reserva Confirmada' : 'Allocation Secured'}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#121613]">
                    {receiptNumber}
                  </h3>
                  <p className="text-xs text-[#5a625c] max-w-xs mx-auto">
                    {language === 'es' 
                      ? 'Tus piezas han sido apartadas del lote actual cocido a 1.280°C en Santa Elena.' 
                      : 'Your pieces have been allocated from the current 1,280°C firing batch in Santa Elena.'}
                  </p>
                </div>

                {/* Transit Safe & Packaging Guarantee Card */}
                <div className="p-4 rounded-2xl bg-[#f4efea] border border-[#e8e3da] space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-[#e8e3da] text-[#c05a3e] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#151413]">
                        {language === 'es' ? 'Garantía de Tránsito al 100%' : '100% Transit Safe Guarantee'}
                      </h4>
                      <p className="text-[11px] text-[#756f66] leading-relaxed mt-0.5">
                        {language === 'es'
                          ? 'Si alguna pieza sufre fisuras o roturas durante el envío, la reemplazamos de inmediato sin costo adicional.'
                          : 'If any ceramic object suffers transit damage, we replace it immediately at zero cost.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-[#e8e3da]">
                    <div className="p-2 rounded-xl bg-white border border-[#e8e3da] text-[#151413] shrink-0">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#151413]">
                        {language === 'es' ? 'Empaque de Pulpa Moldeada' : 'Molded Pulp Packaging'}
                      </h4>
                      <p className="text-[11px] text-[#756f66] leading-relaxed mt-0.5">
                        {language === 'es'
                          ? '100% libre de plástico. Caja coleccionable con certificado numerado y ficha de extracción.'
                          : '100% plastic-free. Collectible box with numbered certificate and extraction card.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Item Summary */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#756f66] block">
                    {language === 'es' ? 'Resumen de piezas' : 'Allocated pieces'}
                  </span>
                  <div className="divide-y divide-[#e8e3da] border border-[#e8e3da] rounded-2xl overflow-hidden bg-white">
                    {items.map((item) => (
                      <div key={item.product.id} className="p-3 flex items-center justify-between text-xs">
                        <span className="font-medium text-[#151413]">{item.product.name} × {item.quantity}</span>
                        <span className="font-mono text-[#4b463f]">${item.product.price * item.quantity} USD</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-3.5 rounded-full bg-[#151413] hover:bg-[#252c26] text-[#faf8f5] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {language === 'es' ? 'Entendido & Continuar Explorando' : 'Done & Continue Exploring'}
                </button>
              </div>
            ) : items.length === 0 ? (
              /* Empty State */
              <div role="status" className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl border border-[#e8e3da] bg-[#f4efea] flex items-center justify-center text-[#4b463f]">
                  <span className="text-xl font-mono">00</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-[#121613]">
                    {t('emptyBagTitle')}
                  </h3>
                  <p className="text-xs text-[#5a625c] max-w-xs">
                    {t('emptyBagSubtitle')}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-[#121613] text-xs font-semibold text-[#121613] hover:bg-[#121613] hover:text-white transition-all cursor-pointer mt-4"
                >
                  {t('exploreCatalogBtn')}
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4" role="list">
                <div className="px-4 py-2.5 rounded-2xl bg-[#121613] text-white text-xs flex items-center justify-between">
                  <span className="font-medium">{language === 'es' ? 'Lote de Horno Asignado' : 'Kiln Batch Allocated'}</span>
                  <span className="text-white/70 font-mono text-[11px]">{language === 'es' ? 'Certificado Incluido' : 'Certificate Included'}</span>
                </div>

                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor || ''}`}
                    role="listitem"
                    className="p-4 rounded-2xl border border-[#e2e5e2] bg-white hover:border-[#121613] transition-colors flex gap-4 items-center justify-between shadow-2xs"
                  >
                    <div className="space-y-1 flex-1">
                      <span className="text-[11px] text-[#666f68] font-mono uppercase tracking-wider block">
                        {item.product.eyebrow}
                      </span>
                      <h4 className="font-serif text-base font-medium text-[#121613]">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#4b514d]">
                        {language === 'es' ? 'Esmalte: ' : 'Glaze: '}
                        <span className="font-medium text-[#121613]">{item.selectedColor || item.product.paletteColors[0]?.name}</span>
                      </p>
                      <div className="text-xs font-mono font-semibold text-[#121613] pt-0.5">
                        ${item.product.price} USD
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex flex-col items-end gap-2.5">
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-[#666f68] hover:text-[#c05a3e] hover:bg-[#f4f6f4] transition-colors cursor-pointer"
                        aria-label={`${t('removeItem')}: ${item.product.name}`}
                        title={t('removeItem')}
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>

                      <div className="flex items-center border border-[#e8e3da] rounded-full px-1.5 py-0.5 bg-[#f4efea]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#4b463f] hover:text-[#151413] cursor-pointer rounded-full hover:bg-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="px-2 text-xs font-mono font-semibold text-[#151413]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#4b463f] hover:text-[#151413] cursor-pointer rounded-full hover:bg-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout Block */}
          {!receiptNumber && items.length > 0 && (
            <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-[#e8e3da] bg-[#faf8f5] space-y-4" aria-live="polite">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#4b463f]">
                  <span>{t('subtotalLabel')}</span>
                  <span className="text-[#151413] font-mono font-semibold">${total} USD</span>
                </div>
                <div className="flex justify-between text-[#4b463f]">
                  <span>{t('shippingLabel')}</span>
                  <span className="text-[#151413] font-medium">
                    {language === 'es' ? 'Cortesía con Embalaje Seguro' : 'Complimentary Transit Safe'}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e8e3da] flex items-center justify-between">
                <span className="text-base font-medium text-[#151413]">{t('totalLabel')}</span>
                <span className="text-2xl font-bold text-[#151413] font-mono">
                  ${total} <span className="text-xs font-normal text-[#756f66]">USD</span>
                </span>
              </div>

              <button
                onClick={handleProceedCheckout}
                disabled={isCheckingOut}
                className={`w-full py-3.5 px-6 min-h-[44px] rounded-full text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                  isCheckingOut ? 'bg-[#a84b32] opacity-80 cursor-wait' : 'bg-[#c05a3e] hover:bg-[#a84b32]'
                }`}
              >
                <span>{isCheckingOut ? (language === 'es' ? 'Asignando Horno...' : 'Allocating Kiln...') : t('proceedCheckout')}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#4b463f]">
                <ShieldCheck className="w-4 h-4 text-[#151413]" strokeWidth={1.5} />
                <span>{t('transitSafeNotice')}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
