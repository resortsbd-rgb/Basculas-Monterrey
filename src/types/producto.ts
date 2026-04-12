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
