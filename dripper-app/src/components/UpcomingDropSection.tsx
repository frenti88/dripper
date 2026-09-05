import React, { useState } from 'react';
import { DripperVisual } from './DripperVisual';
import { MorphIcon } from 'morphicons/react';
import { Check, Lock, ArrowRight } from 'lucide';
import { useLanguage } from '../i18n/LanguageContext';

export const UpcomingDropSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="upcoming-drop" className="py-[110px] bg-[#9ea29f] text-[#ffffff] border-b border-[#ffffff]/20 relative overflow-hidden" aria-labelledby="upcoming-drop-title">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] border border-[#ffffff]/30 text-[13px] text-[#ffffff] mb-8">
          <MorphIcon icon={Lock} size={14} strokeWidth={1.5} reducedMotion="user" />
          <span>{t('upcomingBadge')}</span>
        </div>

        {/* Silhouette Visual Frame (8px radius) */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8 relative rounded-[8px] p-3 bg-[#4b514d] border border-[#ffffff]/30 flex items-center justify-center overflow-hidden" aria-hidden="true">
          <DripperVisual type="silhouette" className="w-full h-full object-cover rounded-[6px]" />
        </div>

        {/* Headline & Subtitle */}
        <h2 id="upcoming-drop-title" className="font-heading-custo text-[#ffffff] text-balance mb-4">
          {t('upcomingTitle')}
        </h2>

        <p className="font-body-custo text-[#ffffff]/90 max-w-lg mx-auto mb-10 text-pretty">
          {t('upcomingSubtitle')}
        </p>

        {/* 1-Click Email Form (8px input + 31.35px ghost pill button) */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="p-4 rounded-[8px] border border-[#ffffff] bg-[#4b514d] flex items-center justify-center gap-2 text-[15px] text-[#ffffff]" role="status">
              <MorphIcon icon={Check} size={16} strokeWidth={2} spring="snappy" reducedMotion="user" />
              <span>{t('subscribedThankYou')}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="upcoming-drop-email" className="sr-only">
                {t('emailPlaceholder')}
              </label>
              <input
                id="upcoming-drop-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="flex-1 input-custo text-[14px]"
              />
              <button
                type="submit"
                className="btn-pill-ghost-gunmetal whitespace-nowrap cursor-pointer"
              >
                <span>{t('notifyMeButton')}</span>
                <MorphIcon icon={ArrowRight} size={16} strokeWidth={1.5} reducedMotion="user" className="ml-1.5" />
              </button>
            </form>
          )}

          <div className="mt-4 text-[12px] text-[#ffffff]/70">
            {t('privacyNotice')}
          </div>
        </div>

      </div>
    </section>
  );
};
