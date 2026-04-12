import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductoById, getProductos, getImagenProducto } from "@/lib/catalogo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const productos = getProductos();
  return productos.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const producto = getProductoById(id);
  if (!producto) return {};
  return {
    title: `${producto.titulo} | Básculas Monterrey`,
    description: producto.descripcion || `${producto.titulo} - ${producto.marca}`,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;
  const producto = getProductoById(id);
  if (!producto) notFound();

  const imagen = getImagenProducto(producto);
  const todasImagenes = producto.imagenes.filter((img) => img && !img.endsWith(".svg") && img.startsWith("http"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1e3a5f]">Inicio</Link>
        <span>/</span>
        <Link href="/catalogo" className="hover:text-[#1e3a5f]">Catálogo</Link>
        <span>/</span>
        <Link href={`/catalogo?categoria=${encodeURIComponent(producto.categoria)}`} className="hover:text-[#1e3a5f]">
          {producto.categoria}
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium truncate max-w-[200px]">{producto.titulo}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Imagen */}
        <div>
          <div className="relative h-80 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            {imagen !== "/placeholder.jpg" ? (
              <Image
                src={imagen}
                alt={producto.titulo}
                fill
                className="object-contain p-8"
                unoptimized
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-200">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            )}
          </div>

          {/* Miniaturas */}
          {todasImagenes.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {todasImagenes.slice(0, 4).map((img, i) => (
                <div key={i} className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                  <Image src={img} alt={`${producto.titulo} ${i + 1}`} fill className="object-contain p-2" unoptimized />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#1e3a5f] text-white text-xs px-3 py-1 rounded-full font-medium">{producto.marca}</span>
            <span className="bg-orange-100 text-[#e8770a] text-xs px-3 py-1 rounded-full font-medium">{producto.categoria}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{producto.titulo}</h1>

          {producto.descripcion && (
            <p className="text-gray-600 leading-relaxed mb-6">{producto.descripcion}</p>
          )}

          {/* Especificaciones */}
          {producto.especificaciones.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-[#1e3a5f] text-lg mb-3">Especificaciones Técnicas</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {producto.especificaciones.map((spec, i) => (
                  <div key={i} className={`flex gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    {spec.label && <span className="font-medium text-gray-700 min-w-[140px]">{spec.label}</span>}
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={`https://wa.me/528114814111?text=${encodeURIComponent(`Hola, me interesa cotizar: ${producto.titulo}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <Link
              href={`/contacto?producto=${encodeURIComponent(producto.titulo)}`}
              className="flex-1 bg-[#e8770a] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
            >
              Solicitar Cotización
            </Link>
          </div>
          <div className="mb-4">
            <a
              href={producto.url_fuente}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1e3a5f] hover:text-[#e8770a] underline transition-colors"
            >
              Ver ficha técnica en fabricante ↗
            </a>
          </div>

          <p className="text-xs text-gray-400">
            Fuente: {producto.marca} — Para cotización y disponibilidad contáctanos.
          </p>
        </div>
      </div>

      {/* Volver */}
      <div className="mt-10 border-t pt-6">
        <Link href="/catalogo" className="text-[#1e3a5f] hover:text-[#e8770a] font-medium transition-colors">
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
