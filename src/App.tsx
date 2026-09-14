import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { CasesView } from './components/CasesView';
import { BlogView } from './components/BlogView';
import { NosotrosView } from './components/NosotrosView';
import { ContactoView } from './components/ContactoView';
import { DataLabView } from './components/DataLabView';
import { ResourcesView } from './components/ResourcesView';
import { LegalView } from './components/LegalView';
import { MercatelyChat } from './components/MercatelyChat';
import { Analytics } from './components/Analytics';

export default function App() {
  const location = useLocation();

  // ponytail: single source of truth for scroll-to-top on route change,
  // instead of scattered window.scrollTo calls in every nav handler/Link.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-navy text-brand-navy dark:text-white selection:bg-brand-coral/30 selection:text-brand-coral transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/servicios" element={<ServicesView />} />
            <Route path="/servicios/:id" element={<ServicesView />} />
            <Route path="/casos" element={<CasesView />} />
            <Route path="/casos/:id" element={<CasesView />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/blog/:id" element={<BlogView />} />
            <Route path="/nosotros" element={<NosotrosView />} />
            <Route path="/contacto" element={<ContactoView />} />
            <Route path="/datalab" element={<DataLabView />} />
            <Route path="/recursos" element={<ResourcesView />} />
            <Route path="/legal" element={<LegalView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </motion.div>
      </main>

      <Footer />
      <MercatelyChat />
      <Analytics />
    </div>
  );
}
