const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/products-ricelake.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── IDs TO DELETE (points 4 & 5) ─────────────────────────────────────────
const IDS_TO_DELETE = new Set([
  // SCT transmitters (punto 4)
  'sct-4x-integrated-fieldbus-transmitter',
  'sct-1100-signal-conditioning-transmitter',
  'sct-2200-signal-conditioning-transmitter',
  'sct-10-signal-conditioning-transmitter',
  'sct-20-signal-conditioning-transmitter',
  'sct-30-signal-conditioning-transmitter',
  'sct-40-signal-conditioning-transmitter',
  'sct-1px-transmitter-with-integrated-fieldbus-and-web-server',
  'sct-1sx-transmitter-with-integrated-fieldbus-and-web-server',
  // Duplicados en inglés (punto 5) — hay versiones en español con IDs distintos
  '1280-enterprise-series-programmable-digital-weight-indicator',
  '920i-series-programmable-digital-weight-indicator',
  '882is-882is-plus-intrinsically-safe-digital-weight-indicator',
  '882d-belt-bulk-material-instrumentation',
  '880-880-plus-performance-series-programmable-digital-weight-indicator-controller',
  '720i-series-programmable-digital-weight-indicator-controller',
  '682-synergy-series-digital-weight-indicator',
  '680-synergy-series-digital-weight-indicator',
  '680he-synergy-series-hostile-environment-digital-weight-indicator',
  '480-482-legend-series-digital-weight-indicator',
  '380-synergy-series-digital-weight-indicator',
  '380x-synergy-series-washdown-digital-weight-indicator',
]);

