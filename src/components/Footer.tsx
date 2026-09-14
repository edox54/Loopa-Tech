import React, { useState } from 'react';
import { useNavigate, Link } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight, Linkedin, Sparkles, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white dark:bg-brand-navy border-t border-brand-navy/10 dark:border-white/10 text-brand-navy/75 dark:text-white/75 font-sans mt-auto">
      {/* Upper newsletter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-brand-navy/10 dark:border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-brand-navy dark:text-white font-display text-lg font-bold tracking-tight flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-coral" />
              <span>{t('footer.newsletterHeading')}</span>
            </h3>
            <p className="text-sm mt-2 text-brand-navy/75 dark:text-white/75">
              {t('footer.newsletterText')}
            </p>
          </div>
          <div className="lg:col-span-2">
            {subscribed ? (
              <div id="newsletter-success" className="flex items-center space-x-3 bg-white dark:bg-brand-carbon border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl max-w-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">{t('footer.newsletterSuccess')}</span>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral text-brand-navy dark:text-white rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none placeholder-brand-lavender/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg shadow-brand-coral/20"
                >
                  <span>{t('footer.newsletterSubmit')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('/')}>
              <img src="/logo.png" alt="Loopa Technology" className="h-12 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-brand-navy/75 dark:text-white/75">
              {t('footer.brandBlurb')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/loopatech/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 text-brand-navy/75 dark:text-white/75 hover:text-brand-coral hover:border-brand-coral/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-brand-navy dark:text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkDataGovernance')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios/social-listening')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkSocialListening')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkCommercialIntelligence')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkSalesForecasting')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkBlockchainConsent')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios/implementacion-llm')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkLlmImplementation')}
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-brand-navy dark:text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              {t('footer.companyHeading')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigateTo('/')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/datalab')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkDataLab')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/casos')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('nav.cases')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/blog')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('footer.linkBlogInsights')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/nosotros')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/recursos')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('nav.resources')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/contacto')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-navy dark:text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              {t('footer.hqHeading')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-brand-coral text-xs font-mono font-bold">{t('footer.addressLabel')}</span>
                <span>{t('footer.addressValue')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-coral text-xs font-mono font-bold">{t('footer.mailLabel')}</span>
                <a href="mailto:info@loopa.technology" className="hover:text-brand-coral transition-colors">
                  info@loopa.technology
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="border-t border-brand-navy/10 dark:border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-brand-navy/75 dark:text-white/75">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-brand-navy/75 dark:text-white/75">
            <Link to="/privacidad" className="hover:text-brand-coral transition-colors">{t('footer.privacyNotice')}</Link>
            <Link to="/terminos" className="hover:text-brand-coral transition-colors">{t('footer.termsOfService')}</Link>
            <Link to="/privacidad#habeas-data" className="hover:text-brand-coral transition-colors">{t('footer.dataRightsGuarantee')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
