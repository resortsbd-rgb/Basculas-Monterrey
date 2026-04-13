import ContactoForm from "./ContactoForm";

export const metadata = {
  title: "Contacto y Cotización | Básculas Monterrey",
  description: "Solicita una cotización de equipos de pesaje industrial. Distribuidor autorizado Rice Lake y Básculas Metrology en Monterrey.",
};

interface Props {
  searchParams: Promise<{ producto?: string }>;
}

export default async function ContactoPage({ searchParams }: Props) {
  const { producto } = await searchParams;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-3">Contáctanos</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            ¿Necesitas una cotización o información sobre algún producto? Completa el formulario y un asesor te contactará a la brevedad.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#1e3a5f] p-3 rounded-xl text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Ubicación</p>
                <p className="text-gray-500 text-sm">Monterrey, Nuevo León, México</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#1e3a5f] p-3 rounded-xl text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-500 text-sm">ventas@basculasmonterrey.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#e8770a] p-3 rounded-xl text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Distribuidores Autorizados</p>
                <p className="text-gray-500 text-sm">Rice Lake Weighing Systems · Básculas Metrology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <ContactoForm productoInicial={producto} />
      </div>
    </div>
  );
}
