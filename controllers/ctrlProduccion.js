const Produccion = require('../model/Produccion'); // Ajusta la ruta

const crearProduccion = async (req, res) => {
    console.log(req);
    try {
        const produccion = new Produccion(req.body);
        console.log(produccion);
        await produccion.save();
        res.status(201).send(produccion);
    } catch (error) {
        res.status(400).send(error);
    }
};

const obtenerProducciones = async (req, res) => {
    try {
        const producciones = await Produccion.find();
        res.status(200).send(producciones);
    } catch (error) {
        res.status(500).send(error);
    }
};


const obtenerProduccionPorId = async (req, res) => {
    try {
        const produccion = await Produccion.findById(req.params.id);
        if (!produccion) return res.status(404).send('Producción no encontrada');
        res.status(200).send(produccion);
    } catch (error) {
        res.status(500).send(error);
    }
};


const actualizarProduccion = async (req, res) => {
    try {
        const produccion = await Produccion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produccion) return res.status(404).send('Producción no encontrada');
        res.status(200).send(produccion);
    } catch (error) {
        res.status(500).send(error);
    }
};

const eliminarProduccion = async (req, res) => {
    try {
        const produccion = await Produccion.findByIdAndDelete(req.params.id);
        if (!produccion) return res.status(404).send('Producción no encontrada');
        res.status(200).send('Producción eliminada');
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    crearProduccion,
    obtenerProducciones,
    obtenerProduccionPorId,
    actualizarProduccion,
    eliminarProduccion
};

