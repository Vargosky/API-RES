const express = require("express");
const multer = require("multer");
const router = express.Router();
const ProduccionController =  require("../controllers/ctrlProduccion");

const {
  crearProduccion,
  obtenerProducciones,
  obtenerProduccionPorId,
  actualizarProduccion,
  eliminarProduccion
} = ProduccionController;

router.get('/test',()=>{ return ({test:"test"})})
router.get('/all/', obtenerProducciones);
router.get('/:id', obtenerProduccionPorId);
router.post('/create/', crearProduccion);
router.put('/:id', actualizarProduccion);
router.delete('/:id', eliminarProduccion);


module.exports = router;
