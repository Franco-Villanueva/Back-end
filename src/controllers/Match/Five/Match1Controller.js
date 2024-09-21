const { createMatch1Handler, getMatches1Handler, deleteMatchHandler } = require('./Match1Handler');

const createMatch = async (req, res) => {
    try {
        const result = await createMatch1Handler(req.body);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMatches = async (req, res) => {
    try {
        const result = await getMatches1Handler();
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMatchById = async (req, res) => {
    const { id } = req.params;  // Obtén el id del partido de los parámetros
    try {
        // Llama al manejador para eliminar el partido por id
        const result = await deleteMatchHandler(id);

        // Devuelve una respuesta exitosa si se eliminó
        res.status(result.status).json({ message: 'Partido eliminado correctamente.' });
    } catch (error) {
        // Maneja cualquier error durante el proceso de eliminación
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createMatch,
    getMatches,
    deleteMatchById,
};