// ── FULL TRANSLATIONS (nombre + descripción) ──────────────────────────────
// Products that still need name translation (slug → Spanish name)
const NOMBRE_TRANSLATIONS = {
  // Básculas de Plataforma
  'roughdeck-rough-n-ready-system-floor-scale-and-380-indicator': 'Sistema RoughDeck® Rough-n-Ready con Indicador 380',
  'roughdeck-rough-n-ready-system-floor-scale-and-381-indicator': 'Sistema RoughDeck® Rough-n-Ready con Indicador 381',
  'roughdeck-rough-n-ready-system-floor-scale-and-480-480-plus-indicator': 'Sistema RoughDeck® Rough-n-Ready con Indicador 480/480 Plus',
  'roughdeck-rough-n-ready-system-floor-scale-and-482-482-plus-indicator': 'Sistema RoughDeck® Rough-n-Ready con Indicador 482/482 Plus',
  'roughdeck-rough-n-ready-system-floor-scale-and-680-indicator': 'Sistema RoughDeck® Rough-n-Ready con Indicador 680',
  'roughdeck-hp-floor-scale': 'Báscula de Piso RoughDeck® HP',
  'roughdeck-hp-h-heavy-capacity-floor-scale': 'Báscula de Piso RoughDeck® HP-H Alta Capacidad',
  'roughdeck-rp-rodent-protection-floor-scale': 'Báscula de Piso RoughDeck® RP Protección contra Roedores',
  'roughdeck-hs-hopper-scale': 'Báscula Tolva RoughDeck® HS',
  'roughdeck-ss-stainless-steel-floor-scale': 'Báscula de Piso RoughDeck® SS Acero Inoxidable',
  'roughdeck-he-hostile-environment-floor-scale': 'Báscula de Piso RoughDeck® HE Ambiente Hostil',
  'autolift-he-hostile-environment-floor-scale': 'Báscula de Piso AutoLift HE Ambiente Hostil',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-380-indicator-package': 'Sistema Ready-n-Weigh CW-90B con Indicador 380',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-and-480-480-plus-indicator': 'Sistema Ready-n-Weigh CW-90B con Indicador 480/480 Plus',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-482-482-plus-indicator-package': 'Sistema Ready-n-Weigh CW-90B con Indicador 482/482 Plus',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-680-indicator-package': 'Sistema Ready-n-Weigh CW-90B con Indicador 680',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-380-indicator-package': 'Sistema Ready-n-Weigh CW-90XB con Indicador 380',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-480-480-plus-indicator': 'Sistema Ready-n-Weigh CW-90XB con Indicador 480/480 Plus',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-482-482-plus-indicator': 'Sistema Ready-n-Weigh CW-90XB con Indicador 482/482 Plus',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-680-indicator': 'Sistema Ready-n-Weigh CW-90XB con Indicador 680',
  'cw-90b-light-capacity-bench-scale': 'Báscula de Mesa CW-90B Baja Capacidad',
  'cw-90xb-light-capacity-bench-scale': 'Báscula de Mesa CW-90XB Baja Capacidad',
  'benchmark-he-x-hostile-environment-extreme-bench-scale': 'Báscula de Mesa BenchMark® HE-X Ambiente Hostil Extremo',
  'benchmark-he-hostile-environment-bench-scale': 'Báscula de Mesa BenchMark® HE Ambiente Hostil',
  'counterpart-configurable-counting-indicator': 'Indicador Contador Configurable Counterpart®',
  'digi-dc-782-series-portable-counting-scale': 'Báscula Contadora Portátil DIGI® DC-782',
  'digi-dc-788-series-counting-scale': 'Báscula Contadora DIGI® DC-788',
  'digi-s-yc-series-remote-scale-base-platforms': 'Plataformas Base Remota DIGI® S-YC Series',
  'a-d-fc-i-si-series-counting-scale': 'Báscula Contadora A&D® FC-i/Si Series',
  'a-d-hc-i-series-counting-scale': 'Báscula Contadora A&D® HC-i Series',
  'ohaus-ranger-count-3000-counting-scale': 'Báscula Contadora OHAUS® Ranger™ Count 3000',
  'digi-dmc-782-series-portable-coin-counting-scale': 'Báscula Contadora de Monedas Portátil DIGI® DMC-782',
  'iq-plus-2100-digital-bench-scale': 'Báscula de Mesa Digital IQ Plus 2100',
  'iq-plus-2100sl-digital-bench-scale': 'Báscula de Mesa Digital IQ Plus 2100SL',
  // Básculas para Vehículos
  'survivor-otr-steel-deck-truck-scale': 'Báscula para Camión SURVIVOR® OTR Cubierta de Acero',
  'survivor-otr-concrete-deck-truck-scale': 'Báscula para Camión SURVIVOR® OTR Cubierta de Concreto',
  'survivor-srx-low-profile-siderail-truck-scale': 'Báscula para Camión SURVIVOR® SRX Perfil Bajo',
  'survivor-otr-xv-extreme-duty-truck-scale': 'Báscula para Camión SURVIVOR® OTR-XV Servicio Extremo',
  'survivor-atv-portable-truck-scale': 'Báscula para Camión SURVIVOR® ATV Portátil',
  'survivor-sr-truck-scale': 'Báscula para Camión SURVIVOR® SR Cubierta de Concreto',
  'survivor-pt-pit-type-truck-scale': 'Báscula para Camión SURVIVOR® PT Tipo Fosa',
  'survivor-atv-m-truck-scale': 'Báscula para Camión SURVIVOR® ATV-M',
  'survivor-pt-m-truck-scale': 'Báscula para Camión SURVIVOR® PT-M Mecánica',
  'survivor-multi-platform-truck-scale': 'Báscula para Camión SURVIVOR® Multi-plataforma',
  'survivor-otr-lp-low-profile-steel-deck-truck-scale': 'Báscula para Camión SURVIVOR® OTR-LP Perfil Bajo',
  'survivor-ag-truck-scale': 'Báscula Agrícola SURVIVOR® AG',
  'load-ranger-wireless-wheel-pad-scale': 'Báscula de Almohadilla de Rueda Inalámbrica Load Ranger',
  // Instrumentación
  '1280-enterprise-series-indicator': 'Indicador Digital Programable 1280 Enterprise™ Series',
  '920i-programmable-indicator': 'Indicador Digital Programable 920i® Series',
  '882is-intrinsically-safe': 'Indicador Digital 882IS/882IS Plus Intrínsecamente Seguro',
  '880-performance-series-indicator': 'Indicador Digital 880/880 Plus Performance™ Series',
  '720i-programmable-controller': 'Indicador/Controlador Digital Programable 720i™ Series',
  '682-synergy-indicator': 'Indicador Digital 682 Synergy Series',
  '680-synergy-indicator': 'Indicador Digital 680 Synergy Series',
  '680he-synergy-hostile-indicator': 'Indicador Digital 680HE Synergy Series Ambiente Hostil',
  '480-482-legend-indicator': 'Indicador Digital 480/482 Legend® Series',
  '380-synergy-indicator': 'Indicador Digital 380 Synergy Series',
  '380x-synergy-washdown-indicator': 'Indicador Digital 380X Synergy Series Resistente al Lavado',
  'sct-4xd-integrator-belt-bulk-material-instrumentation': 'Instrumentación SCT-4XD Integrador para Banda/Material a Granel',
  'we503-belt-scale-integrator': 'Integrador WE503 para Báscula de Banda',
  'sct-4x-integrated-fieldbus-transmitter': 'Transmisor SCT-4X con Fieldbus Integrado',
  // Celdas de Carga
  'rice-lake-rl20000i-alloy-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20000I Acero de Aleación',
  'rice-lake-rl20000ss-stainless-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20000SS Acero Inoxidable',
  'rice-lake-rl20000st-stainless-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20000ST Acero Inoxidable',
  'rice-lake-rl20001i-alloy-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20001I Acero de Aleación',
  'rice-lake-rl20001he-stainless-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20001HE Acero Inoxidable',
  'rice-lake-rlets-alloy-steel-s-beam-load-cell': 'Celda de Carga S-Beam RLETS Acero de Aleación',
  'rice-lake-rl32018-alloy-steel-single-ended-beam-load-cell': 'Celda de Carga Viga Simple RL32018 Acero de Aleación',
  'rice-lake-rl32018-mlc-coated-alloy-steel-single-ended-beam-load-cell': 'Celda de Carga Viga Simple RL32018 Recubierta',
  'rice-lake-rl32018s-stainless-steel-single-ended-beam-load-cell': 'Celda de Carga Viga Simple RL32018S Acero Inoxidable',
  'rice-lake-rl32018s-p-stainless-steel-single-ended-beam-load-cell': 'Celda de Carga RL32018S-P Acero Inoxidable IP69K',
  'rice-lake-rl32018s-he-stainless-steel-single-ended-beam-load-cell': 'Celda de Carga RL32018S-HE Herméticamente Sellada',
  'rice-lake-rl32019s-he-stainless-steel-single-ended-beam': 'Celda de Carga RL32019S-HE Acero Inoxidable',
  'rice-lake-rl20000fls-stainless-steel-s-beam-load-cell': 'Celda de Carga S-Beam RL20000FLS Acero Inoxidable',
  // Ganado
  'mas-m-mobile-animal-scale': 'Báscula Animal Móvil MAS-M',
  'mas-p-portable-animal-scale': 'Báscula Animal Portátil MAS-P',
  'mas-lc-stationary-animal-scale': 'Báscula Animal Estacionaria MAS-LC',
  'mas-lm-stationary-mechanical-animal-scale': 'Báscula Animal Estacionaria Mecánica MAS-LM',
  'sas-single-animal-scale': 'Báscula para Animal Individual SAS',
  'roughdeck-slv-single-animal-livestock-scale': 'Báscula Ganadera RoughDeck® SLV Animal Individual',
  'farm-bars-with-380-indicator': 'Farm Bars con Indicador 380',
  'survivor-lv-livestock-ring-scale': 'Báscula de Anillo Ganadera SURVIVOR® LV',
  'farm-bars': 'Farm Bars para Báscula Ganadera',
  // Verificadores
  'motoweigh-imw-in-motion-checkweighers-and-conveyor-scales': 'Verificador de Peso en Movimiento MotoWeigh® IMW',
  'eriez-precisionguard-x8-metal-detector': 'Detector de Metales Eriez® PrecisionGuard X8',
  'els-series-elevated-load-cell-stands': 'Soportes Elevados ELS Series para Celdas de Carga',
  'rt-m-roller-top-scale': 'Báscula de Rodillos RT-M',
  'motoweigh-cascade-scale': 'Báscula en Cascada MotoWeigh®',
  'motoweigh-integrator': 'Integrador MotoWeigh®',
  'cw-90-over-under-checkweigher': 'Verificador de Peso CW-90 Sobre/Bajo',
  'cw-90x-over-under-washdown-checkweigher': 'Verificador de Peso CW-90X Resistente al Lavado',
  'cw-90-checkweigh-indicator': 'Indicador para Verificador CW-90',
  'cw-90x-checkweigh-indicator': 'Indicador para Verificador CW-90X',
  // Médicas
  '150-10-5-digital-physician-scale-eye-level': 'Báscula Médica Digital 150-10-5 Nivel Ojo',
  '150-10-6-digital-physician-scale-waist-level': 'Báscula Médica Digital 150-10-6 Nivel Cintura',
  '150-10-7-digital-physician-scale-floor-level': 'Báscula Médica Digital 150-10-7 Nivel Piso',
  '150-10-8-digital-physician-scale-floor-level': 'Báscula Médica Digital 150-10-8 Nivel Piso Compacta',
  '160-10-7n-digital-athletic-scale-low-profile': 'Báscula Atlética Digital 160-10-7N Perfil Bajo',
  'physician-scale-carrying-case': 'Estuche de Transporte para Báscula Médica',
  'rl-mps-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS',
  'rl-mps-10-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS-10',
  'rl-mps-20-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS-20 Doble Lectura',
  'rl-mps-30-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS-30',
  'rl-mps-40-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS-40',
  'rl-mps-50-mechanical-physician-scale': 'Báscula Médica Mecánica RL-MPS-50 con Tallímetro',
  // Balanzas
  'ta-plus-series-rice-lake-analytical-balance': 'Balanza Analítica TA Plus Series Rice Lake',
  'ion-bm-series-a-d-weighing-analytical-balance': 'Balanza Analítica Ion BM Series A&D Weighing',
  'gemini-gr-series-a-d-weighing-analytical-balance': 'Balanza Analítica Gemini GR Series A&D Weighing',
  'hr-az-hr-a-series-a-d-weighing-analytical-balance': 'Balanza Analítica HR-AZ/HR-A Series A&D Weighing',
  'a-d-weighing-ad-4212a-series-analytical-balance': 'Balanza Analítica A&D Weighing AD-4212A Series',
  'apollo-gx-series-a-d-weighing-analytical-balance': 'Balanza Analítica Apollo GX Series A&D Weighing',
  'quintix-secura-series-sartorius-analytical-balance': 'Balanza Analítica Quintix/Secura Series Sartorius',
  'cubis-ii-series-mce-sartorius-analytical-balance': 'Balanza Analítica Cubis II Series MCE Sartorius',
  'entris-ii-series-basic-essential-sartorius-analytical-balance': 'Balanza Analítica Entris II Basic Essential Sartorius',
  'entris-ii-series-basic-advanced-sartorius-analytical-balance': 'Balanza Analítica Entris II Basic Advanced Sartorius',
  'pioneer-px-series-ohaus-analytical-balance': 'Balanza Analítica Pioneer PX Series OHAUS',
  'explorer-series-ohaus-analytical-balance': 'Balanza Analítica Explorer Series OHAUS',
  'te-enhanced-series-rice-lake-legal-for-trade-balance': 'Balanza Rice Lake TE Enhanced Series Legal para Comercio',
  'gf-p-series-a-d-weighing-legal-for-trade-balance': 'Balanza A&D Weighing GF-P Series Legal para Comercio',
  'fx-i-series-a-d-weighing-precision-balance': 'Balanza de Precisión A&D Weighing FX-i Series',
  'adventurer-series-ohaus-legal-for-trade-balance': 'Balanza OHAUS Adventurer Series Legal para Comercio',
  'fx-i-series-a-d-weighing-legal-for-trade-balance': 'Balanza Legal para Comercio A&D Weighing FX-i Series',
  // Bandas
  'master-221db-belt-scale-weigh-frame': 'Marco de Pesaje Master™ 221DB para Báscula de Banda',
  'master-311m-belt-scale-weigh-frame': 'Marco de Pesaje Master™ 311M para Báscula de Banda',
  'master-211-belt-scale-weigh-frame': 'Marco de Pesaje Master™ 211 para Báscula de Banda',
  'master-14x-belt-scale-weigh-frame': 'Marco de Pesaje Master™ 14X para Báscula de Banda',
  'master-421-belt-scale-weigh-frame': 'Marco de Pesaje Master™ 421 para Báscula de Banda',
  'bci-belt-scale-weigh-frame': 'Marco de Pesaje BCi para Báscula de Banda',
  '1280-with-sct-4xd-integrator-belt-bulk-material-instrumentation': 'Instrumentación 1280 con Integrador SCT-4XD para Banda',
  '882d-belt-bulk-instrumentation': 'Instrumentación 882D para Banda/Material a Granel',
  'spu2160-speed-pickup': 'Sensor de Velocidad SPU2160',
  'spu5020-speed-pickup': 'Sensor de Velocidad SPU5020',
  // Pesaje Aéreo
  'msi-3460-challenger-3-crane-scales': 'Báscula de Grúa MSI-3460 Challenger 3',
  'msi-4260m-port-a-weigh-marine-crane-scale': 'Báscula de Grúa Marina MSI-4260M Port-A-Weigh',
  'msi-4260m-port-a-weigh-industrial-crane-scale': 'Báscula de Grúa Industrial MSI-4260M Port-A-Weigh',
  'msi-4260-port-a-weigh-industrial-crane-scale': 'Báscula de Grúa Industrial MSI-4260 Port-A-Weigh',
  'msi-4260-is-port-a-weigh-intrinsically-safe-crane-scale': 'Báscula de Grúa MSI-4260 IS Intrínsecamente Segura',
  'msi-9600ht-hi-torque-port-a-weigh-plus': 'Báscula de Grúa MSI-9600HT Hi-torque Port-A-Weigh Plus',
  'msi-6360-trans-weigh-crane-scale': 'Báscula de Grúa MSI-6360 Trans-Weigh',
  'rl101-scale-compact-digital-below-the-hook-scale': 'Báscula Compacta Digital RL101 Below-the-hook',
  'msi-7300-dyna-link-2-digital-tension-dynamometer': 'Dinamómetro Digital de Tensión MSI-7300 Dyna-Link 2',
  'msi-dyna-clamp-tension-meter': 'Medidor de Tensión MSI Dyna-Clamp',
  'msi-8004hd-indicator-rf-led-remote-display': 'Display Remoto RF LED MSI-8004HD',
  'msi-8000-rf-remote-display': 'Display Remoto RF MSI-8000',
  // Retail
  'rice-lake-rs-130-rs-160-price-computing-scales': 'Báscula Calculadora de Precio RS-130/RS-160',
  'rice-lake-benchpro-bp-r-multi-purpose-retail-scale': 'Báscula Retail Multipropósito BenchPro™ BP-R',
  'crimper-and-lead-seals': 'Precintas y Sellos de Plomo',
  'ishida-astra-ii-price-computing-scale-with-printer': 'Báscula Calculadora de Precio Ishida Astra II con Impresora',
  'ishida-uni-3-series-price-computing-printing-scales': 'Báscula Calculadora Ishida Uni-3 Series',
  'ishida-uni-5-series-price-computing-printing-scales': 'Báscula Calculadora Ishida Uni-5 Series',
  'ishida-uni-7-series-price-computing-printing-scale': 'Báscula Calculadora Ishida Uni-7 Series',
  'ishida-wm-micro-compact-wrapper': 'Empacadora Compacta Ishida WM Micro',
  'ishida-ip-ai-label-printer-with-remote-scale-base': 'Impresora de Etiquetas Ishida IP-AI con Base Remota',
  'ishida-uni-8-series-price-computing-printing-scale': 'Báscula Calculadora Ishida Uni-8 Series',
  'ishida-uni-9-series-pc-scale': 'Báscula PC Ishida Uni-9 Series',
  'ishida-uni-9h-hanging-scale': 'Báscula Colgante Ishida Uni-9H',
  'ishida-uni-10-series-price-computing-printing-scale': 'Báscula Calculadora Ishida Uni-10 Series',
  // Montacargas
  'cls-nextgen-forklift-scale': 'Báscula para Montacargas CLS NextGen',
  'cls-nextgen-pro-forklift-scale': 'Báscula para Montacargas CLS NextGen Pro',
  'cls-nextgen-forklift-scale-with-mobile-printer': 'Báscula para Montacargas CLS NextGen con Impresora Móvil',
  'cls-series-class-ii-forklift-scale': 'Báscula para Montacargas CLS Series Clase II',
  'cls-series-class-iii-forklift-scale': 'Báscula para Montacargas CLS Series Clase III',
  'virtui3-pc-based-program-for-cls-series-forklift-scale': 'Programa PC VIRTUi³ para Báscula CLS',
  'cls-680-forklift-scale-display': 'Display para Montacargas CLS-680',
  'cls-920i-forklift-scale-display': 'Display para Montacargas CLS-920i',
  'rice-lake-rl20000fls-stainless-steel-s-beam-load-cell-forklift': 'Celda de Carga S-Beam RL20000FLS para Montacargas',
  'pallet-jack-scale': 'Báscula para Pallet Jack',
  // Módulos de Pesaje
  'rl9000twm-series-weigh-module-kit': 'Kit de Módulo de Pesaje RL9000TWM Series',
  'survivor-paramounts-he-weigh-module-kits': 'Kit de Módulo de Pesaje SURVIVOR® Paramounts HE',
  'survivor-rl1700-he-weigh-module-kits': 'Kit de Módulo de Pesaje SURVIVOR® RL1700 HE',
  'survivor-rl1600-he-series-weigh-module-with-rl75016whe-load-cell': 'Kit de Módulo de Pesaje SURVIVOR® RL1600 HE',
  'survivor-rl1855-he-hs-weigh-module-kits': 'Kit de Módulo de Pesaje SURVIVOR® RL1855 HE/HS',
  'survivor-rl2100-he-heavy-capacity-weigh-module-kits': 'Kit de Módulo de Pesaje SURVIVOR® RL2100 HE Alta Capacidad',
  'itcm-isolated-tension-cell-weigh-module-kit': 'Kit de Módulo de Pesaje ITCM Celda de Tensión Aislada',
  'itcm-ss-isolated-tension-cell-weigh-module-kit': 'Kit de Módulo de Pesaje ITCM-SS Acero Inoxidable',
  'itcm-he-isolated-tension-cell-weigh-module-kit': 'Kit de Módulo de Pesaje ITCM-HE Ambiente Hostil',
  'rl50210ta-mini-tank-weigh-module-kit': 'Kit de Módulo de Pesaje Mini Tanque RL50210TA',
  '65059-mini-tank-weigh-module-kit-vpg-sensortronics': 'Kit de Módulo de Pesaje Mini Tanque VPG Sensortronics',
  'rl50219ss-ta-mini-tank-weigh-module-kit': 'Kit de Módulo de Pesaje Mini Tanque RL50219SS',
  'paramounts-ep-weigh-module-kit': 'Kit de Módulo de Pesaje Paramounts EP',
  // Veterinarias
  'rice-lake-vs-12-dual-range-digital-companion-animal-scale': 'Báscula Digital para Animales de Compañía Rice Lake VS-12',
};

