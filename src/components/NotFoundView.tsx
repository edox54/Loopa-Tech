import { useTranslation } from 'react-i18next';
import { Link } from '../lib/i18nRouter';
import { Seo } from './Seo';

export function NotFoundView() {
  const { t } = useTranslation();
  return (
    <section className="min-h-[70vh] pt-40 pb-24 px-4 text-center space-y-6">
      <Seo title={t('notFound.title')} description={t('notFound.text')} noindex />
      <p className="font-display text-7xl font-black text-brand-coral">404</p>
      <h1 className="font-display text-3xl md:text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-brand-navy/75 dark:text-white/75">{t('notFound.text')}</p>
      <Link to="/" className="inline-block px-8 py-3.5 rounded-full bg-brand-navy text-white dark:bg-white dark:text-brand-navy font-bold">
        {t('notFound.cta')}
      </Link>
    </section>
  );
}
