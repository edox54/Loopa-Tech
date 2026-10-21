import { LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PLATFORM_URL } from '../data';

// Plain link: the platform handles its own login, so it opens in a new tab.
export function PlatformLoginButton({ className = '' }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <a
      id="cta-login-plataforma"
      href={PLATFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <LogIn className="w-4 h-4" />
      <span>{t('cta.platformLogin')}</span>
    </a>
  );
}
