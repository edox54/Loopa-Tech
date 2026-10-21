import { ArrowRight, CalendarClock, Radar, Megaphone, Network, RefreshCw, Users, Layers, Check } from 'lucide-react';
import type { CSSProperties } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Link } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { SERVICES_DATA, CALENDLY_URL, DEMO_VIDEO_EMBED, WHATSAPP_URL } from '../data';
import { PlatformLoginButton } from './PlatformLoginButton';
import { CountUp } from './CountUp';
import { pickLang, useLang } from '../lib/i18nData';
import { Seo } from './Seo';
import { HeroTitle } from './HeroTitle';
import { Reveal } from './Reveal';
import { ServiceIcon } from './ServiceIcon';
import { LineChart, INVENTORY_CHART } from './Charts';

type Item = { title: string; text: string };

const AGENT_ICONS = [Radar, Megaphone, Network];
const EDGE_ICONS = [RefreshCw, Layers, Users];

const openCalendly = () => window.open(CALENDLY_URL, 'loopa-calendly', 'width=680,height=780');

// Section heading shared by every block below.
function Heading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl space-y-4 mb-12">
      <span className="text-brand-coral text-xs font-bold uppercase tracking-widest">{eyebrow}</span>
      <h2 className="font-display text-3xl md:text-5xl font-black text-brand-navy dark:text-white leading-tight">{title}</h2>
      {text && <p className="text-lg text-brand-navy/75 dark:text-white/75">{text}</p>}
    </div>
  );
}

