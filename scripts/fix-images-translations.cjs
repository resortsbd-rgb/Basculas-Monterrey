const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/products-ricelake.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ── IMAGE FALLBACK MAP ─────────────────────────────────────────────────────
// Maps ID patterns → known good image URLs from ricelake.com/media/
const IMAGE_MAP = {
  // RoughDeck floor scale variants (all look the same)
  'roughdeck-rough-n-ready-system-floor-scale-and-381-indicator':   'https://www.ricelake.com/media/mxjbfasz/1_us_roughdeck_380.png',
  'roughdeck-rough-n-ready-system-floor-scale-and-480-480-plus-indicator': 'https://www.ricelake.com/media/gt5hk11u/rl-roughdeck-floor-scale-and-480-480-plus-indicator.png',
  'roughdeck-rough-n-ready-system-floor-scale-and-482-482-plus-indicator': 'https://www.ricelake.com/media/jr2cs3me/rl-roughdeck-floor-scale-and-482-482-plus-indicator.png',
  'roughdeck-rough-n-ready-system-floor-scale-and-680-indicator':   'https://www.ricelake.com/media/5lnlu2zc/rl-roughdeck-floor-scale-and-680-indicator.png',
  // Ready-n-Weigh CW-90B variants
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-and-480-480-plus-indicator': 'https://www.ricelake.com/media/4hwnuvut/web_sc_cw-90b.png',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-482-482-plus-indicator-package': 'https://www.ricelake.com/media/o0ahm4fl/web_sc_web-images-1-copy.jpg',
  'ready-n-weigh-bench-scale-system-cw-90b-scale-base-680-indicator-package': 'https://www.ricelake.com/media/xbenwk2v/web_sc_web-images-680.jpg',
  // Ready-n-Weigh CW-90XB variants
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-380-indicator-package': 'https://www.ricelake.com/media/jvup0d1l/cw-90b-380.png',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-480-480-plus-indicator': 'https://www.ricelake.com/media/4hwnuvut/web_sc_cw-90b.png',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-482-482-plus-indicator': 'https://www.ricelake.com/media/o0ahm4fl/web_sc_web-images-1-copy.jpg',
  'ready-n-weigh-bench-scale-system-cw-90xb-scale-base-680-indicator': 'https://www.ricelake.com/media/xbenwk2v/web_sc_web-images-680.jpg',
  'cw-90xb-light-capacity-bench-scale': 'https://www.ricelake.com/media/u2zhay3l/web_sc_cw-90b_light.png',
  // Truck scale variants
  'survivor-atv-m-truck-scale':  'https://www.ricelake.com/media/101dwyze/atvm.png',
  'survivor-pt-m-truck-scale':   'https://www.ricelake.com/media/5qsjjwyk/_portals_0_products_93e4e2f007464cee8862f1ba04f6f9c3-orig.png',
  // Vehicle/portable
  'load-ranger-wireless-wheel-pad-scale': 'https://www.ricelake.com/media/wrvl4aqa/1_atv_brown_truck_2000.png',
  // SCT transmitters (belt scale)
  'sct-4x-integrated-fieldbus-transmitter':                  'https://www.ricelake.com/media/nqifslyt/1_sct4xd_dooropen_rightface_hr.png',
  'sct-1sx-transmitter-with-integrated-fieldbus-and-web-server': 'https://www.ricelake.com/media/nqifslyt/1_sct4xd_dooropen_rightface_hr.png',
  'sct-1100-signal-conditioning-transmitter':                'https://www.ricelake.com/media/nqifslyt/1_sct4xd_dooropen_rightface_hr.png',
  'sct-2200-signal-conditioning-transmitter':                'https://www.ricelake.com/media/nqifslyt/1_sct4xd_dooropen_rightface_hr.png',
  'sct-20-signal-conditioning-transmitter':                  'https://www.ricelake.com/media/nqifslyt/1_sct4xd_dooropen_rightface_hr.png',
  // Load cells
  'rice-lake-rl20000st-stainless-steel-s-beam-load-cell':           'https://www.ricelake.com/media/nkjhezfh/rl-rl20000ss-load-cell.png',
  'rice-lake-rl32018-mlc-coated-alloy-steel-single-ended-beam-load-cell': 'https://www.ricelake.com/media/2spgkpqu/rl-rl32018-painted-load-cell.png',
  'rice-lake-rl32018s-p-stainless-steel-single-ended-beam-load-cell': 'https://www.ricelake.com/media/ulkhxjnm/rl-rl32018s-p-load-cell.png',
  'rice-lake-rl32019s-he-stainless-steel-single-ended-beam':         'https://www.ricelake.com/media/t3upufs4/rl-rl32019s-he-load-cell.png',
  'rice-lake-rl20000fls-stainless-steel-s-beam-load-cell':           'https://www.ricelake.com/media/p4ui3vss/rl20000fls_final.jpg',
  // Livestock
  'mas-lm-stationary-mechanical-animal-scale': 'https://www.ricelake.com/media/2j1otysj/mas-lm.jpg',
  // Checkweighers
  'cw-90-over-under-checkweigher':        'https://www.ricelake.com/media/tstnvbhm/web_sc_imw.png',
  'cw-90x-over-under-washdown-checkweigher': 'https://www.ricelake.com/media/nonpeguv/web_sc_cascade.png',
  'cw-90-checkweigh-indicator':           'https://www.ricelake.com/media/1z1d0svd/1_us_motoweigh_integrator_1280_cmyk-1.jpg',
  'cw-90x-checkweigh-indicator':          'https://www.ricelake.com/media/1z1d0svd/1_us_motoweigh_integrator_1280_cmyk-1.jpg',
  // Bench digital scales
  'iq-plus-2100-digital-bench-scale':     'https://www.ricelake.com/media/u2zhay3l/web_sc_cw-90b_light.png',
  'iq-plus-2100sl-digital-bench-scale':   'https://www.ricelake.com/media/u2zhay3l/web_sc_cw-90b_light.png',
  // Balances
  'te-enhanced-series-rice-lake-legal-for-trade-balance': 'https://www.ricelake.com/media/smsbeubp/web_sc_taplus_analytical-balance.png',
  'gf-p-series-a-d-weighing-legal-for-trade-balance':    'https://www.ricelake.com/media/vdadjlse/hr-aza.png',
  'fx-i-series-a-d-weighing-precision-balance':          'https://www.ricelake.com/media/iyhfv1fg/apollo-gf.png',
  'adventurer-series-ohaus-legal-for-trade-balance':     'https://www.ricelake.com/media/xlsbayfs/_portals_0_products_7280ebdb87d242208a014fb223fb3bea-orig.png',
  'fx-i-series-a-d-weighing-legal-for-trade-balance':    'https://www.ricelake.com/media/iyhfv1fg/apollo-gf.png',
  // Crane / overhead
  'msi-4260-port-a-weigh-industrial-crane-scale':        'https://www.ricelake.com/media/u4ehpz2a/web_sc_msi_4260_portaweight.png',
  'msi-4260-is-port-a-weigh-intrinsically-safe-crane-scale': 'https://www.ricelake.com/media/jn4flxs3/_portals_0_products_8b3cd06cb4d34e53aec9430dbb25d562-orig.png',
  'msi-8004hd-indicator-rf-led-remote-display':          'https://www.ricelake.com/media/iptd4ycw/rl-msi-8004hd-remote-display.jpg',
  // Retail / Ishida
  'ishida-astra-ii-price-computing-scale-with-printer':  'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  'ishida-uni-3-series-price-computing-printing-scales': 'https://www.ricelake.com/media/cjddgla4/web_sc_benchpro-bpr-rdbs.png',
  'ishida-uni-5-series-price-computing-printing-scales': 'https://www.ricelake.com/media/cjddgla4/web_sc_benchpro-bpr-rdbs.png',
  'ishida-uni-7-series-price-computing-printing-scale':  'https://www.ricelake.com/media/cjddgla4/web_sc_benchpro-bpr-rdbs.png',
  'ishida-wm-micro-compact-wrapper':                     'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  'ishida-ip-ai-label-printer-with-remote-scale-base':   'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  'ishida-uni-8-series-price-computing-printing-scale':  'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  'ishida-uni-9-series-pc-scale':                        'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  'ishida-uni-9h-hanging-scale':                         'https://www.ricelake.com/media/cjddgla4/web_sc_benchpro-bpr-rdbs.png',
  'ishida-uni-10-series-price-computing-printing-scale': 'https://www.ricelake.com/media/2pboy5oj/hdimage-1.png',
  // Forklift
  'cls-nextgen-forklift-scale-with-mobile-printer': 'https://www.ricelake.com/media/w4kirwgw/1_web_cls_nextgen_sc.png',
  // Weigh modules / SURVIVOR
  'survivor-paramounts-he-weigh-module-kits':  'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  'survivor-rl1700-he-weigh-module-kits':      'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  'survivor-rl1600-he-series-weigh-module-with-rl75016whe-load-cell': 'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  'survivor-rl1855-he-hs-weigh-module-kits':   'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  'survivor-rl2100-he-heavy-capacity-weigh-module-kits': 'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  'itcm-isolated-tension-cell-weigh-module-kit':    'https://www.ricelake.com/media/ulpjiei1/rl-rl20000i-s-beam-load-cell.png',
  'itcm-ss-isolated-tension-cell-weigh-module-kit': 'https://www.ricelake.com/media/nkjhezfh/rl-rl20000ss-load-cell.png',
  'itcm-he-isolated-tension-cell-weigh-module-kit': 'https://www.ricelake.com/media/esnbm5ap/rl-rl20001he-s-beam-load-cell.png',
  'rl50210ta-mini-tank-weigh-module-kit':           'https://www.ricelake.com/media/ulpjiei1/rl-rl20000i-s-beam-load-cell.png',
  '65059-mini-tank-weigh-module-kit-vpg-sensortronics': 'https://www.ricelake.com/media/ulpjiei1/rl-rl20000i-s-beam-load-cell.png',
  'rl50219ss-ta-mini-tank-weigh-module-kit':        'https://www.ricelake.com/media/nkjhezfh/rl-rl20000ss-load-cell.png',
  'paramounts-ep-weigh-module-kit':                 'https://www.ricelake.com/media/f2pjrxpk/multiplatform.png',
  // Veterinary
  'rice-lake-vs-12-dual-range-digital-companion-animal-scale': 'https://www.ricelake.com/media/x2jpi0ut/web_sc_sas_livestockscale.png',
};

