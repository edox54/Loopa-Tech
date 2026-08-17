// ponytail: plain Node script, no sitemap lib needed for ~20 static URLs.
import { writeFileSync } from 'node:fs';
import { SERVICES_DATA, SUCCESS_CASES_DATA, BLOG_POSTS_DATA } from '../src/data.ts';

const SITE_URL = process.env.VITE_SITE_URL || 'https://loopatech.com';

const staticRoutes = ['/', '/servicios', '/casos', '/blog', '/nosotros', '/contacto', '/datalab', '/recursos', '/legal'];
const serviceRoutes = SERVICES_DATA.map((s) => `/servicios/${s.id}`);
const caseRoutes = SUCCESS_CASES_DATA.map((c) => `/casos/${c.id}`);
const blogRoutes = BLOG_POSTS_DATA.map((p) => `/blog/${p.id}`);

const routes = [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`).join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml generated with ${routes.length} URLs`);
