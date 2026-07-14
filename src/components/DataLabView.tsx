import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Cpu, Database, Server, Settings, Terminal, TrendingUp, DollarSign, Activity, Zap, CheckCircle2, Award, ChevronRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DataLabViewProps {
  setActivePage: (page: any) => void;
}

type PipelineTemplate = 'rag' | 'predictive' | 'governance';

export function DataLabView({ setActivePage }: DataLabViewProps) {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'roi'>('pipeline');
  
  // Pipeline Simulator States
  const [selectedTemplate, setSelectedTemplate] = useState<PipelineTemplate>('rag');
  const [isRunning, setIsRunning] = useState(false);
  const [dataVolume, setDataVolume] = useState<number>(1200); // rows/sec
  const [nodeCount, setNodeCount] = useState<number>(8); // nodes
  const [modelPrecision, setModelPrecision] = useState<number>(94); // percentage
  
  // Simulation Metrics State
  const [throughput, setThroughput] = useState<number[]>(Array(10).fill(0));
  const [latency, setLatency] = useState<number>(45);
  const [threatCount, setThreatCount] = useState<number>(0);
  const [costSaved, setCostSaved] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    '👾 LOOPA DATA LAB - Inicializando consola de pipeline...',
    '💡 Selecciona una plantilla técnica arriba y haz clic en "Ejecutar Pipeline" para iniciar.',
  ]);

  const [activeStep, setActiveStep] = useState<number>(-1);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // ROI Predictor States
  const [monthlyOpCost, setMonthlyOpCost] = useState<number>(12000); // USD
  const [lostHours, setLostHours] = useState<number>(24); // hours/week
  const [errorRate, setErrorRate] = useState<number>(18); // percentage

  // Templates details
  const templatesInfo = {
    rag: {
      title: 'RAG Semántico & LLM Privado',
      desc: 'Ingesta de documentos corporativos, tokenización, análisis de embeddings locales y enrutamiento inteligente hacia un LLM privado en tu propia nube.',
      nodes: ['S3/Drive', 'NLP Tokenizer', 'Anonymizer', 'Postgres Vector', 'LLM Gateway'],
    },
    predictive: {
      title: 'Motor Predictivo de Demanda',
      desc: 'Procesamiento en tiempo real de transacciones de ventas y stock para entrenar un modelo estacional autorregresivo que predice rupturas de stock.',
      nodes: ['ERP/APIs', 'Data Cleanse', 'Feature Store', 'PyTorch Node', 'Sugerido Compra'],
    },
    governance: {
      title: 'Linaje & Calidad de Datos (DAMA)',
      desc: 'Validación automatizada de esquemas, trazabilidad de procedencia, enmascaramiento de datos personales y firmado criptográfico inmutable.',
      nodes: ['APIs Externas', 'DAMA Validator', 'Masking Engine', 'Lineage Ledger', 'Gold Warehouse'],
    },
  };

  // Auto-scroll logs terminal
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Run Interval for Pipeline Simulation
  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      // Initialize pipeline logs on start
      setLogs((prev) => [
        ...prev,
        `🚀 [${new Date().toLocaleTimeString()}] INICIANDO PIPELINE: ${templatesInfo[selectedTemplate].title}`,
        `🔧 Configuración: Volumen=${dataVolume} reg/s | Nodos=${nodeCount} | Precisión=${modelPrecision}%`,
        `⚙️ Conectando con los nodos del clúster analítico de Loopa...`
      ]);

      interval = setInterval(() => {
        // Update Throughput chart data
        setThroughput((prev) => {
          const next = [...prev.slice(1)];
          // Base calculation influenced by input variables
          const variation = (Math.random() - 0.45) * 150;
          const value = Math.max(200, Math.round(dataVolume * (nodeCount / 8) + variation));
          next.push(value);
          return next;
        });

        // Update other real-time metrics
        const baseLatency = Math.round(60 - (nodeCount * 3.2) + (dataVolume / 300));
        setLatency(Math.max(12, baseLatency + Math.floor((Math.random() - 0.5) * 8)));
        setThreatCount((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
        setCostSaved((prev) => prev + Math.round((dataVolume * 0.00015) * (modelPrecision / 100) * 10) / 10);

        // Advance active step animation (0 to 4 cyclic)
        setActiveStep((prev) => {
          const nextStep = (prev + 1) % 5;
          
          // Generate a context-appropriate log
          const nodeName = templatesInfo[selectedTemplate].nodes[nextStep];
          const timestamp = new Date().toLocaleTimeString();
          const logMessages = {
            rag: [
              `📥 [${timestamp}] [${nodeName}] Extrayendo registros y PDFs no estructurados...`,
              `🧠 [${timestamp}] [${nodeName}] Procesando tokens y parseando jerga regional.`,
              `🔒 [${timestamp}] [${nodeName}] Enmascarando nombres y datos sensibles de clientes (Habeas Data).`,
              `📦 [${timestamp}] [${nodeName}] Indexando embeddings vectoriales de 1536d en el índice local.`,
              `✨ [${timestamp}] [${nodeName}] Respuesta generada de forma local con total privacidad. Latencia OK.`
            ],
            predictive: [
              `📥 [${timestamp}] [${nodeName}] Ingestando transacciones históricas desde endpoints ERP...`,
              `🧼 [${timestamp}] [${nodeName}] Limpiando nulos y detectando anomalías estacionales.`,
              `🧬 [${timestamp}] [${nodeName}] Actualizando Feature Store con variables temporales agregadas.`,
              `🤖 [${timestamp}] [${nodeName}] Re-entrenando modelo con regresor adaptativo local.`,
              `📈 [${timestamp}] [${nodeName}] Predicción de inventario guardada. Eficiencia de stock: +22%.`
            ],
            governance: [
              `📥 [${timestamp}] [${nodeName}] Escuchando eventos Kafka para auditoría de esquemas...`,
              `🛡️ [${timestamp}] [${nodeName}] Comprobando integridad estructural contra estándares CDMP DAMA.`,
              `🕶️ [${timestamp}] [${nodeName}] Anonimizando identificadores biométricos y financieros.`,
              `📜 [${timestamp}] [${nodeName}] Registrando procedencia en el grafo inmutable de metadatos.`,
              `🏆 [${timestamp}] [${nodeName}] Carga final de datos limpios exitosa. Trazabilidad: 100%.`
            ]
          };

          setLogs((logsPrev) => {
            const newLog = logMessages[selectedTemplate][nextStep];
            // Limit log list size to prevent layout breaking
            if (logsPrev.length > 30) {
              return [...logsPrev.slice(10), newLog];
            }
            return [...logsPrev, newLog];
          });

          return nextStep;
        });

      }, 1200);
    } else {
      setActiveStep(-1);
    }

    return () => clearInterval(interval);
  }, [isRunning, selectedTemplate, dataVolume, nodeCount, modelPrecision]);

  // Reset Pipeline
  const handleResetPipeline = () => {
    setIsRunning(false);
    setThroughput(Array(10).fill(0));
    setLatency(45);
    setThreatCount(0);
    setCostSaved(0);
    setActiveStep(-1);
    setLogs([
      '♻️ Consola reestablecida. Listo para iniciar nueva simulación.',
      '💡 Ajusta los controles de la izquierda para cambiar el volumen, nodos o precisión del modelo.'
    ]);
  };

  // ROI Calculator Math
  const computeROI = () => {
    // Current Estimated Cost (manual labor + inefficiencies)
    // lostHours/week * 4.3 weeks/month * $35 average engineering hourly rate + inventory losses/operational waste
    const laborCostMonthly = lostHours * 4.3 * 35;
    const errorInflowLoss = monthlyOpCost * (errorRate / 100);
    const totalCurrentMonthlyCost = laborCostMonthly + errorInflowLoss;

    // Loopa automation cost (saving hours by 85% and error rates by 70%)
    const hoursSavedRate = 0.85;
    const errorReductionRate = 0.70;

    const remainingLaborCost = laborCostMonthly * (1 - hoursSavedRate);
    const remainingErrorLoss = errorInflowLoss * (1 - errorReductionRate);
    
    // License/maintenance with Loopa is small compared to manual waste
    const loopaMonthlyTechCost = monthlyOpCost * 0.15 + 1500; 
    const totalWithLoopaCost = remainingLaborCost + remainingErrorLoss + loopaMonthlyTechCost;

    const monthlySavings = Math.max(0, totalCurrentMonthlyCost - totalWithLoopaCost);
    const annualSavings = monthlySavings * 12;

    // Estimated implementation investment
    const initialInvestment = Math.max(12000, monthlyOpCost * 1.5 + 8000);
    const daysToROI = monthlySavings > 0 ? Math.round((initialInvestment / monthlySavings) * 30) : 180;

    return {
      currentMonthly: Math.round(totalCurrentMonthlyCost),
      loopaMonthly: Math.round(totalWithLoopaCost),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      recoveredHours: Math.round(lostHours * 4.3 * hoursSavedRate),
      roiDays: Math.min(365, Math.max(45, daysToROI)),
      currentErrorCost: Math.round(errorInflowLoss),
      loopaErrorCost: Math.round(remainingErrorLoss),
    };
  };

  const roiMetrics = computeROI();

  // Helper to draw SVG line chart path
  const getLinePath = (data: number[]) => {
    const maxVal = Math.max(5000, ...data, 1);
    const width = 500;
    const height = 140;
    const padding = 10;
    
    const points = data.map((val, idx) => {
      const x = padding + (idx * (width - padding * 2)) / (data.length - 1);
      const y = height - padding - (val * (height - padding * 2)) / maxVal;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  // Helper to draw SVG area path under the line
  const getAreaPath = (data: number[]) => {
    const maxVal = Math.max(5000, ...data, 1);
    const width = 500;
    const height = 140;
    const padding = 10;
    
    const points = data.map((val, idx) => {
      const x = padding + (idx * (width - padding * 2)) / (data.length - 1);
      const y = height - padding - (val * (height - padding * 2)) / maxVal;
      return `${x},${y}`;
    });

    if (points.length === 0) return '';
    return `M ${padding},${height - padding} L ${points.join(' L ')} L ${width - padding},${height - padding} Z`;
  };

  return (
    <div id="data-lab-view" className="bg-brand-navy text-brand-lavender min-h-screen pt-32 pb-24 font-sans relative overflow-x-hidden">
      {/* Background visual effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none radial-glow z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Lab Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-coral font-mono text-xs font-bold uppercase tracking-widest bg-brand-carbon border border-brand-coral/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-brand-coral animate-pulse" />
            Loopa Lab Interactivo
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
            Simula e Impacta tus Datos en Vivo
          </h1>
          <p className="text-brand-lavender text-lg max-w-2xl mx-auto">
            Experimenta de primera mano la ingeniería de Loopa. Diseña tu pipeline analítico en tiempo real o predice el retorno de inversión (ROI) financiero de tu próximo sistema de datos.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center">
          <div className="bg-brand-carbon/60 p-1.5 rounded-2xl border border-brand-navy/60 flex space-x-2">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-6 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'pipeline'
                  ? 'bg-gradient-to-r from-brand-coral to-brand-cyan text-brand-navy shadow-lg font-extrabold'
                  : 'text-brand-lavender hover:text-white hover:bg-brand-carbon'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Simulador de Pipeline de Datos</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`px-6 py-3 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'roi'
                  ? 'bg-gradient-to-r from-brand-coral to-brand-cyan text-brand-navy shadow-lg font-extrabold'
                  : 'text-brand-lavender hover:text-white hover:bg-brand-carbon'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Calculadora de Impacto & ROI</span>
            </button>
          </div>
        </div>

        {/* Tab contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'pipeline' ? (
            <motion.div
              key="pipeline-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Controls Column (left 4 columns) */}
              <div className="lg:col-span-4 bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-6 md:p-8 space-y-8 backdrop-blur-sm">
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white">Configuración del Laboratorio</h3>
                  <p className="text-brand-lavender/70 text-xs">Ajusta las variables de entrada para ver cómo responden la latencia y la tasa de procesamiento.</p>
                </div>

                {/* Pipeline template picker */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-brand-coral uppercase tracking-wider block">1. Plantilla Analítica</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {(Object.keys(templatesInfo) as PipelineTemplate[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedTemplate(key);
                          handleResetPipeline();
                        }}
                        className={`w-full p-3.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between group cursor-pointer ${
                          selectedTemplate === key
                            ? 'bg-brand-navy border-brand-coral text-white'
                            : 'bg-brand-navy/40 border-brand-navy/60 text-brand-lavender/80 hover:border-brand-coral/40'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="font-bold text-sm block text-white group-hover:text-brand-coral transition-colors">
                            {templatesInfo[key].title}
                          </span>
                          <span className="text-[11px] text-brand-lavender/60 block line-clamp-1">
                            {templatesInfo[key].desc}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-brand-coral shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-6">
                  <span className="text-xs font-mono font-bold text-brand-coral uppercase tracking-wider block">2. Carga & Clúster</span>
                  
                  {/* Slider 1: Data Volume */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Carga Ingestión:</span>
                      <span className="text-white font-bold">{dataVolume.toLocaleString()} reg/s</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="100"
                      value={dataVolume}
                      onChange={(e) => setDataVolume(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50">
                      <span>Batch Pequeño</span>
                      <span>Big Data LatAm</span>
                    </div>
                  </div>

                  {/* Slider 2: Node Count */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Nodos de Cómputo:</span>
                      <span className="text-white font-bold">{nodeCount} {nodeCount === 1 ? 'nodo' : 'nodos'}</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="32"
                      step="2"
                      value={nodeCount}
                      onChange={(e) => setNodeCount(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50">
                      <span>Instancia Dev</span>
                      <span>Clúster Distribuido</span>
                    </div>
                  </div>

                  {/* Slider 3: Model Precision */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Precisión Solicitada:</span>
                      <span className="text-white font-bold">{modelPrecision}%</span>
                    </div>
                    <input
                      type="range"
                      min="80"
                      max="99"
                      step="1"
                      value={modelPrecision}
                      onChange={(e) => setModelPrecision(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50">
                      <span>Rápido (Draft)</span>
                      <span>Élite (CDMP / Sin Alucinaciones)</span>
                    </div>
                  </div>
                </div>

                {/* Simulation controls */}
                <div className="pt-4 border-t border-brand-navy flex gap-3">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`flex-1 py-3.5 rounded-xl text-xs font-bold font-mono tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      isRunning
                        ? 'bg-amber-500 text-brand-navy hover:bg-amber-400 font-extrabold shadow-lg shadow-amber-500/20'
                        : 'bg-gradient-to-r from-brand-coral to-brand-cyan text-brand-navy hover:brightness-110 font-extrabold shadow-lg shadow-brand-coral/20'
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <Pause className="w-4 h-4 shrink-0 fill-current" />
                        <span>PAUSAR PIPELINE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 shrink-0 fill-current" />
                        <span>EJECUTAR PIPELINE</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleResetPipeline}
                    className="p-3.5 bg-brand-navy text-brand-lavender hover:text-white border border-brand-navy/60 rounded-xl transition-all hover:border-brand-coral/30 cursor-pointer"
                    title="Reiniciar Simulación"
                  >
                    <RefreshCw className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>

              {/* Simulation Visuals & Chart Area (right 8 columns) */}
              <div className="lg:col-span-8 space-y-6">
                {/* 1. Animated Node Pipeline Flow */}
                <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-brand-coral font-bold uppercase tracking-wider block">Visualizador de Linaje de Datos</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isRunning ? 'bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 animate-pulse' : 'bg-brand-navy border border-brand-navy/60 text-brand-lavender/50'
                    }`}>
                      {isRunning ? '● EN PROCESO' : '○ ESPERANDO INICIO'}
                    </span>
                  </div>

                  {/* Flowchart SVG Grid */}
                  <div className="relative w-full h-32 flex items-center justify-between px-2 overflow-x-auto min-w-[500px]">
                    
                    {/* SVG Connector lines with running dashed stroke */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F2A38A" />
                          <stop offset="100%" stopColor="#00D1E4" />
                        </linearGradient>
                      </defs>
                      
                      {/* Standard Connector Line Paths */}
                      <path d="M 50,64 L 140,64" stroke="#101a2e" strokeWidth="3" />
                      <path d="M 140,64 L 250,64" stroke="#101a2e" strokeWidth="3" />
                      <path d="M 250,64 L 360,64" stroke="#101a2e" strokeWidth="3" />
                      <path d="M 360,64 L 470,64" stroke="#101a2e" strokeWidth="3" />

                      {/* Animated Packets Line Overlays when pipeline is running */}
                      {isRunning && (
                        <>
                          <path
                            d="M 50,64 L 470,64"
                            stroke="url(#flowGrad)"
                            strokeWidth="3"
                            strokeDasharray="12, 12"
                            className="animate-[dash_10s_linear_infinite]"
                          />
                        </>
                      )}
                    </svg>

                    {/* Nodes Loop */}
                    {templatesInfo[selectedTemplate].nodes.map((nodeName, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center space-y-2 relative z-10 w-24"
                        >
                          {/* Node Capsule */}
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 relative ${
                              isActive
                                ? 'bg-brand-navy border-brand-coral scale-110 shadow-[0_0_15px_rgba(242,163,138,0.4)] text-brand-coral'
                                : isRunning && activeStep > idx
                                ? 'bg-brand-navy border-brand-cyan/60 text-brand-cyan shadow-[0_0_10px_rgba(0,209,228,0.15)]'
                                : 'bg-brand-navy border-brand-navy/60 text-brand-lavender/40'
                            }`}
                          >
                            {idx === 0 && <Database className="w-5 h-5" />}
                            {idx === 1 && <Cpu className="w-5 h-5" />}
                            {idx === 2 && <Settings className="w-5 h-5" />}
                            {idx === 3 && <Server className="w-5 h-5" />}
                            {idx === 4 && <Award className="w-5 h-5" />}

                            {/* Ping animation overlay */}
                            {isActive && (
                              <span className="absolute inset-0 rounded-full border border-brand-coral animate-ping opacity-60" />
                            )}
                          </div>
                          
                          {/* Node Text Label */}
                          <span className={`text-[10px] font-mono text-center block font-bold truncate max-w-full ${
                            isActive ? 'text-white' : 'text-brand-lavender/50'
                          }`}>
                            {nodeName}
                          </span>
                          <span className="text-[8px] font-mono text-brand-lavender/30 uppercase block">Paso {idx+1}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Real-Time Analytics Cards & Live Chart */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Performance stats (4 columns) */}
                  <div className="md:col-span-4 grid grid-cols-1 gap-4">
                    {/* Latency */}
                    <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-4 flex items-center space-x-3.5 relative">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-cyan">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-lavender/50 uppercase block font-semibold">Latencia Total</span>
                        <span className="text-xl font-display font-black text-white block">
                          {isRunning ? `${latency} ms` : '0 ms'}
                        </span>
                      </div>
                    </div>

                    {/* Threat / Schema anomalies pre-blocked */}
                    <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-4 flex items-center space-x-3.5 relative">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-lavender/50 uppercase block font-semibold">Anomalías Bloqueadas</span>
                        <span className="text-xl font-display font-black text-white block">
                          {isRunning ? threatCount : 0}
                        </span>
                      </div>
                    </div>

                    {/* Virtual ROI / Cost Reduction */}
                    <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-4 flex items-center space-x-3.5 relative">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-navy/60 flex items-center justify-center text-brand-coral">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-lavender/50 uppercase block font-semibold">Ahorro Computacional</span>
                        <span className="text-xl font-display font-black text-brand-coral block">
                          {isRunning ? `$${costSaved.toFixed(1)} USD` : '$0.0 USD'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Line Chart (8 columns) */}
                  <div className="md:col-span-8 bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-6 relative flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-brand-coral font-bold uppercase tracking-wider">Historial de Procesamiento (reg/s)</span>
                      <span className="text-[10px] font-mono text-brand-cyan font-bold">Rango: 0 - {Math.max(5000, ...throughput).toLocaleString()}</span>
                    </div>

                    {/* Render Custom SVG line chart */}
                    <div className="w-full h-36 bg-brand-navy/40 border border-brand-navy/60 rounded-xl relative overflow-hidden p-2 flex items-center justify-center">
                      <svg viewBox="0 0 500 140" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F2A38A" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#F2A38A" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="chartLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F2A38A" />
                            <stop offset="100%" stopColor="#00D1E4" />
                          </linearGradient>
                        </defs>
                        
                        {/* Horizontal Grid lines */}
                        <line x1="0" y1="35" x2="500" y2="35" stroke="#101a2e" strokeWidth="1" strokeDasharray="5,5" />
                        <line x1="0" y1="70" x2="500" y2="70" stroke="#101a2e" strokeWidth="1" strokeDasharray="5,5" />
                        <line x1="0" y1="105" x2="500" y2="105" stroke="#101a2e" strokeWidth="1" strokeDasharray="5,5" />

                        {/* Area Fill */}
                        {isRunning && (
                          <path
                            d={getAreaPath(throughput)}
                            fill="url(#areaGrad)"
                            className="transition-all duration-1000"
                          />
                        )}

                        {/* Line Plot */}
                        {isRunning && (
                          <path
                            d={getLinePath(throughput)}
                            fill="none"
                            stroke="url(#chartLineGrad)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                        )}

                        {/* Point Circles on points */}
                        {isRunning && throughput.map((val, idx) => {
                          const maxVal = Math.max(5000, ...throughput, 1);
                          const x = 10 + (idx * 480) / (throughput.length - 1);
                          const y = 140 - 10 - (val * 120) / maxVal;
                          return (
                            <circle
                              key={idx}
                              cx={x}
                              cy={y}
                              r="4.5"
                              className="fill-brand-navy stroke-brand-cyan stroke-[2.5]"
                            />
                          );
                        })}

                        {!isRunning && (
                          <text x="250" y="70" textAnchor="middle" className="fill-brand-lavender/30 text-[11px] font-mono font-semibold">
                            Simulación en pausa. Sin datos en tiempo real.
                          </text>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 3. Simulated Terminal Logs */}
                <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl overflow-hidden shadow-xl">
                  {/* Terminal Header */}
                  <div className="bg-brand-navy px-5 py-3 border-b border-brand-navy/80 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-brand-coral" />
                      <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">Log del Clúster · console.loopa.sh</span>
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-lavender/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-lavender/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-lavender/30" />
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 h-44 overflow-y-auto font-mono text-[11px] space-y-1.5 bg-slate-950 text-emerald-400 leading-relaxed scrollbar-thin">
                    {logs.map((log, idx) => (
                      <div key={idx} className="transition-all duration-300">
                        {log.startsWith('🚀') || log.startsWith('👾') || log.startsWith('♻️') ? (
                          <span className="text-brand-coral font-bold">{log}</span>
                        ) : log.includes('[SUCCESS]') || log.includes('Trazabilidad:') || log.includes('Eficiencia') || log.includes('Latencia OK') ? (
                          <span className="text-brand-cyan font-bold">{log}</span>
                        ) : log.startsWith('💡') || log.startsWith('🔧') ? (
                          <span className="text-brand-lavender/60">{log}</span>
                        ) : (
                          <span>{log}</span>
                        )}
                      </div>
                    ))}
                    <div ref={logsEndRef} />
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="roi-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* ROI Input Sliders (left 5 columns) */}
              <div className="lg:col-span-5 bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-6 md:p-8 space-y-8 backdrop-blur-sm">
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white">Métricas de Ineficiencia de tu Empresa</h3>
                  <p className="text-brand-lavender/70 text-xs">Ingresa las estimaciones actuales de tu negocio para predecir el impacto y retorno económico que te daría Loopa.</p>
                </div>

                <div className="space-y-6">
                  {/* Input 1: Monthly operational cost on data/cloud infrastructure */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Presupuesto TI/Nube Mensual:</span>
                      <span className="text-white font-bold">${monthlyOpCost.toLocaleString()} USD</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="100000"
                      step="2000"
                      value={monthlyOpCost}
                      onChange={(e) => setMonthlyOpCost(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50 font-semibold">
                      <span>$2K USD</span>
                      <span>$100K USD</span>
                    </div>
                  </div>

                  {/* Input 2: Engineering hours lost on manual reports/building pipelines */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Horas manuales perdidas/semana:</span>
                      <span className="text-white font-bold">{lostHours} horas</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="80"
                      step="2"
                      value={lostHours}
                      onChange={(e) => setLostHours(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50 font-semibold">
                      <span>4 horas</span>
                      <span>80 horas</span>
                    </div>
                  </div>

                  {/* Input 3: Stockout or operational data errors % */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs font-mono text-brand-lavender">
                      <span>Tasa de error/fallas de demanda:</span>
                      <span className="text-white font-bold">{errorRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="45"
                      step="1"
                      value={errorRate}
                      onChange={(e) => setErrorRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-navy rounded-lg appearance-none cursor-pointer accent-brand-coral"
                    />
                    <div className="flex justify-between text-[10px] text-brand-lavender/50 font-semibold">
                      <span>2% (Excelente)</span>
                      <span>45% (Catastrófico)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-brand-navy border border-brand-navy/60 rounded-2xl space-y-3">
                  <div className="flex items-center space-x-2 text-brand-coral">
                    <Award className="w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">ESTÁNDAR CDMP DAMA DE LOOPA</span>
                  </div>
                  <p className="text-brand-lavender/80 text-xs leading-relaxed">
                    Nuestras integraciones reducen el desperdicio de ingeniería en un 85% al automatizar la recolección, limpieza y linaje de datos de forma robusta, premitiendo una toma de decisiones 4x más ágil.
                  </p>
                </div>
              </div>

              {/* ROI Output visuals & Bar Charts (right 7 columns) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Visual Impact Dashboard Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* ROI Indicator */}
                  <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-5 text-center space-y-2 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-coral/5 rounded-full blur-xl animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-lavender/50 block uppercase font-bold tracking-wider">RETORNO INVERSIÓN (ROI)</span>
                    <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-cyan block">
                      ~{roiMetrics.roiDays} días
                    </span>
                    <span className="text-[10px] text-brand-lavender/60 block leading-tight">Plazo promedio para recuperar la inversión inicial.</span>
                  </div>

                  {/* Monthly Saved Hours */}
                  <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-5 text-center space-y-2 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan/5 rounded-full blur-xl animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-lavender/50 block uppercase font-bold tracking-wider">HORAS RECUPERADAS</span>
                    <span className="text-2xl font-display font-black text-white block">
                      {roiMetrics.recoveredHours} hrs/mes
                    </span>
                    <span className="text-[10px] text-brand-lavender/60 block leading-tight">Ingeniería que deja de hacer reportes manuales repetitivos.</span>
                  </div>

                  {/* Annual Saved USD */}
                  <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-2xl p-5 text-center space-y-2 relative overflow-hidden flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-brand-lavender/50 block uppercase font-bold tracking-wider">AHORRO ANUAL ESTIMADO</span>
                    <span className="text-2xl font-display font-black text-brand-coral block">
                      ${roiMetrics.annualSavings.toLocaleString()} USD
                    </span>
                    <span className="text-[10px] text-brand-lavender/60 block leading-tight">Ahorro combinado de tiempo y reducción de pérdidas por error.</span>
                  </div>
                </div>

                {/* Double Bar Chart comparing "Actual" vs "Con Loopa" */}
                <div className="bg-brand-carbon/50 border border-brand-navy/60 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-coral font-bold uppercase tracking-wider block">Impacto Financiero de la Optimización</span>
                    <span className="text-[10px] font-mono text-brand-lavender/50 font-bold block">COSTOS EXPRESADOS EN USD/MES</span>
                  </div>

                  {/* Render Custom SVG Bar Chart */}
                  <div className="w-full h-56 bg-brand-navy/40 border border-brand-navy/60 rounded-xl relative p-4 flex flex-col justify-between">
                    
                    <div className="flex-1 flex items-end justify-around space-x-12 pt-6 pb-2">
                      {/* Bar 1: Current Inefficiency cost */}
                      <div className="flex flex-col items-center space-y-2 w-28 group">
                        <span className="text-xs font-mono text-brand-lavender/80 font-bold">${roiMetrics.currentMonthly.toLocaleString()}</span>
                        
                        {/* Bar Segment */}
                        <div className="w-12 bg-slate-700 border border-slate-600 rounded-t-lg transition-all duration-500 hover:brightness-110 shadow-lg"
                             style={{ height: `${Math.min(100, Math.max(20, (roiMetrics.currentMonthly / Math.max(1, roiMetrics.currentMonthly + roiMetrics.loopaMonthly)) * 140))}px` }} />
                        
                        <span className="text-[10px] font-mono font-bold text-brand-lavender/40 uppercase tracking-tight text-center leading-tight">Estado Actual Ineficiente</span>
                      </div>

                      {/* Bar 2: Cost with Loopa */}
                      <div className="flex flex-col items-center space-y-2 w-28 group">
                        <span className="text-xs font-mono text-brand-coral font-bold">${roiMetrics.loopaMonthly.toLocaleString()}</span>
                        
                        {/* Bar Segment */}
                        <div className="w-12 bg-gradient-to-t from-brand-cyan to-brand-coral rounded-t-lg transition-all duration-500 hover:scale-105 shadow-[0_0_15px_rgba(242,163,138,0.25)]"
                             style={{ height: `${Math.min(100, Math.max(20, (roiMetrics.loopaMonthly / Math.max(1, roiMetrics.currentMonthly + roiMetrics.loopaMonthly)) * 140))}px` }} />
                        
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tight text-center leading-tight">Con Loopa Engine</span>
                      </div>
                    </div>

                    {/* Chart Legend info */}
                    <div className="border-t border-brand-navy/60 pt-3 flex flex-wrap justify-between items-center text-xs text-brand-lavender/60">
                      <span>Reducción de costos de datos y pérdidas: <strong className="text-brand-coral font-bold">{Math.round((1 - roiMetrics.loopaMonthly / Math.max(1, roiMetrics.currentMonthly)) * 100)}%</strong></span>
                      <span className="flex items-center space-x-1 font-bold text-brand-cyan">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>ROI Asegurado</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Information on ROI factors */}
                <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-6 space-y-4">
                  <h4 className="font-display text-base font-bold text-white">¿Por qué estos cálculos son reales y no teóricos?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1 bg-brand-navy/40 p-3 rounded-xl border border-brand-navy/60">
                      <span className="text-brand-coral font-mono font-bold uppercase tracking-wider block">Soberanía de Datos</span>
                      <p className="text-brand-lavender/70 leading-relaxed">
                        Desplegamos todos los modelos en tu propia infraestructura AWS, Azure o GCP. No pagas licencias SaaS abusivas basadas en cantidad de usuarios; pagas costo puro de cómputo optimizado.
                      </p>
                    </div>
                    <div className="space-y-1 bg-brand-navy/40 p-3 rounded-xl border border-brand-navy/60">
                      <span className="text-brand-coral font-mono font-bold uppercase tracking-wider block">Reducción del Deuda Técnica</span>
                      <p className="text-brand-lavender/70 leading-relaxed">
                        Sustituimos más de 5 herramientas aisladas e intermediarios inestables por un único pipeline analítico auto-documentado y con trazabilidad DAMA, bajando tus costos de mantenimiento TI a una fracción.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic CTA Banner */}
        <div className="bg-brand-carbon border border-brand-navy/60 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Quieres un diagnóstico a medida para tu empresa?
            </h3>
            <p className="text-brand-lavender text-sm leading-relaxed max-w-xl mx-auto">
              Nuestros ingenieros analizan gratis tus fuentes de datos actuales y dimensionan el ahorro de costos y la latencia exacta de un pipeline optimizado sin compromiso.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl text-brand-navy font-bold text-sm bg-gradient-to-r from-brand-coral via-brand-coral to-brand-cyan hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-coral/25 inline-flex items-center space-x-2 cursor-pointer"
              >
                <span>Hablar con un Ingeniero Senior</span>
                <ChevronRight className="w-4 h-4 text-brand-navy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
