export interface ServiceLine {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  specs: { item: string; detail: string }[];
  image: string;
}

export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  keyBenefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'refrigeracion' | 'pinturas' | 'limpieza' | 'fumigacion' | 'metalica';
  location: string;
  duration: string;
  imageBefore: string;
  imageAfter: string;
  summary: string;
  highlights: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const SERVICES_CATALOG: ServiceLine[] = [
  {
    id: 'hvac-refrigeracion',
    slug: 'refrigeracion',
    title: 'Mantenimiento de Sistemas de Refrigeración & HVAC',
    subtitle: 'Soluciones térmicas industriales, comerciales y hospitalarias',
    description: 'Mantenimiento preventivo, correctivo, recarga de refrigerantes ecologicos, diseño de ductos, instalación de chillers y construcción de cuartos fríos de alta precisión.',
    iconName: 'Snowflake',
    badge: 'Línea Estrella',
    features: [
      'Mantenimiento preventivo y correctivo especializado',
      'Lavado químico de serpentines evaporadores y condensadores',
      'Recarga de gas refrigerante R410A, R32, R134A y R22',
      'Instalación de Mini Split, Cassette, Piso Techo, VRF y Centrales',
      'Diseño, automatización y montaje de Cuartos Fríos',
      'Certificación de presión, temperatura y vacíos técnicos'
    ],
    specs: [
      { item: 'Mantenimiento Preventivo', detail: 'Limpieza con hidrolavadora, desinfección, revisión eléctrica, amperaje y filtros' },
      { item: 'Mantenimiento Correctivo', detail: 'Diagnóstico computarizado de fallas, cambio de compresor, fugas y tarjetas' },
      { item: 'Sistemas VRF & Centrales', detail: 'Monitoreo de frecuencia variable y balanceo de ductos industriales' },
      { item: 'Garantía Directa', detail: 'Garantía extendida de hasta 12 meses en mantenimientos ejecutados' }
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pinturas-acabados',
    slug: 'pinturas',
    title: 'Pinturas & Acabados Industriales',
    subtitle: 'Protección epóxica, impermeabilización y restauración estética',
    description: 'Aplicación de recubrimientos de alta durabilidad, estuco industrial, resanes de fachadas, pintura anticorrosiva e impermeabilización de placas y cubiertas.',
    iconName: 'Paintbrush',
    badge: 'Protección Estructural',
    features: [
      'Pintura epóxica de grado sanitario e industrial',
      'Impermeabilización termofusionada y acrílica de cubiertas',
      'Pintura exterior e interior de edificios y torres comerciales',
      'Resanes de grietas estructurales, estuco y microcemento',
      'Adecuación de acabados arquitectónicos en techos y muros',
      'Lavado con agua a alta presión previo a aplicación'
    ],
    specs: [
      { item: 'Impermeabilización', detail: 'Garantía de 5 a 10 años en impermeabilizaciones de losas' },
      { item: 'Pintura Epóxica', detail: 'Cumplimiento de norma invima para plantas de alimentos y clínicas' },
      { item: 'Trabajo en Altura', detail: 'Personal 100% certificado en alturas con líneas de vida' }
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'limpieza-desinfeccion',
    slug: 'limpieza',
    title: 'Limpieza Profunda & Desinfección Institucional',
    subtitle: 'Protocolos de bioseguridad y sanitización certificada',
    description: 'Servicios especializados de limpieza profunda para instalaciones comerciales, oficinas, centros hospitalarios, zonas de manipulación de alimentos y naves industriales.',
    iconName: 'Sparkles',
    badge: 'Certificado Bioseguro',
    features: [
      'Sanitización y nebulización de áreas críticas',
      'Limpieza profunda post-construcción y entregas de obra',
      'Mantenimiento periódico institucionales y comerciales',
      'Tratamiento y cristalizado de pisos duros e industriales',
      'Limpieza de conductos de aire y campanas extractoras',
      'Uso de insumos biodegradables y bactericidas de espectro amplio'
    ],
    specs: [
      { item: 'Desinfección UV/Nebulización', detail: 'Eliminación del 99.9% de patógenos y hongos' },
      { item: 'Personal Fijo o Por Horas', detail: 'Esquemas adaptables a la jornada operativa del cliente' }
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'fumigacion-plagas',
    slug: 'fumigacion',
    title: 'Fumigación & Control Integrado de Plagas (MIP)',
    subtitle: 'Protección sanitaria y control de vectores',
    description: 'Programas de manejo integrado de plagas, desratización, desinsectación y control microbiológico con certificación válida ante entes territoriales de salud.',
    iconName: 'ShieldAlert',
    badge: 'Normativa Sanitaria',
    features: [
      'Control integral de roedores, rastreros y voladores',
      'Tratamiento térmico y químico de alta eficacia sin olor',
      'Emisión de Certificado Sanitario de Fumigación para auditorías',
      'Programas de inspección y cebado periódicos para empresas',
      'Mapeo de puntos críticos de control y cebado entomológico',
      'Productos aprobados por Ministerio de Salud y Protección Social'
    ],
    specs: [
      { item: 'Certificación Oficial', detail: 'Documentación apta para INVIMA y Secretarías de Salud' },
      { item: 'Sin Evacuación Larga', detail: 'Tecnología de geles y cebos sin suspensión de labores' }
    ],
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'metalica-soldadura',
    slug: 'metalica',
    title: 'Fabricación & Mantenimiento Metalmecánico',
    subtitle: 'Ingeniería en estructuras, puertas industriales y soldadura',
    description: 'Fabricación a medida de estructuras metálicas, cerramientos, portones, mesas en acero inoxidable para cocina/laboratorios y mantenimiento corretivo de soldadura.',
    iconName: 'Hammer',
    badge: 'Ingeniería Metálica',
    features: [
      'Fabricación de cubiertas y cerramientos perimetrales',
      'Soldadura eléctrica, TIG y MIG certificada',
      'Fabricación de puertas industriales, rejas y pasamanos',
      'Mobiliario inox para cocinas industriales y laboratorios',
      'Refuerzos estructurales y reparación de portones automáticos',
      'Tratamiento anticorrosivo y galvanizado en caliente'
    ],
    specs: [
      { item: 'Norma de Soldadura', detail: 'Procedimientos bajo criterios AWS D1.1' },
      { item: 'Acero Inoxidable 304/316', detail: 'Fabricación higiénica para sector alimentario' }
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: 'hoteles',
    title: 'Hoteles & Hospedaje',
    subtitle: 'Climatización ininterrumpida y acabados de lujo',
    description: 'Soluciones 24/7 de HVAC, pintura de fachadas e higienización para mantener altísimos estándares de satisfacción en huéspedes.',
    icon: 'Hotel',
    keyBenefits: ['Mantenimiento preventivo nocturno', 'Filtros bactericidas silenciosos', 'Respuesta en urgencias en < 2h']
  },
  {
    id: 'restaurantes',
    title: 'Restaurantes & Gastronomía',
    subtitle: 'Manejo de cuartos fríos y control sanitario de plagas',
    description: 'Refrigeración crítica de insumos, mantenimiento de extractores inox y certificación MIP requerida por la secretaría de salud.',
    icon: 'Utensils',
    keyBenefits: ['Certificado de Fumigación INVIMA', 'Reparación de cuartos fríos express', 'Mantenimiento de campanas inox']
  },
  {
    id: 'clinicas-ips',
    title: 'Clínicas, IPS & Laboratorios',
    subtitle: 'Aire filtrado HEPA y sanitización estéril',
    description: 'Mantenimiento estricto de climatización médica, aire con filtración HEPA, pintura epóxica libre de VOC y bio-desinfección.',
    icon: 'Activity',
    keyBenefits: ['Filtración de bioseguridad', 'Pinturas de grado sanitario', 'Planes de mantenimiento bajo norma ISO']
  },
  {
    id: 'industria-bodegas',
    title: 'Industria & Plantas de Producción',
    subtitle: 'Mantenimiento preventivo de alto tonelaje',
    description: 'Chillers industriales, estructuras metálicas pesadas, impermeabilización de naves y limpieza de superficies de alto impacto.',
    icon: 'Factory',
    keyBenefits: ['Ingenieros certificados SST', 'Mantenimiento de Chillers & VRF', 'Adecuación de pisos epóxicos']
  },
  {
    id: 'centros-comerciales',
    title: 'Centros Comerciales & Retail',
    subtitle: 'Continuidad operativa y presentación impecable',
    description: 'Mantenimiento integral de aire central en plazas de comidas, pintura perimetral y sanitización profunda periódica.',
    icon: 'ShoppingBag',
    keyBenefits: ['Trabajo nocturno sin interrumpir público', 'Mantenimiento de ductos principales', 'Control preventivo de vectores']
  },
  {
    id: 'conjuntos-residenciales',
    title: 'Conjuntos & Copropiedades',
    subtitle: 'Cuidado valorizador de áreas comunes',
    description: 'Mantenimiento metálico de rejas y portones, pintura de torres, impermeabilización de terrazas y fumigación periódica.',
    icon: 'Building2',
    keyBenefits: ['Planes de pago para copropiedades', 'Garantía por escrito para administradores', 'Mantenimiento integral 360°']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Optimización de Sistema HVAC Central & Cuartos Fríos',
    client: 'Cadena Hotelera Caribe Premier',
    category: 'refrigeracion',
    location: 'Cartagena, Bolívar',
    duration: '15 días',
    imageBefore: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    summary: 'Restauración completa de serpentines de condensación con sarro costero, reconversión de gas ecológico R410A y desinfección ultrasónica.',
    highlights: ['Reducción del 28% en consumo eléctrico', 'Eliminación del 100% de ruido vibratorio', 'Certificado de eficiencia térmica']
  },
  {
    id: 'p2',
    title: 'Impermeabilización Epóxica & Pintura Sanitaria IPS',
    client: 'Centro Médico Especializado del Norte',
    category: 'pinturas',
    location: 'Barranquilla, Atlántico',
    duration: '8 días',
    imageBefore: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    summary: 'Aplicación de 1,200 m² de recubrimiento epóxico lavable biocida en salas de cirugía y pasillos asistenciales sin detener operaciones.',
    highlights: ['Pintura antibacterial de alta resistencia', 'Acabado brillo espejo antideslizante', 'Aprobación inmediata de auditoría de salud']
  },
  {
    id: 'p3',
    title: 'Sanitización Profunda & Control Entomológico Industrial',
    client: 'Planta de Procesamiento Agroindustrial',
    category: 'limpieza',
    location: 'Montería, Córdoba',
    duration: '5 días',
    imageBefore: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    summary: 'Desinfección por termo-nebulización en 4 naves de almacenamiento y diseño del plan de Manejo Integrado de Plagas (MIP).',
    highlights: ['Certificación internacional de bioseguridad', 'Instalación de 48 cebaderos codificados', 'Monitoreo digital de vectores']
  },
  {
    id: 'p4',
    title: 'Fabricación y Montaje de Cubierta & Cerramiento Metálico',
    client: 'Centro Logístico del Caribe',
    category: 'metalica',
    location: 'Sincelejo, Sucre',
    duration: '22 días',
    imageBefore: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    summary: 'Diseño, corte y soldadura MIG de 450 metros de estructura en perfilería estructural galvanizada y portón automatizado.',
    highlights: ['Soldadura estructural certificada AWS', 'Pintura anticorrosiva grado marino', 'Entrega 3 días antes de la fecha límite']
  }
];

export const COLOMBIA_REGIONS = [
  { id: 'bolivar', name: 'Bolívar (Cartagena, Magangué)', status: 'Sede Principal Norte', baseTime: 'Atención inmediata 24/7', techs: 18, color: '#0077FF' },
  { id: 'atlantico', name: 'Atlántico (Barranquilla, Soledad)', status: 'Centro Operativo', baseTime: '< 2 Horas', techs: 15, color: '#00D2FF' },
  { id: 'sucre', name: 'Sucre (Sincelejo, Corozal)', status: 'Base Regional', baseTime: '< 3 Horas', techs: 12, color: '#3393FF' },
  { id: 'cordoba', name: 'Córdoba (Montería, Cereté)', status: 'Base Regional', baseTime: '< 3 Horas', techs: 10, color: '#0077FF' },
  { id: 'magdalena', name: 'Magdalena (Santa Marta, Ciénaga)', status: 'Cobertura Costa', baseTime: '< 3 Horas', techs: 8, color: '#00D2FF' },
  { id: 'antioquia', name: 'Antioquia (Medellín, Rionegro)', status: 'Cobertura Empresarial', baseTime: '< 4 Horas', techs: 14, color: '#0077FF' },
  { id: 'bogota', name: 'Bogotá D.C. & Cundinamarca', status: 'Sede Corporativa Central', baseTime: '< 2 Horas', techs: 22, color: '#00D2FF' },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: 'b1',
    slug: 'frecuencia-mantenimiento-aire-acondicionado',
    title: '¿Cada cuánto tiempo se debe hacer mantenimiento a un aire acondicionado comercial?',
    category: 'Mantenimiento HVAC',
    readTime: '4 min lectura',
    date: '24 Ago 2026',
    excerpt: 'Descubra los periodos idóneos según la humedad costera y la carga operativa para evitar fallas catastróficas y reducir costos de energía.',
    content: `El clima cálido y la alta salinidad costera aceleran la corrosión de las aletas de aluminio en condensadores. Para instalaciones comerciales en la Región Caribe (hoteles, clínicas y restaurantes), el mantenimiento preventivo básico debe ejecutarse de forma **mensual**, mientras que el lavado químico profundo con desincrustante dieléctrico debe realizarse **trimestralmente**. Ignorar este ciclo incrementa el consumo eléctrico hasta en un 35% debido a la acumulación de suciedad en los serpentines.`,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2',
    slug: 'refrigerante-r32-vs-r410a-eficiencia-ahorro',
    title: 'R-32 vs R-410A: ¿Cuál refrigerante genera mayor ahorro energético en empresas?',
    category: 'Refrigeración & Eficiencia',
    readTime: '6 min lectura',
    date: '18 Ago 2026',
    excerpt: 'Análisis comparativo de los nuevos gases ecológicos. Cómo la transición al R-32 mejora la transferencia de calor y reduce la huella de carbono.',
    content: `El refrigerante R-32 posee un potencial de calentamiento global (GWP) un 67% menor en comparación con el R-410A tradicional. Además, requiere hasta un 30% menos de carga de gas para lograr la misma capacidad frigorífica en Btus. Al actualizar los equipos MiniSplit y VRF de su empresa con mezclas eficientes instaladas por técnicos certificados de Sáenz y Asociados S.A.S., se logra extender la vida útil del compresor hasta 4 años adicionales.`,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b3',
    slug: 'normativa-sanitaria-desinfeccion-plagas-restaurantes',
    title: 'Guía de Cumplimiento Sanitario: Fumigación y Desinfección para Auditorías INVIMA',
    category: 'Control de Plagas',
    readTime: '5 min lectura',
    date: '10 Ago 2026',
    excerpt: 'Requisitos clave y cómo llevar la carpeta técnica de Manejo Integrado de Plagas (MIP) para aprobar visitas sanitarias sin contratiempos.',
    content: `La Secretaría de Salud y el INVIMA exigen un programa estructurado de Manejo Integrado de Plagas (MIP) en todo establecimiento alimentario o de salud. Esto requiere mapas de ubicación de cebo, fichas técnicas de los plaguicidas empleados (con registro de baja toxicidad en humanos), hojas de seguridad MSDS y certificados firmados por ingenieros agrónomos o técnicos ambientales titulados.`,
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80'
  }
];

export const CLIENT_PORTAL_MOCK = {
  clientName: 'Hotel Almirante Caribe S.A.S.',
  nit: '900.458.129-4',
  activeContract: 'Mantenimiento Integral HVAC & Pinturas 2026',
  equipmentList: [
    { id: 'EQ-01', type: 'Chiller Central Daikin 50TR', area: 'Edificio Principal', status: 'Operativo - 100%', lastMaint: '15/08/2026', nextMaint: '15/11/2026' },
    { id: 'EQ-02', type: 'Cuarto Frío Congelados 15HP', area: 'Cocina Central', status: 'Operativo - 100%', lastMaint: '02/08/2026', nextMaint: '02/09/2026' },
    { id: 'EQ-03', type: 'Sistema VRF Carrier 24HP', area: 'Salón de Eventos', status: 'Atención Requerida (Filtro)', lastMaint: '10/06/2026', nextMaint: '30/08/2026' },
    { id: 'EQ-04', type: '12 MiniSplits Inverter 24k BTU', area: 'Habitaciones VIP', status: 'Operativo - 100%', lastMaint: '20/07/2026', nextMaint: '20/10/2026' }
  ],
  invoices: [
    { id: 'FAC-2026-891', date: '01/08/2026', amount: '$ 4,850,000 COP', status: 'Pagada', downloadUrl: '#' },
    { id: 'FAC-2026-742', date: '01/07/2026', amount: '$ 4,850,000 COP', status: 'Pagada', downloadUrl: '#' }
  ],
  warranties: [
    { code: 'GAR-HVAC-992', detail: 'Reparación Compresor Chiller #1', validUntil: '15/02/2027', status: 'Vigente' },
    { code: 'GAR-PINT-401', detail: 'Impermeabilización Terrazas', validUntil: '10/08/2031', status: 'Vigente' }
  ]
};
