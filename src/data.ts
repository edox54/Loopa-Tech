import { Service, ProjectCase, BlogPost, TeamMember, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'rentabilizacion-gobernanza',
    title: 'Rentabilización y Gobernanza de Datos',
    shortDesc: 'Diseño de arquitecturas modernas y marcos de gobernanza bajo estándares globales para transformar datos crudos en activos rentables y seguros.',
    longDesc: 'Ayudamos a grandes corporativos y scaleups de LatAm a mapear, estructurar, catalogar y monetizar sus fuentes de información. Implementamos marcos ágiles alineados con DAMA-DMBOK que garantizan la calidad de datos, reducen costos operativos y abren nuevas líneas de ingresos basadas en datos.',
    iconName: 'Database',
    features: [
      'Auditoría y diagnóstico de madurez de datos',
      'Modelado de arquitectura de datos (Data Lakehouse & Mesh)',
      'Establecimiento de políticas de calidad, diccionarios y linaje de datos',
      'Estrategia de monetización interna y externa de activos de información'
    ],
    benefits: [
      'Reducción de hasta un 30% en costos de almacenamiento y reprocesamiento de datos.',
      'Democratización segura: accesibilidad inmediata de datos confiables para los tomadores de decisiones.',
      'Preparación óptima de datos para entrenar modelos de Inteligencia Artificial.'
    ],
    forWho: 'Empresas consolidadas con múltiples silos de datos (Retail, Banca, Telcos, Aseguradoras) que buscan operar bajo una única verdad de datos y evitar riesgos regulatorios.',
    metrics: ['+40% eficiencia en consultas analíticas', '99% calidad de datos garantizada', '-30% costos de infraestructura cloud']
  },
  {
    id: 'social-listening',
    title: 'Social Listening & NLP Avanzado',
    shortDesc: 'Análisis automatizado en tiempo real de la conversación digital en LatAm para capturar tendencias, prevenir crisis y entender al consumidor regional.',
    longDesc: 'Nuestra plataforma y motores personalizados de Procesamiento de Lenguaje Natural (NLP) están calibrados específicamente para comprender las jergas, modismos y expresiones locales de cada país de Latinoamérica. No solo contamos menciones; interpretamos la intención, la ironía y el sentimiento detrás de millones de publicaciones diarias.',
    iconName: 'TrendingUp',
    features: [
      'Monitoreo multicanal en vivo (redes sociales, foros, blogs, prensa digital)',
      'Modelos de sentimiento localizados para dialectos latinos (México, Colombia, Chile, etc.)',
      'Sistemas automáticos de alerta temprana y mitigación de crisis reputacionales',
      'Extracción automática de insights de producto para equipos de innovación'
    ],
    benefits: [
      'Detección de tendencias emergentes semanas antes de que impacten los reportes tradicionales de mercado.',
      'Respuesta inmediata a quejas de clientes de alto impacto, reduciendo la deserción escolar o comercial (churn).',
      'Estudio preciso de la percepción de marca frente a los principales competidores del sector.'
    ],
    forWho: 'Marcas de consumo masivo, retail, aerolíneas, fintechs y agencias gubernamentales que necesitan sintonizar de manera ultra-precisa con la voz del cliente digital.',
    metrics: ['+35% detección de tendencias de mercado', '< 15min tiempo de alerta de crisis', '94% precisión de sentimiento regional']
  },
  {
    id: 'inteligencia-comercial',
    title: 'Inteligencia Comercial y BI de Alta Gama',
    shortDesc: 'Visualizaciones dinámicas y tableros interactivos de última generación para empoderar la toma de decisiones basada en datos comerciales reales.',
    longDesc: 'Creamos soluciones analíticas que van más allá del clásico reporte estático. Diseñamos dashboards ejecutivos integrados, interactivos e inteligentes que conectan CRM, ERP, pautas publicitarias y canales de ventas en una consola unificada de control en tiempo real.',
    iconName: 'BarChart3',
    features: [
      'Estrategia e implementación de Business Intelligence empresarial (PowerBI, Tableau, Looker)',
      'Integración automática de fuentes de marketing digital, ventas físicas y e-commerce',
      'Paneles personalizados para directores y gerentes de territorio en LatAm',
      'Configuración de alertas push comerciales basadas en desviaciones de metas'
    ],
    benefits: [
      'Visibilidad completa del embudo comercial en un solo vistazo sin necesidad de consolidar Excels manualmente.',
      'Detección instantánea de fugas de ingresos o ineficiencias de conversión por región.',
      'Cultura "Data-Driven" real e inmediata en toda la fuerza de ventas.'
    ],
    forWho: 'Equipos comerciales y directores de marketing que pierden valiosas horas semanales consolidando reportes manuales o que operan a ciegas respecto al desempeño diario.',
    metrics: ['+250 dashboards implementados', '0h semanales perdidas en reportes manuales', '100% visibilidad del margen comercial']
  },
  {
    id: 'prediccion-ventas',
    title: 'Predicción de Ventas e Inventarios',
    shortDesc: 'Modelos de Machine Learning predictivo para pronosticar la demanda, evitar roturas de stock y optimizar la cadena de suministro.',
    longDesc: 'Desarrollamos algoritmos predictivos adaptados a la volatilidad macroeconómica y estacional de Latinoamérica. Cruzamos históricos de ventas con factores externos (clima, eventos locales, inflación, tipo de cambio) para predecir con exactitud qué se venderá, cuándo y dónde.',
    iconName: 'Sparkles',
    features: [
      'Modelos predictivos de series de tiempo (XGBoost, Prophet, Redes Neuronales LSTM)',
      'Pronóstico dinámico de demanda SKU a nivel de tienda o sucursal',
      'Algoritmos de optimización de niveles de stock de seguridad y órdenes de compra automáticas',
      'Simuladores de escenarios de precios y promociones'
    ],
    benefits: [
      'Reducción drástica del capital inmovilizado en bodegas por sobre-stock de productos de baja rotación.',
      'Eliminación de ventas perdidas por quiebres de stock en productos de alta demanda.',
      'Planificación financiera de alta precisión basada en flujos de ingresos proyectados.'
    ],
    forWho: 'Empresas de retail, manufactura, logística y e-commerce con catálogos complejos que buscan optimizar su flujo de caja y rentabilizar su capital de trabajo.',
    metrics: ['-22% stock inactivo en bodegas', '+18% incremento en disponibilidad de stock', '92% exactitud de pronóstico mensual']
  },
  {
    id: 'consentimiento-blockchain',
    title: 'Gestión de Consentimiento de Datos con Blockchain',
    shortDesc: 'Soluciones inmutables y transparentes para la recolección, auditoría y trazabilidad de permisos de privacidad y consentimiento de usuarios.',
    longDesc: 'Con las crecientes exigencias regulatorias en LatAm (como la Ley de Protección de Datos Personales en Colombia/México y la LGPD en Brasil), las empresas necesitan probar de forma irrefutable que cuentan con la autorización de uso de datos de sus clientes. Diseñamos arquitecturas de "Zero-Trust Ledger" usando blockchain privada para registrar consentimientos de forma inmutable, segura y auditable en milisegundos.',
    iconName: 'ShieldCheck',
    features: [
      'Registro inmutable en blockchain para autorizaciones de Habeas Data',
      'Integración nativa vía API con formularios de registro, aplicaciones móviles y centros de contacto',
      'Módulo de auditoría automática para compliance legal instantáneo',
      'Portal de autogestión de privacidad para clientes finales'
    ],
    benefits: [
      'Blindaje absoluto frente a multas millonarias por uso indebido de bases de datos.',
      'Máxima confianza y transparencia para tus clientes, mejorando la reputación de la marca.',
      'Auditorías internas y regulatorias resueltas en minutos en vez de semanas.'
    ],
    forWho: 'Fintechs, bancos, instituciones de salud y empresas digitales que manejan información sensible de usuarios y requieren un estándar de cumplimiento a prueba de fallas.',
    metrics: ['0 incidentes de compliance', '100% inmutabilidad en permisos de datos', '10x velocidad en auditorías legales']
  },
  {
    id: 'implementacion-llm',
    title: 'Implementación de LLMs e IA para Negocios',
    shortDesc: 'Despliegue de asistentes de inteligencia artificial privados, sistemas RAG de consulta experta e hiper-automatización inteligente de procesos.',
    longDesc: 'Llevamos el poder de la Inteligencia Artificial generativa a tu infraestructura de forma segura y privada. Diseñamos e implementamos sistemas RAG (Retrieval-Augmented Generation) que permiten a tus colaboradores consultar miles de contratos, manuales, políticas de precios o bases de conocimiento técnico utilizando lenguaje natural, garantizando que tus secretos comerciales nunca salgan de tu nube corporativa.',
    iconName: 'Cpu',
    features: [
      'Arquitectura de RAG seguro con LLMs líderes (Gemini, Llama) hospedados de forma privada',
      'Agentes de IA para atención a clientes e internas integrados a ERP/CRM',
      'Automatización inteligente de flujos de trabajo documentales complejos (clasificación, extracción y resumen)',
      'Fine-tuning o ajuste fino de modelos fundacionales con terminología corporativa'
    ],
    benefits: [
      'Ahorro del 80% del tiempo que dedican analistas y técnicos a buscar información en manuales complejos.',
      'Soporte a clientes de primer nivel 24/7 con respuestas precisas, contextualizadas y libres de alucinaciones.',
      'Aceleración de procesos de onboarding de personal y transferencia de conocimiento corporativo.'
    ],
    forWho: 'Organizaciones complejas que desean implementar IA Generativa real para aumentar su productividad y rentabilidad corporativa, sin comprometer la seguridad de sus datos.',
    metrics: ['-40% tiempo en resolución de incidencias', '+28% incremento en productividad', '100% de aislamiento y privacidad de datos']
  }
];

