import Link from "next/link";

export const metadata = {
  title: "Calibración y Mantenimiento NOM | Básculas Monterrey",
  description: "Servicio de calibración y mantenimiento de básculas industriales en Monterrey conforme a NOM-010-SCFI. Certificación, ajuste y verificación de equipos de pesaje.",
};

const servicios = [
  {
    icono: "⚖️",
    titulo: "Calibración NOM-010-SCFI",
    descripcion: "Calibración de básculas y equipos de pesaje conforme a la Norma Oficial Mexicana NOM-010-SCFI vigente. Emitimos certificado de calibración con trazabilidad metrológica.",
    detalle: ["Básculas industriales de piso", "Básculas para camión y vehículos", "Indicadores y controladores de peso", "Celdas de carga"],
  },
  {
    icono: "🔧",
    titulo: "Mantenimiento Preventivo",
    descripcion: "Programa de mantenimiento preventivo para prolongar la vida útil de tu equipo y garantizar mediciones precisas en todo momento.",
    detalle: ["Inspección y limpieza general", "Verificación de celda de carga", "Revisión de conexiones eléctricas", "Ajuste de nivelación y cero"],
  },
  {
    icono: "🛠️",
    titulo: "Mantenimiento Correctivo",
    descripcion: "Reparación y restauración de equipos de pesaje dañados o fuera de especificación. Diagnóstico técnico y reemplazo de componentes originales.",
    detalle: ["Diagnóstico técnico completo", "Reemplazo de celdas de carga", "Reparación de indicadores", "Sustitución de componentes originales Rice Lake"],
  },
  {
    icono: "📋",
    titulo: "Verificación Metrológica",
    descripcion: "Verificación oficial de instrumentos de medición para cumplimiento con SEMARNAT, PROFECO y otras dependencias gubernamentales.",
    detalle: ["Pruebas de exactitud y linealidad", "Prueba de repetibilidad", "Informe técnico detallado", "Certificado con número de folio"],
  },
  {
    icono: "🏭",
    titulo: "Instalación y Puesta en Marcha",
    descripcion: "Instalación profesional de básculas industriales, báscula para camión, sistemas de pesaje y equipos de instrumentación.",
    detalle: ["Instalación mecánica y eléctrica", "Configuración de indicadores", "Pruebas de funcionamiento", "Capacitación al operador"],
  },
  {
    icono: "📱",
    titulo: "Soporte Técnico Remoto",
    descripcion: "Asistencia técnica vía WhatsApp y teléfono para diagnóstico rápido de fallas y orientación en el uso del equipo.",
    detalle: ["Diagnóstico vía WhatsApp", "Guías de solución de problemas", "Actualizaciones de software", "Respuesta en menos de 2 horas"],
  },
];

const normativas = [
  { clave: "NOM-010-SCFI-1994", titulo: "Instrumentos de medición de masa", alcance: "Básculas y balanzas de uso no automático" },
  { clave: "NOM-011-SCFI-1994", titulo: "Instrumentos de pesaje de funcionamiento automático", alcance: "Verificadoras de peso y básculas de banda" },
  { clave: "NMX-CH-140-IMNC", titulo: "Metrología — Calibración", alcance: "Requisitos para laboratorios de calibración" },
  { clave: "ISO 9001:2015", titulo: "Sistema de Gestión de Calidad", alcance: "Procesos de calibración y mantenimiento" },
];

export default function CalibracionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d1f35] via-[#1e3a5f] to-[#0d2844] text-white py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e8770a]" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-[#e8770a] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-6">
            Servicio Certificado
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Calibración y Mantenimiento<br />
            <span className="text-[#e8770a]">de Básculas Industriales</span>
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Servicio técnico especializado en Monterrey, N.L. Calibración conforme a NOM-010-SCFI
            con trazabilidad metrológica y certificado oficial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/528114814111?text=Hola,%20necesito%20cotizar%20servicio%20de%20calibraci%C3%B3n%20y%20mantenimiento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Servicio por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="border-2 border-white hover:bg-white hover:text-[#1e3a5f] text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-2">Nuestros Servicios</h2>
          <p className="text-gray-500 text-center mb-10">Soluciones técnicas completas para tu equipo de pesaje</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div key={s.titulo} className="border border-gray-200 rounded-2xl p-6 hover:border-[#e8770a] hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{s.icono}</div>
                <h3 className="font-bold text-lg text-[#1e3a5f] mb-2">{s.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{s.descripcion}</p>
                <ul className="space-y-1">
                  {s.detalle.map((d) => (
                    <li key={d} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#e8770a] rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normativas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-2">Marco Normativo</h2>
          <p className="text-gray-500 text-center mb-10">Trabajamos conforme a las normas oficiales mexicanas e internacionales</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {normativas.map((n) => (
              <div key={n.clave} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 items-start">
                <div className="bg-[#1e3a5f] text-white rounded-lg px-3 py-1 text-xs font-bold whitespace-nowrap">{n.clave}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{n.titulo}</p>
                  <p className="text-gray-500 text-xs mt-1">{n.alcance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-2">¿Cómo funciona?</h2>
          <p className="text-gray-500 text-center mb-10">Proceso simple de 4 pasos para calibrar tu equipo</p>
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {[
                { paso: "01", titulo: "Contacto y diagnóstico", desc: "Escríbenos por WhatsApp o usa el formulario. Nos describes tu equipo y necesidades." },
                { paso: "02", titulo: "Cotización sin cargo", desc: "Te enviamos una cotización detallada con el alcance del servicio, tiempo estimado y costo." },
                { paso: "03", titulo: "Servicio en sitio o taller", desc: "Nuestros técnicos van a tu planta o recibimos el equipo en nuestro taller en Monterrey." },
                { paso: "04", titulo: "Certificado y entrega", desc: "Entregamos el equipo calibrado con su certificado NOM y reporte técnico detallado." },
              ].map((item) => (
                <div key={item.paso} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-extrabold text-lg z-10">
                    {item.paso}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-bold text-gray-800 mb-1">{item.titulo}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#e8770a] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">¿Listo para calibrar tu equipo?</h2>
          <p className="text-orange-100 mb-8">
            Contáctanos ahora y agenda tu servicio de calibración. Atendemos Monterrey y área metropolitana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/528114814111?text=Hola,%20necesito%20cotizar%20calibraci%C3%B3n%20para%20mi%20b%C3%A1scula"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-3 rounded-lg transition-colors text-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +52 811 481 4111
            </a>
            <Link
              href="/contacto"
              className="bg-white text-[#e8770a] hover:bg-orange-50 font-bold px-10 py-3 rounded-lg transition-colors text-lg"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
