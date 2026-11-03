import { Service, ProjectCase, BlogPost, FAQItem } from './types';

// Real scheduling link from the client deck; env var overrides it (`?.`: sitemap script imports this under plain Node).
export const CALENDLY_URL = import.meta.env?.VITE_CALENDLY_URL || 'https://calendly.com/asancho-6u/30min';

// Links provided by the client (doc 2026-10-20).
export const PLATFORM_URL = import.meta.env?.VITE_PLATFORM_URL || 'https://loopa-platform-dev-409690690590.us-central1.run.app/dashboard/';
export const DEMO_VIDEO_EMBED = 'https://drive.google.com/file/d/1J_HqXKexQWradNAjQDv940HBNk8o3LRY/preview';
export const WHATSAPP_URL = 'https://wa.me/593996905953';

// Content source: client deck "Loopa info para pagina web" (2026-10). Main offer first,
// complementary products after. No impact metrics until the client provides real ones.
export const SERVICES_DATA: Service[] = [
  {
    id: 'rentabilidad-comercial',
    title: {
      es: 'IA para la Rentabilidad Comercial',
      en: 'AI for Commercial Profitability',
    },
    shortDesc: {
      es: 'Plataforma multi-agéntica que ayuda a las líneas complementarias de tu empresa a cumplir sus metas comerciales.',
      en: 'A multi-agent platform that helps your company’s complementary business lines hit their commercial targets.',
    },
    longDesc: {
      es: 'Muchas empresas tienen segmentos con metas comerciales fijas que no reciben toda la atención ni todos los recursos, porque la prioridad está en el core. Ahí se quedan millones de dólares sobre la mesa cada año. LOOPA conecta mercados existentes que hoy se ignoran con la capacidad disponible interna, mientras tu equipo mantiene el foco en la operación principal.',
      en: 'Many companies have segments with fixed commercial targets that don’t get full attention or resources, because the priority is the core business. That leaves millions of dollars on the table every year. LOOPA connects existing, overlooked markets with your available internal capacity, while your team stays focused on the main operation.',
    },
    iconName: 'TrendingUp',
    features: {
      es: [
        'Agente Predictivo: identifica sobrestock o capacidad ociosa con meses de anticipación, conectado a tu ERP',
        'Agente de Mercado: optimiza precio, distribución y promoción en un solo clic, con contenido visual y guion de video',
        'Agente de Cercanía: evalúa qué empresas de nuestra cartera pueden aportarse máximo valor entre sí y recomienda alianzas',
        'Big data para social listening y recomendaciones basadas en miles de datos especializados',
      ],
      en: [
        'Predictive Agent: spots overstock or idle capacity months in advance, connected to your ERP',
        'Market Agent: optimizes price, distribution and promotion in a single click, with visual content and a video script',
        'Proximity Agent: evaluates which companies in our portfolio can bring each other the most value and recommends partnerships',
        'Big data for social listening and recommendations built on thousands of specialized data points',
      ],
    },
    benefits: {
      es: [
        'Convierte capacidad ociosa e inventario sin rotación en ingresos incrementales.',
        'Tu equipo comercial mantiene el foco en el core mientras las líneas complementarias avanzan.',
        'Cada interacción perfecciona los modelos de ML e IA: la plataforma mejora con el uso (data flywheel).',
      ],
      en: [
        'Turn idle capacity and slow-moving inventory into incremental revenue.',
        'Your commercial team keeps its focus on the core while complementary lines move forward.',
        'Every interaction refines the ML and AI models: the platform improves with use (data flywheel).',
      ],
    },
    forWho: {
      es: 'Gerentes financieros con KPIs de optimización de inventarios, jefaturas de productos o mercados complementarios (accesorios, repuestos, blindaje, overgrips, segmento estudiantil) y agencias de marketing.',
      en: 'Finance managers with inventory-optimization KPIs, heads of complementary products or markets (accessories, spare parts, armoring, overgrips, student segment) and marketing agencies.',
    },
    metrics: { es: [], en: [] },
  },
  {
    id: 'imagen-politica',
    title: {
      es: 'Imagen Política y Social Listening',
      en: 'Political Image & Social Listening',
    },
    shortDesc: {
      es: 'Monitoreo de radio, televisión y medios digitales para medir percepción, anticipar crisis y orientar la estrategia de comunicación.',
      en: 'Radio, TV and digital media monitoring to measure perception, anticipate crises and guide communication strategy.',
    },
    longDesc: {
      es: 'Aplicamos big data y procesamiento de lenguaje natural a la conversación pública. Nuestra experiencia incluye una licitación de gobierno de $1,1M para social listening sobre 500 fuentes de información de radio, televisión y medios digitales.',
      en: 'We apply big data and natural language processing to public conversation. Our track record includes a $1.1M government tender for social listening across 500 radio, TV and digital information sources.',
    },
    iconName: 'Sparkles',
    features: {
      es: [
        'Monitoreo de radio, televisión, prensa y redes sociales',
        'Análisis de sentimiento y temas de conversación',
        'Alertas tempranas de crisis reputacionales',
        'Reportes de percepción para equipos de comunicación',
      ],
      en: [
        'Radio, TV, press and social media monitoring',
        'Sentiment and topic analysis',
        'Early warnings for reputational crises',
        'Perception reports for communication teams',
      ],
    },
    benefits: {
      es: [
        'Saber qué se dice, dónde y con qué tono, casi en tiempo real.',
        'Reaccionar a una crisis antes de que escale.',
        'Medir el efecto real de cada mensaje y campaña.',
      ],
      en: [
        'Know what is being said, where and in what tone, in near real time.',
        'React to a crisis before it escalates.',
        'Measure the real effect of every message and campaign.',
      ],
    },
    forWho: {
      es: 'Gobiernos, instituciones públicas, candidatos y equipos de comunicación política, además de marcas que necesitan cuidar su reputación.',
      en: 'Governments, public institutions, candidates and political communication teams, as well as brands that need to protect their reputation.',
    },
    metrics: { es: [], en: [] },
  },
  {
    id: 'analitica-predictiva',
    title: {
      es: 'Analítica Predictiva',
      en: 'Predictive Analytics',
    },
    shortDesc: {
      es: 'Modelos que anticipan demanda, ventas y capacidad ociosa para que actúes antes de que el problema llegue al estado de resultados. También recomendamos tickets para portafolios de inversión en small y mid caps y prospectamos posibles escenarios en cripto.',
      en: 'Models that anticipate demand, sales and idle capacity so you can act before the problem reaches the income statement. We also recommend tickers for small- and mid-cap investment portfolios and prospect possible crypto scenarios.',
    },
    longDesc: {
      es: 'Construimos modelos de machine learning sobre tus datos históricos y de mercado para pronosticar demanda y ventas, detectar inventario en riesgo y simular escenarios de precio y promoción.',
      en: 'We build machine learning models on your historical and market data to forecast demand and sales, detect at-risk inventory and simulate pricing and promotion scenarios.',
    },
    iconName: 'BarChart3',
    highlight: {
      es: {
        title: 'Tecnología disruptiva (Deep Tech)',
        text: 'Entendimos cómo se conecta la conciencia colectiva humana para volverse predictiva; por eso nos anticipamos a tendencias de mercado y activos financieros mejor que las inteligencias artificiales tradicionales. Generamos nuestros propios modelos de machine learning, como Palantir.',
      },
      en: {
        title: 'Disruptive technology (Deep Tech)',
        text: 'We understood how collective human consciousness connects and becomes predictive; that is why we anticipate market trends and financial assets better than traditional artificial intelligence. We build our own machine learning models, like Palantir.',
      },
    },
    features: {
      es: [
        'Pronóstico de demanda y ventas',
        'Detección temprana de sobrestock y capacidad ociosa',
        'Simulación de escenarios de precio y promoción',
        'Tableros de seguimiento para el equipo comercial y financiero',
        'Recomendación de tickets para portafolios de inversión en small y mid caps',
        'Prospección de posibles escenarios en cripto',
      ],
      en: [
        'Demand and sales forecasting',
        'Early detection of overstock and idle capacity',
        'Pricing and promotion scenario simulation',
        'Tracking dashboards for commercial and finance teams',
        'Ticker recommendations for small- and mid-cap investment portfolios',
        'Prospecting of possible crypto scenarios',
      ],
    },
    benefits: {
      es: [
        'Decisiones de compra, producción y precio con meses de anticipación.',
        'Menos capital inmovilizado en inventario.',
        'Metas comerciales respaldadas por datos, no por intuición.',
      ],
      en: [
        'Purchasing, production and pricing decisions months in advance.',
        'Less capital tied up in inventory.',
        'Commercial targets backed by data, not intuition.',
      ],
    },
    forWho: {
      es: 'Equipos financieros y comerciales que necesitan anticipar la demanda y optimizar inventarios.',
      en: 'Finance and commercial teams that need to anticipate demand and optimize inventory.',
    },
    metrics: { es: [], en: [] },
  },
  {
    id: 'limpieza-datos',
    title: {
      es: 'Limpieza y Calidad de Datos',
      en: 'Data Cleansing & Quality',
    },
    shortDesc: {
      es: 'Depuramos, estandarizamos y estructuramos tus bases para que las decisiones comerciales y los modelos de IA trabajen sobre datos confiables. Incluye transaccionabilidad de datos.',
      en: 'We clean, standardize and structure your databases so commercial decisions and AI models run on data you can trust. Includes data transactability.',
    },
    longDesc: {
      es: 'Ningún modelo predice bien con datos duplicados, incompletos o dispersos. Diagnosticamos la calidad de tus bases de clientes, productos e inventario, las depuramos y dejamos una estructura lista para analítica e inteligencia artificial.',
      en: 'No model predicts well on duplicated, incomplete or scattered data. We assess the quality of your customer, product and inventory databases, clean them up and leave a structure ready for analytics and artificial intelligence.',
    },
    iconName: 'Database',
    features: {
      es: [
        'Diagnóstico de calidad y completitud de datos',
        'Deduplicación y estandarización de registros de clientes, productos e inventario',
        'Integración de fuentes dispersas (ERP, CRM, hojas de cálculo)',
        'Datos preparados para analítica predictiva e IA',
        'Transaccionabilidad de datos',
      ],
      en: [
        'Data quality and completeness assessment',
        'Deduplication and standardization of customer, product and inventory records',
        'Integration of scattered sources (ERP, CRM, spreadsheets)',
        'Data prepared for predictive analytics and AI',
        'Data transactability',
      ],
    },
    benefits: {
      es: [
        'Una sola versión confiable de tus datos comerciales.',
        'Menos tiempo perdido corrigiendo reportes a mano.',
        'Base sólida para cualquier proyecto de IA posterior.',
      ],
      en: [
        'A single, trustworthy version of your commercial data.',
        'Less time lost fixing reports by hand.',
        'A solid foundation for any later AI project.',
      ],
    },
    forWho: {
      es: 'Empresas con información dispersa o duplicada entre ERP, CRM y hojas de cálculo que quieren tomar decisiones con datos confiables.',
      en: 'Companies with information scattered or duplicated across ERP, CRM and spreadsheets that want to make decisions on reliable data.',
    },
    metrics: { es: [], en: [] },
  },
  {
    id: 'servicios-econometricos',
    title: {
      es: 'Servicios Econométricos',
      en: 'Econometric Services',
    },
    shortDesc: {
      es: 'Te decimos qué parte de tus esfuerzos comerciales y operativos impacta más en tus ingresos y dónde tienes más oportunidad de crecer.',
      en: 'We tell you which of your commercial and operational efforts have the biggest impact on your revenue and where you have the most room to grow.',
    },
    longDesc: {
      es: 'Aplicamos modelos econométricos a tus datos comerciales y operativos para medir cuánto aporta cada esfuerzo a tus ingresos. Así sabes qué funciona, qué no y dónde tienes más oportunidad de crecer.',
      en: 'We apply econometric models to your commercial and operational data to measure how much each effort contributes to your revenue. That way you know what works, what does not and where you have the most room to grow.',
    },
    iconName: 'LineChart',
    features: {
      es: [
        'Medición del impacto de cada esfuerzo comercial y operativo en tus ingresos',
        'Identificación de las palancas con mayor retorno',
        'Detección de oportunidades de crecimiento',
      ],
      en: [
        'Measurement of each commercial and operational effort’s impact on revenue',
        'Identification of the levers with the highest return',
        'Detection of growth opportunities',
      ],
    },
    benefits: {
      es: [
        'Inviertes donde más impacta en tus ingresos.',
        'Dejas de gastar en esfuerzos que no mueven la aguja.',
        'Decisiones de crecimiento respaldadas por datos.',
      ],
      en: [
        'Invest where it has the most impact on revenue.',
        'Stop spending on efforts that do not move the needle.',
        'Growth decisions backed by data.',
      ],
    },
    forWho: {
      es: 'Gerencias comerciales, financieras y de operaciones que necesitan saber qué esfuerzos generan ingresos y dónde crecer.',
      en: 'Commercial, finance and operations leaders who need to know which efforts drive revenue and where to grow.',
    },
    metrics: { es: [], en: [] },
  },
];

