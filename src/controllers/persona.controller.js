const Persona = require("../models/persona.model.js");

// Métodos:
exports.findAll = (req, res) => {
  Persona.findAll((err, personas) => {
    if (err) res.send(err);
    res.send(personas);
  });
};

exports.create = (req, res) => {
  const newPersona = Object.values(req.body);
  Persona.create(newPersona, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
};

exports.findById = (req, res) => {
  Persona.findById(req.params.id, (err, persona) => {
    if (err) res.send(err);
    res.send(persona);
  });
};

exports.update = (req, res) => {
  const updatePersona = Object.values(req.body);
  Persona.update(req.params.id, updatePersona, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
};

exports.delete = (req, res) => {
  Persona.delete(req.params.id, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
};
