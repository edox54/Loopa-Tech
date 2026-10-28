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

// ponytail: hreflang lives in each page's <head> (enough for Google); keeping it out of the sitemap lets Chrome show the XML tree.
const entry = (url, lm) => `<url>\n<loc>${url}</loc>\n${lm ? `<lastmod>${lm}</lastmod>\n` : ''}</url>`;
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${INDEXABLE_ROUTES.flatMap((route) => {
  const lm = lastmod(route).replace(/<\/?lastmod>/g, '');
  const urls = ES_ONLY_ROUTES.includes(route) ? [route] : [route, toEn(route)];
  return urls.map((u) => entry(`${SITE_URL}${u}`, lm));
}).join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
writeFileSync(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
// llms.txt links follow the same domain as the sitemap.
const llms = new URL('../public/llms.txt', import.meta.url);
writeFileSync(llms, readFileSync(llms, 'utf8').replace(/https:\/\/(loopa-tech\.vercel\.app|loopa\.technology)/g, SITE_URL));
console.log(`sitemap.xml: ${INDEXABLE_ROUTES.length * 2 - ES_ONLY_ROUTES.length} URLs`);
