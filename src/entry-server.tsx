import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import i18n from './i18n';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import { SeoCollector } from './components/Seo';
import { buildHead, headToHtml } from './lib/seoHead';
import { INDEXABLE_ROUTES, NOINDEX_ROUTES, isEnPath } from './routes';
export { ES_ONLY_ROUTES } from './routes';

export const ROUTES = [...INDEXABLE_ROUTES, ...NOINDEX_ROUTES];

// Renders one URL to static HTML plus its <head> tags. Used only at build time.
export async function render(url: string) {
  await i18n.changeLanguage(isEnPath(url) ? 'en' : 'es');
  const collector: { seo?: Parameters<typeof buildHead>[0] } = {};
  const errors: unknown[] = [];
  const { prelude } = await prerender(
    <SeoCollector.Provider value={collector}>
      <ThemeProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </SeoCollector.Provider>,
    { onError: (e) => void errors.push(e) }
  );
  // A render error would silently ship an empty page; fail the build instead.
  if (errors.length) throw errors[0];
  const html = await new Response(prelude).text();
  if (!collector.seo) throw new Error(`No <Seo> rendered for ${url}`);
  const head = buildHead(collector.seo, url);
  return { html, head: headToHtml(head), lang: head.lang, title: head.title, noindex: !!collector.seo.noindex };
}
