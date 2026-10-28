import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../lib/i18nRouter';

const KEY = 'loopa-cookie-consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Small, non-blocking notice. GA4 starts denied (see index.html) and only switches on after "Accept".
// ponytail: one choice for analytics; add categories if marketing pixels ever go live.
export function CookieBanner() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {
      /* storage blocked: ask again next visit */
    }
    if (saved) return;
    // Wait a moment so the notice never competes with the first paint.
    const id = window.setTimeout(() => setOpen(true), 1500);
    return () => window.clearTimeout(id);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied');
    } catch {
      /* ignore */
    }
    window.gtag?.('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-label={t('cookies.label')}
      className="fixed z-40 left-4 bottom-[max(1rem,env(safe-area-inset-bottom))] right-24 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-sm rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white/95 dark:bg-brand-navy/95 backdrop-blur p-4 shadow-lg shadow-black/10 text-xs text-brand-navy/80 dark:text-white/80"
    >
      <p>
        {t('cookies.text')}{' '}
        <Link to="/privacidad#cookies" className="underline hover:text-brand-coral transition-colors">
          {t('cookies.more')}
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="px-4 py-1.5 rounded-full bg-brand-navy text-white dark:bg-white dark:text-brand-navy font-bold hover:brightness-110 transition cursor-pointer"
        >
          {t('cookies.accept')}
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="px-4 py-1.5 rounded-full border border-brand-navy/20 dark:border-white/20 font-semibold hover:border-brand-coral transition cursor-pointer"
        >
          {t('cookies.reject')}
        </button>
      </div>
    </div>
  );
}
