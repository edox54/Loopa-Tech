import React from 'react';
import { useNavigate } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { Users, Award, Shield, Target, Lightbulb, Linkedin, Quote } from 'lucide-react';
import { ABOUT_TEAM } from '../data';
import { pickLang, useLang } from '../lib/i18nData';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function NosotrosView() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const handleContactClick = () => {
    navigate('/contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="nosotros-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
      />
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header Title */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
            {t('about.eyebrow')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            {t('about.heading')}
          </h1>
          <p className="text-brand-navy/75 dark:text-white/75 text-lg">
            {t('about.subheading')}
          </p>
        </Reveal>

        {/* Mission & Vision Bento Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-coral/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl" />
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white">{t('about.missionHeading')}</h2>
              <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-coral/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl" />
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-cyan">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white">{t('about.visionHeading')}</h2>
              <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Operational Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy dark:text-white tracking-tight">
              {t('about.pillarsHeading')}
            </h2>
            <p className="text-brand-navy/75 dark:text-white/75 text-sm">
              {t('about.pillarsSubheading')}
            </p>
          </div>

          <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral mx-auto">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-brand-navy dark:text-white font-semibold text-sm">{t('about.pillar1Title')}</h3>
              <p className="text-brand-navy/85 dark:text-white/85 text-xs leading-relaxed">
                {t('about.pillar1Text')}
              </p>
            </div>

            <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral mx-auto">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-brand-navy dark:text-white font-semibold text-sm">{t('about.pillar2Title')}</h3>
              <p className="text-brand-navy/85 dark:text-white/85 text-xs leading-relaxed">
                {t('about.pillar2Text')}
              </p>
            </div>

            <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral mx-auto">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-brand-navy dark:text-white font-semibold text-sm">{t('about.pillar3Title')}</h3>
              <p className="text-brand-navy/85 dark:text-white/85 text-xs leading-relaxed">
                {t('about.pillar3Text')}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Leadership Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-wider">
              {t('about.teamEyebrow')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy dark:text-white tracking-tight">
              {t('about.teamHeading')}
            </h2>
            <p className="text-brand-navy/75 dark:text-white/75 text-sm">
              {t('about.teamSubheading')}
            </p>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_TEAM.map((member, idx) => (
              <div
                key={idx}
                id={`team-card-${idx}`}
                className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 group hover:bg-brand-light-gray dark:hover:bg-brand-navy transition-all duration-300 text-center animate-fade-in"
              >
                <div className="space-y-4">
                  {/* Decorative Gradient Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full mx-auto bg-white dark:bg-brand-navy border border-brand-navy/10 dark:border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-300">
                    <span className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan uppercase">
                      {member.name.split(' ').filter(n => n !== 'Ing.' && n !== 'Dr.' && n !== 'Abg.').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-navy dark:text-white group-hover:text-brand-coral transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-brand-coral font-mono block mt-1 font-bold">
                      {pickLang(member.role, lang)}
                    </span>
                  </div>
                  <p className="text-brand-navy/90 dark:text-white/90 text-xs leading-relaxed text-center px-2">
                    {pickLang(member.bio, lang)}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 dark:border-white/10 flex justify-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-navy/65 dark:text-white/65 hover:text-brand-cyan transition-colors inline-flex items-center space-x-1.5 text-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] font-bold">{t('about.viewLinkedin')}</span>
                  </a>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Corporate Quote Banner */}
        <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6">
            <Quote className="w-10 h-10 text-brand-coral/40 mx-auto" />
            <p className="text-brand-navy/75 dark:text-white/75 font-display text-lg md:text-xl italic leading-relaxed">
              {t('about.quoteText')}
            </p>
            <div>
              <span className="text-brand-navy dark:text-white text-sm font-bold block">{t('about.quoteAuthor')}</span>
              <span className="text-brand-coral text-xs font-mono tracking-wider block font-bold">Loopa Technology LatAm</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8">
          <button
            onClick={handleContactClick}
            className="px-8 py-4 rounded-xl text-brand-navy font-bold bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 transition-all shadow-lg shadow-brand-coral/20 cursor-pointer inline-flex items-center space-x-2.5"
          >
            <span>{t('about.ctaButton')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
