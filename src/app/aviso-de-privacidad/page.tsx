import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Básculas Monterrey",
  description: "Consulta cómo Básculas Monterrey utiliza los datos proporcionados para atender solicitudes de productos y servicios.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function AvisoPrivacidadPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-[#1e3a5f] mb-6">Aviso de Privacidad</h1>
      <p className="mb-5">
        <strong>Básculas Monterrey</strong>, con domicilio de contacto en Av. Lic. Adolfo López Mateos #288,
        C.P. 66613, Apodaca, Nuevo León, México, y correo electrónico
        {" "}<a className="text-blue-700 underline" href="mailto:ventas@basculasmonterrey.com">ventas@basculasmonterrey.com</a>,
        es el responsable del tratamiento de los datos personales que le sean proporcionados para fines comerciales y de atención.
      </p>

      <h2 className="text-xl font-bold text-[#1e3a5f] mt-8 mb-3">Datos y finalidades</h2>
      <p>
        Podremos recibir nombre, empresa, teléfono, correo electrónico y datos relacionados con el equipo o servicio solicitado,
        como capacidad, cantidad y lugar de entrega o atención. Se utilizarán para responder consultas, elaborar cotizaciones,
        coordinar servicios, dar seguimiento a solicitudes y mantener comunicación sobre el presupuesto solicitado.
        No pedimos datos personales sensibles mediante este formulario.
      </p>

      <h2 className="text-xl font-bold text-[#1e3a5f] mt-8 mb-3">Uso de WhatsApp</h2>
      <p>
        El formulario del sitio prepara un mensaje dirigido al número comercial de Básculas Monterrey.
        Antes de abrir WhatsApp, la persona puede revisar los datos y debe confirmar que desea compartirlos.
        El mensaje solo se envía al negocio cuando la persona pulsa Enviar dentro de WhatsApp.
        Al utilizar esa aplicación, también aplican sus condiciones y políticas de privacidad.
      </p>

      <h2 className="text-xl font-bold text-[#1e3a5f] mt-8 mb-3">Uso limitado y derechos ARCO</h2>
      <p>
        Para solicitar acceso, rectificación, cancelación u oposición al tratamiento de sus datos,
        limitar su uso o divulgación, o revocar su consentimiento cuando proceda, escriba a
        {" "}<a className="text-blue-700 underline" href="mailto:ventas@basculasmonterrey.com">ventas@basculasmonterrey.com</a>
        con su nombre, medio de contacto, derecho que desea ejercer y una descripción de su solicitud.
        Se le informará el procedimiento aplicable y se atenderá conforme a los plazos legales correspondientes.
      </p>

      <h2 className="text-xl font-bold text-[#1e3a5f] mt-8 mb-3">Cambios al aviso</h2>
      <p>
        Cualquier actualización de este aviso se comunicará mediante esta misma página.
        Última actualización: noviembre de 2026.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Este aviso describe el flujo de consultas del sitio. Los tratamientos adicionales que pudieran realizarse
        durante una relación comercial deberán informarse conforme corresponda.
      </p>
      <Link href="/contacto" className="inline-block mt-8 text-[#1e3a5f] underline font-semibold">Volver a contacto</Link>
    </article>
  );
}
