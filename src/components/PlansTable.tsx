import { Check, Minus, CalendarClock, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CALENDLY_URL, PLATFORM_URL } from '../data';
import { Reveal } from './Reveal';

type Row = { label: string; values: (string | boolean)[] };

const openCalendly = () => window.open(CALENDLY_URL, 'loopa-calendly', 'width=680,height=780');

// Plan comparison from the client (2026-10-23). Texts live in locales under "plans".
// On small screens the table scrolls sideways with the feature column pinned.
export function PlansTable() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === 'en';
  const plans = t('plans.plans', { returnObjects: true }) as string[];
  const rows = t('plans.rows', { returnObjects: true }) as Row[];
  const last = plans.length - 1;

  const cell = (v: string | boolean) =>
    v === true ? (
      <Check className="w-5 h-5 text-brand-coral mx-auto" aria-label={en ? 'Yes' : 'Sí'} />
    ) : v === false ? (
      <Minus className="w-5 h-5 text-brand-navy/30 dark:text-white/30 mx-auto" aria-label="No" />
    ) : (
      v
    );

  return (
    <section id="planes" className="py-24 border-t border-brand-navy/10 dark:border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-brand-coral text-xs font-bold uppercase tracking-widest">{t('plans.eyebrow')}</span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-navy dark:text-white leading-tight">{t('plans.heading')}</h2>
          <p className="text-lg text-brand-navy/75 dark:text-white/75">{t('plans.text')}</p>
        </div>
        <Reveal>
          <p className="md:hidden mb-3 text-xs font-semibold text-brand-navy/60 dark:text-white/60">{t('plans.swipe')}</p>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px] border-separate border-spacing-0 text-xs sm:text-sm text-brand-navy dark:text-white">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white dark:bg-brand-navy text-left font-semibold text-brand-navy/60 dark:text-white/60 p-3 sm:p-4 align-bottom">
                    {t('plans.feature')}
                  </th>
                  {plans.map((p, i) => (
                    <th
                      key={p}
                      className={`p-3 sm:p-4 text-center align-bottom ${i === last ? 'bg-brand-coral/10 rounded-t-2xl border-x border-t border-brand-coral/40' : ''}`}
                    >
                      {i === last && (
                        <span className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-brand-coral">{t('plans.recommended')}</span>
                      )}
                      <span className="block font-display text-lg font-black">{p}</span>
                      <span className="block text-xs font-normal text-brand-navy/60 dark:text-white/60">
                        {i === 0 ? t('plans.free') : t('plans.paid')}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="group">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white dark:bg-brand-navy text-left font-medium p-3 sm:p-4 border-t border-brand-navy/10 dark:border-white/10 group-hover:text-brand-coral transition-colors"
                    >
                      {r.label}
                    </th>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-3 sm:p-4 text-center border-t border-brand-navy/10 dark:border-white/10 group-hover:bg-brand-light-gray/60 dark:group-hover:bg-brand-carbon/60 transition-colors ${
                          i === last ? 'bg-brand-coral/10 border-x border-x-brand-coral/40' : ''
                        }`}
                      >
                        {cell(v)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 z-10 bg-white dark:bg-brand-navy" />
                  {plans.map((p, i) => (
                    <td
                      key={p}
                      className={`p-3 sm:p-4 text-center border-t border-brand-navy/10 dark:border-white/10 ${
                        i === last ? 'bg-brand-coral/10 rounded-b-2xl border-x border-b border-x-brand-coral/40 border-b-brand-coral/40' : ''
                      }`}
                    >
                      {i === 0 ? (
                        <a
                          href={PLATFORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-brand-navy/15 dark:border-white/15 font-bold text-xs hover:border-brand-coral hover:text-brand-coral transition-all whitespace-nowrap"
                        >
                          <LogIn className="w-4 h-4" />
                          {t('plans.tryFree')}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={openCalendly}
                          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer whitespace-nowrap ${
                            i === last
                              ? 'bg-brand-coral text-brand-navy hover:brightness-105'
                              : 'bg-brand-navy text-white dark:bg-white dark:text-brand-navy hover:bg-brand-coral hover:text-brand-navy'
                          }`}
                        >
                          <CalendarClock className="w-4 h-4" />
                          {t('plans.quote')}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