export const CLIENTS_LOGOS = [
  { name: 'Grupo Alfa Retail', type: 'Retail líder en MX' },
  { name: 'FinanzLatam', type: 'Fintech pionera' },
  { name: 'Minera del Sur', type: 'Logística e industrial' },
  { name: 'Pacífico Aseguradora', type: 'Seguros y finanzas' },
  { name: 'TeleAndina', type: 'Telecomunicaciones' },
  { name: 'LogiLatam Corp', type: 'Cadena de suministro' }
];

export const SUCCESS_CASES_DATA: ProjectCase[] = [
  {
    id: 'social-listening-retail',
    title: 'Predicción de tendencias de mercado con NLP avanzado en consumo masivo',
    client: 'Almacenes del Centro',
    industry: 'Retail & Consumer Goods',
    shortDesc: 'Monitoreo dinámico del lenguaje informal y modismos regionales en LatAm para predecir la demanda de productos virales.',
    challenge: 'Un importante minorista regional con operaciones en México y Colombia no lograba anticiparse a la viralización de tendencias de moda y belleza generadas en plataformas como TikTok, lo que provocaba roturas constantes de inventario de productos de alta velocidad o sobrecompras tardías.',
    solution: 'Desplegamos un motor de Social Listening con NLP avanzado calibrado para español de México y Colombia. El sistema procesa millones de publicaciones diarias, identificando marcas emergentes y asignándoles una puntuación de aceleración de tendencia. Esta información se conectó directamente con el modelo de compras del ERP.',
    results: [
      'Incremento de +35% en la detección temprana de productos con alto potencial viral.',
      'Reducción de un 22% de inventario muerto o stock inactivo comprado tardíamente.',
      '94% de precisión en la categorización de sentimiento de usuarios locales hacia marcas piloto.'
    ],
    metrics: [
      { value: '+35%', label: 'Detección temprana de tendencias' },
      { value: '-22%', label: 'Capital inmovilizado' },
      { value: '94%', label: 'Precisión de sentimiento local' }
    ],
    tag: 'Social Listening',
    date: 'Mayo, 2026'
  },
  {
    id: 'inventario-predictivo-logistica',
    title: 'Optimización predictiva de suministro para distribuidora de consumo',
    client: 'Distribuidora Los Andes',
    industry: 'CPG & Logistics',
    shortDesc: 'Ajuste de algoritmos de demanda que reducen sobrestock mediante análisis dinámico de estacionalidad e inflación regional.',
    challenge: 'La alta inflación y variabilidad de costos de combustibles en el cono sur hacía que los modelos históricos lineales fallaran al estimar la compra de alimentos de larga duración, provocando excesos de inventario que mermaban el margen de ganancia.',
    solution: 'Implementamos un modelo predictivo basado en Machine Learning (XGBoost de series temporales) que integra variables externas como el IPC local, precios de transporte, días festivos y tendencias climáticas para generar un pronóstico dinámico diario por SKU y centro de distribución.',
    results: [
      'Ahorro neto de 1.4M USD anuales en costos de bodegaje y reducción del sobrestock de seguridad.',
      'Incremento del margen operativo de la división de consumo en un 18%.',
      'Disponibilidad del 99.4% en productos de la canasta básica familiar sin incurrir en costos extras.'
    ],
    metrics: [
      { value: '1.4M USD', label: 'Ahorro anual consolidado' },
      { value: '+18%', label: 'Incremento de margen operativo' },
      { value: '99.4%', label: 'Disponibilidad de stock crítico' }
    ],
    tag: 'Predicción de Ventas',
    date: 'Febrero, 2026'
  },
  {
    id: 'consentimiento-blockchain-fintech',
    title: 'Resguardo de consentimiento Habeas Data con Blockchain para microcréditos',
    client: 'CrediYa LatAm',
    industry: 'Fintech & Finanzas',
    shortDesc: 'Arquitectura inmutable de firmas y consentimientos de tratamiento de información sensible.',
    challenge: 'CrediYa requería expandir sus microcréditos ágiles en Perú y Colombia, pero el flujo manual de recolección de firmas de aceptación de términos de privacidad era lento y vulnerable a auditorías del regulador financiero, entorpeciendo el onboarding digital.',
    solution: 'Desarrollamos una API middleware ultra-rápida conectada con Hyperledger Fabric. Cada vez que un usuario aprueba los términos en la app, se genera una huella criptográfica SHA-256 única que se escribe inmutablemente en el ledger blockchain, permitiendo auditorías regulatorias instantáneas en tiempo real.',
    results: [
      'Cumplimiento regulatorio del 100% verificado bajo auditoría externa con cero observaciones.',
      'Reducción del tiempo de aprobación del crédito de 24 horas a solo 5 minutos.',
      'Ahorro del 85% en costos operativos de archivo, control documental y resolución de reclamos.'
    ],
    metrics: [
      { value: '100%', label: 'Cumplimiento de auditoría' },
      { value: '5 min', label: 'Tiempo de onboarding digital' },
      { value: '0', label: 'Reclamos por uso indebido' }
    ],
    tag: 'Blockchain Consentimiento',
    date: 'Noviembre, 2025'
  },
  {
    id: 'asistente-llm-energia',
    title: 'IA Generativa con RAG privado para soporte logístico en campo',
    client: 'TeleBrasil Corp',
    industry: 'Telecomunicaciones & Energía',
    shortDesc: 'Asistente experto de inteligencia artificial entrenado para consultar miles de manuales técnicos en campo.',
    challenge: 'Los técnicos de mantenimiento en campo perdían un promedio de 45 minutos buscando especificaciones técnicas específicas en pesados catálogos PDF en áreas con baja conectividad, ralentizando el mantenimiento y aumentando fallos operativos.',
    solution: 'Diseñamos un sistema RAG privado montado sobre infraestructuras seguras del cliente. Compilamos, limpiamos e indexamos más de 12,000 manuales, diagramas eléctricos y guías de servicio. El asistente interactúa por comandos de voz e interfaces móviles, respondiendo con esquemas precisos y pasos a seguir en segundos.',
    results: [
      'Reducción promedio de un 40% en el tiempo necesario para resolver fallas de hardware complejas.',
      'Aumento del 28% en la productividad diaria de las brigadas técnicas de campo.',
      'Cero fugas de información o uso de datos corporativos confidenciales fuera de los servidores de la empresa.'
    ],
    metrics: [
      { value: '-40%', label: 'Tiempo de resolución de fallas' },
      { value: '+28%', label: 'Productividad de brigadas' },
      { value: '100%', label: 'Datos corporativos aislados' }
    ],
    tag: 'Implementación LLMs',
    date: 'Marzo, 2026'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'llm-privados-latam',
    title: 'Cómo los Modelos LLM Privados están Transformando la Consulta de Datos Corporativos en LatAm',
    excerpt: '¿Por qué enviar los datos de tus clientes a APIs públicas es un riesgo reputacional letal? Analizamos el surgimiento del RAG privado y seguro para corporativos.',
    category: 'Inteligencia Artificial',
    readTime: '6 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '10 de Julio, 2026',
    tags: ['LLMs', 'Vertex AI', 'Seguridad de Datos', 'RAG'],
    content: `
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
    `
  },
  {
    id: 'gobernanza-dama-scaleups',
    title: 'Gobernanza de Datos (DAMA) vs. Agilidad: El equilibrio perfecto para Scaleups de LatAm',
    excerpt: '¿La gobernanza frena el crecimiento? Te mostramos cómo adoptar estándares mundiales como DAMA-DMBOK de forma pragmática y sin burocracia.',
    category: 'Data Science',
    readTime: '5 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '04 de Julio, 2026',
    tags: ['DAMA', 'Gobernanza', 'Data Quality', 'Scaleup'],
    content: ''
  },
  {
    id: 'social-listening-espanol-neutro',
    title: 'Social Listening en Español: Por qué la jerga regional de LatAm arruina tus modelos tradicionales',
    excerpt: '¿"Chido", "bacán", "fome", "parce"? Descubre por qué los algoritmos genéricos de sentimiento fallan rotundamente al analizar el mercado latinoamericano.',
    category: 'Inteligencia Artificial',
    readTime: '7 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '28 de Junio, 2026',
    tags: ['NLP', 'Social Listening', 'Análisis de Sentimiento', 'Retail'],
    content: ''
  },
  {
    id: 'modelos-predictivos-inflacion',
    title: 'Modelos Predictivos en Tiempos de Volatilidad: Adaptando algoritmos en economías cambiantes',
    excerpt: 'Los datos históricos limpios ya no bastan. Cómo integrar variables de contexto macroeconómico para que tu predicción de ventas siga siendo precisa.',
    category: 'Data Science',
    readTime: '8 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '15 de Junio, 2026',
    tags: ['Machine Learning', 'Predicción', 'Logística', 'Econometría'],
    content: ''
  },
  {
    id: 'blockchain-privacidad-habeas-data',
    title: 'Blockchain y Privacidad: Cómo cumplir con la Ley de Protección de Datos de forma inmutable',
    excerpt: 'Una guía para Oficiales de Privacidad sobre el uso de tecnologías de registro distribuido para auditar consentimientos digitales sin vulnerar la criptografía.',
    category: 'Comercial',
    readTime: '5 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '02 de Junio, 2026',
    tags: ['Blockchain', 'Habeas Data', 'Compliance', 'Fintech'],
    content: ''
  },
  {
    id: 'de-dashboards-estaticos-a-proactivos',
    title: 'De Dashboards Estáticos a Decisiones Proactivas: Rediseñando la Inteligencia Comercial',
    excerpt: 'La analítica del pasado ya no es suficiente. Te enseñamos a configurar alertas proactivas y automatizar acciones a partir de tus paneles de BI.',
    category: 'Comercial',
    readTime: '4 min de lectura',
    author: {
      name: 'Anita Sancho',
      role: 'Content Lead en Loopa Technology',
      avatar: 'AS'
    },
    date: '20 de Mayo, 2026',
    tags: ['BI', 'PowerBI', 'Inteligencia Comercial', 'Dashboards'],
    content: ''
  }
];

