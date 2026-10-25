import { useState, useEffect } from 'react';
import { useLocation, useNavigate as useRawNavigate } from 'react-router-dom';
import { Link } from '../lib/i18nRouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { PlatformLoginButton } from './PlatformLoginButton';
import { useTheme } from '../ThemeContext';
import { Logo } from './Logo';
import { Flag } from './Flag';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const rawNavigate = useRawNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    // Home = logo; Lab de Datos and Casos hidden until real cases/demo exist (routes still live).
    { label: t('nav.services'), to: '/servicios' },
    { label: t('nav.blog'), to: '/blog' },
    { label: t('nav.about'), to: '/nosotros' },
    { label: t('nav.contact'), to: '/contacto' },
  ];

  // Language is derived from the URL (LangLayout sets it) — switching means
  // navigating to the equivalent path under/without the /en prefix.
  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    const esPath = location.pathname.startsWith('/en') ? location.pathname.slice(3) || '/' : location.pathname;
    const target = next === 'en' ? (esPath === '/' ? '/en' : `/en${esPath}`) : esPath;
    rawNavigate(`${target}${location.search}${location.hash}`);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentEsPath = location.pathname.startsWith('/en') ? location.pathname.slice(3) || '/' : location.pathname;
  const isSelected = (to: string) =>
    to === '/' ? currentEsPath === '/' : currentEsPath.startsWith(to);

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
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                id={`nav-link-${item.to.replace(/\//g, '') || 'home'}`}
                to={item.to} onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isSelected(item.to)
                    ? 'text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/20'
                    : 'text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white hover:bg-white dark:hover:bg-brand-carbon border border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
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
              <Flag lang={i18n.language} />
              <span className="text-xs font-mono font-bold uppercase">{i18n.language}</span>
            </button>
            <PlatformLoginButton className="px-4 py-2.5 rounded-xl text-sm font-bold bg-brand-navy text-white dark:bg-white dark:text-brand-navy hover:bg-brand-cyan hover:text-brand-navy dark:hover:bg-brand-cyan shadow-[0_0_0_3px_rgba(34,211,238,0.25)] transition-all" />
            <Link
              id="cta-agendar-header"
              to={'/contacto'} onClick={() => setIsMobileMenuOpen(false)}
              className="relative inline-block px-5 py-2.5 rounded-xl text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral via-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(242,163,138,0.2)] overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>{t('cta.scheduleConsult')}</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              id="language-toggle-mobile"
              onClick={toggleLanguage}
              className="p-1.5 rounded-xl text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white cursor-pointer flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Flag lang={i18n.language} />
              <span className="hidden min-[400px]:inline text-xs font-mono font-bold uppercase">{i18n.language}</span>
            </button>
            <PlatformLoginButton compact className="px-3 py-1.5 rounded-full text-xs font-bold bg-brand-navy text-white dark:bg-white dark:text-brand-navy" />
            <button
              id="mobile-menu-toggle"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 -mr-1.5 text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white dark:bg-brand-navy border-b border-brand-navy/10 dark:border-white/10 px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              id={`mobile-nav-link-${item.to.replace(/\//g, '') || 'home'}`}
              to={item.to} onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isSelected(item.to)
                  ? 'text-brand-coral bg-brand-light-gray dark:bg-brand-carbon border border-brand-coral/10'
                  : 'text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white hover:bg-white dark:hover:bg-brand-carbon'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 px-4">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-brand-navy/75 dark:text-white/75 hover:text-brand-navy dark:hover:text-white border border-brand-navy/10 dark:border-white/10 cursor-pointer flex items-center gap-2 text-xs font-semibold"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{i18n.language === 'en' ? (theme === 'dark' ? 'Light mode' : 'Dark mode') : theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
            </button>
          </div>
          <div className="px-4 space-y-2">
            <PlatformLoginButton className="flex w-full py-3 rounded-xl text-sm font-bold bg-brand-navy text-white dark:bg-white dark:text-brand-navy" />
            <Link
              id="mobile-cta-agendar"
              to={'/contacto'} onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 rounded-xl text-center text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-coral/25"
            >
              {t('cta.scheduleConsult')}
            </Link>
          </div>
        </div>
      )}
      <div className="scroll-progress absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-coral to-brand-cyan" aria-hidden="true" />
    </header>
  );
}
