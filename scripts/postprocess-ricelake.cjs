const fs = require('fs');
const path = require('path');

// Load scraped data
const scraped = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products-ricelake.json'), 'utf8'));
// Load existing catalog for image fallback
const existing = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/catalogo.json'), 'utf8'));

// Bad image patterns to exclude
const BAD_IMAGE_PATTERNS = [
  'ntep_logo', 'mc_logo', 'ul_listed', 'exclamation-triangle',
  'email-icon', 'phone', 'logo', 'badge', 'cert', 'approval',
  'ulcus', 'ul_c_us', 'atex', 'iecex', 'fm_approved',
];

function isGoodImage(url) {
  if (!url || !url.startsWith('http')) return false;
  const lower = url.toLowerCase();
  return !BAD_IMAGE_PATTERNS.some(p => lower.includes(p));
}

// Build a lookup from existing catalog
const existingBySlug = {};
for (const p of existing.productos) {
  existingBySlug[p.id] = p;
  // Also try matching by URL slug
  if (p.url_fuente) {
    const slug = p.url_fuente.split('/products/')[1]?.replace(/\/$/, '');
    if (slug) existingBySlug[slug] = p;
  }
}

let fixedImages = 0;
let fixedDesc = 0;

const cleaned = scraped.productos.map(p => {
  const result = { ...p };

  // Fix bad images
  if (!isGoodImage(result.imagen)) {
    // Try to find image from existing catalog
    const existing_p = existingBySlug[result.id];
    if (existing_p) {
      const goodImg = existing_p.imagenes?.find(img => isGoodImage(img));
      if (goodImg) {
        result.imagen = goodImg;
        fixedImages++;
      } else {
        result.imagen = '';
      }
    } else {
      result.imagen = '';
    }
  }

  // Fix empty descriptions from existing catalog
  if (!result.descripcion && existingBySlug[result.id]?.descripcion) {
    result.descripcion = existingBySlug[result.id].descripcion;
    fixedDesc++;
  }

  // Fix encoding issues in text fields
  result.nombre = result.nombre
    .replace(/Ã¡/g, 'á').replace(/Ã©/g, 'é').replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó').replace(/Ãº/g, 'ú').replace(/Ã±/g, 'ñ')
    .replace(/Ã/g, 'Á').replace(/É/g, 'É').replace(/Í/g, 'Í')
    .replace(/Ó/g, 'Ó').replace(/Ú/g, 'Ú').replace(/Ñ/g, 'Ñ');

  result.descripcion = (result.descripcion || '')
    .replace(/Ã¡/g, 'á').replace(/Ã©/g, 'é').replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó').replace(/Ãº/g, 'ú').replace(/Ã±/g, 'ñ');

  result.categoria = (result.categoria || '')
    .replace(/Ã¡/g, 'á').replace(/Ã©/g, 'é').replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó').replace(/Ãº/g, 'ú').replace(/Ã±/g, 'ñ');

  // Add marca
  result.marca = 'Rice Lake';

  return result;
});

// Remove duplicates by id
const seen = new Set();
const deduped = cleaned.filter(p => {
  if (seen.has(p.id)) return false;
  seen.add(p.id);
  return true;
});

// Also add products from existing catalog that aren't in scraped (keep them)
for (const p of existing.productos) {
  if (p.marca === 'Rice Lake' && !seen.has(p.id) && p.url_fuente?.includes('/products/')) {
    const img = p.imagenes?.find(img => isGoodImage(img)) || '';
    deduped.push({
      id: p.id,
      nombre: p.titulo,
      categoria: p.categoria,
      marca: 'Rice Lake',
      descripcion: p.descripcion || '',
      imagen: img,
      url_fuente: p.url_fuente,
      especificaciones: p.especificaciones || [],
    });
    seen.add(p.id);
  }
}

// Stats by category
const catCounts = {};
for (const p of deduped) {
  catCounts[p.categoria] = (catCounts[p.categoria] || 0) + 1;
}

const output = {
  fuente: 'Rice Lake Weighing Systems (ricelake.com) — Firecrawl',
  fecha_scraping: scraped.fecha_scraping,
  total_productos: deduped.length,
  categorias: Object.keys(catCounts),
  productos: deduped,
};

fs.writeFileSync(
  path.join(__dirname, '../src/data/products-ricelake.json'),
  JSON.stringify(output, null, 2)
);

// Create products.json for Básculas Metrology
const metrology = existing.productos.filter(p =>
  p.id.includes('basculas-metrology') || p.marca === 'Básculas Metrology'
);
const metrologyOut = {
  fuente: 'Básculas Metrology México',
  total_productos: metrology.length,
  productos: metrology.map(p => ({
    id: p.id,
    nombre: p.titulo,
    categoria: p.categoria,
    marca: p.marca || 'Básculas Metrology',
    descripcion: p.descripcion || '',
    imagen: p.imagenes?.find(img => isGoodImage(img)) || '',
    url_fuente: p.url_fuente,
    especificaciones: p.especificaciones || [],
  })),
};
fs.writeFileSync(
  path.join(__dirname, '../src/data/products.json'),
  JSON.stringify(metrologyOut, null, 2)
);

console.log('\n📊 PRODUCTOS RICE LAKE POR CATEGORÍA:');
for (const [cat, n] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`   ${cat.padEnd(35)} ${n}`);
}
console.log(`\n   ${'TOTAL RICE LAKE'.padEnd(35)} ${deduped.length}`);
console.log(`   ${'TOTAL METROLOGY'.padEnd(35)} ${metrology.length}`);
console.log(`\n✅ Imágenes corregidas: ${fixedImages}`);
console.log(`✅ Descripciones rescatadas: ${fixedDesc}`);
console.log(`✅ products-ricelake.json → ${deduped.length} productos`);
console.log(`✅ products.json → ${metrology.length} productos Metrology`);
