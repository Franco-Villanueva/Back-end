// src/controllers/GameController.js
const { createGameHandler } = require('./GameHandler');

const createGame = async (req, res) => {
    try {
        const result = await createGameHandler(req.body);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  createGame,
};