// Key description translations (English → Spanish for common patterns)
const DESC_MAP = [
  [/Combines the power and intelligence of the ([^.]+) with the durability of the ([^.]+)/gi,
   'Combina la potencia e inteligencia del $1 con la durabilidad del $2'],
  [/combines? (digital )?diagnostic junction capabilities? with RoughDeck floor scale durability/gi,
   'combina la unión de diagnóstico digital con la durabilidad de la báscula de piso RoughDeck'],
  [/Floor scale system with ([^.]+) digital weight indicator/gi,
   'Sistema de báscula de piso con indicador digital de peso $1'],
  [/Combines? ([^.]+) with ([^.]+) for ([^.]+)/gi, 'Combina $1 con $2 para $3'],
  [/Complete bench scale(,| and) indicator(,| and) (and )?column package( system)?/gi,
   'Sistema completo de báscula de mesa, indicador y columna'],
  [/Complete bench scale system with environmentally sealed load cell and ([^.]+) indicator/gi,
   'Sistema completo de báscula de mesa con celda de carga sellada e indicador $1'],
  [/"([^"]+)"/g, '$1'],
  [/stainless steel/gi, 'acero inoxidable'],
  [/\bload cell\b/gi, 'celda de carga'],
  [/\bload cells\b/gi, 'celdas de carga'],
  [/\bfloor scale\b/gi, 'báscula de piso'],
  [/\bbench scale\b/gi, 'báscula de mesa'],
  [/\btruck scale\b/gi, 'báscula para camión'],
  [/\bcrane scale\b/gi, 'báscula de grúa'],
  [/\bforklift scale\b/gi, 'báscula para montacargas'],
  [/\bbelt scale\b/gi, 'báscula de banda'],
  [/\bcheckweigher\b/gi, 'verificador de peso'],
  [/\bweigh module\b/gi, 'módulo de pesaje'],
  [/\bweigh modules\b/gi, 'módulos de pesaje'],
  [/\bweigh frame\b/gi, 'marco de pesaje'],
  [/\bwashdown\b/gi, 'resistente al lavado'],
  [/\blegal for trade\b/gi, 'legal para el comercio'],
  [/\bheavy.duty\b/gi, 'servicio pesado'],
  [/\bhigh.capacity\b/gi, 'alta capacidad'],
  [/\bportable\b/gi, 'portátil'],
  [/\bpounds\b/gi, 'libras'],
  [/\bkilograms\b/gi, 'kilogramos'],
  [/\baccuracy\b/gi, 'precisión'],
  [/\baccurate\b/gi, 'preciso'],
  [/\bdurable\b/gi, 'duradero'],
  [/\bdurability\b/gi, 'durabilidad'],
  [/\breliable\b/gi, 'confiable'],
  [/\bdesigned for\b/gi, 'diseñado para'],
  [/\bideal for\b/gi, 'ideal para'],
  [/\bsuitable for\b/gi, 'adecuado para'],
  [/\bfeatures?\b/gi, 'cuenta con'],
  [/\boffers?\b/gi, 'ofrece'],
  [/\bincludes?\b/gi, 'incluye'],
  [/\bprovides?\b/gi, 'proporciona'],
  [/\bdelivers?\b/gi, 'entrega'],
  [/\bsupports?\b/gi, 'soporta'],
  [/\ballows?\b/gi, 'permite'],
  [/\benables?\b/gi, 'permite'],
  [/\bensures?\b/gi, 'garantiza'],
  [/\bcombines?\b/gi, 'combina'],
  [/\bavailable\b/gi, 'disponible'],
  [/\bmounting\b/gi, 'montaje'],
  [/\bmounted\b/gi, 'montado'],
  [/\bcorrosive\b/gi, 'corrosivo'],
  [/\bcorrosion\b/gi, 'corrosión'],
  [/\bwireless\b/gi, 'inalámbrico'],
  [/\bprogrammable\b/gi, 'programable'],
  [/\bcertified\b/gi, 'certificado'],
  [/\bapproved\b/gi, 'aprobado'],
  [/\bcompact\b/gi, 'compacto'],
  [/\blightweight\b/gi, 'ligero'],
  [/\bindustrial\b/gi, 'industrial'],
  [/\bapplications?\b/gi, 'aplicaciones'],
  [/\benvironments?\b/gi, 'entornos'],
  [/\bprocessing\b/gi, 'procesamiento'],
  [/\bmaterial handling\b/gi, 'manejo de materiales'],
];

