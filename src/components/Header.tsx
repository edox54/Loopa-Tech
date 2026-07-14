import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { ActivePage } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export function Header({ activePage, setActivePage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: ActivePage }[] = [
    { label: 'Inicio', id: 'home' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Lab de Datos', id: 'datalab' },
    { label: 'Casos de Éxito', id: 'casos' },
    { label: 'Blog', id: 'blog' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy/95 backdrop-blur-md border-b border-brand-carbon shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="header-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-brand-carbon rounded-xl border border-brand-navy hover:border-brand-coral/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coral/20 to-brand-cyan/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Loopa abstract icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5 h-5 text-brand-coral group-hover:text-brand-cyan transition-colors"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                <path d="M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" stroke="url(#logoGrad)" />
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#F2A38A" />
                     <stop offset="100%" stopColor="#00D1E4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-wider text-white">
                LOOPA
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-brand-cyan uppercase font-medium -mt-1">
                Technology
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isSelected =
                activePage === item.id ||
                (item.id === 'servicios' && (activePage === 'servicio-llm' || activePage === 'servicio-social-listening')) ||
                (item.id === 'casos' && activePage === 'caso-detalle') ||
                (item.id === 'blog' && activePage === 'blog-post-detalle');
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'text-brand-coral bg-brand-carbon border border-brand-coral/20'
                      : 'text-brand-lavender hover:text-white hover:bg-brand-carbon/40 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              id="cta-agendar-header"
              onClick={() => handleNavClick('contacto')}
              className="relative px-5 py-2.5 rounded-xl text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral via-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(242,163,138,0.2)] cursor-pointer overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>Agendar Consultoría</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-lavender hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-brand-navy border-b border-brand-carbon px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => {
            const isSelected = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isSelected
                    ? 'text-brand-coral bg-brand-carbon border border-brand-coral/10'
                    : 'text-brand-lavender hover:text-white hover:bg-brand-carbon/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 px-4">
            <button
              id="mobile-cta-agendar"
              onClick={() => handleNavClick('contacto')}
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-coral/25"
            >
              Agendar Consultoría
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
