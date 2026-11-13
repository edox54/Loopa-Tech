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

// English URLs use English words. Spanish stays the canonical form (data ids, sitemap source, redirects).
const SEGMENTS: Record<string, string> = {
  servicios: 'services',
  nosotros: 'about',
  contacto: 'contact',
  recursos: 'resources',
  privacidad: 'privacy',
  terminos: 'terms',
  casos: 'cases',
  datalab: 'data-lab',
};
// Detail-page slugs (services, posts, cases) keyed by their Spanish id.
const SLUGS: Record<string, string> = {
  'rentabilidad-comercial': 'commercial-profitability',
  'imagen-politica': 'political-image',
  'social-simulation': 'social-simulation',
  'analitica-predictiva': 'predictive-analytics',
  'limpieza-datos': 'data-cleansing',
  'servicios-econometricos': 'econometric-services',
  'llm-privados-latam': 'private-llms-latam',
  'productos-baja-rotacion-sin-cambiar-erp': 'slow-moving-inventory-without-changing-erp',
  'social-listening-retail': 'social-listening-retail',
  'inventario-predictivo-logistica': 'predictive-inventory-logistics',
  'consentimiento-blockchain-fintech': 'blockchain-consent-fintech',
  'asistente-llm-energia': 'energy-llm-assistant',
};
const invert = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
const EN_SEGMENTS = invert(SEGMENTS);
const EN_SLUGS = invert(SLUGS);

/** Segment name of a section in the given language (`servicios` -> `services` in English). */
export const segment = (es: string, lang: string) => (lang === 'en' ? SEGMENTS[es] ?? es : es);
/** Canonical (Spanish) id for a detail slug coming from either language's URL. */
export const canonicalId = (slug?: string) => (slug ? EN_SLUGS[slug] ?? slug : slug);

// Path pieces: "/servicios/x?y#z" -> ["/servicios/x", "?y#z"], so queries and anchors survive the translation.
const split = (path: string) => {
  const m = /^([^?#]*)(.*)$/.exec(path)!;
  return [m[1], m[2]] as const;
};
const mapSegments = (path: string, seg: Record<string, string>, slug: Record<string, string>) => {
  const [pathname, rest] = split(path);
  const parts = pathname.split('/');
  if (parts[1] && seg[parts[1]]) parts[1] = seg[parts[1]];
  if (parts[2] && slug[parts[2]]) parts[2] = slug[parts[2]];
  return parts.join('/') + rest;
};

export const isEnPath = (path: string) => path === '/en' || path.startsWith('/en/') || path.startsWith('/en?') || path.startsWith('/en#');
export const toEn = (path: string) => {
  if (isEnPath(path)) return path;
  const [pathname, rest] = split(path);
  const mapped = mapSegments(pathname, SEGMENTS, SLUGS);
  return (mapped === '/' ? '/en' : `/en${mapped}`) + rest;
};
export const toEs = (path: string) => {
  if (!isEnPath(path)) return path;
  const stripped = path.slice(3);
  const [pathname, rest] = split(stripped || '/');
  return mapSegments(pathname || '/', EN_SEGMENTS, EN_SLUGS) + rest;
};