function isEnglish(text) {
  if (!text) return false;
  const en = ['the ', 'for ', 'with ', 'and ', ' of ', 'designed', 'features', 'provides', 'offers', ' is ', ' are ', ' has ', 'available', 'capacity', ' can '];
  return en.filter(w => text.toLowerCase().includes(w)).length >= 3;
}

function translateDesc(text) {
  if (!text || !isEnglish(text)) return text;
  let t = text;
  for (const [pat, rep] of DESC_MAP) {
    t = t.replace(pat, rep);
  }
  return t;
}

// ── APPLY ALL CHANGES ─────────────────────────────────────────────────────
const before = data.productos.length;
let renamedCount = 0;
let translatedCount = 0;
let deletedCount = 0;

const productos = data.productos
  .filter(p => {
    if (IDS_TO_DELETE.has(p.id)) { deletedCount++; return false; }
    return true;
  })
  .map(p => {
    const result = { ...p };
    // Translate nombre if we have a mapping
    if (NOMBRE_TRANSLATIONS[p.id]) {
      result.nombre = NOMBRE_TRANSLATIONS[p.id];
      renamedCount++;
    } else if (isEnglish(p.nombre)) {
      // Auto-translate from slug
      result.nombre = p.id.split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    }
    // Translate descripción
    const translated = translateDesc(p.descripcion);
    if (translated !== p.descripcion) { result.descripcion = translated; translatedCount++; }
    return result;
  });

const output = { ...data, total_productos: productos.length, productos };
fs.writeFileSync(filePath, JSON.stringify(output, null, 2));

console.log(`✅ Productos eliminados:     ${deletedCount}`);
console.log(`✅ Nombres traducidos:       ${renamedCount}`);
console.log(`✅ Descripciones traducidas: ${translatedCount}`);
console.log(`   Antes: ${before} → Después: ${productos.length}`);
