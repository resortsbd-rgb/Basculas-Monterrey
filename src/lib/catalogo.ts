import catalogoData from "@/data/catalogo.json";
import type { Catalogo, Producto } from "@/types/producto";

const catalogo = catalogoData as Catalogo;

export function getProductos(): Producto[] {
  return catalogo.productos;
}

export function getCategorias(): string[] {
  return catalogo.categorias;
}

export function getProductoById(id: string): Producto | undefined {
  return catalogo.productos.find((p) => p.id === id);
}

export function getProductosPorCategoria(categoria: string): Producto[] {
  return catalogo.productos.filter((p) => p.categoria === categoria);
}

export function buscarProductos(query: string): Producto[] {
  const q = query.toLowerCase();
  return catalogo.productos.filter(
    (p) =>
      p.titulo.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q)
  );
}

export function getImagenProducto(producto: Producto): string {
  const imagen = producto.imagenes.find(
    (img) => img && !img.endsWith(".svg") && img.startsWith("http")
  );
  return imagen || "/placeholder.jpg";
}

export { catalogo };
