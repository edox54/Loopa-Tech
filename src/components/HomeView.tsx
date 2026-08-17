import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Sparkles, Database, Cpu, Activity, Shield, 
  Zap, TrendingUp, Code2, Globe, Layers, Server, 
  Network, ChevronRight, Play, CheckCircle2, Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICES_DATA, CLIENTS_LOGOS, SUCCESS_CASES_DATA } from '../data';
import { Seo } from './Seo';
import { HeroTitle } from './HeroTitle';
import { Reveal } from './Reveal';
import { MediaPlaceholder } from './MediaPlaceholder';

const FloatingDataNodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-cyan/40 shadow-[0_0_10px_rgba(0,209,228,0.8)]"
            style={{ width: size, height: size, left: `${xStart}%`, top: `${yStart}%` }}
            animate={{
              y: [`0%`, `${Math.random() * 200 - 100}%`],
              x: [`0%`, `${Math.random() * 200 - 100}%`],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        );
      })}
    </div>
  );
};

const CyberLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2A38A" stopOpacity="0" />
          <stop offset="50%" stopColor="#00D1E4" stopOpacity="1" />
          <stop offset="100%" stopColor="#F2A38A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M -100,100 C 300,200 600,-100 1200,300"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M -100,500 C 400,300 800,700 1200,100"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </svg>
  );
};

