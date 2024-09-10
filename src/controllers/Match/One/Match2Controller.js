const { createMatch2Handler, getMatches2Handler, getMatch2ByIdHandler } = require('./Match2Handler');

const createMatch = async (req, res) => {
    try {
        const result = await createMatch2Handler(req.body);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMatches = async (req, res) => {
    try {
        const result = await getMatches2Handler();
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMatchById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getMatch2ByIdHandler(id);
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
