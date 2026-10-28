import { useEffect, lazy, Suspense, type ComponentType } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { CookieBanner } from './components/CookieBanner';
import { useSpotlight } from './lib/useSpotlight';

// Inner pages load on demand so the home page ships less JavaScript.
const page = <T extends string>(load: () => Promise<Record<T, ComponentType>>, name: T) =>
  lazy(() => load().then((m) => ({ default: m[name] })));
const ServicesView = page(() => import('./components/ServicesView'), 'ServicesView');
const CasesView = page(() => import('./components/CasesView'), 'CasesView');
const BlogView = page(() => import('./components/BlogView'), 'BlogView');
const NosotrosView = page(() => import('./components/NosotrosView'), 'NosotrosView');
const ContactoView = page(() => import('./components/ContactoView'), 'ContactoView');
const DataLabView = page(() => import('./components/DataLabView'), 'DataLabView');
const ResourcesView = page(() => import('./components/ResourcesView'), 'ResourcesView');
const PrivacyPolicyView = page(() => import('./components/PrivacyPolicyView'), 'PrivacyPolicyView');
const TermsView = page(() => import('./components/TermsView'), 'TermsView');
const NotFoundView = page(() => import('./components/NotFoundView'), 'NotFoundView');
import { MercatelyChat } from './components/MercatelyChat';
import { Analytics } from './components/Analytics';

// ponytail: URL is the source of truth for language (SEO needs crawlable
// /en/* URLs, not a client-side-only toggle) — this layout route just
// keeps i18next and <html lang> in sync with whichever branch matched.
function LangLayout({ lang }: { lang: 'es' | 'en' }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return <Outlet />;
}

function PageRoutes() {
  return (
    <>
      <Route index element={<HomeView />} />
      <Route path="servicios" element={<ServicesView />} />
      <Route path="servicios/:id" element={<ServicesView />} />
      <Route path="casos" element={<CasesView />} />
      <Route path="casos/:id" element={<CasesView />} />
      <Route path="blog" element={<BlogView />} />
      <Route path="blog/:id" element={<BlogView />} />
      <Route path="nosotros" element={<NosotrosView />} />
      <Route path="contacto" element={<ContactoView />} />
      <Route path="datalab" element={<DataLabView />} />
      <Route path="recursos" element={<ResourcesView />} />
      <Route path="privacidad" element={<PrivacyPolicyView />} />
      <Route path="terminos" element={<TermsView />} />
      <Route path="legal" element={<Navigate to="../privacidad" replace />} />
      <Route path="*" element={<NotFoundView />} />
    </>
  );
}

export default function App() {
  const location = useLocation();
  useSpotlight();

  // ponytail: single source of truth for scroll-to-top on route change,
  // instead of scattered window.scrollTo calls in every nav handler/Link.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-navy text-brand-navy dark:text-white selection:bg-brand-coral/30 selection:text-brand-coral transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <div key={location.pathname} className="page-enter">
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/en" element={<LangLayout lang="en" />}>
              {PageRoutes()}
            </Route>
            <Route element={<LangLayout lang="es" />}>
              {PageRoutes()}
            </Route>
          </Routes>
          </Suspense>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
      <MercatelyChat />
      <Analytics />
    </div>
  );
}