export function HomeView() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Interactive Live Data Simulator State
  const [isInjecting, setIsInjecting] = useState(false);
  const [processedRows, setProcessedRows] = useState(140234);
  const [activeAnomalies, setActiveAnomalies] = useState(0);
  const [sysHealth, setSysHealth] = useState(99.9);

  const handleInjectData = () => {
    if (isInjecting) return;
    setIsInjecting(true);
    let count = 0;
    const interval = setInterval(() => {
      setProcessedRows(prev => prev + Math.floor(Math.random() * 500) + 100);
      setActiveAnomalies(prev => prev + (Math.random() > 0.7 ? 1 : 0));
      setSysHealth(prev => Math.max(92, prev - Math.random() * 0.5));
      count++;
      if (count > 20) {
        clearInterval(interval);
        setIsInjecting(false);
        // Recover health
        const recover = setInterval(() => {
          setSysHealth(prev => {
            if (prev >= 99.9) {
              clearInterval(recover);
              return 99.9;
            }
            return prev + 0.2;
          });
          setActiveAnomalies(prev => Math.max(0, prev - 1));
        }, 200);
      }
    }, 100);
  };

  return (
    <div className="bg-[#020408] min-h-screen text-white overflow-hidden selection:bg-brand-coral/30">
      <Seo
        title="Inicio"
        description="Loopa Technology: consultora de datos e IA de alta gama para empresas en LatAm. Rentabilización, gobernanza, social listening y analítica predictiva."
      />
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,228,0.05),transparent_50%)] pointer-events-none" />
      <FloatingDataNodes />
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 z-10">
        <CyberLines />
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center space-y-8"
        >
          {/* Dynamic Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-cyan/5 border border-brand-cyan/20 rounded-full px-4 py-2 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-widest uppercase">
              Loopa Data Engine • Online
            </span>
          </motion.div>

          {/* Hero Typography */}
          <div className="space-y-4 max-w-4xl relative">
            <motion.div 
              className="absolute -top-10 -left-10 w-32 h-32 bg-brand-coral/20 rounded-full blur-[60px] pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/20 rounded-full blur-[60px] pointer-events-none"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            
            <HeroTitle
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              lines={[
                <span className="text-white">Inteligencia</span>,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1E4] via-[#75E6F2] to-[#F2A38A] drop-shadow-[0_0_15px_rgba(0,209,228,0.3)]">
                  En Movimiento.
                </span>,
              ]}
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-[#8C9BBD] max-w-2xl mx-auto font-light"
            >
              {t('home.heroSubtitle')}
            </motion.p>
          </div>

          {/* Interactive Hero Actions */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <button
              onClick={() => {
                navigate('/datalab');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 rounded-full bg-brand-cyan text-[#020408] font-bold text-sm overflow-hidden flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,209,228,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:animate-shimmer" />
              <Activity className="w-4 h-4" />
              <span>Simular Engine en Vivo</span>
            </button>
            <button
              onClick={() => navigate('/contacto')}
              className="px-8 py-4 rounded-full bg-transparent border border-[#232A4A] text-white font-bold text-sm hover:bg-[#101424] hover:border-brand-coral/50 transition-all flex items-center space-x-2"
            >
              <span>Desplegar Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- INFINITE CLIENTS MARQUEE --- */}
      <section className="py-10 border-y border-[#101424] bg-[#05070D] relative z-20 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05070D] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05070D] to-transparent z-10" />
        
        <div className="flex w-[200%] md:w-[150%] animate-marquee items-center">
          {[...CLIENTS_LOGOS, ...CLIENTS_LOGOS].map((logo, idx) => (
            <div key={idx} className="w-48 mx-8 shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <span className="font-display font-black text-xl tracking-wider text-white">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- DEMO VIDEO --- */}
      <section className="py-24 relative z-20 bg-[#05070D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-2 text-brand-coral font-mono text-xs font-bold uppercase">
              <Play className="w-4 h-4" />
              <span>Loopa en 90 segundos</span>
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white">Míralo funcionando.</h2>
            <p className="text-[#8C9BBD] max-w-xl mx-auto">
              Un recorrido rápido por cómo Loopa conecta datos, IA y decisiones comerciales en tiempo real.
            </p>
          </div>
          <Reveal>
            <MediaPlaceholder ratio="16/9" kind="video" label="Video demo" className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* --- HIGH IMPACT INTERACTIVE DATA SIMULATOR --- */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Context */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-brand-coral font-mono text-xs font-bold uppercase">
                <Zap className="w-4 h-4" />
                <span>Rendimiento en Tiempo Real</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
                Ingesta de datos a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-[#FFD166]">velocidad luz.</span>
              </h2>
              <p className="text-[#8C9BBD] text-lg">
                Olvídate de procesos batch nocturnos. Inyecta millones de registros y observa cómo nuestra arquitectura limpia, procesa y predice en milisegundos. Pruébalo ahora.
              </p>
              
              <button
                onClick={handleInjectData}
                disabled={isInjecting}
                className={`mt-4 px-6 py-3 rounded-xl font-bold font-mono text-sm uppercase tracking-wider flex items-center space-x-2 transition-all ${
                  isInjecting 
                    ? 'bg-brand-coral/20 text-brand-coral border border-brand-coral/30 cursor-not-allowed'
                    : 'bg-brand-coral text-[#020408] hover:bg-[#FFD166] hover:shadow-[0_0_20px_rgba(242,163,138,0.4)] cursor-pointer'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>{isInjecting ? 'Procesando Carga...' : 'Inyectar 10k Registros'}</span>
              </button>
            </div>

            {/* Dashboard Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan/5 rounded-[2rem] blur-2xl transform rotate-3" />
              <div className="bg-[#0A0D18] border border-[#232A4A] rounded-[2rem] p-6 sm:p-8 relative shadow-2xl backdrop-blur-xl">
                
                <div className="flex justify-between items-center mb-8 border-b border-[#232A4A] pb-4">
                  <span className="text-xs font-mono text-[#8C9BBD] uppercase tracking-wider">Cluster Telemetry</span>
                  <div className="flex space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#05070D] p-4 rounded-2xl border border-[#141A2D]">
                    <span className="text-[10px] text-[#6C7A9C] font-mono uppercase block mb-1">Registros Procesados</span>
                    <span className="text-2xl font-display font-black text-white">{processedRows.toLocaleString()}</span>
                  </div>
                  <div className="bg-[#05070D] p-4 rounded-2xl border border-[#141A2D]">
                    <span className="text-[10px] text-[#6C7A9C] font-mono uppercase block mb-1">Salud del Sistema</span>
                    <span className={`text-2xl font-display font-black ${sysHealth < 98 ? 'text-brand-coral' : 'text-emerald-400'}`}>
                      {sysHealth.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Animated Chart Area */}
                <div className="bg-[#05070D] p-4 rounded-2xl border border-[#141A2D] h-40 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-[10px] text-[#6C7A9C] font-mono uppercase">Tráfico de Red</div>
                  <div className="absolute top-4 right-4 text-[10px] text-brand-coral font-mono uppercase">Anomalías: {activeAnomalies}</div>
                  
                  <div className="flex items-end space-x-1 sm:space-x-2 h-24 w-full">
                    {[...Array(20)].map((_, i) => {
                      // Generate random heights, spike if injecting
                      const baseHeight = Math.random() * 30 + 10;
                      const activeHeight = isInjecting ? Math.random() * 60 + 40 : baseHeight;
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: `${baseHeight}%` }}
                          animate={{ height: `${activeHeight}%` }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className={`w-full rounded-t-sm ${isInjecting && Math.random() > 0.8 ? 'bg-brand-coral' : 'bg-brand-cyan/60'}`}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* --- DYNAMIC SERVICES BENTO GRID --- */}
      <section className="py-24 relative z-20 bg-[#05070D]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#232A4A] to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl md:text-5xl font-black text-white">Capacidades Core</h2>
            <p className="text-[#8C9BBD] max-w-2xl mx-auto">Módulos de ingeniería especializados para dominar el ciclo de vida del dato corporativo.</p>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-[#0A0D18] border border-[#1A2138] hover:border-brand-cyan/50 rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[280px]"
                onClick={() => {
                  navigate(`/servicios/${service.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-cyan/0 group-hover:bg-brand-cyan/20 blur-3xl transition-colors duration-500 rounded-full" />
                
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#141A2D] flex items-center justify-center border border-[#232A4A] group-hover:border-brand-cyan/40 transition-colors">
                    {idx % 3 === 0 ? <Database className="w-6 h-6 text-brand-cyan" /> :
                     idx % 3 === 1 ? <Cpu className="w-6 h-6 text-brand-coral" /> :
                     <Shield className="w-6 h-6 text-[#FFD166]" />}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#8C9BBD] text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs font-mono font-bold text-[#6C7A9C] group-hover:text-white transition-colors relative z-10">
                  <span>EXPLORAR MÓDULO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- METRICS / PARALLAX DIVIDER --- */}
      <section className="py-32 relative overflow-hidden bg-brand-cyan text-[#020408]">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#020408]/10">
            <div className="space-y-2">
              <span className="block text-4xl md:text-6xl font-display font-black">99.9%</span>
              <span className="block text-sm font-bold uppercase tracking-widest">Uptime Garantizado</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-6xl font-display font-black">40x</span>
              <span className="block text-sm font-bold uppercase tracking-widest">Retorno de Inversión</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-6xl font-display font-black">0</span>
              <span className="block text-sm font-bold uppercase tracking-widest">Brechas de Datos</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-6xl font-display font-black">24/7</span>
              <span className="block text-sm font-bold uppercase tracking-widest">Monitoreo AI</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- TESTIMONIALS / SUCCESS CASES FLOATING --- */}
      <section className="py-24 bg-[#020408] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-display text-3xl md:text-5xl font-black text-white">Impacto Comprobado</h2>
              <p className="text-[#8C9BBD] text-lg">No hacemos pruebas de concepto eternas. Entregamos arquitecturas en producción que mueven la aguja financiera.</p>
            </div>
            <button 
              onClick={() => {
                navigate('/casos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-brand-cyan hover:text-white font-bold flex items-center space-x-2 transition-colors shrink-0"
            >
              <span>Ver todos los casos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUCCESS_CASES_DATA.slice(0, 2).map((kase, idx) => (
              <motion.div
                key={kase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                onClick={() => {
                  navigate(`/casos/${kase.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-[#0A0D18] border border-[#1A2138] rounded-[2rem] overflow-hidden cursor-pointer"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-coral/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="absolute bottom-6 left-6 z-20 space-y-2">
                    <span className="bg-brand-coral text-[#020408] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {kase.industry}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white max-w-sm leading-tight">
                      {kase.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 grid grid-cols-3 gap-4 border-t border-[#1A2138] bg-[#0A0D18]">
                  {kase.metrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-brand-cyan font-display font-bold text-xl block">{metric.value}</span>
                      <span className="text-[10px] font-mono text-[#8C9BBD] uppercase block leading-tight">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-coral/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-coral/20 rounded-full blur-[100px] pointer-events-none" />
        
        <Reveal className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white leading-tight">
            Listo para evolucionar <br/> tu infraestructura?
          </h2>
          <p className="text-xl text-[#8C9BBD]">
            Despliega inteligencia de datos soberana en tu propia nube en semanas, no en años.
          </p>
          <div className="pt-8">
            <button
              onClick={() => {
                navigate('/contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-10 py-5 rounded-full bg-white text-[#020408] font-black text-lg hover:scale-105 active:scale-95 transition-transform flex items-center space-x-3 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span>Iniciar Proyecto</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>
      </section>
      
    </div>
  );
}
