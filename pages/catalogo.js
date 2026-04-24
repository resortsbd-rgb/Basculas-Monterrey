import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas')

  const productos = [
    // BÁSCULAS CAMIONERAS - METROLOGY
    {
      id: 1,
      nombre: 'Báscula Camionera Metrology 60 ton',
      marca: 'Metrology',
      categoria: 'camioneras',
      imagen: '/images/bascula-camionera-metrology-hero.png',
      capacidad: '60,000 kg',
      precio: 'Cotizar',
      descripcion: 'Báscula camionera industrial de alta resistencia'
    },
    {
      id: 2,
      nombre: 'Báscula Camionera Metrology 80 ton',
      marca: 'Metrology',
      categoria: 'camioneras',
      imagen: '/images/bascula-camionera-metrology-2.jpeg',
      capacidad: '80,000 kg',
      precio: 'Cotizar',
      descripcion: 'Sistema de pesaje para vehículos de carga pesada'
    },

    // PLATAFORMAS DE PISO
    {
      id: 3,
      nombre: 'Plataforma Industrial Metrology',
      marca: 'Metrology',
      categoria: 'plataformas',
      imagen: '/images/plataforma-piso-1.jpeg',
      capacidad: '5,000 kg',
      precio: 'Cotizar',
      descripcion: 'Plataforma de piso para aplicaciones industriales'
    },
    {
      id: 4,
      nombre: 'Plataforma de Piso Rice Lake',
      marca: 'Rice Lake',
      categoria: 'plataformas',
      imagen: '/images/plataforma-piso-2.png',
      capacidad: '10,000 kg',
      precio: 'Cotizar',
      descripcion: 'Plataforma robusta para pesaje industrial'
    },

    // BÁSCULAS GANADERAS - SOLO METROLOGY (Rice Lake eliminado)
    {
      id: 5,
      nombre: 'Báscula Ganadera Metrology',
      marca: 'Metrology',
      categoria: 'ganaderas',
      imagen: '/images/bascula-ganadera-metrology.png',
      capacidad: '2,000 kg',
      precio: 'Cotizar',
      descripcion: 'Sistema de pesaje especializado para ganado'
    },

    // INDICADORES DE PESO
    {
      id: 6,
      nombre: 'Indicador Digital Rice Lake 920i',
      marca: 'Rice Lake',
      categoria: 'balanzas', // Movido a BALANZAS según instrucción de Víctor
      imagen: '/images/indicadores-peso.jpeg',
      capacidad: 'Multi-rango',
      precio: 'Cotizar',
      descripcion: 'Indicador digital programable de alta precisión'
    },
    {
      id: 7,
      nombre: 'Indicador de Gancho Metrology',
      marca: 'Metrology',
      categoria: 'indicadores',
      imagen: '/images/indicadores-peso.jpeg',
      capacidad: '500 kg',
      precio: 'Cotizar',
      descripcion: 'Indicador portátil para pesaje aéreo'
    },

    // CELDAS DE CARGA
    {
      id: 8,
      nombre: 'Celda de Carga Rice Lake RLACS',
      marca: 'Rice Lake',
      categoria: 'balanzas', // Movido a BALANZAS
      imagen: '/images/celdas-carga.jpeg',
      capacidad: '0-50 ton',
      precio: 'Cotizar',
      descripcion: 'Celda de carga de compresión de acero inoxidable'
    },
    {
      id: 9,
      nombre: 'Celda de Carga Metrology',
      marca: 'Metrology',
      categoria: 'celdas',
      imagen: '/images/celdas-carga.jpeg',
      capacidad: '0-20 ton',
      precio: 'Cotizar',
      descripcion: 'Sensor de carga de alta precisión'
    },

    // CAJAS DE SUMA
    {
      id: 10,
      nombre: 'Caja de Suma Metrology',
      marca: 'Metrology',
      categoria: 'cajas-suma',
      imagen: '/images/caja-suma.jpeg',
      capacidad: '4-8 celdas',
      precio: 'Cotizar',
      descripcion: 'Junction box para sistemas multi-celda'
    },

    // BÁSCULAS DE MESA
    {
      id: 11,
      nombre: 'Báscula de Plataforma Metrology',
      marca: 'Metrology',
      categoria: 'mesa-recibo',
      imagen: '/images/bascula-mesa.png',
      capacidad: '500 kg',
      precio: 'Cotizar',
      descripcion: 'Báscula de piso compacta con torre indicadora'
    },

    // BALANZAS RICE LAKE (nueva categoría)
    {
      id: 12,
      nombre: 'Balanza de Precisión Rice Lake IQ Plus 355',
      marca: 'Rice Lake',
      categoria: 'balanzas',
      imagen: '/images/indicadores-peso.jpeg',
      capacidad: '300 kg',
      precio: 'Cotizar',
      descripcion: 'Balanza de alta precisión para laboratorio e industria'
    }
  ]

  const categorias = [
    { id: 'todas', nombre: 'Todas las Categorías' },
    { id: 'camioneras', nombre: 'Básculas Camioneras' },
    { id: 'plataformas', nombre: 'Plataformas de Piso' },
    { id: 'ganaderas', nombre: 'Básculas Ganaderas' },
    { id: 'indicadores', nombre: 'Indicadores de Peso' },
    { id: 'celdas', nombre: 'Celdas de Carga' },
    { id: 'cajas-suma', nombre: 'Cajas de Suma' },
    { id: 'mesa-recibo', nombre: 'Básculas de Mesa' },
    { id: 'balanzas', nombre: 'Balanzas' }
  ]

  const productosFiltrados = categoriaActiva === 'todas' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva)

  return (
    <>
      <Head>
        <title>Catálogo | Básculas Monterrey</title>
        <meta name="description" content="Catálogo completo de básculas industriales, camioneras, ganaderas y de precisión" />
      </Head>

      {/* Header */}
      <header className="bg-bascula-navy text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-heading font-bold hover:text-bascula-orange transition">
              BÁSCULAS MONTERREY
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-bascula-orange transition">Inicio</Link>
              <Link href="/catalogo" className="text-bascula-orange">Catálogo</Link>
              <Link href="/marcas" className="hover:text-bascula-orange transition">Marcas</Link>
              <Link href="/contacto" className="hover:text-bascula-orange transition">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Catálogo */}
      <section className="bg-bascula-navy text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-2">Catálogo de Productos</h1>
          <p className="text-gray-300">Soluciones completas de pesaje Metrology y Rice Lake</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  categoriaActiva === cat.id
                    ? 'bg-bascula-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="py-12 bg-bascula-gray min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-6 text-gray-600">
            Mostrando {productosFiltrados.length} producto(s)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map(producto => (
              <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 bg-gray-50">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-contain p-6"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      producto.marca === 'Metrology' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {producto.marca}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-bascula-navy mb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {producto.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Capacidad</div>
                      <div className="font-semibold text-bascula-navy">{producto.capacidad}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Precio</div>
                      <div className="font-bold text-bascula-orange">{producto.precio}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/contacto?producto=${encodeURIComponent(producto.nombre)}`}
                    className="block w-full bg-bascula-orange hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bascula-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">BÁSCULAS MONTERREY</h3>
              <p className="text-gray-300">
                Soluciones industriales de pesaje certificadas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-bascula-orange transition">Inicio</Link></li>
                <li><Link href="/catalogo" className="hover:text-bascula-orange transition">Catálogo</Link></li>
                <li><Link href="/contacto" className="hover:text-bascula-orange transition">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Monterrey, Nuevo León</li>
                <li>
                  <a href="mailto:info@basculasmonterrey.com" className="hover:text-bascula-orange transition">
                    info@basculasmonterrey.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Básculas Monterrey. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
