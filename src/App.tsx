import { useState } from 'react';
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
import { ActivePage } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('');
  const [selectedPostId, setSelectedPostId] = useState<string>('');

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomeView
            setActivePage={setActivePage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedCaseId={setSelectedCaseId}
            setSelectedPostId={setSelectedPostId}
          />
        );
      case 'servicios':
      case 'servicio-social-listening':
      case 'servicio-llm':
        return (
          <ServicesView
            activePage={activePage}
            setActivePage={setActivePage}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedCaseId={setSelectedCaseId}
          />
        );
      case 'casos':
      case 'caso-detalle':
        return (
          <CasesView
            activePage={activePage}
            setActivePage={setActivePage}
            selectedCaseId={selectedCaseId}
            setSelectedCaseId={setSelectedCaseId}
          />
        );
      case 'blog':
      case 'blog-post-detalle':
        return (
          <BlogView
            activePage={activePage}
            setActivePage={setActivePage}
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />
        );
      case 'nosotros':
        return <NosotrosView setActivePage={setActivePage} />;
      case 'contacto':
        return <ContactoView />;
      case 'datalab':
        return <DataLabView setActivePage={setActivePage} />;
      default:
        return (
          <HomeView
            setActivePage={setActivePage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedCaseId={setSelectedCaseId}
            setSelectedPostId={setSelectedPostId}
          />
        );
    }
  };

  const transitionKey = `${activePage}-${selectedServiceId}-${selectedCaseId}-${selectedPostId}`;

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy text-white selection:bg-brand-coral/30 selection:text-brand-coral">
      {/* Premium Header */}
      <Header activePage={activePage} setActivePage={(page) => {
        // Clear children selection states upon primary tab switch
        if (page !== 'servicios') setSelectedServiceId('');
        if (page !== 'casos') setSelectedCaseId('');
        if (page !== 'blog') setSelectedPostId('');
        setActivePage(page);
      }} />

      {/* Main Multi-page container with fade-in and slide-up micro-interaction */}
      <main className="flex-grow">
        <motion.div
          key={transitionKey}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {renderActiveView()}
        </motion.div>
      </main>

      {/* Premium Footer */}
      <Footer setActivePage={(page) => {
        // Clear children selection states on footer clicks
        if (page !== 'servicios') setSelectedServiceId('');
        if (page !== 'casos') setSelectedCaseId('');
        if (page !== 'blog') setSelectedPostId('');
        setActivePage(page);
      }} />
    </div>
  );
}

