const express = require("express");
const bodyParser = require("body-parser");

const conn = require("./config/db.config.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API." });
});

const rutas = require("./src/routes/persona.routes.js");
app.use("/api/v1/persona", rutas);

const puerto = 3001;

app.listen(puerto, async () => {
  console.log("Sistema en línea en el puerto " + puerto);
  try {
    const res = await conn.query("SELECT NOW()");
    console.log(res.rows);
  } catch (error) {
    console.log("no se pudo conectar a la base de datos:");
    console.log(error);
  }
});
