// ponytail: plain Node script, no sitemap lib needed for ~40 URLs (ES + EN).
import { writeFileSync } from 'node:fs';
import { INDEXABLE_ROUTES, ES_ONLY_ROUTES, toEn } from '../src/routes.ts';

const SITE_URL = (process.env.VITE_SITE_URL || 'https://loopa-tech.vercel.app').replace(/\/$/, '');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${INDEXABLE_ROUTES.flatMap((route) => {
  if (ES_ONLY_ROUTES.includes(route)) return [`  <url><loc>${SITE_URL}${route}</loc></url>`];
  const esUrl = `${SITE_URL}${route}`;
  const enUrl = `${SITE_URL}${toEn(route)}`;
  const alternates = `<xhtml:link rel="alternate" hreflang="es" href="${esUrl}" /><xhtml:link rel="alternate" hreflang="en" href="${enUrl}" /><xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}" />`;
  return [`  <url><loc>${esUrl}</loc>${alternates}</url>`, `  <url><loc>${enUrl}</loc>${alternates}</url>`];
}).join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
writeFileSync(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`sitemap.xml: ${INDEXABLE_ROUTES.length * 2 - ES_ONLY_ROUTES.length} URLs`);
