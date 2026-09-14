import { Link } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { CalendarClock, Briefcase, FlaskConical, TrendingUp, FileStack, ArrowRight } from 'lucide-react';

export function BlogSidebar() {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    { to: '/servicios', label: t('nav.services'), icon: Briefcase },
    { to: '/datalab', label: t('nav.datalab'), icon: FlaskConical },
    { to: '/casos', label: t('nav.cases'), icon: TrendingUp },
    { to: '/recursos', label: t('nav.resources'), icon: FileStack },
  ];

  return (
    <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
      <div className="bg-gradient-to-br from-brand-coral/15 to-brand-cyan/10 border border-brand-coral/25 rounded-2xl p-6 space-y-4">
        <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white">{t('blogSidebar.heading')}</h3>
        <p className="text-brand-navy/75 dark:text-white/75 text-sm leading-relaxed">
          {t('blogSidebar.text')}
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm px-5 py-3 rounded-xl transition-all w-full justify-center"
        >
          <CalendarClock className="w-4 h-4" />
          <span>{t('cta.scheduleConsult')}</span>
        </Link>
      </div>

      <div className="bg-brand-light-gray dark:bg-brand-carbon border border-brand-navy/10 dark:border-white/10 rounded-2xl p-6 space-y-1">
        <h3 className="font-display text-sm font-bold text-brand-navy dark:text-white uppercase tracking-wider mb-3">{t('blogSidebar.exploreHeading')}</h3>
        {QUICK_LINKS.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white hover:bg-brand-light-gray dark:hover:bg-brand-navy transition-colors group text-sm"
          >
            <span className="flex items-center space-x-2.5">
              <Icon className="w-4 h-4 text-brand-coral" />
              <span>{label}</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </aside>
  );
}
