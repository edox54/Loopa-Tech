import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, Send, Clock, Globe, ArrowRight, ShieldCheck, ChevronRight, CalendarClock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from './Seo';
import { Reveal } from './Reveal';
import { CALENDLY_URL, SERVICES_DATA } from '../data';
import { pickLang, useLang } from '../lib/i18nData';

const BUDGET_OPTIONS = [
  { value: 'menos-5000', labelKey: 'contact.budgetOptionUnder5000' },
  { value: '5000-20000', labelKey: 'contact.budgetOption5000to20000' },
  { value: 'mas-20000', labelKey: 'contact.budgetOptionOver20000' },
] as const;

// Simplified Latin America outline (Mexico to Tierra del Fuego plus the Greater Antilles).
// Equirectangular projection: x = lon + 118, y = 33 - lat, so the HQ pin uses real coordinates.
const LATAM_PATH =
  'M0.9 0.5L3.3 0.3L7.0 1.7L9.8 1.7L11.6 1.2L13.5 3.4L15.0 4.0L16.6 3.2L18.5 5.5L20.6 7.1L20.3 9.0L20.8 11.5L22.0 13.8L23.5 14.8L26.0 14.4L27.3 13.5L27.6 12.0L31.0 11.5L30.5 14.0L29.7 14.6L29.8 17.0L32.0 17.1L34.8 18.0L34.4 22.0L35.8 24.0L38.5 23.4L40.6 24.4L42.0 23.5L42.5 22.5L44.0 21.8L46.2 20.6L47.0 22.0L48.0 21.0L50.0 22.5L54.0 22.4L56.0 22.3L57.0 24.0L58.2 24.7L61.0 27.0L64.0 27.3L66.0 28.3L67.0 29.0L68.0 31.2L68.5 33.0L70.0 34.0L73.5 35.5L77.0 35.9L79.5 36.7L82.8 38.4L83.2 40.5L82.5 42.5L81.0 44.0L79.5 46.0L79.0 50.5L78.0 53.0L76.5 55.5L74.0 56.0L71.0 57.5L69.5 59.0L69.4 61.5L67.5 64.0L65.5 66.5L63.1 67.9L61.5 67.8L60.5 68.3L61.0 69.5L60.4 71.0L56.0 72.0L55.7 73.5L53.0 74.0L54.0 75.5L52.6 78.0L50.5 79.5L52.0 81.0L49.7 83.2L49.0 85.0L49.6 85.5L49.4 87.8L52.5 87.8L50.5 88.6L48.0 88.0L46.0 86.8L43.5 85.5L42.5 83.0L42.5 80.0L44.0 77.0L44.5 74.5L44.4 71.0L45.3 68.0L46.4 65.0L46.6 61.0L47.5 58.0L47.8 53.0L47.6 51.3L45.5 50.0L42.0 47.0L40.5 44.5L39.0 41.0L36.8 39.0L36.7 37.3L37.7 36.4L37.1 35.2L37.9 33.0L39.0 31.8L39.2 31.2L40.7 29.0L40.6 26.5L40.1 25.8L38.5 24.1L38.0 25.7L36.5 25.4L34.4 24.6L32.3 23.0L32.2 21.8L30.5 20.1L28.5 19.5L26.5 19.0L25.8 18.5L24.0 17.0L21.5 17.3L19.0 16.4L16.5 15.2L14.0 14.0L12.5 12.5L12.8 10.5L11.6 9.8L10.0 8.0L8.6 6.5L7.0 5.0L5.8 3.7L4.9 1.8L3.3 1.3L3.7 3.0L5.3 5.2L7.0 7.2L8.5 9.8L8.0 10.1L6.5 8.5L5.8 7.1L4.0 5.3L2.5 3.4L1.3 1.3ZM33.1 11.1L35.0 10.1L37.5 9.9L40.5 11.2L43.8 12.8L42.4 13.1L40.3 13.1L39.5 11.4L36.2 10.8L34.0 11.2ZM43.6 14.6L45.2 13.1L48.0 13.3L49.6 14.4L48.0 14.8L46.5 15.4L45.0 14.9ZM50.8 14.5L52.4 14.6L52.4 15.0L50.8 15.0ZM39.7 14.6L41.7 14.8L41.2 15.1L40.0 14.8Z';