export const CLIENTS_LOGOS = [
  { name: 'Grupo Alfa Retail', type: { es: 'Retail líder en MX', en: 'Leading retailer in Mexico' } },
  { name: 'FinanzLatam', type: { es: 'Fintech pionera', en: 'Pioneering fintech' } },
  { name: 'Minera del Sur', type: { es: 'Logística e industrial', en: 'Logistics & industrial' } },
  { name: 'Pacífico Aseguradora', type: { es: 'Seguros y finanzas', en: 'Insurance & finance' } },
  { name: 'TeleAndina', type: { es: 'Telecomunicaciones', en: 'Telecommunications' } },
  { name: 'LogiLatam Corp', type: { es: 'Cadena de suministro', en: 'Supply chain' } },
];

export const SUCCESS_CASES_DATA: ProjectCase[] = [
  {
    id: 'social-listening-retail',
    coverImage: {
      es: '/casos/social-listening-retail-es.webp',
      en: '/casos/social-listening-retail-en.webp',
    },
    title: {
      es: 'Predicción de tendencias de mercado con NLP avanzado en consumo masivo',
      en: 'Predicting market trends with advanced NLP in mass consumer goods',
    },
    client: 'Almacenes del Centro',
    industry: { es: 'Retail & Consumer Goods', en: 'Retail & Consumer Goods' },
    shortDesc: {
      es: 'Monitoreo dinámico del lenguaje informal y modismos regionales en LatAm para predecir la demanda de productos virales.',
      en: 'Dynamic monitoring of informal language and regional idioms across LatAm to predict demand for viral products.',
    },
    challenge: {
      es: 'Un importante minorista regional con operaciones en México y Colombia no lograba anticiparse a la viralización de tendencias de moda y belleza generadas en plataformas como TikTok, lo que provocaba roturas constantes de inventario de productos de alta velocidad o sobrecompras tardías.',
      en: 'A major regional retailer operating in Mexico and Colombia couldn’t get ahead of fashion and beauty trends going viral on platforms like TikTok, causing constant stockouts on fast-moving products or late overbuying.',
    },
    solution: {
      es: 'Desplegamos un motor de Social Listening con NLP avanzado calibrado para español de México y Colombia. El sistema procesa millones de publicaciones diarias, identificando marcas emergentes y asignándoles una puntuación de aceleración de tendencia. Esta información se conectó directamente con el modelo de compras del ERP.',
      en: 'We deployed a Social Listening engine with advanced NLP calibrated for Mexican and Colombian Spanish. The system processes millions of posts daily, identifying emerging brands and assigning them a trend-acceleration score. This feed was connected directly to the ERP’s purchasing model.',
    },
    results: {
      es: [
        'Incremento de +35% en la detección temprana de productos con alto potencial viral.',
        'Reducción de un 22% de inventario muerto o stock inactivo comprado tardíamente.',
        '94% de precisión en la categorización de sentimiento de usuarios locales hacia marcas piloto.',
      ],
      en: [
        '+35% increase in early detection of high viral-potential products.',
        '22% reduction in dead stock from late overbuying.',
        '94% accuracy classifying local users’ sentiment toward pilot brands.',
      ],
    },
    metrics: [
      { value: '+35%', label: { es: 'Detección temprana de tendencias', en: 'Early trend detection' } },
      { value: '-22%', label: { es: 'Capital inmovilizado', en: 'Capital tied up' } },
      { value: '94%', label: { es: 'Precisión de sentimiento local', en: 'Local sentiment accuracy' } },
    ],
    tag: { es: 'Social Listening', en: 'Social Listening' },
    date: 'Mayo, 2026',
  },
  {
    id: 'inventario-predictivo-logistica',
    coverImage: {
      es: '/casos/inventario-predictivo-logistica-es.webp',
      en: '/casos/inventario-predictivo-logistica-en.webp',
    },
    title: {
      es: 'Optimización predictiva de suministro para distribuidora de consumo',
      en: 'Predictive supply optimization for a consumer goods distributor',
    },
    client: 'Distribuidora Los Andes',
    industry: { es: 'CPG & Logistics', en: 'CPG & Logistics' },
    shortDesc: {
      es: 'Ajuste de algoritmos de demanda que reducen sobrestock mediante análisis dinámico de estacionalidad e inflación regional.',
      en: 'Demand algorithm tuning that reduces overstock through dynamic analysis of seasonality and regional inflation.',
    },
    challenge: {
      es: 'La alta inflación y variabilidad de costos de combustibles en el cono sur hacía que los modelos históricos lineales fallaran al estimar la compra de alimentos de larga duración, provocando excesos de inventario que mermaban el margen de ganancia.',
      en: 'High inflation and fluctuating fuel costs across the Southern Cone made linear historical models fail at estimating long-shelf-life food purchases, causing inventory excess that ate into profit margin.',
    },
    solution: {
      es: 'Implementamos un modelo predictivo basado en Machine Learning (XGBoost de series temporales) que integra variables externas como el IPC local, precios de transporte, días festivos y tendencias climáticas para generar un pronóstico dinámico diario por SKU y centro de distribución.',
      en: 'We implemented a Machine Learning predictive model (time-series XGBoost) that integrates external variables like local CPI, freight prices, holidays and weather trends to generate a daily dynamic forecast per SKU and distribution center.',
    },
    results: {
      es: [
        'Ahorro neto de 1.4M USD anuales en costos de bodegaje y reducción del sobrestock de seguridad.',
        'Incremento del margen operativo de la división de consumo en un 18%.',
        'Disponibilidad del 99.4% en productos de la canasta básica familiar sin incurrir en costos extras.',
      ],
      en: [
        'Net savings of USD 1.4M per year in warehousing costs and reduced safety overstock.',
        '18% increase in the consumer division’s operating margin.',
        '99.4% availability on staple household products with no extra costs.',
      ],
    },
    metrics: [
      { value: '1.4M USD', label: { es: 'Ahorro anual consolidado', en: 'Consolidated annual savings' } },
      { value: '+18%', label: { es: 'Incremento de margen operativo', en: 'Operating margin increase' } },
      { value: '99.4%', label: { es: 'Disponibilidad de stock crítico', en: 'Critical stock availability' } },
    ],
    tag: { es: 'Predicción de Ventas', en: 'Sales Forecasting' },
    date: 'Febrero, 2026',
  },
  {
    id: 'consentimiento-blockchain-fintech',
    coverImage: {
      es: '/casos/consentimiento-blockchain-fintech-es.webp',
      en: '/casos/consentimiento-blockchain-fintech-en.webp',
    },
    title: {
      es: 'Resguardo de consentimiento Habeas Data con Blockchain para microcréditos',
      en: 'Blockchain-backed Habeas Data consent for microloans',
    },
    client: 'CrediYa LatAm',
    industry: { es: 'Fintech & Finanzas', en: 'Fintech & Finance' },
    shortDesc: {
      es: 'Arquitectura inmutable de firmas y consentimientos de tratamiento de información sensible.',
      en: 'Immutable architecture for signatures and consent to process sensitive information.',
    },
    challenge: {
      es: 'CrediYa requería expandir sus microcréditos ágiles en Perú y Colombia, pero el flujo manual de recolección de firmas de aceptación de términos de privacidad era lento y vulnerable a auditorías del regulador financiero, entorpeciendo el onboarding digital.',
      en: 'CrediYa needed to expand its fast microloans into Peru and Colombia, but its manual flow for collecting privacy-term signatures was slow and vulnerable to financial-regulator audits, slowing down digital onboarding.',
    },
    solution: {
      es: 'Desarrollamos una API middleware ultra-rápida conectada con Hyperledger Fabric. Cada vez que un usuario aprueba los términos en la app, se genera una huella criptográfica SHA-256 única que se escribe inmutablemente en el ledger blockchain, permitiendo auditorías regulatorias instantáneas en tiempo real.',
      en: 'We built an ultra-fast middleware API connected to Hyperledger Fabric. Every time a user approves the terms in the app, a unique SHA-256 cryptographic fingerprint is generated and written immutably to the blockchain ledger, enabling instant real-time regulatory audits.',
    },
    results: {
      es: [
        'Cumplimiento regulatorio del 100% verificado bajo auditoría externa con cero observaciones.',
        'Reducción del tiempo de aprobación del crédito de 24 horas a solo 5 minutos.',
        'Ahorro del 85% en costos operativos de archivo, control documental y resolución de reclamos.',
      ],
      en: [
        '100% regulatory compliance verified under external audit with zero findings.',
        'Loan approval time cut from 24 hours down to just 5 minutes.',
        '85% savings in filing, document-control and claims-resolution operating costs.',
      ],
    },
    metrics: [
      { value: '100%', label: { es: 'Cumplimiento de auditoría', en: 'Audit compliance' } },
      { value: '5 min', label: { es: 'Tiempo de onboarding digital', en: 'Digital onboarding time' } },
      { value: '0', label: { es: 'Reclamos por uso indebido', en: 'Misuse complaints' } },
    ],
    tag: { es: 'Blockchain Consentimiento', en: 'Blockchain Consent' },
    date: 'Noviembre, 2025',
  },
  {
    id: 'asistente-llm-energia',
    coverImage: {
      es: '/casos/asistente-llm-energia-es.webp',
      en: '/casos/asistente-llm-energia-en.webp',
    },
    title: {
      es: 'IA Generativa con RAG privado para soporte logístico en campo',
      en: 'Generative AI with private RAG for field logistics support',
    },
    client: 'TeleBrasil Corp',
    industry: { es: 'Telecomunicaciones & Energía', en: 'Telecommunications & Energy' },
    shortDesc: {
      es: 'Asistente experto de inteligencia artificial entrenado para consultar miles de manuales técnicos en campo.',
      en: 'Expert AI assistant trained to search thousands of technical manuals in the field.',
    },
    challenge: {
      es: 'Los técnicos de mantenimiento en campo perdían un promedio de 45 minutos buscando especificaciones técnicas específicas en pesados catálogos PDF en áreas con baja conectividad, ralentizando el mantenimiento y aumentando fallos operativos.',
      en: 'Field maintenance technicians lost an average of 45 minutes searching for specific technical specs in heavy PDF catalogs in low-connectivity areas, slowing maintenance down and increasing operational failures.',
    },
    solution: {
      es: 'Diseñamos un sistema RAG privado montado sobre infraestructuras seguras del cliente. Compilamos, limpiamos e indexamos más de 12,000 manuales, diagramas eléctricos y guías de servicio. El asistente interactúa por comandos de voz e interfaces móviles, respondiendo con esquemas precisos y pasos a seguir en segundos.',
      en: 'We designed a private RAG system running on the client’s secure infrastructure. We compiled, cleaned and indexed over 12,000 manuals, electrical diagrams and service guides. The assistant works through voice commands and mobile interfaces, answering with precise diagrams and next steps in seconds.',
    },
    results: {
      es: [
        'Reducción promedio de un 40% en el tiempo necesario para resolver fallas de hardware complejas.',
        'Aumento del 28% en la productividad diaria de las brigadas técnicas de campo.',
        'Cero fugas de información o uso de datos corporativos confidenciales fuera de los servidores de la empresa.',
      ],
      en: [
        '40% average reduction in time needed to resolve complex hardware failures.',
        '28% increase in daily productivity for field technical crews.',
        'Zero leaks or use of confidential corporate data outside the company’s servers.',
      ],
    },
    metrics: [
      { value: '-40%', label: { es: 'Tiempo de resolución de fallas', en: 'Failure resolution time' } },
      { value: '+28%', label: { es: 'Productividad de brigadas', en: 'Crew productivity' } },
      { value: '100%', label: { es: 'Datos corporativos aislados', en: 'Corporate data isolation' } },
    ],
    tag: { es: 'Implementación LLMs', en: 'LLM Implementation' },
    date: 'Marzo, 2026',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'productos-baja-rotacion-sin-cambiar-erp',
    title: {
      es: 'Cómo conectar tus productos de baja rotación con la demanda correcta (sin cambiar tu ERP)',
      en: 'How to Connect Your Slow-Moving Products with the Right Demand (Without Changing Your ERP)',
    },
    seoTitle: { es: 'Baja rotación: IA sin cambiar tu ERP', en: 'Slow-moving stock: AI without changing your ERP' },
    excerpt: {
      es: 'Cómo liberar la liquidez atrapada en inventario de baja rotación conectando IA a tu ERP actual, sin migraciones ni pausar tu operación.',
      en: 'How to free the cash trapped in slow-moving inventory by connecting AI to your current ERP, with no migration and no operational pause.',
    },
    category: 'Comercial',
    readTime: { es: '4 min de lectura', en: '4 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '3 de Noviembre, 2026',
    tags: ['Inventario', 'ERP', 'Zero-Copy', 'IA'],
    coverImage: {
      es: '/blog/productos-baja-rotacion-es.webp',
      en: '/blog/productos-baja-rotacion-en.webp',
    },
    content: {
      es: `
      <p>Si manejas inventarios, finanzas o gestión comercial, conoces bien la pesadilla: productos acumulando polvo en bodega, bases de datos en Excel dispersas, sistemas ERP que no se hablan entre sí y decisiones comerciales que se toman tarde, dejando liquidez atrapada en stock que no se mueve.</p>
      <p>¿La respuesta tradicional de las consultoras? “Necesitamos detener tu empresa 6 meses, migrar toda tu infraestructura y gastar decenas de miles de dólares en desarrollos a la medida”.</p>
      <p><strong>Hoy, esa premisa quedó obsoleta.</strong> No necesitas pausar tu operación ni reinventar la rueda para liberar la liquidez atascada en tus bodegas. Existe un camino mucho más ágil, cómodo y conveniente: conectar Inteligencia Artificial sobre la infraestructura y los procesos que ya tienes funcionando hoy.</p>

      <h2>La vía rápida: de inventario estancado a caja líquida en días, no meses</h2>
      <p>Hasta hoy, intentar dar salida a productos de baja rotación significaba descuentos agresivos que destruían el margen o cruces manuales de reportes que tomaban semanas.</p>
      <p>Nuestra metodología rompe esa parálisis mediante integración Plug-and-Play y arquitectura Zero-Copy, ofreciéndote un motor de agilidad comercial diseñado para encontrar compradores ideales para ese inventario atascado, rápido y sin fricción. Se apoya en cuatro pilares:</p>
      <div class="my-8 overflow-hidden rounded-2xl border border-brand-navy/15 dark:border-white/15"><table class="w-full border-collapse text-left"><thead><tr><th colspan="2" class="bg-brand-navy px-5 py-4 text-center text-sm font-bold uppercase tracking-widest text-white dark:bg-white/10">Motor de monetización y agilidad IA</th></tr></thead><tbody><tr><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15 border-r"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">1. Conectividad Plug-and-Play</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Conexión sobre lo que ya usas</li><li>Cero cambios traumáticos en el ERP</li></ul></td><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">2. Arquitectura Zero-Copy</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Hallazgo de mercado en vivo</li><li>El dato nunca sale de tu nube</li></ul></td></tr><tr><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15 border-r"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">3. Adaptabilidad inmediata</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Integración nativa con MCP</li><li>Herramientas del día a día</li></ul></td><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">4. Monetización acumulativa</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Rotación de stock lento</li><li>Ventas cruzadas en comunidad</li></ul></td></tr></tbody></table></div>

      <h3>1. Implementación suave: cero interrupciones en tu negocio</h3>
      <p>Olvídate de detener las operaciones para capacitar a tu equipo en herramientas complejas. Nos conectamos de forma nativa a tus repositorios y canales actuales (BigQuery, ERP, WhatsApp, TikTok, YouTube).</p>
      <p><strong>El resultado:</strong> enriqueces la toma de decisiones comerciales en tiempo real dentro de las mismas plataformas que tu equipo ya utiliza a diario.</p>

      <h3>2. Conexión en comunidad con Zero-Copy (sin mover un solo archivo)</h3>
      <p>La arquitectura Zero-Copy es la clave para colocar productos de baja rotación en el mercado correcto sin arriesgar tu información: tus bases de datos de inventario y comercial jamás salen de la infraestructura privada de tu empresa, pero la IA —que ya entiende a la perfección tu catálogo y tus capacidades operativas— sale a explorar de forma totalmente segura.</p>
      <p>A través de este modelo, el agente interactúa dentro de una red de aliados y clientes potenciales buscando a quienes tienen una necesidad puntual para esos productos específicos en ese preciso momento. Así conecta tu oferta atascada con la demanda del mercado de manera automatizada, inmediata y sin el riesgo ni la fricción de mover un solo archivo.</p>

      <h3>3. Automatización cómoda y a tu medida</h3>
      <p>Si tu empresa ya cuenta con infraestructura de IA o conectores avanzados (como Server MCP en Claude), nos acoplamos de inmediato a tu entorno. Si apenas estás arrancando, te entregamos una arquitectura temporal de alto rendimiento lista para usar. La tecnología se adapta a tu ritmo, no al revés.</p>

      <h3>4. Monetización directa de tus activos</h3>
      <p>Cada movimiento de stock, conversación comercial y producto lento se transforma en una oportunidad activa. La IA detecta automáticamente combinaciones de productos complementarios, dinamiza el inventario de baja rotación y encapsula la inteligencia de ventas como patrimonio digital de la compañía.</p>

      <h2>La garantía Loopa: Seamless AI para monetizar rápido</h2>
      <p>La mayor bandera roja de un proveedor de tecnología es escucharlo decir: “Si no cambias tu ERP y todos tus procesos, no podemos instalar IA”. En Loopa creemos en la transformación progresiva, conveniente y sin fricción (Seamless AI):</p>
      <ol>
        <li><strong>Limpiamos y estructuramos tus datos comerciales</strong>, sin saltarnos el primer paso crítico: tener información limpia.</li>
        <li><strong>Instalamos agentes de IA</strong> sobre tus procesos comerciales actuales para identificar cuellos de botella en bodega y liberar horas operativas desde la primera semana.</li>
        <li><strong>Monetizamos activos existentes:</strong> convertimos tu inventario de lenta salida, tus datos y el flujo de trabajo de tus equipos en fuentes de ingreso constante e integraciones preautomatizadas.</li>
      </ol>

      <h2>¿Cuánto capital tienes atrapado en bodegas por no conectar tu información con el mercado correcto?</h2>
      <p>Dejar que tus productos de baja rotación sigan acumulando polvo te cuesta almacenamiento, liquidez y margen operativo todos los días.</p>
      <p>¿Quieres ver cómo conectar tus sistemas actuales a un motor predictivo que empiece a mover tu inventario en días y no en meses? <a href="/contacto"><strong>Solicita una demo en vivo con el equipo de Loopa</strong></a>.</p>
    `,
      en: `
      <p>If you manage inventory, finance or commercial operations, you know the nightmare well: products gathering dust in the warehouse, scattered Excel databases, ERP systems that don’t talk to each other, and commercial decisions made too late, leaving cash trapped in stock that doesn’t move.</p>
      <p>The traditional consulting answer? “We need to stop your company for 6 months, migrate your entire infrastructure and spend tens of thousands of dollars on custom development.”</p>
      <p><strong>Today, that premise is obsolete.</strong> You don’t need to pause your operation or reinvent the wheel to free the cash stuck in your warehouses. There is a far more agile, comfortable and convenient path: connecting Artificial Intelligence on top of the infrastructure and processes you already run today.</p>

      <h2>The fast track: from stalled inventory to liquid cash in days, not months</h2>
      <p>Until now, trying to move slow-moving products meant aggressive discounts that destroyed margin, or manual report cross-checks that took weeks.</p>
      <p>Our methodology breaks that paralysis through Plug-and-Play integration and a Zero-Copy architecture, giving you a commercial agility engine designed to find the ideal buyers for that stalled inventory, quickly and without friction. It rests on four pillars:</p>
      <div class="my-8 overflow-hidden rounded-2xl border border-brand-navy/15 dark:border-white/15"><table class="w-full border-collapse text-left"><thead><tr><th colspan="2" class="bg-brand-navy px-5 py-4 text-center text-sm font-bold uppercase tracking-widest text-white dark:bg-white/10">AI monetization and agility engine</th></tr></thead><tbody><tr><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15 border-r"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">1. Plug-and-Play connectivity</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Connection on top of what you already use</li><li>No traumatic ERP changes</li></ul></td><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">2. Zero-Copy architecture</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Live market discovery</li><li>Your data never leaves your cloud</li></ul></td></tr><tr><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15 border-r"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">3. Immediate adaptability</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Native MCP integration</li><li>Your everyday tools</li></ul></td><td class="w-1/2 align-top p-5 border-t border-brand-navy/15 dark:border-white/15"><strong class="block mb-2 text-xs font-bold uppercase tracking-wider text-brand-coral-ink dark:text-brand-coral">4. Cumulative monetization</strong><ul class="list-disc pl-5 space-y-1 text-sm"><li>Slow-stock rotation</li><li>Cross-selling within the community</li></ul></td></tr></tbody></table></div>

      <h3>1. Smooth implementation: zero disruption to your business</h3>
      <p>Forget stopping operations to train your team on complex tools. We connect natively to your current repositories and channels (BigQuery, ERP, WhatsApp, TikTok, YouTube).</p>
      <p><strong>The result:</strong> you enrich real-time commercial decisions inside the same platforms your team already uses every day.</p>

      <h3>2. Community connection with Zero-Copy (without moving a single file)</h3>
      <p>Zero-Copy architecture is the key to placing slow-moving products in the right market without putting your information at risk: your inventory and commercial databases never leave your company’s private infrastructure, yet the AI —which already understands your catalog and operating capabilities perfectly— goes out to explore in a fully secure way.</p>
      <p>Through this model, the agent interacts within a network of partners and potential customers, looking for those with a specific need for those exact products at that precise moment. It connects your stalled supply with market demand in an automated, immediate way, without the risk or friction of moving a single file.</p>

      <h3>3. Comfortable automation, tailored to you</h3>
      <p>If your company already has AI infrastructure or advanced connectors (such as MCP Server in Claude), we plug into your environment right away. If you’re just getting started, we deliver a high-performance temporary architecture, ready to use. The technology adapts to your pace, not the other way around.</p>

      <h3>4. Direct monetization of your assets</h3>
      <p>Every stock movement, commercial conversation and slow product becomes an active opportunity. The AI automatically detects complementary product combinations, energizes slow-moving inventory and captures sales intelligence as the company’s digital asset.</p>

      <h2>The Loopa guarantee: Seamless AI to monetize fast</h2>
      <p>The biggest red flag from a technology vendor is hearing: “If you don’t change your ERP and all your processes, we can’t install AI.” At Loopa we believe in progressive, convenient, frictionless transformation (Seamless AI):</p>
      <ol>
        <li><strong>We clean and structure your commercial data</strong>, without skipping the critical first step: having clean information.</li>
        <li><strong>We install AI agents</strong> on top of your current commercial processes to identify warehouse bottlenecks and free up operating hours from the first week.</li>
        <li><strong>We monetize existing assets:</strong> we turn your slow-moving inventory, your data and your teams’ workflow into a steady source of income and pre-automated integrations.</li>
      </ol>

      <h2>How much capital do you have trapped in warehouses because your information isn’t connected to the right market?</h2>
      <p>Letting your slow-moving products keep gathering dust costs you storage, liquidity and operating margin every single day.</p>
      <p>Want to see how to connect your current systems to a predictive engine that starts moving your inventory in days, not months? <a href="/en/contact"><strong>Request a live demo with the Loopa team</strong></a>.</p>
    `,
    },
  },
  {
    id: 'llm-privados-latam',
    coverImage: {
      es: '/blog/llm-privados-latam-es.webp',
      en: '/blog/llm-privados-latam-en.webp',
    },
    title: {
      es: 'Cómo los Modelos LLM Privados están Transformando la Consulta de Datos Corporativos en LatAm',
      en: 'How Private LLMs Are Transforming Corporate Data Search Across LatAm',
    },
    seoTitle: { es: 'LLM privados para consultar datos corporativos', en: 'Private LLMs for corporate data search' },
    excerpt: {
      es: '¿Por qué enviar los datos de tus clientes a APIs públicas es un riesgo reputacional letal? Analizamos el surgimiento del RAG privado y seguro para corporativos.',
      en: 'Why is sending your customers’ data to public APIs a lethal reputational risk? We look at the rise of private, secure RAG for enterprises.',
    },
    category: 'Inteligencia Artificial',
    readTime: { es: '6 min de lectura', en: '6 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '10 de Julio, 2026',
    tags: ['LLMs', 'Vertex AI', 'Seguridad de Datos', 'RAG'],
    content: {
      es: `
      <h2>El Dilema de la Privacidad en la Era de la IA Generativa</h2>
      <p>A lo largo del último año, directores de tecnología y compliance en toda Latinoamérica han enfrentado un dilema persistente: cómo aprovechar la increíble productividad que prometen los Modelos de Lenguaje Grande (LLMs) sin poner en riesgo la privacidad de sus datos patentados o la información confidencial de sus clientes.</p>

      <p>El uso de APIs públicas de consumo masivo para procesar datos corporativos (por ejemplo, pegar un contrato confidencial en un chat público) expone a las organizaciones a que su propiedad intelectual sea utilizada para re-entrenar modelos ajenos. Para industrias reguladas en LatAm, como la banca, el sector salud y las fintechs, esto es simplemente inadmisible.</p>

      <h3>La Respuesta: Arquitecturas RAG con Nubes Privadas</h3>
      <p>La alternativa ganadora en el entorno empresarial es la arquitectura de <strong>Generación Aumentada por Recuperación (RAG)</strong> desplegada de forma privada. En este esquema, el modelo de IA no retiene los datos de forma permanente ni los envía a servidores externos públicos. En su lugar, el LLM actúa como un lector inteligente temporal de una base de datos vectorial hosted en la propia infraestructura de la empresa.</p>

      <p>Con herramientas avanzadas como la suite de Google GenAI y Vertex AI con residencia de datos regional, las empresas de México, Chile o Colombia ahora pueden garantizar que su información sensible nunca sale de sus fronteras tecnológicas, cumpliendo estrictamente con las regulaciones locales de Habeas Data.</p>

      <h3>Resultados Tangibles en LatAm</h3>
      <p>En Loopa Technology hemos visto de primera mano el impacto de estas implementaciones:
      <ul>
        <li><strong>Soporte al cliente de alto nivel:</strong> Clientes en banca capaces de responder sobre el estado de créditos complejos leyendo regulaciones dinámicas al instante.</li>
        <li><strong>Reducción de silos:</strong> Equipos de operaciones que interrogan a bases de datos históricas complejas usando lenguaje natural, ahorrando horas de búsquedas manuales.</li>
      </ul>
      </p>

      <p>La IA Generativa dejó de ser un juguete de oficina para transformarse en un motor de operaciones blindado. La clave está en la gobernanza y en no sacrificar la soberanía de tus datos por un acceso rápido a la tecnología.</p>
    `,
      en: `
      <h2>The Privacy Dilemma in the Generative AI Era</h2>
      <p>Over the past year, technology and compliance leaders across Latin America have faced a persistent dilemma: how to capture the incredible productivity promised by Large Language Models (LLMs) without putting proprietary data or confidential customer information at risk.</p>

      <p>Using mass-consumer public APIs to process corporate data (for example, pasting a confidential contract into a public chat) exposes organizations to their intellectual property being used to retrain third-party models. For regulated industries in LatAm, such as banking, healthcare and fintech, this is simply unacceptable.</p>

      <h3>The Answer: RAG Architectures on Private Clouds</h3>
      <p>The winning enterprise alternative is a privately deployed <strong>Retrieval-Augmented Generation (RAG)</strong> architecture. In this scheme, the AI model doesn’t permanently retain data nor send it to external public servers. Instead, the LLM acts as a temporary, intelligent reader of a vector database hosted on the company’s own infrastructure.</p>

      <p>With advanced tools like the Google GenAI suite and Vertex AI with regional data residency, companies in Mexico, Chile or Colombia can now guarantee their sensitive information never leaves their technological borders, in strict compliance with local Habeas Data regulations.</p>

      <h3>Tangible Results Across LatAm</h3>
      <p>At Loopa Technology we’ve seen the impact of these implementations firsthand:
      <ul>
        <li><strong>Top-tier customer support:</strong> Banking clients able to answer questions on complex loan status by reading dynamic regulations instantly.</li>
        <li><strong>Fewer silos:</strong> Operations teams querying complex historical databases in natural language, saving hours of manual searching.</li>
      </ul>
      </p>

      <p>Generative AI stopped being an office toy and became a hardened operations engine. The key is governance, and never trading away data sovereignty for fast access to technology.</p>
    `,
    },
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: {
      es: '¿Cómo garantizan la seguridad de nuestra información corporativa al implementar LLMs?',
      en: 'How do you guarantee the security of our corporate information when implementing LLMs?',
    },
    answer: {
      es: 'Implementamos arquitecturas de aislamiento absoluto de datos corporativos a través de entornos cloud privados y sistemas RAG (Retrieval-Augmented Generation). Su información nunca es enviada para re-entrenar modelos públicos (como el ChatGPT de consumo masivo). Todo el procesamiento se realiza en servidores dedicados bajo su control con cifrado de datos en reposo y en tránsito.',
      en: 'We implement absolute corporate-data isolation architectures through private cloud environments and RAG (Retrieval-Augmented Generation) systems. Your information is never sent to retrain public models (like mass-consumer ChatGPT). All processing happens on dedicated servers under your control, with data encrypted at rest and in transit.',
    },
  },
  {
    question: {
      es: '¿En qué consiste la rentabilización de datos y cómo genera un retorno de inversión (ROI) directo?',
      en: 'What does data monetization involve, and how does it generate a direct return on investment (ROI)?',
    },
    answer: {
      es: 'La rentabilización de datos consiste en identificar fuentes ocultas de información dentro de su empresa (logs de sistemas, datos transaccionales de clientes, comportamientos de navegación) y convertirlas en activos para tomar decisiones inmediatas que ahorran dinero o crean productos de valor. El ROI se ve reflejado en la reducción drástica de reprocesos, la disminución en costos de almacenamiento redundante (-30%) y el aumento de la conversión comercial al hiper-personalizar ofertas de venta.',
      en: 'Data monetization means identifying hidden information sources within your company (system logs, customer transactional data, browsing behavior) and turning them into assets for immediate decisions that save money or create valuable products. ROI shows up as a drastic reduction in reprocessing, lower redundant storage costs (-30%) and higher commercial conversion through hyper-personalized offers.',
    },
  },
  {
    question: {
      es: '¿Por qué utilizan tecnología Blockchain para la gestión del consentimiento de datos?',
      en: 'Why do you use Blockchain technology for data consent management?',
    },
    answer: {
      es: 'Bajo las actuales regulaciones de protección de datos (como la Ley de Protección de Datos de Colombia, México o la LGPD en Brasil), las empresas tienen la carga de la prueba en caso de que un cliente reclame sobre el uso de sus datos. Un registro blockchain descentralizado genera una huella inmutable del consentimiento del usuario. Esto previene alteraciones de datos, ofrece una bitácora auditada en milisegundos y blinda legalmente a la empresa frente a multas sin necesidad de almacenar costosos archivos de papel.',
      en: 'Under current data-protection regulations (such as the Data Protection Law in Colombia and Mexico, or Brazil’s LGPD), companies carry the burden of proof if a customer disputes the use of their data. A decentralized blockchain record creates an immutable fingerprint of user consent. This prevents data tampering, provides a millisecond-auditable log and legally shields the company from fines, with no need for costly paper archives.',
    },
  },
  {
    question: {
      es: '¿Cuánto tiempo toma ver resultados en un proyecto de predicción de inventario o ventas?',
      en: 'How long does it take to see results on an inventory or sales forecasting project?',
    },
    answer: {
      es: 'Nuestras implementaciones de analítica predictiva operan bajo fases de valor ágiles. Una fase inicial de ingesta de datos e ingeniería de variables toma de 4 a 6 semanas. La calibración del primer modelo predictivo estable toma unas 4 semanas adicionales, con lo cual un cliente típico comienza a percibir reducciones en stock inmovilizado y optimización de flujos de caja en menos de 90 días desde el inicio del proyecto.',
      en: 'Our predictive analytics rollouts run in agile value phases. An initial data-ingestion and feature-engineering phase takes 4 to 6 weeks. Calibrating the first stable predictive model takes about 4 additional weeks, so a typical client starts seeing reductions in tied-up stock and cash-flow optimization in under 90 days from project kickoff.',
    },
  },
  {
    question: {
      es: '¿Nuestros sistemas actuales (ERP SAP, Salesforce CRM) son compatibles con las soluciones de Loopa?',
      en: 'Are our current systems (SAP ERP, Salesforce CRM) compatible with Loopa’s solutions?',
    },
    answer: {
      es: 'Sí, absolutamente. Todas nuestras soluciones se diseñan bajo un enfoque API-First y agnóstico de plataforma. Tenemos amplia experiencia integrando fuentes de datos provenientes de SAP, Oracle, Microsoft Dynamics, Salesforce, Hubspot, bases de datos tradicionales (PostgreSQL, SQL Server) y modernas arquitecturas cloud en Google Cloud Platform, AWS o Azure.',
      en: 'Yes, absolutely. All of our solutions are designed API-first and platform-agnostic. We have extensive experience integrating data sources from SAP, Oracle, Microsoft Dynamics, Salesforce, HubSpot, traditional databases (PostgreSQL, SQL Server) and modern cloud architectures on Google Cloud Platform, AWS or Azure.',
    },
  },
];