export const ABOUT_TEAM: TeamMember[] = [
  {
    name: 'Ing. Alejandro Soler',
    role: 'Co-Founder & Director de Inteligencia Artificial',
    bio: 'Ex-Data Scientist en gigantes tecnológicos de Silicon Valley. Especialista en arquitecturas de redes neuronales aplicadas a la optimización de procesos logísticos e IA Generativa empresarial.',
    avatarSeed: 'alejandro'
  },
  {
    name: 'Camila Rossi',
    role: 'Socia de Gobernanza de Datos & BI',
    bio: 'Certificada por CDMP DAMA Internacional. Ha diseñado los planes maestros de gobernanza de dos de los bancos más grandes de la región andina. Apasionada por democratizar el acceso a datos limpios.',
    avatarSeed: 'camila'
  },
  {
    name: 'Dr. Hugo Mendoza',
    role: 'Lead de NLP & Procesamiento de Lenguaje',
    bio: 'Ph.D. en Ciencias de la Computación con enfoque en Lingüística Computacional. Creador de los algoritmos de traducción y análisis de dialectos latinos de Loopa Technology.',
    avatarSeed: 'hugo'
  },
  {
    name: 'Sofia Varela',
    role: 'Directora de Consultoría y Éxito de Clientes',
    bio: 'Especialista en transformación digital ágil. Con más de 12 años liderando equipos de entrega de software analítico para retail de consumo masivo en México y Centroamérica.',
    avatarSeed: 'sofia'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: '¿Cómo garantizan la seguridad de nuestra información corporativa al implementar LLMs?',
    answer: 'Implementamos arquitecturas de aislamiento absoluto de datos corporativos a través de entornos cloud privados y sistemas RAG (Retrieval-Augmented Generation). Su información nunca es enviada para re-entrenar modelos públicos (como el ChatGPT de consumo masivo). Todo el procesamiento se realiza en servidores dedicados bajo su control con cifrado de datos en reposo y en tránsito.'
  },
  {
    question: '¿En qué consiste la rentabilización de datos y cómo genera un retorno de inversión (ROI) directo?',
    answer: 'La rentabilización de datos consiste en identificar fuentes ocultas de información dentro de su empresa (logs de sistemas, datos transaccionales de clientes, comportamientos de navegación) y convertirlas en activos para tomar decisiones inmediatas que ahorran dinero o crean productos de valor. El ROI se ve reflejado en la reducción drástica de reprocesos, la disminución en costos de almacenamiento redundante (-30%) y el aumento de la conversión comercial al hiper-personalizar ofertas de venta.'
  },
  {
    question: '¿Por qué utilizan tecnología Blockchain para la gestión del consentimiento de datos?',
    answer: 'Bajo las actuales regulaciones de protección de datos (como la Ley de Protección de Datos de Colombia, México o la LGPD en Brasil), las empresas tienen la carga de la prueba en caso de que un cliente reclame sobre el uso de sus datos. Un registro blockchain descentralizado genera una huella inmutable del consentimiento del usuario. Esto previene alteraciones de datos, ofrece una bitácora auditada en milisegundos y blinda legalmente a la empresa frente a multas sin necesidad de almacenar costosos archivos de papel.'
  },
  {
    question: '¿Cuánto tiempo toma ver resultados en un proyecto de predicción de inventario o ventas?',
    answer: 'Nuestras implementaciones de analítica predictiva operan bajo fases de valor ágiles. Una fase inicial de ingesta de datos e ingeniería de variables toma de 4 a 6 semanas. La calibración del primer modelo predictivo estable toma unas 4 semanas adicionales, con lo cual un cliente típico comienza a percibir reducciones en stock inmovilizado y optimización de flujos de caja en menos de 90 días desde el inicio del proyecto.'
  },
  {
    question: '¿Nuestros sistemas actuales (ERP SAP, Salesforce CRM) son compatibles con las soluciones de Loopa?',
    answer: 'Sí, absolutamente. Todas nuestras soluciones se diseñan bajo un enfoque API-First y agnóstico de plataforma. Tenemos amplia experiencia integrando fuentes de datos provenientes de SAP, Oracle, Microsoft Dynamics, Salesforce, Hubspot, bases de datos tradicionales (PostgreSQL, SQL Server) y modernas arquitecturas cloud en Google Cloud Platform, AWS o Azure.'
  }
];
