const { createMatch1Handler, getMatches1Handler, getMatch1ByIdHandler } = require('./Match1Handler');

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

const getMatchById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getMatch1ByIdHandler(id);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createMatch,
    getMatches,
    getMatchById,
};
