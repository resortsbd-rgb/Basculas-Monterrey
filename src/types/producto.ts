export interface Especificacion {
  label: string;
  value: string;
}

export interface Producto {
  id: string;
  marca: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  url_fuente: string;
  imagenes: string[];
  especificaciones: Especificacion[];
}

export interface Catalogo {
  sitio: string;
  total_productos: number;
  categorias: string[];
  productos: Producto[];
}

// Scraped product format from Firecrawl
export interface ProductoScraped {
  id: string;
  nombre: string;
  categoria: string;
  marca: string;
  descripcion: string;
  imagen: string;
  url_fuente: string;
  especificaciones: Especificacion[];
}

export interface CatalogoScraped {
  fuente: string;
  fecha_scraping?: string;
  total_productos: number;
  categorias: string[];
  productos: ProductoScraped[];
}
