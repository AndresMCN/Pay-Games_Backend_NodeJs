const express = require("express");
const apuestaSchema = require("../models/apuesta");

const router = express.Router();

//Registro de apuesta
router.post("/apuestas", (req, res) => {
  const apuesta = apuestaSchema(req.body);
  apuesta
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({mensaje: err}));
});

//Traer todos las apuestas
router.get("/apuestas", (req, res) => {
    apuestaSchema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({mensaje: err}));
  });

//Traer una apuesta por id
  router.get("/apuestas/:id", (req, res) => {
    const {id} = req.params;
    apuestaSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((err) => res.json({mensaje: err}));
  });


//actualizar una apuesta
router.put("/apuestas/:id", (req, res) => {
    const {id} = req.params;
    const {usuario, marcador, partidoApostado} = req.body;
    apuestaSchema
      .updateOne({_id: id},{$set:{usuario,marcador,partidoApostado}})
      .then((data) => res.json(data))
      .catch((err) => res.json({mensaje: err}));
  });


  //eliminar una apuesta
router.delete("/apuestas/:id", (req, res) => {
    const {id} = req.params;
    apuestaSchema
      .remove({_id: id})
      .then((data) => res.json(data))
      .catch((err) => res.json({mensaje: err}));
  });


module.exports = router;
