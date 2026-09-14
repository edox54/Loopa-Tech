import { Service, ProjectCase, BlogPost, TeamMember, FAQItem } from './types';

// NOTE: English copy below is a direct professional translation, not yet client-reviewed
// for market-specific tone/positioning. Treat as a solid first draft, not final marketing copy.

export const SERVICES_DATA: Service[] = [
  {
    id: 'rentabilizacion-gobernanza',
    title: {
      es: 'Rentabilización y Gobernanza de Datos',
      en: 'Data Monetization & Governance',
    },
    shortDesc: {
      es: 'Diseño de arquitecturas modernas y marcos de gobernanza bajo estándares globales para transformar datos crudos en activos rentables y seguros.',
      en: 'We design modern architectures and governance frameworks built on global standards to turn raw data into profitable, secure assets.',
    },
    longDesc: {
      es: 'Ayudamos a grandes corporativos y scaleups de LatAm a mapear, estructurar, catalogar y monetizar sus fuentes de información. Implementamos marcos ágiles alineados con DAMA-DMBOK que garantizan la calidad de datos, reducen costos operativos y abren nuevas líneas de ingresos basadas en datos.',
      en: 'We help large corporations and scaleups across LatAm map, structure, catalog and monetize their information sources. We implement agile frameworks aligned with DAMA-DMBOK that guarantee data quality, reduce operating costs and open new data-driven revenue lines.',
    },
    iconName: 'Database',
    features: {
      es: [
        'Auditoría y diagnóstico de madurez de datos',
        'Modelado de arquitectura de datos (Data Lakehouse & Mesh)',
        'Establecimiento de políticas de calidad, diccionarios y linaje de datos',
        'Estrategia de monetización interna y externa de activos de información',
      ],
      en: [
        'Data maturity audit and diagnostics',
        'Data architecture modeling (Data Lakehouse & Mesh)',
        'Data quality policies, dictionaries and lineage setup',
        'Internal and external monetization strategy for information assets',
      ],
    },
    benefits: {
      es: [
        'Reducción de hasta un 30% en costos de almacenamiento y reprocesamiento de datos.',
        'Democratización segura: accesibilidad inmediata de datos confiables para los tomadores de decisiones.',
        'Preparación óptima de datos para entrenar modelos de Inteligencia Artificial.',
      ],
      en: [
        'Up to 30% reduction in storage and data-reprocessing costs.',
        'Secure democratization: immediate access to trustworthy data for decision-makers.',
        'Data optimally prepared for training Artificial Intelligence models.',
      ],
    },
    forWho: {
      es: 'Empresas consolidadas con múltiples silos de datos (Retail, Banca, Telcos, Aseguradoras) que buscan operar bajo una única verdad de datos y evitar riesgos regulatorios.',
      en: 'Established companies with multiple data silos (Retail, Banking, Telcos, Insurance) that want to operate on a single source of truth and avoid regulatory risk.',
    },
    metrics: {
      es: ['+40% eficiencia en consultas analíticas', '99% calidad de datos garantizada', '-30% costos de infraestructura cloud'],
      en: ['+40% efficiency in analytical queries', '99% guaranteed data quality', '-30% cloud infrastructure costs'],
    },
  },
  {
    id: 'social-listening',
    title: {
      es: 'Social Listening & NLP Avanzado',
      en: 'Social Listening & Advanced NLP',
    },
    shortDesc: {
      es: 'Análisis automatizado en tiempo real de la conversación digital en LatAm para capturar tendencias, prevenir crisis y entender al consumidor regional.',
      en: 'Real-time automated analysis of digital conversation across LatAm to capture trends, prevent crises and understand the regional consumer.',
    },
    longDesc: {
      es: 'Nuestra plataforma y motores personalizados de Procesamiento de Lenguaje Natural (NLP) están calibrados específicamente para comprender las jergas, modismos y expresiones locales de cada país de Latinoamérica. No solo contamos menciones; interpretamos la intención, la ironía y el sentimiento detrás de millones de publicaciones diarias.',
      en: 'Our platform and custom Natural Language Processing (NLP) engines are calibrated specifically to understand the slang, idioms and local expressions of every LatAm country. We don’t just count mentions; we interpret the intent, irony and sentiment behind millions of daily posts.',
    },
    iconName: 'TrendingUp',
    features: {
      es: [
        'Monitoreo multicanal en vivo (redes sociales, foros, blogs, prensa digital)',
        'Modelos de sentimiento localizados para dialectos latinos (México, Colombia, Chile, etc.)',
        'Sistemas automáticos de alerta temprana y mitigación de crisis reputacionales',
        'Extracción automática de insights de producto para equipos de innovación',
      ],
      en: [
        'Live multichannel monitoring (social networks, forums, blogs, digital press)',
        'Sentiment models localized for Latin dialects (Mexico, Colombia, Chile, etc.)',
        'Automatic early-warning and reputational crisis mitigation systems',
        'Automatic extraction of product insights for innovation teams',
      ],
    },
    benefits: {
      es: [
        'Detección de tendencias emergentes semanas antes de que impacten los reportes tradicionales de mercado.',
        'Respuesta inmediata a quejas de clientes de alto impacto, reduciendo la deserción escolar o comercial (churn).',
        'Estudio preciso de la percepción de marca frente a los principales competidores del sector.',
      ],
      en: [
        'Detect emerging trends weeks before they show up in traditional market reports.',
        'Immediate response to high-impact customer complaints, reducing churn.',
        'Precise measurement of brand perception against the sector’s main competitors.',
      ],
    },
    forWho: {
      es: 'Marcas de consumo masivo, retail, aerolíneas, fintechs y agencias gubernamentales que necesitan sintonizar de manera ultra-precisa con la voz del cliente digital.',
      en: 'Mass-consumer brands, retail, airlines, fintechs and government agencies that need to tune in with ultra-precision to the digital customer’s voice.',
    },
    metrics: {
      es: ['+35% detección de tendencias de mercado', '< 15min tiempo de alerta de crisis', '94% precisión de sentimiento regional'],
      en: ['+35% market trend detection', '< 15min crisis alert time', '94% regional sentiment accuracy'],
    },
  },
  {
    id: 'inteligencia-comercial',
    title: {
      es: 'Inteligencia Comercial y BI de Alta Gama',
      en: 'Commercial Intelligence & Premium BI',
    },
    shortDesc: {
      es: 'Visualizaciones dinámicas y tableros interactivos de última generación para empoderar la toma de decisiones basada en datos comerciales reales.',
      en: 'Dynamic visualizations and next-generation interactive dashboards that empower decisions grounded in real commercial data.',
    },
    longDesc: {
      es: 'Creamos soluciones analíticas que van más allá del clásico reporte estático. Diseñamos dashboards ejecutivos integrados, interactivos e inteligentes que conectan CRM, ERP, pautas publicitarias y canales de ventas en una consola unificada de control en tiempo real.',
      en: 'We build analytics solutions that go beyond the classic static report. We design integrated, interactive, intelligent executive dashboards that connect CRM, ERP, ad spend and sales channels into a single real-time control console.',
    },
    iconName: 'BarChart3',
    features: {
      es: [
        'Estrategia e implementación de Business Intelligence empresarial (PowerBI, Tableau, Looker)',
        'Integración automática de fuentes de marketing digital, ventas físicas y e-commerce',
        'Paneles personalizados para directores y gerentes de territorio en LatAm',
        'Configuración de alertas push comerciales basadas en desviaciones de metas',
      ],
      en: [
        'Enterprise Business Intelligence strategy and rollout (PowerBI, Tableau, Looker)',
        'Automatic integration of digital marketing, in-store sales and e-commerce sources',
        'Custom dashboards for directors and territory managers across LatAm',
        'Push-alert setup for commercial targets and goal deviations',
      ],
    },
    benefits: {
      es: [
        'Visibilidad completa del embudo comercial en un solo vistazo sin necesidad de consolidar Excels manualmente.',
        'Detección instantánea de fugas de ingresos o ineficiencias de conversión por región.',
        'Cultura "Data-Driven" real e inmediata en toda la fuerza de ventas.',
      ],
      en: [
        'Full visibility of the commercial funnel at a glance, with no manual spreadsheet consolidation.',
        'Instant detection of revenue leaks or conversion inefficiencies by region.',
        'A real, immediate data-driven culture across the entire sales force.',
      ],
    },
    forWho: {
      es: 'Equipos comerciales y directores de marketing que pierden valiosas horas semanales consolidando reportes manuales o que operan a ciegas respecto al desempeño diario.',
      en: 'Sales teams and marketing directors losing valuable hours every week consolidating manual reports, or operating blind on day-to-day performance.',
    },
    metrics: {
      es: ['+250 dashboards implementados', '0h semanales perdidas en reportes manuales', '100% visibilidad del margen comercial'],
      en: ['+250 dashboards deployed', '0h/week lost on manual reporting', '100% visibility into commercial margin'],
    },
  },
  {
    id: 'prediccion-ventas',
    title: {
      es: 'Predicción de Ventas e Inventarios',
      en: 'Sales & Inventory Forecasting',
    },
    shortDesc: {
      es: 'Modelos de Machine Learning predictivo para pronosticar la demanda, evitar roturas de stock y optimizar la cadena de suministro.',
      en: 'Predictive Machine Learning models to forecast demand, avoid stockouts and optimize the supply chain.',
    },
    longDesc: {
      es: 'Desarrollamos algoritmos predictivos adaptados a la volatilidad macroeconómica y estacional de Latinoamérica. Cruzamos históricos de ventas con factores externos (clima, eventos locales, inflación, tipo de cambio) para predecir con exactitud qué se venderá, cuándo y dónde.',
      en: 'We build predictive algorithms adapted to LatAm’s macroeconomic and seasonal volatility, cross-referencing sales history with external factors (weather, local events, inflation, exchange rate) to accurately predict what will sell, when and where.',
    },
    iconName: 'Sparkles',
    features: {
      es: [
        'Modelos predictivos de series de tiempo (XGBoost, Prophet, Redes Neuronales LSTM)',
        'Pronóstico dinámico de demanda SKU a nivel de tienda o sucursal',
        'Algoritmos de optimización de niveles de stock de seguridad y órdenes de compra automáticas',
        'Simuladores de escenarios de precios y promociones',
      ],
      en: [
        'Time-series predictive models (XGBoost, Prophet, LSTM neural networks)',
        'Dynamic SKU-level demand forecasting per store or branch',
        'Safety-stock optimization algorithms and automatic purchase orders',
        'Pricing and promotion scenario simulators',
      ],
    },
    benefits: {
      es: [
        'Reducción drástica del capital inmovilizado en bodegas por sobre-stock de productos de baja rotación.',
        'Eliminación de ventas perdidas por quiebres de stock en productos de alta demanda.',
        'Planificación financiera de alta precisión basada en flujos de ingresos proyectados.',
      ],
      en: [
        'Drastic reduction in capital tied up in warehouses due to overstock of slow-moving products.',
        'Elimination of lost sales from stockouts on high-demand products.',
        'High-precision financial planning based on projected revenue flows.',
      ],
    },
    forWho: {
      es: 'Empresas de retail, manufactura, logística y e-commerce con catálogos complejos que buscan optimizar su flujo de caja y rentabilizar su capital de trabajo.',
      en: 'Retail, manufacturing, logistics and e-commerce companies with complex catalogs looking to optimize cash flow and get more out of their working capital.',
    },
    metrics: {
      es: ['-22% stock inactivo en bodegas', '+18% incremento en disponibilidad de stock', '92% exactitud de pronóstico mensual'],
      en: ['-22% idle warehouse stock', '+18% increase in stock availability', '92% monthly forecast accuracy'],
    },
  },
  {
    id: 'consentimiento-blockchain',
    title: {
      es: 'Gestión de Consentimiento de Datos con Blockchain',
      en: 'Blockchain-Based Data Consent Management',
    },
    shortDesc: {
      es: 'Soluciones inmutables y transparentes para la recolección, auditoría y trazabilidad de permisos de privacidad y consentimiento de usuarios.',
      en: 'Immutable, transparent solutions for collecting, auditing and tracing privacy permissions and user consent.',
    },
    longDesc: {
      es: 'Con las crecientes exigencias regulatorias en LatAm (como la Ley de Protección de Datos Personales en Colombia/México y la LGPD en Brasil), las empresas necesitan probar de forma irrefutable que cuentan con la autorización de uso de datos de sus clientes. Diseñamos arquitecturas de "Zero-Trust Ledger" usando blockchain privada para registrar consentimientos de forma inmutable, segura y auditable en milisegundos.',
      en: 'With growing regulatory demands across LatAm (such as the Personal Data Protection Law in Colombia/Mexico and Brazil’s LGPD), companies need irrefutable proof that they hold authorization to use customer data. We design "Zero-Trust Ledger" architectures using private blockchain to record consent immutably, securely and auditably in milliseconds.',
    },
    iconName: 'ShieldCheck',
    features: {
      es: [
        'Registro inmutable en blockchain para autorizaciones de Habeas Data',
        'Integración nativa vía API con formularios de registro, aplicaciones móviles y centros de contacto',
        'Módulo de auditoría automática para compliance legal instantáneo',
        'Portal de autogestión de privacidad para clientes finales',
      ],
      en: [
        'Immutable blockchain record for Habeas Data authorizations',
        'Native API integration with sign-up forms, mobile apps and contact centers',
        'Automatic audit module for instant legal compliance',
        'Self-service privacy portal for end customers',
      ],
    },
    benefits: {
      es: [
        'Blindaje absoluto frente a multas millonarias por uso indebido de bases de datos.',
        'Máxima confianza y transparencia para tus clientes, mejorando la reputación de la marca.',
        'Auditorías internas y regulatorias resueltas en minutos en vez de semanas.',
      ],
      en: [
        'Absolute protection against multi-million fines for misuse of databases.',
        'Maximum trust and transparency for your customers, strengthening brand reputation.',
        'Internal and regulatory audits resolved in minutes instead of weeks.',
      ],
    },
    forWho: {
      es: 'Fintechs, bancos, instituciones de salud y empresas digitales que manejan información sensible de usuarios y requieren un estándar de cumplimiento a prueba de fallas.',
      en: 'Fintechs, banks, healthcare institutions and digital companies that handle sensitive user data and need a fail-proof compliance standard.',
    },
    metrics: {
      es: ['0 incidentes de compliance', '100% inmutabilidad en permisos de datos', '10x velocidad en auditorías legales'],
      en: ['0 compliance incidents', '100% immutability on data permissions', '10x faster legal audits'],
    },
  },
  {
    id: 'implementacion-llm',
    title: {
      es: 'Implementación de LLMs e IA para Negocios',
      en: 'LLM & Business AI Implementation',
    },
    shortDesc: {
      es: 'Despliegue de asistentes de inteligencia artificial privados, sistemas RAG de consulta experta e hiper-automatización inteligente de procesos.',
      en: 'Deployment of private AI assistants, expert-query RAG systems and intelligent hyper-automation of processes.',
    },
    longDesc: {
      es: 'Llevamos el poder de la Inteligencia Artificial generativa a tu infraestructura de forma segura y privada. Diseñamos e implementamos sistemas RAG (Retrieval-Augmented Generation) que permiten a tus colaboradores consultar miles de contratos, manuales, políticas de precios o bases de conocimiento técnico utilizando lenguaje natural, garantizando que tus secretos comerciales nunca salgan de tu nube corporativa.',
      en: 'We bring the power of generative AI to your infrastructure safely and privately. We design and implement RAG (Retrieval-Augmented Generation) systems that let your team query thousands of contracts, manuals, pricing policies or technical knowledge bases in natural language, guaranteeing your trade secrets never leave your corporate cloud.',
    },
    iconName: 'Cpu',
    features: {
      es: [
        'Arquitectura de RAG seguro con LLMs líderes (Gemini, Llama) hospedados de forma privada',
        'Agentes de IA para atención a clientes e internas integrados a ERP/CRM',
        'Automatización inteligente de flujos de trabajo documentales complejos (clasificación, extracción y resumen)',
        'Fine-tuning o ajuste fino de modelos fundacionales con terminología corporativa',
      ],
      en: [
        'Secure RAG architecture with leading LLMs (Gemini, Llama) privately hosted',
        'AI agents for customer and internal support, integrated with ERP/CRM',
        'Intelligent automation of complex document workflows (classification, extraction and summarization)',
        'Fine-tuning of foundation models on your corporate terminology',
      ],
    },
    benefits: {
      es: [
        'Ahorro del 80% del tiempo que dedican analistas y técnicos a buscar información en manuales complejos.',
        'Soporte a clientes de primer nivel 24/7 con respuestas precisas, contextualizadas y libres de alucinaciones.',
        'Aceleración de procesos de onboarding de personal y transferencia de conocimiento corporativo.',
      ],
      en: [
        '80% time savings for analysts and technicians searching complex manuals.',
        '24/7 first-tier customer support with accurate, contextualized, hallucination-free answers.',
        'Faster employee onboarding and corporate knowledge transfer.',
      ],
    },
    forWho: {
      es: 'Organizaciones complejas que desean implementar IA Generativa real para aumentar su productividad y rentabilidad corporativa, sin comprometer la seguridad de sus datos.',
      en: 'Complex organizations that want to implement real generative AI to boost corporate productivity and profitability, without compromising data security.',
    },
    metrics: {
      es: ['-40% tiempo en resolución de incidencias', '+28% incremento en productividad', '100% de aislamiento y privacidad de datos'],
      en: ['-40% incident resolution time', '+28% productivity increase', '100% data isolation and privacy'],
    },
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
    id: 'llm-privados-latam',
    title: {
      es: 'Cómo los Modelos LLM Privados están Transformando la Consulta de Datos Corporativos en LatAm',
      en: 'How Private LLMs Are Transforming Corporate Data Search Across LatAm',
    },
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
  {
    id: 'gobernanza-dama-scaleups',
    title: {
      es: 'Gobernanza de Datos (DAMA) vs. Agilidad: El equilibrio perfecto para Scaleups de LatAm',
      en: 'Data Governance (DAMA) vs. Agility: The Perfect Balance for LatAm Scaleups',
    },
    excerpt: {
      es: '¿La gobernanza frena el crecimiento? Te mostramos cómo adoptar estándares mundiales como DAMA-DMBOK de forma pragmática y sin burocracia.',
      en: 'Does governance slow growth down? We show you how to adopt global standards like DAMA-DMBOK pragmatically, without red tape.',
    },
    category: 'Data Science',
    readTime: { es: '5 min de lectura', en: '5 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '04 de Julio, 2026',
    tags: ['DAMA', 'Gobernanza', 'Data Quality', 'Scaleup'],
    content: { es: '', en: '' },
  },
  {
    id: 'social-listening-espanol-neutro',
    title: {
      es: 'Social Listening en Español: Por qué la jerga regional de LatAm arruina tus modelos tradicionales',
      en: 'Social Listening in Spanish: Why LatAm Regional Slang Breaks Your Traditional Models',
    },
    excerpt: {
      es: '¿"Chido", "bacán", "fome", "parce"? Descubre por qué los algoritmos genéricos de sentimiento fallan rotundamente al analizar el mercado latinoamericano.',
      en: '“Chido”, “bacán”, “fome”, “parce”? Discover why generic sentiment algorithms fail outright when analyzing the Latin American market.',
    },
    category: 'Inteligencia Artificial',
    readTime: { es: '7 min de lectura', en: '7 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '28 de Junio, 2026',
    tags: ['NLP', 'Social Listening', 'Análisis de Sentimiento', 'Retail'],
    content: { es: '', en: '' },
  },
  {
    id: 'modelos-predictivos-inflacion',
    title: {
      es: 'Modelos Predictivos en Tiempos de Volatilidad: Adaptando algoritmos en economías cambiantes',
      en: 'Predictive Models in Times of Volatility: Adapting Algorithms to Shifting Economies',
    },
    excerpt: {
      es: 'Los datos históricos limpios ya no bastan. Cómo integrar variables de contexto macroeconómico para que tu predicción de ventas siga siendo precisa.',
      en: 'Clean historical data is no longer enough. How to integrate macroeconomic context variables to keep your sales forecast accurate.',
    },
    category: 'Data Science',
    readTime: { es: '8 min de lectura', en: '8 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '15 de Junio, 2026',
    tags: ['Machine Learning', 'Predicción', 'Logística', 'Econometría'],
    content: { es: '', en: '' },
  },
  {
    id: 'blockchain-privacidad-habeas-data',
    title: {
      es: 'Blockchain y Privacidad: Cómo cumplir con la Ley de Protección de Datos de forma inmutable',
      en: 'Blockchain & Privacy: How to Comply with Data Protection Law Immutably',
    },
    excerpt: {
      es: 'Una guía para Oficiales de Privacidad sobre el uso de tecnologías de registro distribuido para auditar consentimientos digitales sin vulnerar la criptografía.',
      en: 'A guide for Privacy Officers on using distributed-ledger technology to audit digital consent without breaking the cryptography.',
    },
    category: 'Comercial',
    readTime: { es: '5 min de lectura', en: '5 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '02 de Junio, 2026',
    tags: ['Blockchain', 'Habeas Data', 'Compliance', 'Fintech'],
    content: { es: '', en: '' },
  },
  {
    id: 'de-dashboards-estaticos-a-proactivos',
    title: {
      es: 'De Dashboards Estáticos a Decisiones Proactivas: Rediseñando la Inteligencia Comercial',
      en: 'From Static Dashboards to Proactive Decisions: Redesigning Commercial Intelligence',
    },
    excerpt: {
      es: 'La analítica del pasado ya no es suficiente. Te enseñamos a configurar alertas proactivas y automatizar acciones a partir de tus paneles de BI.',
      en: 'Analytics of the past is no longer enough. We show you how to set up proactive alerts and automate actions from your BI dashboards.',
    },
    category: 'Comercial',
    readTime: { es: '4 min de lectura', en: '4 min read' },
    author: {
      name: 'Anita Sancho',
      role: { es: 'Content Lead en Loopa Technology', en: 'Content Lead at Loopa Technology' },
      avatar: 'AS',
    },
    date: '20 de Mayo, 2026',
    tags: ['BI', 'PowerBI', 'Inteligencia Comercial', 'Dashboards'],
    content: { es: '', en: '' },
  },
];

export const ABOUT_TEAM: TeamMember[] = [
  {
    name: 'Ing. Alejandro Soler',
    role: {
      es: 'Co-Founder & Director de Inteligencia Artificial',
      en: 'Co-Founder & Director of Artificial Intelligence',
    },
    bio: {
      es: 'Ex-Data Scientist en gigantes tecnológicos de Silicon Valley. Especialista en arquitecturas de redes neuronales aplicadas a la optimización de procesos logísticos e IA Generativa empresarial.',
      en: 'Former Data Scientist at Silicon Valley tech giants. Specialist in neural network architectures applied to logistics optimization and enterprise generative AI.',
    },
    avatarSeed: 'alejandro',
  },
  {
    name: 'Camila Rossi',
    role: {
      es: 'Socia de Gobernanza de Datos & BI',
      en: 'Partner, Data Governance & BI',
    },
    bio: {
      es: 'Certificada por CDMP DAMA Internacional. Ha diseñado los planes maestros de gobernanza de dos de los bancos más grandes de la región andina. Apasionada por democratizar el acceso a datos limpios.',
      en: 'CDMP-certified by DAMA International. Has designed governance master plans for two of the largest banks in the Andean region. Passionate about democratizing access to clean data.',
    },
    avatarSeed: 'camila',
  },
  {
    name: 'Dr. Hugo Mendoza',
    role: {
      es: 'Lead de NLP & Procesamiento de Lenguaje',
      en: 'Lead, NLP & Language Processing',
    },
    bio: {
      es: 'Ph.D. en Ciencias de la Computación con enfoque en Lingüística Computacional. Creador de los algoritmos de traducción y análisis de dialectos latinos de Loopa Technology.',
      en: 'Ph.D. in Computer Science focused on Computational Linguistics. Creator of Loopa Technology’s translation and Latin-dialect analysis algorithms.',
    },
    avatarSeed: 'hugo',
  },
  {
    name: 'Sofia Varela',
    role: {
      es: 'Directora de Consultoría y Éxito de Clientes',
      en: 'Director of Consulting & Customer Success',
    },
    bio: {
      es: 'Especialista en transformación digital ágil. Con más de 12 años liderando equipos de entrega de software analítico para retail de consumo masivo en México y Centroamérica.',
      en: 'Specialist in agile digital transformation. Over 12 years leading analytics software delivery teams for mass-consumer retail in Mexico and Central America.',
    },
    avatarSeed: 'sofia',
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
