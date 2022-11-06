const express = require("express");

const router = express.Router();

// Nos conectamos al controlador
const PersonaController = require("../controllers/persona.controller.js");

// Exportamos el router
// index:
router.get("/", PersonaController.findAll);

// create:
router.post("/create", PersonaController.create);

// find by id:
router.get("/:id", PersonaController.findById);

// update by id:
router.put("/update/:id", PersonaController.update);

// delete by id:
router.delete("/delete/:id", PersonaController.delete);

module.exports = router;
