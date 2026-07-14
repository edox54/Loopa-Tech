import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Users, Target, Calendar, BarChart3, HelpCircle, Activity, Lightbulb, Check, TrendingUp, Cpu } from 'lucide-react';
import { SERVICES_DATA, SUCCESS_CASES_DATA } from '../data';
import { ActivePage, Service } from '../types';
import { ServiceIcon } from './ServiceIcon';

interface ServicesViewProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  setSelectedCaseId: (id: string) => void;
}

export function ServicesView({
  activePage,
  setActivePage,
  selectedServiceId,
  setSelectedServiceId,
  setSelectedCaseId,
}: ServicesViewProps) {
  const handleBackToServices = () => {
    setSelectedServiceId('');
    setActivePage('servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServiceDetail = (id: string) => {
    setSelectedServiceId(id);
    if (id === 'social-listening') {
      setActivePage('servicio-social-listening');
    } else if (id === 'implementacion-llm') {
      setActivePage('servicio-llm');
    } else {
      setSelectedServiceId(id);
      setActivePage('servicios');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setActivePage('caso-detalle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render index list of 6 services
  if (activePage === 'servicios' && !selectedServiceId) {
    return (
      <div id="services-index" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3 py-1 rounded-full">
              Catálogo de Capacidades
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ingeniería de Datos e Inteligencia Artificial Corporativa
            </h1>
            <p className="text-brand-lavender text-lg">
              Ofrecemos soluciones consultivas de alto nivel calibradas para el ecosistema empresarial de Latinoamérica.
            </p>
          </div>

          {/* 6 Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const hasDetailPage = service.id === 'social-listening' || service.id === 'implementacion-llm';
              return (
                <div
                  key={service.id}
                  id={`service-detail-card-${service.id}`}
                  className="bg-brand-carbon border border-brand-navy/60 hover:border-brand-coral/40 rounded-2xl p-8 flex flex-col justify-between hover:bg-brand-carbon/85 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleNavigateToServiceDetail(service.id)}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-navy border border-brand-navy/60 text-brand-coral group-hover:text-brand-cyan transition-colors">
                      <ServiceIcon name={service.iconName} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-coral transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-brand-lavender/40 text-xs font-mono mt-1">
                        {service.id === 'social-listening' || service.id === 'implementacion-llm' ? 'Detalle de Alta Fidelidad disponible' : 'Servicios de Consultoría'}
                      </p>
                    </div>
                    <p className="text-brand-lavender text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 text-xs text-brand-lavender pt-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-brand-navy/60 mt-8 flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-coral font-bold">
                      {hasDetailPage ? 'Ver Detalle del Servicio' : 'Solicitar Cotización'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-lavender/55 group-hover:text-brand-coral group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Info Section */}
          <div className="mt-20 bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Nuestro Proceso de Trabajo Ágil
                </h3>
                <p className="text-brand-lavender text-sm leading-relaxed">
                  Evitamos la burocracia tradicional de las consultoras multinacionales. Nos enfocamos en sprints rápidos de ingeniería orientados a obtener resultados medibles desde el primer mes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-carbon border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">Descubrimiento y Auditoría (Semanas 1-2)</h4>
                      <p className="text-brand-lavender/55 text-xs">Mapeamos sus orígenes de datos y flujos analíticos actuales sin costo de instalación.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-carbon border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">MVP Funcional en Sandbox (Semanas 3-6)</h4>
                      <p className="text-brand-lavender/55 text-xs">Calibramos el modelo predictivo o RAG con un dataset cerrado para verificar tasas de precisión.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-brand-carbon border border-brand-coral/35 text-brand-coral text-xs font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">Integración y Pase a Producción (Semana 8+)</h4>
                      <p className="text-brand-lavender/55 text-xs">Conectamos mediante APIs seguras a su infraestructura productiva (ERP, CRM, Cloud).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-navy/60 p-6 rounded-2xl border border-brand-navy/60 space-y-6">
                <h4 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-brand-coral" />
                  <span>¿Por qué Loopa?</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-brand-carbon/60 p-4 rounded-xl border border-brand-navy/60">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">Alineación</span>
                    <span className="text-white text-sm font-bold block mt-1">DAMA DMBOK</span>
                    <p className="text-brand-lavender/65 text-[11px] mt-1">Marcos internacionales de calidad y gobernanza.</p>
                  </div>
                  <div className="bg-brand-carbon/60 p-4 rounded-xl border border-brand-navy/60">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">Soberanía</span>
                    <span className="text-white text-sm font-bold block mt-1">IA 100% Privada</span>
                    <p className="text-brand-lavender/65 text-[11px] mt-1">Sus secretos comerciales nunca abandonan su nube.</p>
                  </div>
                  <div className="bg-brand-carbon/60 p-4 rounded-xl border border-brand-navy/60">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">Metodología</span>
                    <span className="text-white text-sm font-bold block mt-1">API-First</span>
                    <p className="text-brand-lavender/65 text-[11px] mt-1">Compatible con SAP, Salesforce, AWS y Google Cloud.</p>
                  </div>
                  <div className="bg-brand-carbon/60 p-4 rounded-xl border border-brand-navy/60">
                    <span className="text-brand-coral font-mono text-[10px] block font-bold uppercase tracking-wider">Ubicación</span>
                    <span className="text-white text-sm font-bold block mt-1">Talento LatAm</span>
                    <p className="text-brand-lavender/65 text-[11px] mt-1">Soporte inmediato en el mismo huso horario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SOCIAL LISTENING - Rich Detail Subpage
  if (activePage === 'servicio-social-listening' || selectedServiceId === 'social-listening') {
    const service = SERVICES_DATA.find((s) => s.id === 'social-listening')!;
    const relatedCase = SUCCESS_CASES_DATA.find((c) => c.id === 'social-listening-retail')!;

    return (
      <div id="service-detail-social" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Breadcrumb / Back button */}
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center space-x-2 text-brand-lavender/60 hover:text-brand-coral text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los servicios</span>
          </button>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-carbon">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-carbon border border-brand-coral/30 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4 text-brand-coral" />
                <span className="text-[11px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                  Foco Sectorial: Consumer & Brands
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-brand-lavender leading-relaxed">
                {service.longDesc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-brand-carbon border border-brand-navy/60 p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-brand-lavender/40 text-[10px] font-mono uppercase block">Métricas Promedio de Impacto</span>
                <div className="space-y-4 mt-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-brand-navy pb-2">
                      <span className="text-xs text-brand-lavender">{metric.split(' ').slice(1).join(' ')}</span>
                      <span className="text-base font-display font-bold text-brand-coral">{metric.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setActivePage('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm rounded-xl transition-all cursor-pointer text-center shadow-lg shadow-brand-coral/20"
              >
                Solicitar Cotización de NLP
              </button>
            </div>
          </div>

          {/* What includes & For Who */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
            {/* What includes */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                <span>¿Qué incluye esta línea de servicio?</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-brand-carbon/60 border border-brand-navy/60 rounded-xl p-4 flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0" />
                    <p className="text-brand-lavender text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience & Benefits */}
            <div className="space-y-8">
              <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <Users className="w-5 h-5 text-brand-cyan" />
                  <span>¿Para quién es esto?</span>
                </h3>
                <p className="text-brand-lavender text-sm leading-relaxed">
                  {service.forWho}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <Target className="w-5 h-5 text-brand-coral" />
                  <span>Beneficios Operativos</span>
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-brand-lavender bg-brand-carbon/30 px-4 py-3 border border-brand-navy/60 rounded-xl">
                      <Check className="w-4 h-4 text-brand-coral shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related success case banner */}
          <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono text-brand-coral uppercase tracking-widest">Caso de éxito relacionado</span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {relatedCase.title}
                </h3>
                <p className="text-brand-lavender text-sm leading-relaxed max-w-xl">
                  Descubra cómo implementamos este motor de NLP regional para {relatedCase.client} de modo que redujeran roturas de stock analizando jergas virales en redes sociales.
                </p>
                <div className="flex flex-wrap gap-6 pt-2">
                  {relatedCase.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="border-l border-brand-coral/40 pl-3">
                      <span className="text-xl font-display font-extrabold text-white block">{m.value}</span>
                      <span className="text-[10px] font-mono text-brand-lavender/50 uppercase tracking-wider">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <button
                  onClick={() => handleNavigateToCase(relatedCase.id)}
                  className="px-6 py-4 bg-brand-navy border border-brand-carbon hover:border-brand-coral/40 hover:text-white rounded-xl text-brand-coral text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Ver Caso de Estudio Completo</span>
                  <ArrowRight className="w-4 h-4 text-brand-coral" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // IMPLEMENTACIÓN DE LLMs - Rich Detail Subpage
  if (activePage === 'servicio-llm' || selectedServiceId === 'implementacion-llm') {
    const service = SERVICES_DATA.find((s) => s.id === 'implementacion-llm')!;
    const relatedCase = SUCCESS_CASES_DATA.find((c) => c.id === 'asistente-llm-energia')!;

    return (
      <div id="service-detail-llm" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Breadcrumb / Back button */}
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center space-x-2 text-brand-lavender/60 hover:text-brand-coral text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los servicios</span>
          </button>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-carbon">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-carbon border border-brand-coral/30 rounded-full px-3 py-1">
                <Cpu className="w-4 h-4 text-brand-coral" />
                <span className="text-[11px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                  Foco Sectorial: Enterprise & Productivity
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-brand-lavender leading-relaxed">
                {service.longDesc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-brand-carbon border border-brand-navy/60 p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-brand-lavender/40 text-[10px] font-mono uppercase block">Métricas Promedio de Impacto</span>
                <div className="space-y-4 mt-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-brand-navy pb-2">
                      <span className="text-xs text-brand-lavender">{metric.split(' ').slice(1).join(' ')}</span>
                      <span className="text-base font-display font-bold text-brand-coral">{metric.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setActivePage('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-gradient-to-r from-brand-coral to-brand-cyan hover:brightness-110 text-brand-navy font-bold text-sm rounded-xl transition-all cursor-pointer text-center shadow-lg shadow-brand-coral/20"
              >
                Solicitar Diagnóstico RAG Privado
              </button>
            </div>
          </div>

          {/* What includes & For Who */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
            {/* What includes */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-coral" />
                <span>¿Qué incluye esta línea de servicio?</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-brand-carbon/60 border border-brand-navy/60 rounded-xl p-4 flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0" />
                    <p className="text-brand-lavender text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience & Benefits */}
            <div className="space-y-8">
              <div className="bg-brand-carbon border border-brand-navy/60 rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <Users className="w-5 h-5 text-brand-cyan" />
                  <span>¿Para quién es esto?</span>
                </h3>
                <p className="text-brand-lavender text-sm leading-relaxed">
                  {service.forWho}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                  <Target className="w-5 h-5 text-brand-coral" />
                  <span>Beneficios de Negocio</span>
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-brand-lavender bg-brand-carbon/30 px-4 py-3 border border-brand-navy/60 rounded-xl">
                      <Check className="w-4 h-4 text-brand-coral shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* LLM Safety Checklist / Security infographic */}
          <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-white flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-brand-coral" />
              <span>Garantía de Seguridad de Datos Corporativos en IA</span>
            </h3>
            <p className="text-brand-lavender text-sm">
              Implementar IA de grado empresarial requiere controles estrictos de fuga de datos. Loopa Technology firma acuerdos NDA robustos y despliega arquitecturas que garantizan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-navy p-5 rounded-xl border border-brand-carbon/60">
                <h4 className="text-white text-sm font-bold mb-2">Aislamiento de Tenant</h4>
                <p className="text-brand-lavender/65 text-xs">Los vectores y documentos indexados residen en una instancia VPC dedicada para su empresa, sin comunicación con agentes externos.</p>
              </div>
              <div className="bg-brand-navy p-5 rounded-xl border border-brand-carbon/60">
                <h4 className="text-white text-sm font-bold mb-2">Cero Re-entrenamiento Externo</h4>
                <p className="text-brand-lavender/65 text-xs">Garantizamos por contrato de API que sus datos no serán procesados ni almacenados para entrenar modelos públicos comerciales.</p>
              </div>
              <div className="bg-brand-navy p-5 rounded-xl border border-brand-carbon/60">
                <h4 className="text-white text-sm font-bold mb-2">Filtros Anti-alucinación</h4>
                <p className="text-brand-lavender/65 text-xs">Nuestra capa middleware valida las respuestas contra hechos de la base vectorial, evitando respuestas engañosas u ofensivas.</p>
              </div>
            </div>
          </div>

          {/* Related success case banner */}
          <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono text-brand-coral uppercase tracking-widest">Caso de éxito relacionado</span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {relatedCase.title}
                </h3>
                <p className="text-brand-lavender text-sm leading-relaxed max-w-xl">
                  Descubra cómo implementamos un asistente experto con RAG privado para el personal en campo de {relatedCase.client}, reduciendo un 40% el tiempo de diagnóstico operacional.
                </p>
                <div className="flex flex-wrap gap-6 pt-2">
                  {relatedCase.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="border-l border-brand-coral/40 pl-3">
                      <span className="text-xl font-display font-extrabold text-white block">{m.value}</span>
                      <span className="text-[10px] font-mono text-brand-lavender/50 uppercase tracking-wider">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <button
                  onClick={() => handleNavigateToCase(relatedCase.id)}
                  className="px-6 py-4 bg-brand-navy border border-brand-carbon hover:border-brand-coral/40 hover:text-white rounded-xl text-brand-coral text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Ver Caso de Estudio Completo</span>
                  <ArrowRight className="w-4 h-4 text-brand-coral" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
