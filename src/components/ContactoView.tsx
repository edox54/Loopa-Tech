import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, Globe, ArrowRight, ShieldCheck, ChevronRight, CalendarClock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

// TODO(env): set VITE_CALENDLY_URL to the real Calendly scheduling link once available.
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/loopa-technology/demo';

const BUDGET_OPTIONS = [
  { value: 'menos-5000', labelKey: 'contact.budgetOptionUnder5000' },
  { value: '5000-20000', labelKey: 'contact.budgetOption5000to20000' },
  { value: 'mas-20000', labelKey: 'contact.budgetOptionOver20000' },
] as const;

interface CityOffice {
  name: string;
  country: string;
  address: string;
  phone: string;
  coords: { x: string; y: string }; // Position in % for SVG Map
}

export function ContactoView() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: 'social-listening',
    presupuesto: '' as '' | (typeof BUDGET_OPTIONS)[number]['value'],
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<number>(0);
  const isQualifiedBudget = formData.presupuesto !== 'menos-5000';

  const offices: CityOffice[] = [
    {
      name: 'Ciudad de México',
      country: t('contact.office1Country'),
      address: 'Paseo de la Reforma 412, Piso 18, Juárez, CDMX',
      phone: '+52 (55) 4123-4567',
      coords: { x: '35%', y: '45%' },
    },
    {
      name: 'Bogotá',
      country: t('contact.office2Country'),
      address: 'Calle 93B #13-45, Oficina 402, Bogotá',
      phone: '+57 (601) 893-4122',
      coords: { x: '48%', y: '65%' },
    },
    {
      name: 'Santiago',
      country: t('contact.office3Country'),
      address: 'Av. Andrés Bello 2711, Piso 12, Las Condes, Santiago',
      phone: '+56 (2) 2933-4120',
      coords: { x: '47%', y: '90%' },
    },
    {
      name: 'São Paulo',
      country: t('contact.office4Country'),
      address: 'Av. Paulista 1009, Cerqueira César, São Paulo',
      phone: '+55 (11) 3211-5400',
      coords: { x: '58%', y: '78%' },
    },
  ];

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
      servicio: 'social-listening',
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
                    className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none transition-colors cursor-pointer font-sans"
                  >
                    <option value="rentabilizacion">{t('contact.serviceOptionRentabilizacion')}</option>
                    <option value="social-listening">{t('contact.serviceOptionSocialListening')}</option>
                    <option value="inteligencia-comercial">{t('contact.serviceOptionInteligenciaComercial')}</option>
                    <option value="prediccion-ventas">{t('contact.serviceOptionPrediccionVentas')}</option>
                    <option value="consentimiento-blockchain">{t('contact.serviceOptionConsentimientoBlockchain')}</option>
                    <option value="implementacion-llm">{t('contact.serviceOptionImplementacionLlm')}</option>
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
                    className="w-full bg-white dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 focus:border-brand-coral rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none transition-colors cursor-pointer font-sans"
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

                {/* Custom Stylized LatAm Vector Shape Map Representation */}
                <svg
                  viewBox="0 0 120 160"
                  className="w-full h-full max-h-[280px] text-slate-800 opacity-60 pointer-events-none"
                  fill="currentColor"
                >
                  {/* Abstract Mexico */}
                  <path d="M10 40 L45 40 L40 60 L15 55 Z" />
                  {/* Central America */}
                  <path d="M15 55 L35 70 L25 80 Z" />
                  {/* South America outline */}
                  <path d="M25 80 Q35 70 50 80 Q70 90 75 110 Q80 130 55 155 Q45 155 35 120 Q20 100 25 80 Z" fillOpacity="0.8" />
                </svg>

                {/* Glowing Location points */}
                {offices.map((office, idx) => {
                  const isActive = activeOffice === idx;
                  return (
                    <button
                      key={idx}
                      id={`map-pin-${idx}`}
                      onClick={() => setActiveOffice(idx)}
                      className="absolute group focus:outline-none cursor-pointer transition-all duration-300"
                      style={{ left: office.coords.x, top: office.coords.y }}
                    >
                      {/* Glow rings */}
                      <span className={`absolute -left-3 -top-3 w-7 h-7 rounded-full bg-brand-coral/20 blur-sm scale-150 transition-transform ${isActive ? 'animate-ping' : 'opacity-0 group-hover:opacity-100'}`} />
                      <span className={`absolute -left-1.5 -top-1.5 w-4 h-4 rounded-full bg-brand-coral/40 transition-transform ${isActive ? 'scale-125' : 'scale-100'}`} />
                      {/* Active Point */}
                      <span className={`relative block w-2 h-2 rounded-full border border-slate-950 ${isActive ? 'bg-brand-coral shadow-[0_0_8px_#F2A38A]' : 'bg-brand-lavender/60 group-hover:bg-brand-coral'}`} />

                      {/* Tooltip on map pins */}
                      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 text-brand-navy dark:text-white font-semibold text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-20">
                        {office.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Office Selector Card */}
              <div className="bg-white dark:bg-brand-carbon p-4 rounded-xl border border-brand-navy/10 dark:border-white/10 space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <span className="font-display font-bold text-brand-navy dark:text-white text-sm">{offices[activeOffice].name}</span>
                  <span className="text-[10px] font-mono text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 px-2 py-0.5 rounded font-bold">
                    {offices[activeOffice].country}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-brand-navy/75 dark:text-white/75">
                  <p className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                    <span>{offices[activeOffice].address}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-brand-coral shrink-0" />
                    <a href={`tel:${offices[activeOffice].phone}`} className="hover:text-brand-coral transition-colors font-semibold">
                      {offices[activeOffice].phone}
                    </a>
                  </p>
                </div>

                {/* Grid of quick office switches */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-brand-navy/10 dark:border-white/10">
                  {offices.map((off, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveOffice(idx)}
                      className={`py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer uppercase ${
                        activeOffice === idx
                          ? 'bg-brand-coral/25 text-brand-coral border border-brand-coral/40'
                          : 'bg-white dark:bg-brand-carbon text-brand-navy/75 dark:text-white/75 hover:text-brand-coral'
                      }`}
                    >
                      {off.name.split(' ').slice(-1)[0]}
                    </button>
                  ))}
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
                    <a href="mailto:info@loopatech.com" className="text-brand-navy dark:text-white hover:text-brand-coral transition-colors font-semibold">
                      info@loopatech.com
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
