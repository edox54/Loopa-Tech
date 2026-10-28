// ponytail: plain Node script, no sitemap lib needed for ~40 URLs (ES + EN).
import { readFileSync, writeFileSync } from 'node:fs';
import { INDEXABLE_ROUTES, ES_ONLY_ROUTES, toEn } from '../src/routes.ts';
import { BLOG_POSTS_DATA } from '../src/data.ts';
import { spanishDateToIso } from '../src/lib/seoHead.ts';

// ponytail: lastmod only where the date is real (blog posts); a build-date lastmod on every URL would be noise.
const lastmod = (route) => {
  const post = BLOG_POSTS_DATA.find((p) => route === `/blog/${p.id}`);
  const iso = post && spanishDateToIso(post.date);
  return iso ? `<lastmod>${iso}</lastmod>` : '';
};

const SITE_URL = (process.env.VITE_SITE_URL || 'https://loopa.technology').replace(/\/$/, '');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${INDEXABLE_ROUTES.flatMap((route) => {
  if (ES_ONLY_ROUTES.includes(route)) return [`  <url><loc>${SITE_URL}${route}</loc>${lastmod(route)}</url>`];
  const esUrl = `${SITE_URL}${route}`;
  const enUrl = `${SITE_URL}${toEn(route)}`;
  const alternates = `<xhtml:link rel="alternate" hreflang="es" href="${esUrl}" /><xhtml:link rel="alternate" hreflang="en" href="${enUrl}" /><xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}" />`;
  const lm = lastmod(route);
  return [`  <url><loc>${esUrl}</loc>${lm}${alternates}</url>`, `  <url><loc>${enUrl}</loc>${lm}${alternates}</url>`];
}).join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
writeFileSync(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
// llms.txt links follow the same domain as the sitemap.
const llms = new URL('../public/llms.txt', import.meta.url);
writeFileSync(llms, readFileSync(llms, 'utf8').replace(/https:\/\/(loopa-tech\.vercel\.app|loopa\.technology)/g, SITE_URL));
console.log(`sitemap.xml: ${INDEXABLE_ROUTES.length * 2 - ES_ONLY_ROUTES.length} URLs`);
