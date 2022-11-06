const dbConn = require("../../config/db.config");

// Esto no se está usando 🤔
const Persona = function (persona) {
  this.nombre = persona.nombre;
  this.apellidos = persona.apellidos;
  this.direccion = persona.direccion;
  this.telefono = persona.telefono;
};

Persona.create = (newPersona = [], result) => {
  dbConn.query(
    "INSERT INTO  renato (nombre, apellidos, direccion, telefono) VALUES ($1, $2, $3, $4)",
    newPersona,
    (err, res) => {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        console.log(res);
        result(null, { message: "Persona creado con éxito." });
      }
    }
  );
};

Persona.findAll = (result) => {
  dbConn.query("SELECT * FROM renato", (err, res) => {
    if (err) {
      console.error("\x1b[31m", "file: persona.model.js ~ line 30 ~ dbConn.query ~ err", err);
      result(err, null);
    } else {
      result(null, res.rows);
    }
  });
};

Persona.findById = (id, result) => {
  dbConn.query("SELECT * FROM renato WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.error("\x1b[31m", "file: persona.model.js ~ line 30 ~ dbConn.query ~ err", err);
      result(err, null);
    } else {
      result(null, res.rows);
    }
  });
};

Persona.update = (id, persona, result) => {
  persona.push(id);

  dbConn.query(
    "UPDATE renato SET nombre = $1, apellidos = $2, direccion = $3, telefono = $4 WHERE id = $5",
    persona,
    (err, res) => {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        console.log(res);
        result(null, { message: "Persona actualizado con éxito." });
      }
    }
  );
};

Persona.delete = (id, result) => {
  dbConn.query("DELETE FROM renato WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log("Error:", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, { message: "Persona eliminada con éxito." });
    }
  });
};

module.exports = Persona;