export function HomeView() {
  const { t, i18n } = useTranslation();
  const lang = useLang(i18n.language);
  const list = (key: string) => t(key, { returnObjects: true }) as Item[];
  const [main, ...complementary] = SERVICES_DATA;

  return (
    <div className="bg-white dark:bg-brand-navy text-brand-navy dark:text-white">
      <Seo title={t('home.seoTitle')} description={t('home.seoDescription')} />

      {/* HERO */}
      <section className="hero-section spotlight relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="hero-fade inline-block text-brand-coral text-xs font-bold uppercase tracking-widest border border-brand-coral/30 rounded-full px-4 py-1.5">
            {t('home.eyebrow')}
          </span>
          <HeroTitle
            className="text-4xl sm:text-5xl md:text-6xl"
            lines={[
              <span>{t('home.heroLine1')}</span>,
              <span className="text-brand-coral">{t('home.heroLine2')}</span>,
            ]}
          />
          <p className="hero-fade text-lg md:text-xl text-brand-navy/75 dark:text-white/75 max-w-3xl mx-auto">
            {t('home.heroSubtitle')}
          </p>
          <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" style={{ '--d': '0.45s' } as CSSProperties}>
            <button
              onClick={openCalendly}
              className="px-8 py-4 rounded-full bg-brand-navy dark:bg-white text-white dark:text-brand-navy font-bold text-sm flex items-center gap-2 hover:bg-brand-coral hover:text-brand-navy dark:hover:bg-brand-coral hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            >
              <CalendarClock className="w-4 h-4" />
              {t('home.ctaMeeting')}
            </button>
            <Link
              to="/servicios"
              className="group px-8 py-4 rounded-full border border-brand-navy/15 dark:border-white/15 font-bold text-sm flex items-center gap-2 hover:border-brand-coral hover:text-brand-coral hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              {t('home.ctaSolutions')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM: complementary business */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <span className="text-brand-coral text-xs font-bold uppercase tracking-widest">{t('home.problemEyebrow')}</span>
            <p className="font-display text-6xl md:text-8xl font-black text-brand-navy dark:text-white">
              <CountUp to={20} prefix="+$" suffix="M" />
            </p>
            <p className="text-xl font-bold">{t('home.problemStatLabel')}</p>
            <p className="text-brand-navy/75 dark:text-white/75">{t('home.problemStatText')}</p>
          </div>
          <div className="space-y-8">
            {list('home.problemPoints').map((p) => (
              <div key={p.title} className="border-l-2 border-brand-coral pl-6 space-y-2 hover:border-l-4 hover:pl-5 transition-all">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="text-brand-navy/75 dark:text-white/75">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <LineChart {...INVENTORY_CHART} />
        </Reveal>
      </section>

      {/* PLATFORM: multi-agent */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading eyebrow={t('home.platformEyebrow')} title={t('home.platformHeading')} text={t('home.platformText')} />
          <div className="relative">
          <div className="agents-flow hidden md:block absolute left-[8%] right-[8%] top-1/2 h-px -z-0" aria-hidden="true" />
          <Reveal className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {list('home.agents').map((a, i) => {
              const Icon = AGENT_ICONS[i];
              return (
                <div key={a.title} className="spotlight rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white dark:bg-brand-navy p-8 space-y-4 hover:border-brand-coral/50">
                  <Icon className="icon-pop w-7 h-7 text-brand-coral" />
                  <h3 className="font-display text-xl font-bold">{a.title}</h3>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">{a.text}</p>
                </div>
              );
            })}
          </Reveal>
          </div>
          <p className="mt-10 text-center font-display text-xl md:text-2xl font-bold">{t('home.platformOneClick')}</p>
          <Reveal className="mt-12 max-w-4xl mx-auto">
            <iframe
              src={DEMO_VIDEO_EMBED}
              title={t('home.demoVideoLabel')}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-2xl border border-brand-navy/10 dark:border-white/10"
            />
            <div className="mt-8 flex justify-center">
              <PlatformLoginButton className="px-8 py-3.5 rounded-full bg-brand-navy text-white dark:bg-white dark:text-brand-navy font-bold hover:brightness-110 transition" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading eyebrow={t('home.edgeEyebrow')} title={t('home.edgeHeading')} />
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {list('home.edges').map((e, i) => {
              const Icon = EDGE_ICONS[i];
              return (
                <div key={e.title} className="spotlight rounded-2xl p-6 -m-6 space-y-3">
                  <Icon className="icon-pop w-6 h-6 text-brand-cyan" />
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">{e.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS: main offer + complementary products */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading eyebrow={t('home.solutionsEyebrow')} title={t('home.solutionsHeading')} />
          <Reveal className="space-y-6">
            <Link
              to={`/servicios/${main.id}`}
              className="spotlight group w-full text-left rounded-2xl border border-brand-coral/40 p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center hover:border-brand-coral"
            >
              <div className="md:col-span-2 space-y-3">
                <span className="text-brand-coral text-xs font-bold uppercase tracking-widest">{t('home.mainOfferLabel')}</span>
                <h3 className="font-display text-2xl md:text-3xl font-black">{pickLang(main.title, lang)}</h3>
                <p className="text-brand-navy/75 dark:text-white/75">{pickLang(main.shortDesc, lang)}</p>
              </div>
              <span className="flex items-center gap-2 font-bold text-sm md:justify-end group-hover:text-brand-coral">
                {t('home.viewSolution')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <p className="pt-6 text-sm font-bold uppercase tracking-widest text-brand-navy/60 dark:text-white/60">{t('home.complementaryLabel')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complementary.map((s) => (
                <Link
                  key={s.id}
                  to={`/servicios/${s.id}`}
                  className="spotlight group block text-left rounded-2xl border border-brand-navy/10 dark:border-white/10 p-8 space-y-4 hover:border-brand-coral/50"
                >
                  <ServiceIcon name={s.iconName} className="icon-pop w-6 h-6 text-brand-coral" />
                  <h3 className="font-display text-lg font-bold group-hover:text-brand-coral transition-colors">{pickLang(s.title, lang)}</h3>
                  <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">{pickLang(s.shortDesc, lang)}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Heading eyebrow={t('home.icpEyebrow')} title={t('home.icpHeading')} />
            <Reveal as="ul" className="space-y-4">
              {(t('home.icp', { returnObjects: true }) as string[]).map((x) => (
                <li key={x} className="group flex gap-3"><Check className="icon-pop w-5 h-5 text-brand-coral shrink-0 mt-0.5 group-hover:scale-125" /><span>{x}</span></li>
              ))}
            </Reveal>
          </div>
          <div className="lg:pt-24 space-y-4">
            <h3 className="font-display text-xl font-bold">{t('home.partnersHeading')}</h3>
            <p className="text-brand-navy/75 dark:text-white/75">{t('home.partnersText')}</p>
          </div>
        </Reveal>
      </section>

      {/* MARKET VALIDATION + ECOSYSTEM */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading eyebrow={t('home.validationEyebrow')} title={t('home.validationHeading')} />
          <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list('home.validation').map((v) => (
              <div key={v.title} className="spotlight rounded-2xl border border-brand-navy/10 dark:border-white/10 p-6 space-y-2 hover:border-brand-coral/50">
                <h3 className="font-display text-lg font-bold">{v.title}</h3>
                <p className="text-brand-navy/75 dark:text-white/75 text-sm">{v.text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-12 max-w-3xl space-y-3">
            <h3 className="font-display text-2xl font-bold">{t('home.socialTitle')}</h3>
            <p className="text-brand-navy/75 dark:text-white/75">{t('home.socialText')}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-brand-navy/10 dark:border-white/10">
        <Reveal className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-4xl md:text-6xl font-black">{t('home.finalCtaHeading')}</h2>
          <p className="text-lg text-brand-navy/75 dark:text-white/75">{t('home.finalCtaText')}</p>
          <button
            onClick={openCalendly}
            className="px-10 py-4 rounded-full bg-brand-coral text-brand-navy font-bold flex items-center gap-2 mx-auto hover:brightness-105 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
          >
            <CalendarClock className="w-5 h-5" />
            {t('home.ctaMeeting')}
          </button>
          <a
            id="cta-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-[#25D366] text-brand-navy font-bold inline-flex items-center gap-2 hover:brightness-105 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t('home.ctaWhatsapp')}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
