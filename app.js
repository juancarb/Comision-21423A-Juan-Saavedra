// Importación de librerías
const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Conexión a Base de Datos
const { sequelize } = require("./database");

sequelize
  .authenticate()
  .then(() => console.log("Conexión a Base de datos Exitosa"))
  .catch((err) => console.log("Error al conectar BD: ", err));

require("ejs");
require("dotenv").config(); // Para poder usar las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // Para que el servidor pueda comprender datos en formato json
app.use(express.static(__dirname + "/_public")); // Configura Express para servir archivos estáticos desde la carpeta 'public'

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Motor de plantillas
app.set("view engine", "ejs");

// Rutas
app.use(require("./routes/blog.routes"));

// Configura method-override para manejar el spoofing de método
app.use(methodOverride("_method"));

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));
