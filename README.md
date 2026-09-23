# 📄 Factus - Plataforma de Facturación Electrónica

Una aplicación web moderna, rápida y responsiva desarrollada en **React** con **Vite**, diseñada para simplificar la emisión, gestión y control de facturas electrónicas y comprobantes digitales.

---

## 📌 1. Problema
La gestión y emisión manual de facturas electrónicas para pequeños negocios, profesionales independientes o empresas suele ser un proceso lento y propenso a errores de digitación en montos, cálculo de impuestos (IVA) o datos de clientes. Además, la falta de una herramienta ágil dificulta el seguimiento de comprobantes emitidos y la organización contable.

---

## 🎯 2. Objetivo
Desarrollar una aplicación web ligera y accesible denominada **Factus**, utilizando la velocidad de Vite y la reactividad de React. El sistema permite registrar clientes, seleccionar productos o servicios, calcular automáticamente los subtotales e impuestos y generar comprobantes de venta con una interfaz intuitiva y limpia.

---

## 🛠️ 3. Stack
- **Librería / Framework Frontend**: React (JSX)
- **Herramienta de Construcción (Build Tool)**: Vite (`vite.config.js` con `@vitejs/plugin-react` y Fast Refresh)
- **Lenguaje**: JavaScript (ESM / ESNext)
- **Calidad de Código**: ESLint (`eslint.config.js`)
- **Estilos & UI**: HTML5, CSS3 nativo / CSS Modules

---

## 📐 4. Arquitectura
La aplicación sigue una arquitectura modular en React con Vite:

```text
factus/
├── public/                # Recursos estáticos globales (vite.svg, logotipos)
├── src/
│   ├── components/        # Componentes UI reutilizables (Formularios, Tablas, Modales)
│   ├── pages/             # Vistas principales de la aplicación (Inicio.jsx, Facturas, Clientes)
│   ├── App.jsx            # Componente contenedor principal
│   └── main.jsx           # Punto de entrada de la aplicación en el DOM de React
├── eslint.config.js       # Reglas y configuración de linter
├── index.html             # Plantilla HTML5 principal
├── vite.config.js         # Configuración de compilación y base URL de Vite
└── package.json           # Dependencias y scripts del proyecto
```

---

## ⚙️ 5. Funcionalidades
- 📄 **Generación de Facturas**: Formulario dinámico para la creación de comprobantes de venta con cálculo de subtotales, descuentos e IVA.
- 👥 **Gestión de Clientes**: Registro y selección rápida de compradores (RUC, Cédula, Razón Social, Dirección y Correo).
- 📦 **Catálogo de Productos y Servicios**: Selección de ítems con detalle de cantidades y precios unitarios.
- 📊 **Panel de Control**: Vista de inicio para consultar el estado de comprobantes emitidos y montos facturados.
- ⚡ **Desarrollo Ultrarrápido**: Configuración con Vite HMR (Hot Module Replacement) para una experiencia de desarrollo fluida.

---

## 📊 6. Estado Actual
🟢 **En Desarrollo / Base Funcional (v0.0.1)**: Proyecto inicializado sobre React + Vite con enrutamiento de componentes, vistas base configuradas y arquitectura lista para integración API.

---

## 🖼️ 7. Capturas

> *Sección reservada para incluir capturas de pantalla de la interfaz de usuario (Vista de Inicio, Módulo de Facturación y Emisión de Comprobantes).*

---

## 🚀 8. Cómo Ejecutarlo

### Requisitos previos
- **Node.js**: Versión 18.x o 20.x+.
- **npm**: Incluido con Node.js.

### Pasos de ejecución
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/RomelAnte/factus.git
   cd factus
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre tu navegador e ingresa a `http://localhost:5173/factus`.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

5. **Previsualizar el build de producción**:
   ```bash
   npm run preview
   ```

---

## 🗺️ 9. Roadmap
- [ ] Integración con firma electrónica cifrada (`.p12` / `.pfx`).
- [ ] Conexión con servicios del SRI (Servicio de Rentas Internas) / Web Services de autorización.
- [ ] Generación automática y descarga de comprobantes en formatos **PDF** y **XML**.
- [ ] Envío automático de facturas al correo electrónico del cliente.
- [ ] Personalización de plantillas de factura y soporte para modo oscuro.
