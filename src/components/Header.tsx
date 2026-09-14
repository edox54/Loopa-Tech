import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight, Languages, Sun, Moon } from 'lucide-react';
import { PlatformDemoButton } from './PlatformDemoButton';
import { useTheme } from '../ThemeContext';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.services'), to: '/servicios' },
    { label: t('nav.datalab'), to: '/datalab' },
    { label: t('nav.cases'), to: '/casos' },
    { label: t('nav.blog'), to: '/blog' },
    { label: t('nav.about'), to: '/nosotros' },
    { label: t('nav.contact'), to: '/contacto' },
  ];

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    localStorage.setItem('loopa-lang', next);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSelected = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const handleNavClick = (to: string) => {
    navigate(to);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-brand-navy/95 backdrop-blur-md border-b border-brand-navy/10 dark:border-white/10 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            id="header-logo"
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Loopa Technology"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.to}
                id={`nav-link-${item.to.replace(/\//g, '') || 'home'}`}
                onClick={() => handleNavClick(item.to)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  isSelected(item.to)
                    ? 'text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/20'
                    : 'text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white hover:bg-white dark:hover:bg-brand-carbon border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white border border-transparent hover:border-brand-coral/40 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="language-toggle"
              onClick={toggleLanguage}
              className="p-2.5 rounded-xl text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white border border-transparent hover:border-brand-coral/40 transition-all cursor-pointer flex items-center space-x-1.5"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase">{i18n.language}</span>
            </button>
            <PlatformDemoButton className="px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-navy/75 dark:text-white/75 border border-brand-navy/10 dark:border-white/10 hover:text-brand-navy dark:hover:text-white hover:border-brand-coral/40 transition-all" />
            <button
              id="cta-agendar-header"
              onClick={() => handleNavClick('/contacto')}
              className="relative px-5 py-2.5 rounded-xl text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral via-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(242,163,138,0.2)] cursor-pointer overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>{t('cta.scheduleConsult')}</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-1 md:hidden">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-white dark:bg-brand-navy border-b border-brand-navy/10 dark:border-white/10 px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.to}
              id={`mobile-nav-link-${item.to.replace(/\//g, '') || 'home'}`}
              onClick={() => handleNavClick(item.to)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isSelected(item.to)
                  ? 'text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/10'
                  : 'text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white hover:bg-white dark:hover:bg-brand-carbon'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center justify-between pt-4 px-4">
            <button
              id="language-toggle-mobile"
              onClick={toggleLanguage}
              className="p-2 rounded-xl text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white border border-brand-navy/10 dark:border-white/10 cursor-pointer flex items-center space-x-1.5"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase">{i18n.language}</span>
            </button>
          </div>
          <div className="px-4">
            <button
              id="mobile-cta-agendar"
              onClick={() => handleNavClick('/contacto')}
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-coral/25"
            >
              {t('cta.scheduleConsult')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
