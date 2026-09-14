import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://loopa-tech.vercel.app';

function setLinkTag(rel: string, hreflang: string | undefined, href: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    if (hreflang) link.setAttribute('hreflang', hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

// ponytail: no react-helmet dependency needed — plain DOM API covers per-route title/meta/hreflang.
export function Seo({ title, description }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} | Loopa Technology`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Language lives in the URL: strip /en to get the canonical (Spanish) path,
    // then rebuild both language variants from it for hreflang + canonical.
    const esPath = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname;
    const isEn = pathname.startsWith('/en');
    const enPath = esPath === '/' ? '/en' : `/en${esPath}`;

    document.documentElement.lang = isEn ? 'en' : 'es';

    setLinkTag('alternate', 'es', `${SITE_URL}${esPath}`);
    setLinkTag('alternate', 'en', `${SITE_URL}${enPath}`);
    setLinkTag('alternate', 'x-default', `${SITE_URL}${esPath}`);
    setLinkTag('canonical', undefined, `${SITE_URL}${isEn ? enPath : esPath}`);
  }, [title, description, pathname]);

  return null;
}
