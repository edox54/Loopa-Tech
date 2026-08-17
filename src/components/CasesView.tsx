import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Calendar, Building2, HelpCircle, Activity } from 'lucide-react';
import { SUCCESS_CASES_DATA } from '../data';
import { Seo } from './Seo';
import { Reveal } from './Reveal';
import { MediaPlaceholder } from './MediaPlaceholder';

export function CasesView() {
  const navigate = useNavigate();
  const { id: selectedCaseId } = useParams<{ id: string }>();

  const handleBackToCases = () => {
    navigate('/casos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCase = (id: string) => {
    navigate(`/casos/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // List View of Cases
  if (!selectedCaseId) {
    return (
      <div id="cases-index" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <Seo
          title="Casos de Éxito"
          description="Casos de éxito reales de Loopa Technology: social listening, predicción de inventarios, consentimiento en blockchain e IA generativa en LatAm."
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              Casos de Estudio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ingeniería Aplicada con Impacto Medible
            </h1>
            <p className="text-brand-lavender text-lg">
              Conoce cómo diseñamos y desplegamos soluciones robustas para empresas líderes en sus sectores en Latinoamérica.
            </p>
          </Reveal>

          {/* Grid of 4 Cases */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SUCCESS_CASES_DATA.map((kase) => (
              <div
                key={kase.id}
                id={`case-index-card-${kase.id}`}
                className="bg-brand-carbon border border-brand-navy/60 hover:border-brand-coral/40 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-brand-carbon/95 transition-all duration-300 group cursor-pointer"
                onClick={() => handleSelectCase(kase.id)}
              >
                <MediaPlaceholder ratio="16/9" className="rounded-none border-x-0 border-t-0" />
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-lavender/60">
                    <span className="font-bold">{kase.industry}</span>
                    <span className="text-brand-coral bg-brand-navy/50 border border-brand-coral/20 px-2 py-0.5 rounded font-bold">
                      {kase.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-coral transition-colors leading-tight">
                    {kase.title}
                  </h3>
                  <p className="text-brand-lavender text-sm leading-relaxed line-clamp-3">
                    {kase.shortDesc}
                  </p>

                  {/* Quick metrics badges */}
                  <div className="grid grid-cols-3 gap-4 py-4 bg-brand-navy border border-brand-navy/40 rounded-xl px-4">
                    {kase.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <span className="text-base font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan block">
                          {metric.value}
                        </span>
                        <span className="text-[9px] font-mono text-brand-lavender/50 uppercase tracking-tight block font-bold mt-1">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-6 border-t border-brand-navy/40 mt-2 flex items-center justify-between text-xs">
                  <span className="text-brand-lavender/70">
                    Cliente: <span className="text-white font-bold">{kase.client}</span>
                  </span>
                  <span className="text-brand-cyan font-bold flex items-center space-x-1 hover:underline">
                    <span>Ver caso completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    );
  }

  // Case Detail View
  const kase = SUCCESS_CASES_DATA.find((c) => c.id === selectedCaseId) || SUCCESS_CASES_DATA[0];

  return (
      <div id="case-detail-page" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <Seo title={kase.title} description={kase.shortDesc} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Back button */}
          <button
            onClick={handleBackToCases}
            className="inline-flex items-center space-x-2 text-brand-lavender/70 hover:text-brand-cyan text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a casos de éxito</span>
          </button>

          {/* Hero details header */}
          <div className="space-y-6 pb-12 border-b border-brand-navy/40">
            <div className="flex flex-wrap gap-4 items-center text-xs font-mono">
              <span className="text-brand-coral bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full font-bold">
                {kase.tag}
              </span>
              <span className="text-brand-lavender/30">|</span>
              <span className="text-brand-lavender/80 font-bold">{kase.industry}</span>
              <span className="text-brand-lavender/30">|</span>
              <span className="text-brand-lavender/60">Publicado: {kase.date}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {kase.title}
            </h1>
            <p className="text-lg text-brand-lavender leading-relaxed">
              {kase.shortDesc}
            </p>
          </div>

          <MediaPlaceholder ratio="21/9" label="Imagen destacada del caso" className="w-full" />

          {/* Metrics Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kase.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-6 text-center space-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-coral/5 rounded-full blur-xl animate-pulse" />
                <span className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan block">
                  {metric.value}
                </span>
                <span className="font-mono text-xs font-bold text-white block uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge, Solution & Results */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-coral rounded-full" />
                  <span>El Desafío Comercial</span>
                </h2>
                <p className="text-brand-lavender text-sm leading-relaxed">
                  {kase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
                  <span>Nuestra Solución Tecnológica</span>
                </h2>
                <p className="text-brand-lavender text-sm leading-relaxed">
                  {kase.solution}
                </p>
              </div>

              {/* Results List */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-white flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span>Resultados Obtenidos</span>
                </h2>
                <ul className="space-y-3">
                  {kase.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-brand-lavender text-sm bg-brand-carbon/40 border border-brand-navy/60 rounded-xl px-4 py-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar info card */}
            <div className="space-y-6">
              <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-6 space-y-6">
                <h3 className="font-display text-lg font-bold text-white pb-3 border-b border-brand-navy/40">
                  Ficha del Proyecto
                </h3>
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-brand-lavender/40 block uppercase font-bold">CLIENTE</span>
                    <span className="text-white text-sm font-bold">{kase.client}</span>
                  </div>
                  <div>
                    <span className="text-brand-lavender/40 block uppercase font-bold">INDUSTRIA</span>
                    <span className="text-white text-sm font-bold">{kase.industry}</span>
                  </div>
                  <div>
                    <span className="text-brand-lavender/40 block uppercase font-bold">TECNOLOGÍAS</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="bg-brand-navy border border-brand-navy/40 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">NLP</span>
                      <span className="bg-brand-navy border border-brand-navy/40 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">Machine Learning</span>
                      <span className="bg-brand-navy border border-brand-navy/40 px-2.5 py-1 rounded text-[10px] text-brand-cyan font-bold">API Gateway</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-brand-lavender/40 block uppercase font-bold">PLAZO DE ENTREGA</span>
                    <span className="text-white text-sm font-bold">10 Semanas</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Quote */}
              <div className="bg-brand-carbon border border-brand-coral/25 rounded-2xl p-6 space-y-4">
                <p className="text-brand-lavender/90 text-xs italic leading-relaxed">
                  "La velocidad de respuesta de Loopa nos permitió tomar la delantera en una temporada altamente competitiva. Es el primer proyecto analítico que entrega ROI en 90 días."
                </p>
                <div>
                  <span className="text-white text-xs font-bold block">Gerente General de Abastecimiento</span>
                  <span className="text-brand-coral text-[10px] block font-bold">{kase.client}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-8 text-center space-y-4 mt-12">
            <h3 className="font-display text-xl font-bold text-white">¿Tu empresa enfrenta desafíos similares?</h3>
            <p className="text-brand-lavender text-sm max-w-xl mx-auto">
              Nuestros ingenieros analizan tu infraestructura analítica actual y diseñan un plan a medida sin compromiso.
            </p>
            <button
              onClick={() => {
                navigate('/contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold rounded-xl text-sm transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg shadow-brand-coral/15"
            >
              <span>Conversar con un Ingeniero</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
}
