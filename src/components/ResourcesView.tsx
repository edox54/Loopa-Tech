import { useTranslation } from 'react-i18next';
import { FileText, BarChart3, Mic, Clock } from 'lucide-react';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function ResourcesView() {
  const { t } = useTranslation();

  const RESOURCES = [
    { icon: FileText, key: 'whitepapers' },
    { icon: BarChart3, key: 'reports' },
    { icon: Mic, key: 'podcast' },
  ];

  return (
    <div id="resources-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title={t('resources.seoTitle')}
        description={t('resources.seoDescription')}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
            {t('nav.resources')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            {t('resources.heading')}
          </h1>
          <p className="text-brand-navy/75 dark:text-white/75 text-lg">
            {t('resources.subheading')}
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map(({ icon: Icon, key }) => (
            <div
              key={key}
              id={`resource-card-${key}`}
              className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 text-brand-coral">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">{t(`resources.${key}Label`)}</h3>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">{t(`resources.${key}Desc`)}</p>
              </div>
              <span className="text-xs font-mono text-brand-cyan font-bold flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('services.comingSoon')}</span>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
