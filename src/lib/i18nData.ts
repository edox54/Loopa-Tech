import type { Localized } from '../types';

// ponytail: one helper instead of `field[lang] ?? field.es` repeated at every call site.
export function pickLang<T>(field: Localized<T>, lang: string): T {
  return lang === 'en' ? field.en : field.es;
}

export function useLang(i18nLanguage: string): 'es' | 'en' {
  return i18nLanguage === 'en' ? 'en' : 'es';
}
