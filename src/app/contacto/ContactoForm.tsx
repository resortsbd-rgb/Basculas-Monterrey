"use client";
import { useState } from "react";

interface Props {
  productoInicial?: string;
}

export default function ContactoForm({ productoInicial }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    producto: productoInicial || "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    // Aquí se conectaría con un backend / servicio de email
    await new Promise((r) => setTimeout(r, 1000));
    setEnviando(false);
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-700 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-600 mb-6">
          Gracias por contactarnos. Un asesor se comunicará contigo a la brevedad.
        </p>
        <button
          onClick={() => { setEnviado(false); setForm({ nombre: "", empresa: "", email: "", telefono: "", producto: "", mensaje: "" }); }}
          className="text-sm text-[#1e3a5f] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

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
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="correo@empresa.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+52 81 0000 0000"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Producto de interés</label>
        <input
          type="text"
          name="producto"
          value={form.producto}
          onChange={handleChange}
          placeholder="Ej: Báscula industrial de piso, Indicador 880..."
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

      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-[#e8770a] hover:bg-orange-600 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        {enviando ? "Enviando..." : "Enviar Solicitud"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Al enviar aceptas que un asesor de Básculas Monterrey te contacte.
      </p>
    </form>
  );
}
