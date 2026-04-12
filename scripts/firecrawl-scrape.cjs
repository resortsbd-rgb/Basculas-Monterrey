const fs = require('fs');
const path = require('path');

const API_KEY = 'fc-7f8afc8c4ed24ce4a062796d9fcab6c4';
const BASE_URL = 'https://api.firecrawl.dev/v1';

async function firecrawlScrape(url, options = {}) {
  const res = await fetch(`${BASE_URL}/scrape`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      formats: ['markdown', 'links'],
      onlyMainContent: true,
      waitFor: 1000,
      ...options,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Firecrawl error ${res.status}: ${text}`);
  }
  return res.json();
}

// Category pages to scrape (Spanish URLs that work)
const CATEGORIAS = [
  { slug: 'floor-scales',               nombre: 'Básculas de Plataforma',    url: 'https://www.ricelake.com/es/product-landing-pages/floor-scales/' },
  { slug: 'bench-scales',               nombre: 'Básculas de Plataforma',    url: 'https://www.ricelake.com/es/product-landing-pages/bench-scales/' },
  { slug: 'counting-scales',            nombre: 'Básculas de Plataforma',    url: 'https://www.ricelake.com/es/product-landing-pages/counting-scales/' },
  { slug: 'truck-scales',               nombre: 'Básculas para Vehículos',   url: 'https://www.ricelake.com/product-landing-pages/truck-scales/' },
  { slug: 'axle-scales',                nombre: 'Básculas para Vehículos',   url: 'https://www.ricelake.com/product-landing-pages/axle-scales/' },
  { slug: 'portable-vehicle-scales',    nombre: 'Básculas para Vehículos',   url: 'https://www.ricelake.com/product-landing-pages/portable-vehicle-scales/' },
  { slug: 'indicators-and-controllers', nombre: 'Instrumentación',           url: 'https://www.ricelake.com/product-landing-pages/indicators-and-controllers/' },
  { slug: 'weight-transmitters',        nombre: 'Instrumentación',           url: 'https://www.ricelake.com/product-landing-pages/weight-transmitters/' },
  { slug: 'all-load-cells',             nombre: 'Celdas de Carga',           url: 'https://www.ricelake.com/product-landing-pages/all-load-cells/' },
  { slug: 'livestock-scales',           nombre: 'Básculas para Ganado',      url: 'https://www.ricelake.com/es/product-landing-pages/livestock-scales/' },
  { slug: 'in-motion-checkweighers',    nombre: 'Verificadores de Peso',     url: 'https://www.ricelake.com/es/product-landing-pages/in-motion-checkweighers/' },
  { slug: 'static-checkweighers',       nombre: 'Verificadores de Peso',     url: 'https://www.ricelake.com/product-landing-pages/static-checkweighers/' },
  { slug: 'all-health-scales',          nombre: 'Básculas Médicas',          url: 'https://www.ricelake.com/product-landing-pages/all-health-scales/' },
  { slug: 'analytical-balances',        nombre: 'Balanzas',                  url: 'https://www.ricelake.com/es/product-landing-pages/analytical-balances/' },
  { slug: 'precision-balances',         nombre: 'Balanzas',                  url: 'https://www.ricelake.com/product-landing-pages/precision-balances/' },
  { slug: 'belt-scale-systems',         nombre: 'Básculas de Banda',         url: 'https://www.ricelake.com/es/product-landing-pages/belt-scale-systems/' },
  { slug: 'all-overhead-weighing',      nombre: 'Pesaje Aéreo',              url: 'https://www.ricelake.com/es/product-landing-pages/all-overhead-weighing/' },
  { slug: 'all-retail-equipment',       nombre: 'Equipo Retail',             url: 'https://www.ricelake.com/es/product-landing-pages/all-retail-equipment/' },
  { slug: 'forklift-scales',            nombre: 'Montacargas',               url: 'https://www.ricelake.com/es/product-landing-pages/forklift-scales/' },
  { slug: 'pallet-jack-scales',         nombre: 'Montacargas',               url: 'https://www.ricelake.com/product-landing-pages/pallet-jack-scales/' },
  { slug: 'weigh-modules',              nombre: 'Módulos de Pesaje',         url: 'https://www.ricelake.com/product-landing-pages/weigh-modules/' },
  { slug: 'all-veterinary-scales',      nombre: 'Básculas Veterinarias',     url: 'https://www.ricelake.com/product-landing-pages/all-veterinary-scales/' },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e')
    .replace(/[íìï]/g, 'i').replace(/[óòö]/g, 'o')
    .replace(/[úùü]/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function extractProducts(markdown, links, categoria, categorySlug) {
  const products = [];
  const productLinks = (links || []).filter(l =>
    l && typeof l === 'string' && l.includes('/products/') && !l.includes('#')
  );

  // Parse markdown for product entries
  const lines = markdown.split('\n');
  let currentProduct = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Product name usually appears as a link or heading near an image
    const productLinkMatch = line.match(/\[([^\]]+)\]\((https?:\/\/www\.ricelake\.com\/products\/[^)]+)\)/);
    if (productLinkMatch) {
      if (currentProduct && currentProduct.nombre) products.push(currentProduct);
      currentProduct = {
        nombre: productLinkMatch[1].trim(),
        url_fuente: productLinkMatch[2],
        id: productLinkMatch[2].replace('https://www.ricelake.com/products/', '').replace(/\/$/, ''),
        categoria,
        descripcion: '',
        imagen: '',
        especificaciones: [],
      };
      continue;
    }

    // Image links
    const imgMatch = line.match(/!\[[^\]]*\]\((https?:\/\/www\.ricelake\.com\/media\/[^)]+)\)/);
    if (imgMatch && currentProduct) {
      if (!currentProduct.imagen) currentProduct.imagen = imgMatch[1];
      continue;
    }

    // Description: non-empty line after product link that isn't another link/image
    if (currentProduct && !line.startsWith('#') && !line.startsWith('!') && !line.startsWith('[') && line.length > 30) {
      if (!currentProduct.descripcion) {
        currentProduct.descripcion = line.replace(/[*_]/g, '');
      }
    }
  }
  if (currentProduct && currentProduct.nombre) products.push(currentProduct);

  // Also add products found only in links (not parsed from markdown)
  const parsedIds = new Set(products.map(p => p.id));
  for (const link of productLinks) {
    const id = link.replace('https://www.ricelake.com/products/', '').replace(/\/$/, '');
    if (!parsedIds.has(id) && id.length > 3) {
      // Convert slug to readable name
      const nombre = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      products.push({
        nombre,
        url_fuente: link.startsWith('http') ? link : `https://www.ricelake.com${link}`,
        id,
        categoria,
        descripcion: '',
        imagen: '',
        especificaciones: [],
      });
      parsedIds.add(id);
    }
  }

  return products;
}

