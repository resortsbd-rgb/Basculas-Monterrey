# Básculas Monterrey - Sitio Web Actualizado

## 🎯 Cambios Implementados (según instrucciones de Víctor)

### 1. **Hero Section / Categorías de Productos**
✅ **Imágenes actualizadas por categoría:**
- **Básculas Camioneras**: Imagen hero de Metrology
- **Plataformas de Piso**: Imagen de plataforma industrial azul
- **Básculas Ganaderas**: **Báscula Metrology** (Rice Lake eliminada)
- **Indicadores de Peso**: Indicadores digitales
- **Celdas de Carga**: Load cells
- **Cajas de Suma**: Junction box
- **Básculas de Mesa y Recibo**: Báscula con torre
- **Balanzas**: Nueva categoría para productos Rice Lake

### 2. **Catálogo de Productos**
✅ **Báscula Ganadera Rice Lake ELIMINADA**
✅ **Báscula Ganadera Metrology AGREGADA** como único producto en esa categoría
✅ **Imagen de BASCULA CAMIONERA METROLOGY actualizada** con foto real del equipo

### 3. **Recategorización Rice Lake**
✅ **Productos Rice Lake movidos a categoría "BALANZAS":**
- Indicador Digital Rice Lake 920i
- Celda de Carga Rice Lake RLACS
- Balanza de Precisión IQ Plus 355

---

## 📁 Estructura del Proyecto

```
basculas_actualizado/
├── pages/
│   ├── _app.js          # Configuración global Next.js
│   ├── index.js         # Homepage con categorías actualizadas
│   └── catalogo.js      # Catálogo con productos corregidos
├── public/
│   └── images/          # Imágenes organizadas con nombres descriptivos
│       ├── bascula-camionera-metrology-hero.png
│       ├── bascula-camionera-metrology-2.jpeg
│       ├── bascula-ganadera-metrology.png
│       ├── plataforma-piso-1.jpeg
│       ├── plataforma-piso-2.png
│       ├── indicadores-peso.jpeg
│       ├── celdas-carga.jpeg
│       ├── caja-suma.jpeg
│       ├── bascula-mesa.png
│       └── logo-metrology.png
├── styles/
│   └── globals.css      # Estilos Tailwind
├── package.json
├── tailwind.config.js   # Paleta navy/orange
└── postcss.config.js
```

---

## 🚀 Instalación y Deployment

### Opción 1: Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

### Opción 2: Build para Producción

```bash
# 1. Crear build optimizado
npm run build

# 2. Iniciar servidor de producción
npm start
```

### Opción 3: Deploy en Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy desde directorio del proyecto
cd basculas_actualizado
vercel

# 3. Seguir instrucciones en pantalla
# Vercel detectará automáticamente Next.js
```

### Opción 4: Deploy en Netlify

1. Ir a [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Conectar repositorio GitHub
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

---

## 🎨 Paleta de Colores

```css
Navy:   #1E3A5F  (Texto principal, headers)
Orange: #FF6B35  (CTAs, acentos)
Gray:   #F5F7FA  (Backgrounds)
```

---

## 📝 Notas Técnicas

### Productos en Catálogo
- **Total productos**: 12
- **Metrology**: 7 productos
- **Rice Lake**: 5 productos (todos en categoría "Balanzas")

### Categorías Activas
1. Básculas Camioneras (2 productos Metrology)
2. Plataformas de Piso (2 productos)
3. Básculas Ganaderas (1 producto Metrology ONLY)
4. Indicadores de Peso (1 producto Metrology)
5. Celdas de Carga (1 producto Metrology)
6. Cajas de Suma (1 producto Metrology)
7. Básculas de Mesa (1 producto Metrology)
8. **Balanzas** (3 productos Rice Lake)

---

## 🔗 Próximos Pasos

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Actualización según cambios de Víctor - v2.0"
   git remote add origin https://github.com/resortsbd-rgb/basculas-monterrey.git
   git push -u origin main
   ```

2. **Deploy en Vercel/Netlify** (ver instrucciones arriba)

3. **Actualizar dominio** si aplica

4. **Revisar con Víctor** antes de publicar

---

## ✅ Checklist de Cambios Completados

- [x] Hero section con imágenes nuevas por categoría
- [x] Báscula ganadera Rice Lake eliminada
- [x] Báscula ganadera Metrology agregada  
- [x] Imagen BASCULA CAMIONERA METROLOGY actualizada
- [x] Productos Rice Lake movidos a "Balanzas"
- [x] Categoría "Balanzas" creada
- [x] Todas las imágenes optimizadas y renombradas
- [x] Código limpio y listo para deploy

---

## 📧 Contacto

Para cambios adicionales, contactar a:
- **Víctor Sánchez** (Básculas Monterrey)
- **Luis Sánchez** (Zitio Value Advisory)

---

**Última actualización**: Abril 24, 2026
**Versión**: 2.0.0
