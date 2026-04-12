"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Producto } from "@/types/producto";
import { getImagenProducto } from "@/lib/catalogo";

interface Props {
  productos: Producto[];
  categorias: string[];
  categoriaInicial?: string;
}

export default function CatalogoClient({ productos, categorias, categoriaInicial }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaInicial || "");
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("");

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      const matchBusqueda =
        !busqueda ||
        p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      const matchCategoria = !categoriaSeleccionada || p.categoria === categoriaSeleccionada;
      const matchMarca = !marcaSeleccionada || p.marca === marcaSeleccionada;
      return matchBusqueda && matchCategoria && matchMarca;
    });
  }, [productos, busqueda, categoriaSeleccionada, marcaSeleccionada]);

  const marcas = Array.from(new Set(productos.map((p) => p.marca)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Catálogo de Productos</h1>
        <p className="text-gray-500">{productos.length} productos disponibles · Rice Lake y Básculas Metrology</p>
      </div>

      {/* Filtros */}
      <div className="bg-gray-50 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4">
        {/* Búsqueda */}
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white"
          />
        </div>

        {/* Categoría */}
        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white min-w-[200px]"
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Marca */}
        <select
          value={marcaSeleccionada}
          onChange={(e) => setMarcaSeleccionada(e.target.value)}
          className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white min-w-[160px]"
        >
          <option value="">Todas las marcas</option>
          {marcas.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Limpiar */}
        {(busqueda || categoriaSeleccionada || marcaSeleccionada) && (
          <button
            onClick={() => { setBusqueda(""); setCategoriaSeleccionada(""); setMarcaSeleccionada(""); }}
            className="px-4 py-2.5 text-sm text-gray-500 hover:text-red-500 border border-gray-200 rounded-lg bg-white transition-colors"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Resultados */}
      <p className="text-sm text-gray-500 mb-4">
        {productosFiltrados.length} resultado{productosFiltrados.length !== 1 ? "s" : ""}
        {categoriaSeleccionada && ` en "${categoriaSeleccionada}"`}
      </p>

      {productosFiltrados.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium">No se encontraron productos</p>
          <p className="text-sm mt-2">Intenta con otros términos de búsqueda</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productosFiltrados.map((producto) => {
            const imagen = getImagenProducto(producto);
            return (
              <Link
                key={producto.id}
                href={`/catalogo/${producto.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#e8770a] transition-all"
              >
                <div className="relative h-44 bg-gray-50 overflow-hidden">
                  {imagen !== "/placeholder.jpg" ? (
                    <Image
                      src={imagen}
                      alt={producto.titulo}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-200">
                      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 bg-[#1e3a5f] text-white text-xs px-2 py-0.5 rounded font-medium">
                    {producto.marca}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#e8770a] font-medium mb-1 truncate">{producto.categoria}</p>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 group-hover:text-[#1e3a5f] leading-snug">
                    {producto.titulo}
                  </h3>
                  {producto.descripcion && (
                    <p className="text-xs text-gray-400 line-clamp-2 mt-1">{producto.descripcion}</p>
                  )}
                  <p className="text-xs text-[#1e3a5f] font-medium mt-3 group-hover:underline">Ver detalles →</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
