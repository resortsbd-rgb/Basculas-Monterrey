import Link from "next/link";
import Image from "next/image";
import { getCategorias, getProductos, getImagenProducto } from "@/lib/catalogo";

const CATEGORIAS_ICON: Record<string, string> = {
  "Básculas Industriales de Piso": "🏭",
  "Indicadores y Controladores": "📟",
  "Básculas para Ganado y Agricultura": "🐄",
  "Básculas para Camión y Vehículos": "🚛",
  "Básculas Médicas y de Precisión": "⚕️",
  "Básculas Colgantes y de Grúa": "🏗️",
  "Pesas y Calibración": "⚖️",
  "Impresoras y Periféricos": "🖨️",
  "Celdas de Carga y Accesorios": "🔧",
  "Sistemas de Pesaje en Banda": "🔄",
  "Software y Sistemas": "💻",
  "Checkweighers y Control de Peso": "✅",
};

export default function Home() {
  const categorias = getCategorias();
  const productos = getProductos();
  const productosDestacados = productos.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d1f35] via-[#1e3a5f] to-[#0d2844] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 80px)'}} />
        </div>
        {/* Accent lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e8770a]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e8770a] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-[#e8770a] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              Rice Lake — Distribuidor Autorizado
            </span>
            <span className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
              ISO 9001 Certificado
            </span>
            <span className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
              NOM Calibración
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
              Soluciones de Pesaje Industrial<br />
              <span className="text-[#e8770a]">en Monterrey, México</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Distribuidor autorizado de <strong className="text-white">Rice Lake Weighing Systems</strong> y Básculas Metrology.
              Más de {productos.length} productos — básculas industriales, celdas de carga, indicadores y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/catalogo"
                className="bg-[#e8770a] hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg shadow-lg shadow-orange-900/40"
              >
                Ver Catálogo Completo
              </Link>
              <a
                href="https://wa.me/528114814111?text=Hola,%20me%20interesa%20cotizar%20un%20equipo%20de%20pesaje"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-900/40"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { n: `${productos.length}+`, label: 'Productos' },
                { n: '12', label: 'Categorías' },
                { n: '20+', label: 'Años de Experiencia' },
                { n: 'NL', label: 'Monterrey, México' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl py-4 px-2 border border-white/10">
                  <div className="text-2xl font-extrabold text-[#e8770a]">{stat.n}</div>
                  <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="bg-gray-50 py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wide font-medium">Distribuidores Autorizados</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#1e3a5f] text-white rounded-lg px-4 py-2 font-bold text-lg">Rice Lake</div>
              <span className="text-gray-500 text-sm">Weighing Systems</span>
            </div>
            <div className="text-gray-300 hidden sm:block text-2xl">|</div>
            <div className="flex items-center gap-3">
              <div className="bg-[#e8770a] text-white rounded-lg px-4 py-2 font-bold text-lg">Básculas</div>
              <span className="text-gray-500 text-sm">Metrology México</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-2">Categorías de Productos</h2>
          <p className="text-gray-500 text-center mb-10">Encuentra el equipo de pesaje ideal para tu aplicación</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorias.slice(0, 8).map((cat) => (
              <Link
                key={cat}
                href={`/catalogo?categoria=${encodeURIComponent(cat)}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#e8770a] hover:shadow-md transition-all text-center"
              >
                <div className="text-3xl mb-2">{CATEGORIAS_ICON[cat] || "📦"}</div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-[#1e3a5f] leading-tight">{cat}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/catalogo" className="text-[#1e3a5f] font-semibold hover:text-[#e8770a] transition-colors">
              Ver todas las categorías →
            </Link>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-2">Productos Destacados</h2>
          <p className="text-gray-500 text-center mb-10">Selección de nuestro catálogo de {productos.length} productos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosDestacados.map((producto) => {
              const imagen = getImagenProducto(producto);
              return (
                <Link
                  key={producto.id}
                  href={`/catalogo/${producto.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {imagen !== "/placeholder.jpg" ? (
                      <Image
                        src={imagen}
                        alt={producto.titulo}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform"
                        unoptimized
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    )}
                    <span className="absolute top-2 left-2 bg-[#1e3a5f] text-white text-xs px-2 py-0.5 rounded">
                      {producto.marca}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#e8770a] font-medium mb-1">{producto.categoria}</p>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#1e3a5f]">
                      {producto.titulo}
                    </h3>
                    {producto.descripcion && (
                      <p className="text-sm text-gray-500 line-clamp-2">{producto.descripcion}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/catalogo"
              className="bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Ver catálogo completo ({productos.length} productos)
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-10">¿Por qué Básculas Monterrey?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                titulo: "Distribuidor Autorizado",
                desc: "Representantes oficiales de Rice Lake Weighing Systems y Básculas Metrology en el noreste de México.",
              },
              {
                icon: "🔧",
                titulo: "Soporte Técnico",
                desc: "Instalación, calibración y mantenimiento de equipos de pesaje por técnicos certificados.",
              },
              {
                icon: "📦",
                titulo: "Amplio Catálogo",
                desc: `Más de ${productos.length} modelos disponibles: básculas industriales, indicadores, celdas de carga y accesorios.`,
              },
            ].map((item) => (
              <div key={item.titulo} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-[#1e3a5f] mb-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8770a] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">¿Necesitas una cotización?</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Contáctanos y te ayudamos a encontrar el equipo de pesaje ideal para tu aplicación.
            Atención en Monterrey y todo el noreste de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/528114814111?text=Hola,%20me%20interesa%20cotizar%20un%20equipo%20de%20pesaje"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-3 rounded-lg transition-colors text-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: +52 811 481 4111
            </a>
            <Link
              href="/contacto"
              className="bg-white text-[#e8770a] hover:bg-orange-50 font-bold px-10 py-3 rounded-lg transition-colors text-lg inline-block"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
