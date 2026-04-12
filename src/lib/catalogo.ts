import catalogoData from "@/data/catalogo.json";
import ricelakeData from "@/data/products-ricelake.json";
import metrologyData from "@/data/products.json";
import type { Catalogo, Producto, ProductoScraped } from "@/types/producto";

const catalogo = catalogoData as Catalogo;

// Normalize scraped product to Producto interface
function normalizeScraped(p: ProductoScraped): Producto {
  return {
    id: p.id,
    marca: p.marca || "Rice Lake",
    categoria: p.categoria,
    titulo: p.nombre,
    descripcion: p.descripcion || "",
    url_fuente: p.url_fuente,
    imagenes: p.imagen ? [p.imagen] : [],
    especificaciones: p.especificaciones || [],
  };
}

// Build unified product list: scraped Rice Lake + Metrology (deduplicated)
function buildUnifiedCatalog(): Producto[] {
  const seen = new Set<string>();
  const result: Producto[] = [];

  // Add scraped Rice Lake products first (higher quality data)
  const rl = ricelakeData as { productos: ProductoScraped[] };
  for (const p of rl.productos) {
    if (!seen.has(p.id) && p.id.length > 3) {
      seen.add(p.id);
      result.push(normalizeScraped(p));
    }
  }

  // Add Metrology products
  const met = metrologyData as { productos: ProductoScraped[] };
  for (const p of met.productos) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      result.push(normalizeScraped(p));
    }
  }

  // Add any remaining products from the original catalog not already included
  for (const p of catalogo.productos) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      result.push(p);
    }
  }

  return result;
}

const todosLosProductos = buildUnifiedCatalog();

export function getProductos(): Producto[] {
  return todosLosProductos;
}

export function getCategorias(): string[] {
  const cats = new Set<string>();
  for (const p of todosLosProductos) {
    if (p.categoria) cats.add(p.categoria);
  }
  return Array.from(cats);
}

export function getProductoById(id: string): Producto | undefined {
  return todosLosProductos.find((p) => p.id === id);
}

export function getProductosPorCategoria(categoria: string): Producto[] {
  return todosLosProductos.filter((p) => p.categoria === categoria);
}

export function buscarProductos(query: string): Producto[] {
  const q = query.toLowerCase();
  return todosLosProductos.filter(
    (p) =>
      p.titulo.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q)
  );
}

export function getImagenProducto(producto: Producto): string {
  // Try imagenes array first
  const fromArray = producto.imagenes?.find(
    (img) => img && !img.endsWith(".svg") && img.startsWith("http") && !isLogoBadge(img)
  );
  if (fromArray) return fromArray;
  return "/placeholder.jpg";
}

function isLogoBadge(url: string): boolean {
  const bad = ["ntep_logo", "mc_logo", "ul_listed", "exclamation-triangle", "email-icon", "ulcus"];
  return bad.some((b) => url.toLowerCase().includes(b));
}

export { catalogo };
