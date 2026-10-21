// Writes one static HTML file per route (ES + EN) so crawlers and AI bots get real content,
// titles and links without running JavaScript. Then checks the basic on-page SEO rules.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';

const { render, ROUTES, ES_ONLY_ROUTES } = await import('../dist-ssr/entry-server.js');
const toEn = (p) => (p === '/' ? '/en' : `/en${p}`);
const template = readFileSync('dist/index.html', 'utf8')
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta name="description"[^>]*>\s*/, '');

const fileFor = (url) => (url === '/' ? 'dist/index.html' : `dist${url}.html`);
const write = (file, html) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};
const page = (r) =>
  template
    .replace('<html lang="es">', `<html lang="${r.lang}">`)
    .replace('</head>', `    ${r.head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${r.html}</div>`);

const problems = [];
const seenTitles = new Map();
let count = 0;

for (const url of ROUTES.flatMap((r) => (ES_ONLY_ROUTES.includes(r) ? [r] : [r, toEn(r)]))) {
  const r = await render(url);
  write(fileFor(url), page(r));
  count++;
  const h1 = (r.html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${url}: ${h1} <h1> tags`);
  if (r.noindex) continue;
  if (r.title.length > 65) problems.push(`${url}: title ${r.title.length} chars`);
  const desc = (r.head.match(/name="description" content="([^"]*)"/)?.[1] || '').replace(/&(quot|amp|lt|gt);/g, '_');
  if (desc.length < 70 || desc.length > 170) problems.push(`${url}: description ${desc.length} chars`);
  if (seenTitles.has(r.title)) problems.push(`${url}: same title as ${seenTitles.get(r.title)}`);
  seenTitles.set(r.title, url);
}

// Real 404 page: Vercel serves dist/404.html with a 404 status for unknown URLs.
write('dist/404.html', page(await render('/__no-existe__')));
rmSync('dist-ssr', { recursive: true, force: true });

console.log(`prerendered ${count} pages + 404.html`);
if (problems.length) console.warn(`SEO warnings:\n  ${problems.join('\n  ')}`);
