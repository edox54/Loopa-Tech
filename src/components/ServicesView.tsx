import { useParams } from 'react-router-dom';
import { useNavigate } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Target, Lightbulb, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { pickLang, useLang } from '../lib/i18nData';
import { ServiceIcon } from './ServiceIcon';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function ServicesView() {
  const navigate = useNavigate();
  const { id: selectedServiceId } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);

  const handleBackToServices = () => {
    navigate('/servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServiceDetail = (id: string) => {
    navigate(`/servicios/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render index list of services
  if (!selectedServiceId) {
    return (
      <div id="services-index" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo
          title={t('services.seoTitle')}
          description={t('services.seoDescription')}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              {t('services.eyebrow')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              {t('services.heading')}
            </h1>
            <p className="text-brand-navy/75 dark:text-white/75 text-lg">
              {t('services.subheading')}
            </p>
          </Reveal>

          {/* Service cards */}
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => {
              return (
                <div
                  key={service.id}
                  id={`service-detail-card-${service.id}`}
                  className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 rounded-2xl p-8 flex flex-col justify-between hover:bg-white dark:hover:bg-brand-navy transition-all duration-300 group cursor-pointer"
                  onClick={() => handleNavigateToServiceDetail(service.id)}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 text-brand-coral group-hover:text-brand-cyan transition-colors">
                      <ServiceIcon name={service.iconName} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white group-hover:text-brand-coral transition-colors">
                        {pickLang(service.title, lang)}
                      </h3>
                      <p className="text-brand-navy/55 dark:text-white/55 text-xs font-mono mt-1">
                        {t('services.consultingServices')}
                      </p>
                    </div>
                    <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                      {pickLang(service.shortDesc, lang)}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 text-xs text-brand-navy/75 dark:text-white/75 pt-2">
                      {pickLang(service.features, lang).slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-brand-navy/10 dark:border-white/10 mt-8 flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-coral font-bold">
                      {t('services.viewDetail')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-navy/70 dark:text-white/70 group-hover:text-brand-coral group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}

          </Reveal>

          {/* Interactive Info Section */}
          <div className="mt-20 bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-brand-navy dark:text-white">
                  {t('services.processHeading')}
                </h3>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                  {t('services.processSubheading')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-light-gray dark:bg-brand-navy border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="text-brand-navy dark:text-white text-sm font-semibold">{t('services.step1Title')}</h4>
                      <p className="text-brand-navy/70 dark:text-white/70 text-xs">{t('services.step1Text')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-light-gray dark:bg-brand-navy border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="text-brand-navy dark:text-white text-sm font-semibold">{t('services.step2Title')}</h4>
                      <p className="text-brand-navy/70 dark:text-white/70 text-xs">{t('services.step2Text')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-light-gray dark:bg-brand-navy border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="text-brand-navy dark:text-white text-sm font-semibold">{t('services.step3Title')}</h4>
                      <p className="text-brand-navy/70 dark:text-white/70 text-xs">{t('services.step3Text')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-light-gray dark:bg-brand-navy p-6 rounded-2xl border border-brand-navy/10 dark:border-white/10 space-y-6">
                <h4 className="font-display text-lg font-bold text-brand-navy dark:text-white flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-brand-coral" />
                  <span>{t('services.whyLoopa')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">{t('services.whyAlignmentLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold block mt-1">{t('services.whyAlignmentValue')}</span>
                    <p className="text-brand-navy/80 dark:text-white/80 text-[11px] mt-1">{t('services.whyAlignmentText')}</p>
                  </div>
                  <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">{t('services.whySovereigntyLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold block mt-1">{t('services.whySovereigntyValue')}</span>
                    <p className="text-brand-navy/80 dark:text-white/80 text-[11px] mt-1">{t('services.whySovereigntyText')}</p>
                  </div>
                  <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">{t('services.whyMethodologyLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold block mt-1">{t('services.whyMethodologyValue')}</span>
                    <p className="text-brand-navy/80 dark:text-white/80 text-[11px] mt-1">{t('services.whyMethodologyText')}</p>
                  </div>
                  <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">{t('services.whyLocationLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold block mt-1">{t('services.whyLocationValue')}</span>
                    <p className="text-brand-navy/80 dark:text-white/80 text-[11px] mt-1">{t('services.whyLocationText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SOCIAL LISTENING - Rich Detail Subpage
  const service = SERVICES_DATA.find((s) => s.id === selectedServiceId);
  if (service) {
    return (
      <div id={`service-detail-${service.id}`} className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo title={pickLang(service.title, lang)} description={pickLang(service.shortDesc, lang)} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center space-x-2 text-brand-navy/75 dark:text-white/75 hover:text-brand-coral text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('services.backToAll')}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-navy/10 dark:border-white/10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 rounded-full px-3 py-1 w-fit">
                <ServiceIcon name={service.iconName} />
                <span className="text-[11px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                  {t('services.serviceLine')}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
                {pickLang(service.title, lang)}
              </h1>
              <p className="text-lg text-brand-navy/75 dark:text-white/75 leading-relaxed">{pickLang(service.longDesc, lang)}</p>
            </div>
            <div className="lg:col-span-4 self-start bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 p-6 rounded-2xl flex flex-col space-y-6">
              {pickLang(service.metrics, lang).length > 0 && <div>
                <span className="text-brand-navy/55 dark:text-white/55 text-[10px] font-mono uppercase block">{t('services.avgImpactMetrics')}</span>
                <div className="space-y-4 mt-4">
                  {pickLang(service.metrics, lang).map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-brand-navy/10 dark:border-white/10 pb-2">
                      <span className="text-xs text-brand-navy/75 dark:text-white/75">{metric.split(' ').slice(1).join(' ')}</span>
                      <span className="text-base font-display font-bold text-brand-coral">{metric.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>}
              <p className="text-sm text-brand-navy/75 dark:text-white/75">{pickLang(service.shortDesc, lang)}</p>
              <button
                onClick={() => {
                  navigate('/contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm rounded-xl transition-all cursor-pointer text-center shadow-lg shadow-brand-coral/20"
              >
                {t('services.requestQuote')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                <span>{t('services.whatIncludes')}</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {pickLang(service.features, lang).map((feature, idx) => (
                  <div key={idx} className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-xl p-4 flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0" />
                    <p className="text-brand-navy/75 dark:text-white/75 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white flex items-center space-x-2">
                  <Users className="w-5 h-5 text-brand-cyan" />
                  <span>{t('services.forWhomHeading')}</span>
                </h3>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">{pickLang(service.forWho, lang)}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white flex items-center space-x-2">
                  <Target className="w-5 h-5 text-brand-coral" />
                  <span>{t('services.businessBenefits')}</span>
                </h3>
                <ul className="space-y-3">
                  {pickLang(service.benefits, lang).map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-brand-navy/75 dark:text-white/75 bg-white dark:bg-brand-carbon px-4 py-3 border border-brand-navy/10 dark:border-white/10 rounded-xl">
                      <Check className="w-4 h-4 text-brand-coral shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
