import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Calendar, Building2, HelpCircle, Activity } from 'lucide-react';
import { SUCCESS_CASES_DATA } from '../data';
import { pickLang, useLang } from '../lib/i18nData';
import { Seo } from './Seo';
import { Reveal } from './Reveal';
import { MediaPlaceholder } from './MediaPlaceholder';

export function CasesView() {
  const navigate = useNavigate();
  const { id: selectedCaseId } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);

  const handleBackToCases = () => {
    navigate('/casos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCase = (id: string) => {
    navigate(`/casos/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // List View of Cases
  if (!selectedCaseId) {
    return (
      <div id="cases-index" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo
          title={t('cases.seoTitle')}
          description={t('cases.seoDescription')}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              {t('cases.eyebrow')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              {t('cases.heading')}
            </h1>
            <p className="text-brand-navy/75 dark:text-white/75 text-lg">
              {t('cases.subheading')}
            </p>
          </Reveal>

          {/* Grid of 4 Cases */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SUCCESS_CASES_DATA.map((kase) => (
              <div
                key={kase.id}
                id={`case-index-card-${kase.id}`}
                className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-white dark:hover:bg-brand-navy transition-all duration-300 group cursor-pointer"
                onClick={() => handleSelectCase(kase.id)}
              >
                <MediaPlaceholder ratio="16/9" className="rounded-none border-x-0 border-t-0" />
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-navy/75 dark:text-white/75">
                    <span className="font-bold">{pickLang(kase.industry, lang)}</span>
                    <span className="text-brand-coral bg-brand-light-gray dark:bg-brand-navy border border-brand-coral/20 px-2 py-0.5 rounded font-bold">
                      {pickLang(kase.tag, lang)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy dark:text-white group-hover:text-brand-coral transition-colors leading-tight">
                    {pickLang(kase.title, lang)}
                  </h3>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed line-clamp-3">
                    {pickLang(kase.shortDesc, lang)}
                  </p>

                  {/* Quick metrics badges */}
                  <div className="grid grid-cols-3 gap-4 py-4 bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 rounded-xl px-4">
                    {kase.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <span className="text-base font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan block">
                          {metric.value}
                        </span>
                        <span className="text-[9px] font-mono text-brand-navy/65 dark:text-white/65 uppercase tracking-tight block font-bold mt-1">
                          {pickLang(metric.label, lang)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-6 border-t border-brand-navy/10 dark:border-white/10 mt-2 flex items-center justify-between text-xs">
                  <span className="text-brand-navy/85 dark:text-white/85">
                    {t('cases.clientLabel')} <span className="text-brand-navy dark:text-white font-bold">{kase.client}</span>
                  </span>
                  <span className="text-brand-cyan font-bold flex items-center space-x-1 hover:underline">
                    <span>{t('cases.viewFullCase')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    );
  }

  // Case Detail View
  const kase = SUCCESS_CASES_DATA.find((c) => c.id === selectedCaseId) || SUCCESS_CASES_DATA[0];

  return (
      <div id="case-detail-page" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
        <Seo title={pickLang(kase.title, lang)} description={pickLang(kase.shortDesc, lang)} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Back button */}
          <button
            onClick={handleBackToCases}
            className="inline-flex items-center space-x-2 text-brand-navy/85 dark:text-white/85 hover:text-brand-cyan text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('cases.backToAll')}</span>
          </button>

          {/* Hero details header */}
          <div className="space-y-6 pb-12 border-b border-brand-navy/10 dark:border-white/10">
            <div className="flex flex-wrap gap-4 items-center text-xs font-mono">
              <span className="text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full font-bold">
                {pickLang(kase.tag, lang)}
              </span>
              <span className="text-brand-navy/45 dark:text-white/45">|</span>
              <span className="text-brand-navy/90 dark:text-white/90 font-bold">{pickLang(kase.industry, lang)}</span>
              <span className="text-brand-navy/45 dark:text-white/45">|</span>
              <span className="text-brand-navy/75 dark:text-white/75">{t('cases.publishedOn', { date: kase.date })}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-tight">
              {pickLang(kase.title, lang)}
            </h1>
            <p className="text-lg text-brand-navy/75 dark:text-white/75 leading-relaxed">
              {pickLang(kase.shortDesc, lang)}
            </p>
          </div>

          <MediaPlaceholder ratio="21/9" label={t('cases.featuredImageLabel')} className="w-full" />

          {/* Metrics Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kase.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 text-center space-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-coral/5 rounded-full blur-xl animate-pulse" />
                <span className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan block">
                  {metric.value}
                </span>
                <span className="font-mono text-xs font-bold text-brand-navy dark:text-white block uppercase tracking-wider">
                  {pickLang(metric.label, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge, Solution & Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-coral rounded-full" />
                  <span>{t('cases.challengeHeading')}</span>
                </h2>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                  {pickLang(kase.challenge, lang)}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
                  <span>{t('cases.solutionHeading')}</span>
                </h2>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                  {pickLang(kase.solution, lang)}
                </p>
              </div>

              {/* Results List */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span>{t('cases.resultsHeading')}</span>
                </h2>
                <ul className="space-y-3">
                  {pickLang(kase.results, lang).map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-brand-navy/75 dark:text-white/75 text-sm bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar info card */}
            <div className="space-y-6">
              <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 space-y-6">
                <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white pb-3 border-b border-brand-navy/10 dark:border-white/10">
                  {t('cases.projectSheetHeading')}
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-brand-navy/55 dark:text-white/55 block uppercase font-bold">{t('cases.clientFieldLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold">{kase.client}</span>
                  </div>
                  <div>
                    <span className="text-brand-navy/55 dark:text-white/55 block uppercase font-bold">{t('cases.industryFieldLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold">{pickLang(kase.industry, lang)}</span>
                  </div>
                  <div>
                    <span className="text-brand-navy/55 dark:text-white/55 block uppercase font-bold">{t('cases.technologiesFieldLabel')}</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">NLP</span>
                      <span className="bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">Machine Learning</span>
                      <span className="bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">API Gateway</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-brand-navy/55 dark:text-white/55 block uppercase font-bold">{t('cases.timelineFieldLabel')}</span>
                    <span className="text-brand-navy dark:text-white text-sm font-bold">{t('cases.timelineValue')}</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Quote */}
              <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/25 rounded-2xl p-6 space-y-4">
                <p className="text-brand-navy/95 dark:text-white/95 text-xs italic leading-relaxed">
                  {t('cases.testimonialQuote')}
                </p>
                <div>
                  <span className="text-brand-navy dark:text-white text-xs font-bold block">{t('cases.testimonialRole')}</span>
                  <span className="text-brand-coral text-[10px] block font-bold">{kase.client}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-8 text-center space-y-4 mt-12">
            <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">{t('cases.bottomCtaHeading')}</h3>
            <p className="text-brand-navy/75 dark:text-white/75 text-sm max-w-xl mx-auto">
              {t('cases.bottomCtaText')}
            </p>
            <button
              onClick={() => {
                navigate('/contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold rounded-xl text-sm transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg shadow-brand-coral/15"
            >
              <span>{t('cases.talkToEngineer')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
}
