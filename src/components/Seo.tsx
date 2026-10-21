import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyHead, buildHead, type SeoData } from '../lib/seoHead';

// During prerender the page's SEO data is written into this object, then turned into <head> tags.
export const SeoCollector = createContext<{ seo?: SeoData } | null>(null);

// ponytail: no react-helmet — one context for the build step, plain DOM updates in the browser.
export function Seo(props: SeoData) {
  const { pathname } = useLocation();
  const collector = useContext(SeoCollector);
  if (collector) collector.seo = props;

  const key = JSON.stringify(props);
  useEffect(() => {
    applyHead(buildHead(props, pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, pathname]);

  return null;
}
