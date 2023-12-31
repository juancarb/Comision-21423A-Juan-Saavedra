# Comision-21523A Juan Manuel Saavedra Carbonell
Proyecto Final Lenguajes de programación Full Stack - Tramo 2

Este es el proyecto final del curso "Tramo 2 - Lenguajes de programación de EPICA" como Full Stack Developer.

Se detallan las dependencias necesarias y las instrucciones para configurar y probar el proyecto a continuación.
![68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a313430302f312a66377a744d614d4d3065747346487045666b646977412e706e67] (https://github.com/juancarb/Comision-21423A-Juan-Saavedra/assets/131073606/4fe722f0-2c0e-49f3-a386-61507d2b7b2c)


## ------------------------------------------- Dependencias ---------------------------------------- 

Asegúrate de haber instalado las siguientes dependencias antes de ejecutar el proyecto:

- [Node.js](https://nodejs.org/): Plataforma de tiempo de ejecución de JavaScript.
- [npm](https://www.npmjs.com/): Gestor de paquetes de Node.js.

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
  npm install
```

Las dependencias incluidas en el proyecto son las siguientes:

- **express**: Framework web de Node.js.
- **body-parser**: Middleware para analizar las solicitudes HTTP entrantes.
- **cors**: Middleware para habilitar el acceso a recursos en diferentes dominios (CORS).
- **morgan**: Middleware para registrar solicitudes HTTP.
- **sequelize**: ORM (Object-Relational Mapping) para interactuar con la base de datos.
- **mysql2**: Controlador MySQL para Sequelize.
- **sequelize-cli** (opcional): Herramienta de línea de comandos de Sequelize para crear migraciones y seeders.
- **dotenv** (opcional): Para cargar variables de entorno desde un archivo `.env`.
- **nodemon** (opcional): Herramienta para reiniciar automáticamente el servidor en desarrollo cuando se hacen cambios en el código.

## ---------------------------------------------- Configuración ------------------------------------------

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos.

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=contraseña
DB_NAME=nombre_de_la_base_de_datos
```

2. Ejecuta las migraciones de la base de datos (si estás utilizando `sequelize-cli`):

```bash
  npx sequelize-cli db:migrate
```

3. En su defecto, si no deseas usar migraciones, crea una base de datos ejecutando los siguientes scripts en tu gestor SQL:

```bash
CREATE DATABASE epica;

CREATE TABLE publicaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  fecha DATE NOT NULL,
  url_imagen VARCHAR(255)
);
```

## ----------------------------------------------- Ejecución ---------------------------------------------

Para ejecutar el proyecto en modo de desarrollo con nodemon, utiliza el siguiente comando:

```bash
  npm run dev
```

O en su defecto:

```bash
  node app.js
```

El servidor estará disponible en `http://localhost:5000`.

## -------------------------------------------------- Uso ----------------------------------------------------------

Este proyecto proporciona una interfaz de usuario basada en EJS para interactuar con las publicaciones. A continuación, se describen las funcionalidades proporcionadas por cada interfaz:

### ------------- Lista de Publicaciones  (home.ejs) -----------------

- Muestra una lista de todas las publicaciones existentes.
- Permite ver los detalles de cada publicación.
- Proporciona enlaces para editar cada publicación.

### ------------- Editar Publicación (editar.ejs) --------------------

- Permite editar una publicación existente.
- Se pueden modificar el título, la descripción, la fecha y la URL de la imagen de la publicación.
- Al guardar los cambios, se actualiza la publicación en la base de datos.

### ------------- Administración de Publicaciones (admin.ejs) ---------

- Permite crear una nueva publicación.
- Se pueden ingresar el título, la descripción, la fecha y la URL de la imagen de la nueva publicación.
- Al guardar la nueva publicación, se crea en la base de datos.

¡Disfruta del proyecto!
#   C o m i s i o n - 2 1 4 2 3 A - J u a n - S a a v e d r a 
 
 #   C o m i s i o n - 2 1 4 2 3 A - J u a n - S a a v e d r a 
 
 #   C o m i s i o n - 2 1 4 2 3 A - J u a n - S a a v e d r a 
 
 #   C o m i s i o n - 2 1 4 2 3 A - J u a n - S a a v e d r a 
 
 