// ── TRANSLATIONS ──────────────────────────────────────────────────────────
// Common English → Spanish phrase replacements for descriptions
const TRANSLATIONS = {
  // General
  'weighing': 'pesaje', 'weight': 'peso', 'scale': 'báscula', 'scales': 'básculas',
  'indicator': 'indicador', 'indicators': 'indicadores', 'display': 'pantalla',
  'capacity': 'capacidad', 'capacities': 'capacidades', 'load cell': 'celda de carga',
  'load cells': 'celdas de carga', 'stainless steel': 'acero inoxidable',
  'washdown': 'resistente al lavado', 'floor scale': 'báscula de piso',
  'bench scale': 'báscula de mesa', 'truck scale': 'báscula para camión',
  'livestock': 'ganado', 'animal': 'animal', 'platform': 'plataforma',
  'forklift': 'montacargas', 'crane': 'grúa', 'checkweigher': 'verificador de peso',
  'balance': 'balanza', 'portable': 'portátil', 'industrial': 'industrial',
  'heavy duty': 'servicio pesado', 'heavy-duty': 'servicio pesado',
  'high capacity': 'alta capacidad', 'accuracy': 'precisión', 'accurate': 'preciso',
  'durable': 'duradero', 'durability': 'durabilidad', 'reliable': 'confiable',
  'applications': 'aplicaciones', 'application': 'aplicación',
  'environments': 'entornos', 'environment': 'entorno',
  'features': 'características', 'feature': 'característica',
  'designed for': 'diseñado para', 'ideal for': 'ideal para',
  'suitable for': 'adecuado para', 'available': 'disponible',
  'mounting': 'montaje', 'mount': 'montar', 'mounted': 'montado',
  'pounds': 'libras', 'kilograms': 'kilogramos',
  'corrosive': 'corrosivo', 'corrosion': 'corrosión',
  'wireless': 'inalámbrico', 'connectivity': 'conectividad',
  'programmable': 'programable', 'digital': 'digital',
  'certified': 'certificado', 'approval': 'aprobación', 'approved': 'aprobado',
  'legal for trade': 'legal para el comercio', 'ntep': 'NTEP',
  'built': 'construido', 'construction': 'construcción',
  'series': 'serie', 'system': 'sistema', 'systems': 'sistemas',
  'module': 'módulo', 'modules': 'módulos', 'kit': 'kit',
  'compact': 'compacto', 'lightweight': 'ligero',
  'easy': 'fácil', 'simple': 'simple', 'efficient': 'eficiente',
  'transmitter': 'transmisor', 'controller': 'controlador',
  'processor': 'procesador', 'integrator': 'integrador',
};

