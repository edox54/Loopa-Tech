import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Award, Shield, Target, Lightbulb, Linkedin, Quote } from 'lucide-react';
import { ABOUT_TEAM } from '../data';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

export function NosotrosView() {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="nosotros-view" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Nosotros"
        description="Conoce al equipo de Loopa Technology: consultora de datos e IA con foco en gobernanza, soberanía de datos y estándares DAMA-DMBOK en LatAm."
      />
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header Title */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
            Nuestra Historia
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ingenieros de Datos Liderando la Siguiente Ola Analítica
          </h1>
          <p className="text-brand-lavender text-lg">
            Combinamos metodologías globales de gobernanza con tecnología de vanguardia para empoderar a los corporativos más dinámicos de Latinoamérica.
          </p>
        </Reveal>

        {/* Mission & Vision Bento Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-coral/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl" />
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Nuestra Misión</h2>
              <p className="text-brand-lavender text-sm leading-relaxed">
                Democratizar el acceso y la explotación inteligente de datos a gran escala en Latinoamérica, proveyendo arquitecturas analíticas y modelos de Inteligencia Artificial que garanticen la soberanía de datos, cumplan las exigencias legales de privacidad y generen rentabilidad real.
              </p>
            </div>
          </div>

          <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-coral/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl" />
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-cyan">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Nuestra Visión</h2>
              <p className="text-brand-lavender text-sm leading-relaxed">
                Convertirnos para 2029 en la consultora técnica de referencia en procesamiento analítico y despliegue seguro de Inteligencia Artificial en Latinoamérica, conectando infraestructura de datos robusta con las necesidades de negocio del sector financiero, e-commerce y telecomunicaciones.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Operational Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Los pilares que guían cada línea de código
            </h2>
            <p className="text-brand-lavender text-sm">
              Operamos bajo estándares de ingeniería estrictos para evitar malas prácticas y garantizar de extremo a extremo la calidad de datos de nuestros clientes.
            </p>
          </div>

          <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-brand-carbon/30 border border-brand-navy/60 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral mx-auto">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm">Soberanía de Datos</h3>
              <p className="text-brand-lavender/70 text-xs leading-relaxed">
                La seguridad de su información es innegociable. Desplegamos IA y almacenes en su nube, garantizando que conserve siempre el control total.
              </p>
            </div>

            <div className="bg-brand-carbon/30 border border-brand-navy/60 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral mx-auto">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm">Alineación Pragmática</h3>
              <p className="text-brand-lavender/70 text-xs leading-relaxed">
                No inventamos metodologías teóricas para alargar plazos. Nos enfocamos en sprints rápidos con entregables funcionales desde el primer mes.
              </p>
            </div>

            <div className="bg-brand-carbon/30 border border-brand-navy/60 rounded-2xl p-6 text-center space-y-3">
              <div className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral mx-auto">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm">Estándar CDMP DAMA</h3>
              <p className="text-brand-lavender/70 text-xs leading-relaxed">
                Toda nuestra ingeniería se rige bajo los marcos mundiales de calidad, linaje de datos y trazabilidad arquitectónica más exigentes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Leadership Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-wider">
              DIRECCIÓN TÉCNICA
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Liderazgo con experiencia de campo
            </h2>
            <p className="text-brand-lavender text-sm">
              Nuestro equipo combina backgrounds de nivel internacional en ciencia de datos, NLP avanzado y gobierno de TI corporativo.
            </p>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_TEAM.map((member, idx) => (
              <div
                key={idx}
                id={`team-card-${idx}`}
                className="bg-brand-carbon/60 border border-brand-navy/60 hover:border-brand-coral/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 group hover:bg-brand-carbon transition-all duration-300 text-center animate-fade-in"
              >
                <div className="space-y-4">
                  {/* Decorative Gradient Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full mx-auto bg-brand-navy border border-brand-navy/60 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-300">
                    <span className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan uppercase">
                      {member.name.split(' ').filter(n => n !== 'Ing.' && n !== 'Dr.' && n !== 'Abg.').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-brand-coral transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-brand-coral font-mono block mt-1 font-bold">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-brand-lavender/80 text-xs leading-relaxed text-center px-2">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy/40 flex justify-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-lavender/50 hover:text-brand-cyan transition-colors inline-flex items-center space-x-1.5 text-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] font-bold">VER LINKEDIN</span>
                  </a>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Corporate Quote Banner */}
        <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6">
            <Quote className="w-10 h-10 text-brand-coral/40 mx-auto" />
            <p className="text-brand-lavender font-display text-lg md:text-xl italic leading-relaxed">
              "No vendemos reportes en PDF que terminan archivados. Desarrollamos software de alta ingeniería y gobernanza real para que los datos resuelvan, de manera predecible, los retos diarios de negocio en nuestra región."
            </p>
            <div>
              <span className="text-white text-sm font-bold block">Comité de Ingeniería y Entrega</span>
              <span className="text-brand-coral text-xs font-mono tracking-wider block font-bold">Loopa Technology LatAm</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8">
          <button
            onClick={handleContactClick}
            className="px-8 py-4 rounded-xl text-brand-navy font-bold bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 transition-all shadow-lg shadow-brand-coral/20 cursor-pointer inline-flex items-center space-x-2.5"
          >
            <span>Quiero Trabajar con Loopa</span>
          </button>
        </div>
      </div>
    </div>
  );
}
