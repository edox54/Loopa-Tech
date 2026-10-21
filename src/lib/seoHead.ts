import { isEnPath, toEn, toEs } from '../routes';

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://loopa-tech.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'Loopa Technology';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface SeoData {
  title: string;
  description: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: object[];
  /** Page exists only in Spanish (legal texts): canonical points to the Spanish URL, no hreflang. */
  esOnly?: boolean;
}

// Search results cut around 60 chars for titles and ~160 for descriptions.
const clip = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[,;:.]$/, '')}…`;

type Tag = { key: string; tag: 'meta' | 'link'; attrs: Record<string, string> };

const meta = (attr: 'name' | 'property', name: string, content: string): Tag => ({
  key: `meta[${attr}="${name}"]`,
  tag: 'meta',
  attrs: { [attr]: name, content },
});
const link = (rel: string, href: string, hreflang?: string): Tag => ({
  key: hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`,
  tag: 'link',
  attrs: hreflang ? { rel, hreflang, href } : { rel, href },
});

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Loopa',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  slogan: 'Crea océanos de negocios',
  email: 'asancho@loopa.technology',
  telephone: '+593996905953',
  address: { '@type': 'PostalAddress', addressLocality: 'Quito', addressCountry: 'EC' },
  sameAs: ['https://www.linkedin.com/company/loopatech/'],
};

const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: ['es', 'en'],
  publisher: { '@id': `${SITE_URL}/#organization` },
};

// Every head tag a page needs, built once and used by both the prerender step and the browser.
export function buildHead(seo: SeoData, pathname: string) {
  const en = isEnPath(pathname);
  const esPath = toEs(pathname);
  const esUrl = `${SITE_URL}${esPath === '/' ? '/' : esPath}`;
  const enUrl = `${SITE_URL}${toEn(esPath)}`;
  const url = en && !seo.esOnly ? enUrl : esUrl;
  const suffixed = `${seo.title} | ${SITE_NAME}`;
  const title = seo.title.includes(SITE_NAME) || suffixed.length > 62 ? seo.title : suffixed;
  const description = clip(seo.description, 160);
  const image = seo.image || DEFAULT_IMAGE;

  const tags: Tag[] = [
    meta('name', 'description', description),
    meta('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'),
    link('canonical', url),
    ...(seo.esOnly ? [] : [link('alternate', esUrl, 'es'), link('alternate', enUrl, 'en'), link('alternate', esUrl, 'x-default')]),
    meta('property', 'og:type', seo.type || 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:locale', en ? 'en_US' : 'es_EC'),
    meta('property', 'og:locale:alternate', en ? 'es_EC' : 'en_US'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', image),
  ];

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [ORGANIZATION, WEBSITE, ...(seo.jsonLd || [])],
  });

  return { title, tags, jsonLd, lang: en ? 'en' : 'es' };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headToHtml(head: ReturnType<typeof buildHead>) {
  const tags = head.tags
    .map((t) => `<${t.tag} ${Object.entries(t.attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')}>`)
    .join('\n    ');
  // `<` is escaped so text inside JSON-LD can never close the script tag.
  const ld = head.jsonLd.replace(/</g, '\\u003c');
  return `<title>${esc(head.title)}</title>\n    ${tags}\n    <script type="application/ld+json" id="ld-json">${ld}</script>`;
}

export function applyHead(head: ReturnType<typeof buildHead>) {
  document.title = head.title;
  document.documentElement.lang = head.lang;
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  for (const t of head.tags) {
    let el = document.head.querySelector(t.key);
    if (!el) {
      el = document.createElement(t.tag);
      document.head.appendChild(el);
    }
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
  }
  let ld = document.getElementById('ld-json');
  if (!ld) {
    ld = document.createElement('script');
    ld.id = 'ld-json';
    ld.setAttribute('type', 'application/ld+json');
    document.head.appendChild(ld);
  }
  ld.textContent = head.jsonLd;
}

const MONTHS: Record<string, string> = {
  enero: '01', febrero: '02', marzo: '03', abril: '04', mayo: '05', junio: '06',
  julio: '07', agosto: '08', septiembre: '09', octubre: '10', noviembre: '11', diciembre: '12',
};

// Blog dates are written as "10 de Julio, 2026"; schema.org wants ISO dates.
export function spanishDateToIso(date: string): string | undefined {
  const m = date.toLowerCase().match(/(\d{1,2}) de (\w+),? (\d{4})/);
  if (!m || !MONTHS[m[2]]) return undefined;
  return `${m[3]}-${MONTHS[m[2]]}-${m[1].padStart(2, '0')}`;
}

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});
