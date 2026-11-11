"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactoForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    producto: searchParams.get("producto") || "",
    capacidad: "",
    cantidad: "",
    destino: "",
    mensaje: "",
  });
  const [autorizado, setAutorizado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!autorizado) return;
    window.location.assign(`https://wa.me/528114814111?text=${encodeURIComponent(mensajeWhatsApp)}`);
  }

  const mensajeWhatsApp = [
    "Solicitud desde basculasmonterrey.com",
    `Nombre: ${form.nombre}`,
    `Empresa: ${form.empresa || "No indicada"}`,
    `Correo: ${form.email || "No indicado"}`,
    `Teléfono: ${form.telefono || "No indicado"}`,
    `Equipo o servicio: ${form.producto || "No especificado"}`,
    `Capacidad requerida: ${form.capacidad || "Por definir"}`,
    `Cantidad: ${form.cantidad || "Por definir"}`,
    `Ciudad de entrega o servicio: ${form.destino || "Por definir"}`,
    `Necesidad: ${form.mensaje}`,
  ].join("\n");

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 space-y-5 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input
            type="text"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico (opcional)</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="correo@empresa.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono o WhatsApp *</label>
          <input
            type="tel"
            name="telefono"
            required
            value={form.telefono}
            onChange={handleChange}
            placeholder="+52 81 0000 0000"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Capacidad requerida</label>
          <input name="capacidad" type="text" value={form.capacidad} onChange={handleChange} placeholder="Ej: 150 kg, 20 t" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
          <input name="cantidad" type="number" min="1" value={form.cantidad} onChange={handleChange} placeholder="Ej: 2" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad de entrega o servicio</label>
          <input name="destino" type="text" value={form.destino} onChange={handleChange} placeholder="Ej: Apodaca, N.L." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Equipo o servicio de interés</label>
        <input
          type="text"
          name="producto"
          value={form.producto}
          onChange={handleChange}
          placeholder="Ej: Báscula industrial, calibración, mantenimiento..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
        <textarea
          name="mensaje"
          required
          value={form.mensaje}
          onChange={handleChange}
          rows={5}
          placeholder="Describe tu necesidad, capacidad requerida, aplicación industrial..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm resize-none"
        />
      </div>

      <details className="rounded-lg bg-gray-50 border border-gray-200 p-4">
        <summary className="cursor-pointer font-medium text-sm text-gray-800">Revisar el mensaje que se compartirá por WhatsApp</summary>
        <pre className="text-xs text-gray-600 whitespace-pre-wrap mt-3 font-sans">{mensajeWhatsApp}</pre>
      </details>

      <label className="flex items-start gap-3 text-xs text-gray-600 leading-relaxed">
        <input type="checkbox" required checked={autorizado} onChange={(e) => setAutorizado(e.target.checked)} className="mt-1" />
        <span>Autorizo abrir WhatsApp con los datos de esta solicitud (nombre, contacto, empresa y detalles del equipo o servicio) dirigidos a Básculas Monterrey, +52 81 1481 4111. Entiendo que debo confirmar el envío dentro de WhatsApp.</span>
      </label>

      <button
        type="submit"
        className="w-full bg-[#e8770a] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        Continuar a WhatsApp para enviar
      </button>

      <p className="text-xs text-gray-400 text-center">
        Abriremos WhatsApp con tu solicitud preparada. Debes pulsar Enviar en WhatsApp para que la reciba nuestro equipo.
      </p>
    </form>
  );
}
