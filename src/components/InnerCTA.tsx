import { Link } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight } from 'lucide-react';

// ponytail: single reusable "stop and look" callout for embedding inside article bodies.
export function InnerCTA() {
  const { t } = useTranslation();
  return (
    <div className="not-prose my-8 bg-white dark:bg-brand-carbon border-l-4 border-brand-coral rounded-r-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start space-x-3">
        <Sparkles className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
        <p className="text-brand-navy dark:text-white text-sm font-semibold leading-relaxed">
          {t('shared.innerCtaText')}
        </p>
      </div>
      <Link
        to="/contacto"
        className="inline-flex items-center space-x-1.5 text-brand-coral hover:text-brand-navy dark:hover:text-white font-bold text-sm shrink-0 whitespace-nowrap"
      >
        <span>{t('shared.innerCtaLink')}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
