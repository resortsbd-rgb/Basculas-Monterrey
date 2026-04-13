const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/products-ricelake.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const sriProducts = [
  {
    id: 'sri-granallado-shot-blasting',
    nombre: 'Sistemas de Granallado (Shot Blasting)',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Equipos de limpieza y preparación de superficies metálicas por proyección de granalla. Ideales para industria automotriz, manufactura y tratamiento de piezas metálicas. Diseño robusto con alta eficiencia operativa.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/granallado.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Aplicación', value: 'Limpieza y preparación de superficies metálicas' },
      { label: 'Industrias', value: 'Automotriz, manufactura, fundición' },
      { label: 'Clientes referencia', value: 'GM, KIA, Vitro, Clarios' },
      { label: 'Experiencia', value: '+30 años en el mercado mexicano' }
    ]
  },
  {
    id: 'sri-transportadores-aereos',
    nombre: 'Transportadores Aéreos',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Sistemas de transporte aéreo para manejo de piezas y materiales en líneas de producción. Optimizan el flujo de trabajo y reducen el espacio en planta. Soluciones personalizadas para cada proceso productivo.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/transportadores.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Tipo', value: 'Monorriel aéreo, cadena transportadora' },
      { label: 'Aplicación', value: 'Líneas de pintura, ensamble, tratamiento térmico' },
      { label: 'Capacidad', value: 'Personalizada según requerimiento' },
      { label: 'Clientes referencia', value: 'GM, KIA, Vitro, Clarios' }
    ]
  },
  {
    id: 'sri-lavado-industrial',
    nombre: 'Sistemas de Lavado Industrial',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Máquinas de lavado industrial para limpieza de piezas metálicas con agua a presión, solventes o detergentes. Eliminan aceites, rebabas y contaminantes antes de procesos de pintura o ensamble.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/lavado.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Método', value: 'Aspersión, inmersión o ultrasonido' },
      { label: 'Temperatura', value: 'Hasta 90°C' },
      { label: 'Aplicación', value: 'Prepintura, ensamble de precisión' },
      { label: 'Clientes referencia', value: 'Briggs & Stratton, GM, KIA' }
    ]
  },
  {
    id: 'sri-hornos-fundicion',
    nombre: 'Hornos de Fundición',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Hornos industriales para fundición de metales no ferrosos. Diseño eficiente en consumo energético con control preciso de temperatura. Capacidades variables según el proceso de producción requerido.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/hornos-fundicion.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Materiales', value: 'Aluminio, zinc, magnesio, cobre' },
      { label: 'Temperatura máxima', value: 'Hasta 1200°C' },
      { label: 'Control', value: 'PLC con pantalla HMI' },
      { label: 'Clientes referencia', value: 'Vitro, Clarios, GM' }
    ]
  },
  {
    id: 'sri-hermeticidad',
    nombre: 'Sistemas de Prueba de Hermeticidad',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Equipos de prueba de hermeticidad para verificar la estanqueidad de piezas y ensambles. Detectan fugas en componentes automotrices, hidráulicos y neumáticos mediante prueba de presión o vacío.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/hermeticidad.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Método de prueba', value: 'Presión, vacío o flujo de aire' },
      { label: 'Precisión', value: 'Detección de fugas desde 0.1 cc/min' },
      { label: 'Aplicación', value: 'Componentes automotrices, hidráulica, neumática' },
      { label: 'Clientes referencia', value: 'GM, KIA, Briggs & Stratton' }
    ]
  },
  {
    id: 'sri-hornos-industriales',
    nombre: 'Hornos Industriales',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Hornos de tratamiento térmico para temple, revenido, recocido y normalizado de piezas metálicas. Mejoran las propiedades mecánicas del metal para aplicaciones de alta exigencia industrial.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/hornos-industriales.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Procesos', value: 'Temple, revenido, recocido, normalizado' },
      { label: 'Temperatura', value: 'Hasta 1100°C' },
      { label: 'Atmósfera', value: 'Aire, nitrógeno o atmósfera controlada' },
      { label: 'Clientes referencia', value: 'GM, Vitro, KIA, Clarios' }
    ]
  },
  {
    id: 'sri-sistemas-pintura',
    nombre: 'Sistemas de Pintura Industrial',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Líneas de pintura completas: cabinas de aspersión, hornos de curado, transportadores y sistemas de recuperación de pintura. Integración total del proceso para acabados de alta calidad.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/pintura.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Tipos', value: 'Líquida, polvo electrostático, electroforesis' },
      { label: 'Incluye', value: 'Pretratamiento, cabina, horno de curado' },
      { label: 'Acabado', value: 'Industrial, automotriz, decorativo' },
      { label: 'Clientes referencia', value: 'GM, KIA, Vitro, Clarios' }
    ]
  },
  {
    id: 'sri-manipuladores-industriales',
    nombre: 'Manipuladores Industriales',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Dispositivos de asistencia ergonómica para manejo de piezas pesadas en líneas de producción. Reducen lesiones laborales y aumentan la productividad al facilitar el movimiento de cargas.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/manipuladores.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Capacidad de carga', value: 'Hasta 500 kg' },
      { label: 'Tipo', value: 'Neumático, hidráulico o eléctrico' },
      { label: 'Aplicación', value: 'Ergonomía industrial, líneas de ensamble' },
      { label: 'Clientes referencia', value: 'GM, KIA, Briggs & Stratton' }
    ]
  },
  {
    id: 'sri-multichargers',
    nombre: 'Multichargers (Cargadores Múltiples)',
    categoria: 'Equipo Industrial SRI',
    marca: 'SRI',
    descripcion: 'Sistemas de carga y descarga automática para múltiples piezas simultáneamente. Optimizan el ciclo productivo de hornos de tratamiento térmico y equipos de pintura, incrementando la capacidad de producción.',
    imagen: 'https://www.srimx.com/wp-content/uploads/2019/01/multichargers.jpg',
    url_fuente: 'https://www.srimx.com',
    especificaciones: [
      { label: 'Función', value: 'Carga/descarga automática múltiple' },
      { label: 'Compatibilidad', value: 'Hornos de tratamiento térmico, líneas de pintura' },
      { label: 'Control', value: 'Automatizado con PLC' },
      { label: 'Clientes referencia', value: 'GM, Vitro, Clarios, KIA' }
    ]
  }
];

data.productos = [...data.productos, ...sriProducts];
data.total_productos = data.productos.length;

if (!data.categorias.includes('Equipo Industrial SRI')) {
  data.categorias.push('Equipo Industrial SRI');
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('✅ Productos SRI agregados:', sriProducts.length);
console.log('✅ Total productos ahora:', data.productos.length);
