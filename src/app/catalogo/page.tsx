import { getCategorias, getProductos } from "@/lib/catalogo";
import CatalogoClient from "./CatalogoClient";

interface Props {
  searchParams: Promise<{ categoria?: string }>;
}

export const metadata = {
  title: "Catálogo de Productos | Básculas Monterrey",
  description: "Catálogo completo de básculas industriales, indicadores, celdas de carga y más. Rice Lake y Básculas Metrology.",
};

export default async function CatalogoPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const productos = getProductos();
  const categorias = getCategorias();

  return (
    <CatalogoClient
      productos={productos}
      categorias={categorias}
      categoriaInicial={categoria}
    />
  );
}
