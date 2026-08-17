import { FileText, BarChart3, Mic, Clock } from 'lucide-react';
import { Seo } from './Seo';
import { Reveal } from './Reveal';

const RESOURCES = [
  {
    icon: FileText,
    label: 'Whitepapers',
    desc: 'Guías técnicas profundas sobre gobernanza de datos, RAG privado y arquitecturas de IA para LatAm.',
  },
  {
    icon: BarChart3,
    label: 'Reportes',
    desc: 'Estudios de mercado y benchmarks sectoriales sobre adopción de IA y madurez de datos en la región.',
  },
  {
    icon: Mic,
    label: 'Podcast',
    desc: 'Conversaciones con líderes de datos e IA sobre los retos reales de implementación en la región.',
  },
];

export function ResourcesView() {
  return (
    <div id="resources-view" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
      <Seo
        title="Recursos"
        description="Whitepapers, reportes y podcast de Loopa Technology sobre datos e inteligencia artificial para empresas en LatAm."
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
            Recursos
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contenido Descargable
          </h1>
          <p className="text-brand-lavender text-lg">
            Material técnico para directores de datos e IA en Latinoamérica. Próximamente disponible para descarga.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              id={`resource-card-${label.toLowerCase()}`}
              className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-navy border border-brand-navy/60 text-brand-coral">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{label}</h3>
                <p className="text-brand-lavender text-sm leading-relaxed">{desc}</p>
              </div>
              <span className="text-xs font-mono text-brand-cyan font-bold flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Próximamente</span>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
