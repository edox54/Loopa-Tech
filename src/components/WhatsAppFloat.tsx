import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

// Fixed WhatsApp shortcut on every page. Label slides out on hover (desktop) and on keyboard focus.
export function WhatsAppFloat() {
  const { t } = useTranslation();
  return (
    <a
      id="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('home.ctaWhatsapp')}
      className="wa-float group fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:shadow-xl hover:gap-2 focus-visible:gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy transition-all duration-300"
    >
      <span className="relative grid place-items-center w-14 h-14">
        <span className="wa-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
        <WhatsAppIcon className="relative w-7 h-7" />
      </span>
      <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold text-brand-navy group-hover:max-w-56 group-hover:pr-5 group-focus-visible:max-w-56 group-focus-visible:pr-5 transition-all duration-300">
        {t('home.ctaWhatsapp')}
      </span>
    </a>
  );
}