// Full-sentence translations for common descriptions
const SENTENCE_TRANSLATIONS = [
  [/provides? reliable,?\s*accurate weighing/gi, 'proporciona pesaje confiable y preciso'],
  [/designed for (use in|both)?/gi, 'diseñado para'],
  [/ideal for (use in)?/gi, 'ideal para'],
  [/mounts? directly to/gi, 'se monta directamente en'],
  [/capable of/gi, 'capaz de'],
  [/available in/gi, 'disponible en'],
  [/for use in/gi, 'para uso en'],
  [/built to/gi, 'construido para'],
  [/made to/gi, 'hecho para'],
  [/features? (a |an )?/gi, 'cuenta con '],
  [/offers? (a |an )?/gi, 'ofrece '],
  [/includes? (a |an )?/gi, 'incluye '],
  [/provides? (a |an )?/gi, 'proporciona '],
  [/delivers? (a |an )?/gi, 'entrega '],
  [/supports? /gi, 'soporta '],
  [/allows? /gi, 'permite '],
  [/enables? /gi, 'permite '],
  [/ensures? /gi, 'garantiza '],
  [/combines? /gi, 'combina '],
  [/with (a |an )?/gi, 'con '],
  [/for (a |an )?/gi, 'para '],
  [/and (a |an )?/gi, 'y '],
  [/the industry('s)? (standard|leading|best)/gi, 'el estándar de la industria'],
  [/heavy-duty/gi, 'servicio pesado'],
  [/high-capacity/gi, 'alta capacidad'],
  [/stainless steel/gi, 'acero inoxidable'],
  [/load cell/gi, 'celda de carga'],
  [/floor scale/gi, 'báscula de piso'],
  [/bench scale/gi, 'báscula de mesa'],
  [/truck scale/gi, 'báscula para camión'],
  [/crane scale/gi, 'báscula de grúa'],
  [/forklift scale/gi, 'báscula para montacargas'],
  [/belt scale/gi, 'báscula de banda'],
  [/checkweigher/gi, 'verificador de peso'],
  [/weigh module/gi, 'módulo de pesaje'],
  [/washdown/gi, 'resistente al lavado'],
  [/legal for trade/gi, 'legal para el comercio'],
  [/\bpound(s)?\b/gi, 'libras'],
  [/\blb\b/gi, 'lb'],
];

function translateDescription(text) {
  if (!text) return text;
  // Detect if mostly English (has common English words)
  const englishIndicators = ['the ', 'for ', 'and ', 'with ', 'that ', ' of ', 'designed', 'features', 'provides', 'offers', 'available', ' is ', ' are ', ' has '];
  const isEnglish = englishIndicators.filter(w => text.toLowerCase().includes(w)).length >= 3;
  if (!isEnglish) return text; // already Spanish

  let result = text;
  // Apply sentence-level translations
  for (const [pattern, replacement] of SENTENCE_TRANSLATIONS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

// ── FIX PRODUCTS ─────────────────────────────────────────────────────────
let fixedImages = 0;
let fixedTranslations = 0;

const productos = data.productos.map(p => {
  const result = { ...p };

  // Fix missing image
  if (!result.imagen && IMAGE_MAP[result.id]) {
    result.imagen = IMAGE_MAP[result.id];
    fixedImages++;
  }

  // Translate description
  if (result.descripcion) {
    const translated = translateDescription(result.descripcion);
    if (translated !== result.descripcion) {
      result.descripcion = translated;
      fixedTranslations++;
    }
  }

  return result;
});

// Write back
const output = { ...data, productos, total_productos: productos.length };
fs.writeFileSync(filePath, JSON.stringify(output, null, 2));

// Stats
const stillNoImage = productos.filter(p => !p.imagen).length;
console.log(`✅ Imágenes rellenadas: ${fixedImages}`);
console.log(`✅ Descripciones traducidas: ${fixedTranslations}`);
console.log(`⚠️  Aún sin imagen: ${stillNoImage}`);
if (stillNoImage > 0) {
  console.log('   IDs pendientes:');
  productos.filter(p => !p.imagen).forEach(p => console.log(`   - ${p.id}`));
}
