import { SERVICES_DATA, BLOG_POSTS_DATA, SUCCESS_CASES_DATA } from './data';

// Single list of indexable Spanish paths. Used by the sitemap and the prerender step.
// Casos and Lab de Datos stay reachable but out of the index until they hold real content.
export const INDEXABLE_ROUTES = [
  '/',
  '/servicios',
  ...SERVICES_DATA.map((s) => `/servicios/${s.id}`),
  '/blog',
  ...BLOG_POSTS_DATA.map((p) => `/blog/${p.id}`),
  '/nosotros',
  '/contacto',
  '/recursos',
  '/privacidad',
  '/terminos',
];

// Pages with no English version (none right now; legal pages have an English translation, Spanish prevails).
export const ES_ONLY_ROUTES: string[] = [];

export const NOINDEX_ROUTES = ['/casos', ...SUCCESS_CASES_DATA.map((c) => `/casos/${c.id}`), '/datalab'];

export const toEn = (path: string) => (path === '/' ? '/en' : `/en${path}`);
export const toEs = (path: string) => (path === '/en' ? '/' : path.startsWith('/en/') ? path.slice(3) : path);
export const isEnPath = (path: string) => path === '/en' || path.startsWith('/en/');
