import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Mail } from 'lucide-react';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function LegalView() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <div id="legal-view" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Privacidad y Cumplimiento"
        description="Aviso de privacidad, términos de servicio y garantía Habeas Data de Loopa Technology para el tratamiento de datos personales."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <Reveal className="text-center space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Cumplimiento y Privacidad
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacidad, Términos y Garantía Habeas Data
          </h1>
          <p className="text-brand-lavender text-lg">
            Loopa Technology trata datos personales de terceros como parte de sus servicios de analítica e IA. Estos son los estándares que aplicamos.
          </p>
        </Reveal>

        <section id="privacidad" className="space-y-4 scroll-mt-32">
          <h2 className="font-display text-2xl font-bold text-white">Aviso de Privacidad</h2>
          <p className="text-brand-lavender text-sm leading-relaxed">
            Los datos personales que procesamos por cuenta de nuestros clientes (proveedores de datos, usuarios finales de sus plataformas, contactos comerciales) se tratan bajo cifrado en reposo y en tránsito, con acceso restringido por rol y bajo acuerdos de confidencialidad (NDA) firmados con cada cliente. No compartimos ni vendemos información de contacto de prospectos a terceros.
          </p>
        </section>

        <section id="terminos" className="space-y-4 scroll-mt-32">
          <h2 className="font-display text-2xl font-bold text-white">Términos de Servicio</h2>
          <p className="text-brand-lavender text-sm leading-relaxed">
            El uso de este sitio y de los formularios de contacto implica la aceptación de que la información suministrada será utilizada exclusivamente para evaluar y responder a solicitudes de consultoría, en línea con la Garantía Habeas Data descrita abajo.
          </p>
        </section>

        <section id="habeas-data" className="space-y-4 scroll-mt-32">
          <h2 className="font-display text-2xl font-bold text-white">Garantía Habeas Data</h2>
          <p className="text-brand-lavender text-sm leading-relaxed">
            Cumplimos con la Ley de Protección de Datos Personales aplicable en cada país donde operamos (México, Colombia, Chile, Brasil). Cada titular de datos puede solicitar acceso, corrección o eliminación de su información en cualquier momento.
          </p>
        </section>

        <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-8 space-y-4">
          <h3 className="font-display text-lg font-bold text-white">Contacto de Cumplimiento</h3>
          <p className="text-brand-lavender text-sm">
            Para solicitudes relacionadas con protección de datos, contacta directamente a nuestro asesor legal de Tech Compliance:
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-brand-navy border border-brand-navy/60 flex items-center justify-center font-bold text-brand-coral">
              AV
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Abg. Andrés Valenzuela</span>
              <span className="text-xs text-brand-lavender/50 block font-semibold">Asesor Legal de Tech Compliance</span>
            </div>
          </div>
          <a
            href="mailto:privacidad@loopatech.com"
            className="inline-flex items-center space-x-2 text-brand-coral hover:text-white font-bold text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>privacidad@loopatech.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
