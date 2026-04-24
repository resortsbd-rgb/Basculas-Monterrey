import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const categorias = [
    {
      nombre: 'Básculas Camioneras',
      imagen: '/images/bascula-camionera-metrology-hero.png',
      descripcion: 'Soluciones robustas para pesaje de vehículos pesados',
      link: '/catalogo?categoria=camioneras'
    },
    {
      nombre: 'Plataformas de Piso',
      imagen: '/images/plataforma-piso-1.jpeg',
      descripcion: 'Plataformas industriales de alta precisión',
      link: '/catalogo?categoria=plataformas'
    },
    {
      nombre: 'Básculas Ganaderas',
      imagen: '/images/bascula-ganadera-metrology.png',
      descripcion: 'Equipos especializados para pesaje de ganado',
      link: '/catalogo?categoria=ganaderas'
    },
    {
      nombre: 'Indicadores de Peso',
      imagen: '/images/indicadores-peso.jpeg',
      descripcion: 'Indicadores digitales de última generación',
      link: '/catalogo?categoria=indicadores'
    },
    {
      nombre: 'Celdas de Carga',
      imagen: '/images/celdas-carga.jpeg',
      descripcion: 'Sensores de alta precisión para sistemas de pesaje',
      link: '/catalogo?categoria=celdas'
    },
    {
      nombre: 'Cajas de Suma',
      imagen: '/images/caja-suma.jpeg',
      descripcion: 'Junction boxes para múltiples celdas de carga',
      link: '/catalogo?categoria=cajas-suma'
    },
    {
      nombre: 'Básculas de Mesa y Recibo',
      imagen: '/images/bascula-mesa.png',
      descripcion: 'Soluciones compactas para comercio y almacén',
      link: '/catalogo?categoria=mesa-recibo'
    },
    {
      nombre: 'Balanzas',
      imagen: '/images/indicadores-peso.jpeg',
      descripcion: 'Balanzas de precisión Rice Lake',
      link: '/catalogo?categoria=balanzas'
    }
  ]

  return (
    <>
      <Head>
        <title>Básculas Monterrey | Soluciones Industriales de Pesaje</title>
        <meta name="description" content="Distribuidores autorizados Metrology y Rice Lake. Básculas industriales, camioneras, ganaderas y de precisión en Monterrey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-bascula-navy text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-heading font-bold">BÁSCULAS MONTERREY</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-bascula-orange transition">Inicio</Link>
              <Link href="/catalogo" className="hover:text-bascula-orange transition">Catálogo</Link>
              <Link href="/marcas" className="hover:text-bascula-orange transition">Marcas</Link>
              <Link href="/contacto" className="hover:text-bascula-orange transition">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bascula-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-heading font-bold mb-6">
              Soluciones Industriales de Pesaje
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Distribuidores autorizados <strong>Metrology</strong> y <strong>Rice Lake</strong> en Monterrey. 
              Equipos certificados para la industria del pesaje.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/catalogo" 
                className="bg-bascula-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Ver Catálogo
              </Link>
              <Link 
                href="/contacto" 
                className="border-2 border-white hover:bg-white hover:text-bascula-navy text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de Productos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-bascula-navy mb-4 text-center">
            Nuestros Productos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Soluciones completas de pesaje para diferentes industrias y aplicaciones
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categorias.map((cat, idx) => (
              <Link 
                key={idx} 
                href={cat.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={cat.imagen}
                    alt={cat.nombre}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-bascula-navy mb-2 group-hover:text-bascula-orange transition">
                    {cat.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {cat.descripcion}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas Autorizadas */}
      <section className="py-16 bg-bascula-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-bascula-navy mb-12 text-center">
            Distribuidores Autorizados
          </h2>
          <div className="flex justify-center items-center space-x-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Image
                src="/images/logo-metrology.png"
                alt="Metrology"
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-bascula-navy">RICE LAKE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bascula-orange text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            ¿Necesitas una Cotización?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta a nuestro equipo de expertos para encontrar la solución perfecta para tu negocio
          </p>
          <Link 
            href="/contacto"
            className="inline-block bg-white text-bascula-orange hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bascula-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">BÁSCULAS MONTERREY</h3>
              <p className="text-gray-300">
                Soluciones industriales de pesaje certificadas para Monterrey y toda la región.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-bascula-orange transition">Inicio</Link></li>
                <li><Link href="/catalogo" className="hover:text-bascula-orange transition">Catálogo</Link></li>
                <li><Link href="/marcas" className="hover:text-bascula-orange transition">Marcas</Link></li>
                <li><Link href="/contacto" className="hover:text-bascula-orange transition">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Monterrey, Nuevo León</li>
                <li>México</li>
                <li className="pt-2">
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
