import { LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PLATFORM_URL } from '../data';

// Plain link: the platform handles its own login, so it opens in a new tab.
// `compact` = short "Demo" label for the mobile header bar. The ping dot draws the eye to it.
export function PlatformLoginButton({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const { t } = useTranslation();
  return (
    <a
      id={compact ? 'cta-login-plataforma-mobile' : 'cta-login-plataforma'}
      href={PLATFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <span className="relative flex w-2 h-2" aria-hidden="true">
        <span className="wa-ring absolute inset-0 rounded-full bg-brand-cyan" />
        <span className="relative w-2 h-2 rounded-full bg-brand-cyan" />
      </span>
      {!compact && <LogIn className="w-4 h-4" />}
      <span>{compact ? t('cta.demo') : t('cta.platformLogin')}</span>
    </a>
  );
}
