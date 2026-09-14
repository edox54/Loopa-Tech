// ponytail: plain Node script, no sitemap lib needed for ~50 URLs (ES + EN).
import { writeFileSync } from 'node:fs';
import { SERVICES_DATA, SUCCESS_CASES_DATA, BLOG_POSTS_DATA } from '../src/data.ts';

const SITE_URL = process.env.VITE_SITE_URL || 'https://loopa-tech.vercel.app';

const staticRoutes = ['/', '/servicios', '/casos', '/blog', '/nosotros', '/contacto', '/datalab', '/recursos', '/privacidad', '/terminos'];
const serviceRoutes = SERVICES_DATA.map((s) => `/servicios/${s.id}`);
const caseRoutes = SUCCESS_CASES_DATA.map((c) => `/casos/${c.id}`);
const blogRoutes = BLOG_POSTS_DATA.map((p) => `/blog/${p.id}`);

const routes = [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes];

const enPath = (route) => (route === '/' ? '/en' : `/en${route}`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .flatMap((route) => {
    const esUrl = `${SITE_URL}${route}`;
    const enUrl = `${SITE_URL}${enPath(route)}`;
    const alternates = `<xhtml:link rel="alternate" hreflang="es" href="${esUrl}" /><xhtml:link rel="alternate" hreflang="en" href="${enUrl}" /><xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}" />`;
    return [
      `  <url><loc>${esUrl}</loc>${alternates}</url>`,
      `  <url><loc>${enUrl}</loc>${alternates}</url>`,
    ];
  })
  .join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml generated with ${routes.length * 2} URLs (${routes.length} routes x 2 languages)`);
