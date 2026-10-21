import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

// ponytail: only nav/CTA chrome + one demo content key are wired up.
// Translating the ~4000 lines of view copy with real cultural adaptation is Phase 2 (client-reviewed, not literal translation).
i18next.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  // Language comes from the URL so the browser starts in the same language the prerendered HTML used.
  lng: typeof window !== 'undefined' && /^\/en(\/|$)/.test(window.location.pathname) ? 'en' : 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18next;
