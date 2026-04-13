import { Suspense } from "react";
import { getCategorias, getProductos } from "@/lib/catalogo";
import CatalogoClient from "./CatalogoClient";

export const metadata = {
  title: "Catálogo de Productos | Básculas Monterrey",
  description: "Catálogo completo de básculas industriales, indicadores, celdas de carga y más. Rice Lake y Básculas Metrology.",
};

export default function CatalogoPage() {
  const productos = getProductos();
  const categorias = getCategorias();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Cargando catálogo...</div>}>
      <CatalogoClient productos={productos} categorias={categorias} />
    </Suspense>
  );
}
