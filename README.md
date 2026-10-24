# **Sistema de Control de Almacén e Inventarios (SICAI)\
Departamento de Recursos Materiales y Servicios Generales** del **Colegio de Estudios Científicos y Tecnológicos del Estado de Veracruz (CECYTEV)**.

Sistema diseñado para la gestión, control y automatización de los inventarios del **Departamento de Recursos Materiales y Servicios Generales** del **Colegio de Estudios Científicos y Tecnológicos del Estado de Veracruz (CECYTEV)**.

## 📋 Tabla de Contenidos

* [Descripción](#-descripción)

* [Características Principales](#-características-principales)

* [Tecnologías Utilizadas](#-tecnologías-utilizadas)

* [Requisitos Previos](#-requisitos-previos)

* [Instalación y Configuración](#-instalación-y-configuración)

* [Estructura del Proyecto](#-estructura-del-proyecto)

* [Contribución](#-contribución)

* [Contacto y Autor](#-contacto-y-autor)

## 📌 Descripción

El **Sistema de Almacén CECYTEV** optimiza la administración de entradas, salidas, resguardos y existencias de materiales consumibles y activos fijos dentro del departamento de materiales. Permite mantener un historial detallado de requisiciones por plantel o departamento, generando un control eficiente de los recursos institucionales.

## ✨ Características Principales

* 📥 **Gestión de Entradas:** Registro de compras y transferencias de material con detalle de proveedores y facturas.

* 📤 **Control de Salidas/Requisiciones:** Asignación de materiales a diferentes áreas del colegio así como a los planteles.

* 📊 **Control de Inventario en Tiempo Real:** Control y reportes de existencias.

* 👥 **Gestión de Usuarios y Roles:** Control de acceso jerárquico.

* 📑 **Generación de Reportes:** Exportación de reportes de salida y reportes de inventario (PDF).

* 🔍 **Histórico y Trazabilidad:** Bitácora de movimientos por fecha y tipo de material.

## 🛠️ Tecnologías Utilizadas

* **Lenguaje / Framework:** *Angular, Node.js*

* **Base de Datos:** *PostgreSQL*

* **Interfaz de Usuario:** *HTML5, CSS3, Bootstrap, Datatables, PDFkit*

* **Control de Versiones:** Git & GitHub

## ⚙️ Requisitos Previos

Antes de ejecutar o instalar este proyecto, asegúrate de contar con:

* [Git](https://git-scm.com/?utm_source=gemini) instalado en tu equipo.

* Entorno de ejecución instalado *(Ej. Java JDK 17+, PHP 8.x, Node.js v18+, según corresponda)*.

* Servidor de Base de Datos *PostgreSQL / XAMPP)*.

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**

   ```
   git clone https://github.com/Javainux/Almacen-CECYTEV.git
   cd Almacen-CECYTEV
   
   ```

2. **Configurar la Base de Datos:**

   * Crea una base de datos en tu gestor (ej. `almacen`).

3. **Configurar variables de entorno:**

   * Copia o renombra el archivo de configuración base:

     ```
     cp .env.example .env
     
     ```

   * Configura las credenciales de tu base de datos y puertos en el archivo `.env`.

4. **Instalar dependencias y ejecutar:**

   ```
   # npm install)
   # npm run dev
   ```

## ✒️ Contacto y Autor

* **Desarrollador:** Javainux

* **GitHub:** [@Javainux](https://github.com/Javainux)* **Proyecto:** [SICAI](https://github.com/Javainux/Almacen-CECYTEV?utm_source=gemini)

* **Institución:** CECYTEV (Colegio de Estudios Científicos y Tecnológicos del Estado de Veracruz)
