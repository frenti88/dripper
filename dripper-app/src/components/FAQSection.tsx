import React, { useState } from 'react';
import { MorphIcon } from 'morphicons/react';
import { Plus, Minus, ShieldCheck } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faqs, t } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[110px] bg-[#ffffff] text-[#000000] border-b border-[#d8d8d8]" aria-labelledby="faq-section-title">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 2-Column Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[15px] text-[#8e9194] uppercase tracking-wider block">
              {t('faqBadge')}
            </span>
            <h2 id="faq-section-title" className="font-heading-custo text-[#000000] text-balance">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-body-custo text-[#8e9194] max-w-xl text-pretty">
              {t('faqSubtitle')}
            </p>
          </div>
        </div>

        {/* FAQ Accordion List (8px radius, Linen Mist #a7aaad borders) */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const questionId = `faq-q-${idx}`;
            const answerId = `faq-a-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-[8px] border border-[#a7aaad] bg-[#ffffff] overflow-hidden transition-colors"
              >
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#000000]/2"
                >
                  <span className="font-heading-sm-custo text-[#000000] text-lg sm:text-xl">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-[8px] border border-[#d8d8d8] flex items-center justify-center text-[#000000] shrink-0" aria-hidden="true">
                    <MorphIcon 
                      icon={isOpen ? Minus : Plus} 
                      size={16} 
                      strokeWidth={1.5} 
                      spring="snappy" 
                      reducedMotion="user" 
                    />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-6 pb-6 pt-0 border-t border-[#d8d8d8]"
                  >
                    <p className="text-[15px] text-[#8e9194] font-normal leading-relaxed pt-4 text-pretty">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 30-Day Risk Reversal Guarantee Card (8px radius, 1px Aluminum Hairline) */}
        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-[8px] border border-[#d8d8d8] bg-[#ffffff] flex items-center gap-5">
          <div className="w-12 h-12 rounded-[8px] border border-[#000000] text-[#000000] flex items-center justify-center shrink-0">
            <MorphIcon icon={ShieldCheck} size={24} strokeWidth={1.5} reducedMotion="user" />
          </div>
          <div>
            <h3 className="text-[16px] font-medium text-[#000000]">
              {t('guaranteeTitle')}
            </h3>
            <p className="text-[13px] text-[#8e9194] mt-0.5">
              {t('guaranteeDesc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
