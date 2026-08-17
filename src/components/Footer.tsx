import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowRight, Linkedin, Twitter, Sparkles, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-brand-navy border-t border-brand-carbon text-brand-lavender font-sans mt-auto">
      {/* Upper newsletter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-brand-carbon">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-white font-display text-lg font-bold tracking-tight flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-coral" />
              <span>Suscríbete a Loopa Insights</span>
            </h3>
            <p className="text-sm mt-2 text-brand-lavender">
              Recibe mensualmente análisis de tendencias, IA corporativa y gobernanza de datos para líderes en LatAm.
            </p>
          </div>
          <div className="lg:col-span-2">
            {subscribed ? (
              <div id="newsletter-success" className="flex items-center space-x-3 bg-brand-carbon/60 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl max-w-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">¡Gracias por suscribirte! Recibirás nuestro próximo análisis de IA en tu bandeja.</span>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo corporativo"
                  className="bg-brand-carbon border border-brand-navy focus:border-brand-coral text-white rounded-xl px-4 py-3 text-sm flex-grow focus:outline-none placeholder-brand-lavender/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg shadow-brand-coral/20"
                >
                  <span>Unirme</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('/')}>
              <div className="w-9 h-9 flex items-center justify-center bg-brand-carbon rounded-xl border border-brand-navy">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-brand-coral"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-wider text-white">LOOPA</span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-brand-cyan uppercase -mt-1">Technology</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-brand-lavender">
              Consultora de datos e IA de alta gama. Ayudamos a corporativos y scaleups de Latinoamérica a estructurar, predecir y monetizar su activo de información más valioso.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-carbon border border-brand-navy text-brand-lavender hover:text-brand-coral hover:border-brand-coral/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand-carbon border border-brand-navy text-brand-lavender hover:text-brand-coral hover:border-brand-coral/30 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Gobernanza de Datos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios/social-listening')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Social Listening & NLP
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Inteligencia Comercial
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Predicción de Ventas
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Consentimiento Blockchain
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/servicios/implementacion-llm')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Implementación de LLMs
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              Compañía
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => navigateTo('/')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/datalab')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Lab de Datos (Interactivo)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/casos')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/blog')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Blog Insights
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/nosotros')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/recursos')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Recursos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/contacto')} className="hover:text-brand-coral transition-colors cursor-pointer text-left">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display text-sm font-bold tracking-wider uppercase mb-6">
              Sede LatAm
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-brand-coral text-xs font-mono font-bold">DIR:</span>
                <span>Paseo de la Reforma 412, Piso 18, Juarez, Ciudad de México, México.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-coral text-xs font-mono font-bold">MAIL:</span>
                <a href="mailto:info@loopatech.com" className="hover:text-brand-coral transition-colors">
                  info@loopatech.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-coral text-xs font-mono font-bold">TEL:</span>
                <a href="tel:+525541234567" className="hover:text-brand-coral transition-colors">
                  +52 (55) 4123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="border-t border-brand-carbon mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-brand-lavender/60">
            &copy; 2026 Loopa Technology. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-brand-lavender/60">
            <Link to="/legal#privacidad" className="hover:text-brand-coral transition-colors">Aviso de Privacidad</Link>
            <Link to="/legal#terminos" className="hover:text-brand-coral transition-colors">Términos de Servicio</Link>
            <Link to="/legal#habeas-data" className="hover:text-brand-coral transition-colors">Garantía Habeas Data</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
