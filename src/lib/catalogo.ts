import catalogoData from "@/data/catalogo-final.json";
import categoriasData from "@/data/categorias-nuevas.json";
import type { Catalogo, Producto } from "@/types/producto";

export interface CategoriaItem {
  id: string;
  nombre: string;
  descripcion: string;
  marcas: string[];
}

const catalogo = catalogoData as Catalogo;
const todosLosProductos: Producto[] = catalogo.productos;
const todasLasCategorias: CategoriaItem[] = categoriasData as CategoriaItem[];

export function getProductos(): Producto[] {
  return todosLosProductos;
}

export function getCategorias(): string[] {
  return todasLasCategorias.map((c) => c.id);
}

export function getCategoriasNuevas(): CategoriaItem[] {
  return todasLasCategorias;
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