const QUITO = { x: 39.5, y: 33.2 }; // -78.5, -0.2

export function ContactoView() {
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: SERVICES_DATA[0].id,
    presupuesto: '' as '' | (typeof BUDGET_OPTIONS)[number]['value'],
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const isQualifiedBudget = formData.presupuesto !== 'menos-5000';

  const office = { name: 'Quito', country: t('contact.officeCountry'), address: 'Quito, Ecuador' };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.empresa && formData.presupuesto) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio: SERVICES_DATA[0].id,
      presupuesto: '',
      mensaje: '',
    });
    setIsSubmitted(false);
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, 'loopa-calendly', 'width=680,height=780');
  };

  return (
    <div id="contacto-view" className="bg-white dark:bg-brand-navy text-brand-navy/75 dark:text-white/75 min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title={t('contact.seoTitle')}
        description={t('contact.seoDescription')}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
            {t('contact.eyebrow')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            {t('contact.heading')}
          </h1>
          <p className="text-brand-navy/75 dark:text-white/75 text-lg">
            {t('contact.subheading')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Intake Form Column */}
          <div className="lg:col-span-7 bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div id="form-success-container" className="text-center py-12 px-4 space-y-8">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white">
                    {t('contact.successHeading')}
                  </h2>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm max-w-md mx-auto leading-relaxed">
                    {isQualifiedBudget ? (
                      <>
                        {t('contact.successQualifiedPrefix')}{' '}
                        <span className="text-brand-cyan font-mono font-bold">{t('contact.successQualifiedTicket')}</span>. {t('contact.successQualifiedSuffix')}
                      </>
                    ) : (
                      <>
                        {t('contact.successUnqualifiedPrefix')}{' '}
                        <span className="text-brand-cyan font-mono font-bold">{t('contact.successUnqualifiedHighlight')}</span> {t('contact.successUnqualifiedSuffix')}
                      </>
                    )}
                  </p>
                </div>

                {isQualifiedBudget && (
                  <button
                    id="cta-agenda-demo"
                    onClick={openCalendly}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-coral/20"
                  >
                    <CalendarClock className="w-4 h-4" />
                    <span>{t('cta.scheduleDemo')}</span>
                  </button>
                )}

                {/* Simulated ticket summary card */}
                <div className="bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 text-left max-w-md mx-auto space-y-4 font-mono text-xs text-brand-navy/75 dark:text-white/75">
                  <span className="text-brand-navy/65 dark:text-white/65 block text-center border-b border-brand-navy/10 dark:border-white/10 pb-2 uppercase tracking-widest font-bold">{t('contact.summaryHeading')}</span>
                  <div className="flex justify-between">
                    <span>{t('contact.summaryContactLabel')}</span>
                    <span className="text-brand-navy dark:text-white font-semibold">{formData.nombre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.summaryCompanyLabel')}</span>
                    <span className="text-brand-navy dark:text-white font-semibold">{formData.empresa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.summaryServiceLabel')}</span>
                    <span className="text-brand-cyan font-semibold">{formData.servicio.toUpperCase()}</span>
                  </div>
                  <p className="text-[11px] text-brand-navy/55 dark:text-white/55 border-t border-brand-navy/10 dark:border-white/10 pt-2 leading-relaxed italic">
                    {t('contact.summaryQuote')}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 hover:border-brand-coral/40 text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white rounded-xl text-sm transition-all cursor-pointer font-bold"
                >
                  {t('contact.resetButton')}
                </button>
              </div>
            ) : (
              <form id="contacto-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                      {t('contact.nameFieldLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/30 transition-colors font-sans"
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                      {t('contact.companyFieldLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder={t('contact.companyPlaceholder')}
                      className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/30 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                      {t('contact.emailFieldLabel')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/30 transition-colors font-sans"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                      {t('contact.phoneFieldLabel')}
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/30 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                    {t('contact.serviceFieldLabel')}
                  </label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none transition-colors cursor-pointer font-sans"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>{pickLang(s.title, lang)}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                    {t('contact.budgetFieldLabel')}
                  </label>
                  <select
                    required
                    value={formData.presupuesto}
                    onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value as typeof formData.presupuesto })}
                    className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none transition-colors cursor-pointer font-sans"
                  >
                    <option value="" disabled>{t('contact.budgetPlaceholderOption')}</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-brand-navy/85 dark:text-white/85 uppercase tracking-wider block">
                    {t('contact.messageFieldLabel')}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-brand-navy dark:text-white focus:outline-none placeholder-brand-lavender/30 transition-colors resize-none font-sans"
                  />
                </div>

                {/* Compliance banner */}
                <div className="flex items-start space-x-3 bg-brand-light-gray dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10 text-xs text-brand-navy/65 dark:text-white/65">
                  <ShieldCheck className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {t('contact.compliancePrefix')}{' '}
                    <span className="text-brand-navy/75 dark:text-white/75">{t('contact.complianceHighlight')}</span>. {t('contact.complianceSuffix')}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-brand-navy bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 font-bold text-base transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-coral/25 cursor-pointer"
                >
                  <span>{t('contact.submitButton')}</span>
                  <Send className="w-4 h-4 text-brand-navy" />
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map & Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Interactive Office Map Mockup (SVG) */}
            <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden space-y-4">
              <span className="text-brand-navy/65 dark:text-white/65 text-[10px] font-mono uppercase block">{t('contact.officesLabel')}</span>

              {/* High-fidelity custom SVG map of Latin America with interactive points */}
              <div className="relative w-full aspect-square max-h-[320px] bg-white dark:bg-brand-carbon rounded-2xl border border-brand-navy/10 dark:border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

                <svg viewBox="-4 -4 92 97" className="relative w-full h-full max-h-[300px]" role="img" aria-label={t('contact.mapLabel')}>
                  <path d={LATAM_PATH} className="fill-brand-navy/15 stroke-brand-navy/40 dark:fill-white/15 dark:stroke-white/40" strokeWidth="0.4" strokeLinejoin="round" />
                  <g transform={`translate(${QUITO.x} ${QUITO.y})`}>
                    <circle r="2" className="fill-brand-coral/40">
                      <animate attributeName="r" values="1.5;6;1.5" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="1.6" className="fill-brand-coral stroke-white dark:stroke-brand-navy" strokeWidth="0.5" />
                    <text x="-3" y="1" textAnchor="end" className="fill-brand-navy dark:fill-white font-sans font-bold" fontSize="3.6">
                      Quito
                    </text>
                    <text x="-3" y="5" textAnchor="end" className="fill-brand-coral font-mono font-bold uppercase" fontSize="2.4">
                      {t('contact.hqTag')}
                    </text>
                  </g>
                </svg>
              </div>

              {/* Office Card */}
              <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10 space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="font-display font-bold text-brand-navy dark:text-white text-sm">{office.name}</span>
                  <span className="text-[10px] font-mono text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 px-2 py-0.5 rounded font-bold">
                    {office.country}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-brand-navy/75 dark:text-white/75">
                  <p className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* General contact channels card */}
            <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-3xl p-6 space-y-6">
              <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">{t('contact.directChannelsHeading')}</h3>
              <div className="space-y-4 text-sm text-brand-navy/75 dark:text-white/75">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-navy/55 dark:text-white/55 block uppercase font-mono">{t('contact.corporateEmailLabel')}</span>
                    <a href="mailto:asancho@loopa.technology" className="text-brand-navy dark:text-white hover:text-brand-coral transition-colors font-semibold">
                      asancho@loopa.technology
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-navy/55 dark:text-white/55 block uppercase font-mono">{t('contact.attentionHoursLabel')}</span>
                    <span className="text-brand-navy dark:text-white font-semibold">{t('contact.attentionHoursValue')}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 flex items-center justify-center text-brand-coral shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-navy/55 dark:text-white/55 block uppercase font-mono">{t('contact.coverageZoneLabel')}</span>
                    <span className="text-brand-navy dark:text-white font-semibold">{t('contact.coverageZoneValue')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