async function scrapeProductDetails(product) {
  try {
    const result = await firecrawlScrape(product.url_fuente);
    if (!result.success) return product;

    const md = result.data?.markdown || '';
    const meta = result.data?.metadata || {};

    // Extract image from markdown
    const imgMatch = md.match(/!\[[^\]]*\]\((https?:\/\/www\.ricelake\.com\/media\/[^?)]+)/);
    if (imgMatch && !product.imagen) product.imagen = imgMatch[1];

    // Extract description from meta or first paragraph
    if (!product.descripcion) {
      product.descripcion = meta.description || '';
    }

    // Extract specs table if present
    const specLines = [];
    const inSpec = false;
    for (const line of md.split('\n')) {
      if (line.includes('|') && line.length > 5) {
        const cells = line.split('|').map(c => c.trim()).filter(Boolean);
        if (cells.length >= 2 && !cells[0].match(/^-+$/)) {
          specLines.push({ label: cells[0], value: cells[1] });
        }
      }
    }
    if (specLines.length > 0) product.especificaciones = specLines.slice(0, 10);

  } catch (e) {
    // Skip failed individual scrapes
  }
  return product;
}

async function main() {
  console.log('🔥 Iniciando scraping con Firecrawl...\n');

  const allProducts = [];
  const seenIds = new Set();
  const resultsByCategory = {};

  for (const cat of CATEGORIAS) {
    process.stdout.write(`  Scrapeando: ${cat.nombre} (${cat.slug})... `);
    try {
      const result = await firecrawlScrape(cat.url);

      if (!result.success) {
        console.log(`❌ Error: ${result.error || 'unknown'}`);
        continue;
      }

      const markdown = result.data?.markdown || '';
      const links = result.data?.links || [];

      const products = extractProducts(markdown, links, cat.nombre, cat.slug);
      let added = 0;

      for (const p of products) {
        if (!seenIds.has(p.id) && p.id.length > 3) {
          seenIds.add(p.id);
          allProducts.push(p);
          added++;
          if (!resultsByCategory[cat.nombre]) resultsByCategory[cat.nombre] = 0;
          resultsByCategory[cat.nombre]++;
        }
      }

      console.log(`✅ ${added} productos`);

      // Small delay to be respectful of rate limits
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
  }

  // Now scrape individual product pages for the ones missing images/descriptions
  const needsDetail = allProducts.filter(p => !p.imagen || !p.descripcion);
  console.log(`\n📋 Scrapeando detalles de ${needsDetail.length} productos sin imagen/descripción...`);

  let detailCount = 0;
  const batchSize = 5;
  for (let i = 0; i < needsDetail.length; i += batchSize) {
    const batch = needsDetail.slice(i, i + batchSize);
    await Promise.all(batch.map(p => scrapeProductDetails(p)));
    detailCount += batch.length;
    process.stdout.write(`\r  Procesados: ${Math.min(detailCount, needsDetail.length)}/${needsDetail.length}`);
    await new Promise(r => setTimeout(r, 300));
  }
  console.log('\n');

  // Save output
  const output = {
    fuente: 'Rice Lake Weighing Systems (ricelake.com/es)',
    fecha_scraping: new Date().toISOString(),
    total_productos: allProducts.length,
    categorias: [...new Set(allProducts.map(p => p.categoria))],
    productos: allProducts,
  };

  const outPath = path.join(__dirname, '../src/data/products-ricelake.json');
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

  console.log('═══════════════════════════════════════');
  console.log('📊 PRODUCTOS POR CATEGORÍA:');
  for (const [cat, count] of Object.entries(resultsByCategory)) {
    console.log(`   ${cat.padEnd(30)} ${count}`);
  }
  console.log('───────────────────────────────────────');
  console.log(`   TOTAL                          ${allProducts.length}`);
  console.log('═══════════════════════════════════════');
  console.log(`\n✅ Guardado en src/data/products-ricelake.json`);
}

main().catch(console.error);
