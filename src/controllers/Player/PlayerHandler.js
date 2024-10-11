const { createPlayer, getPlayers, getPlayerById } = require('./PlayerController');

// Handler para crear un nuevo jugador
const createPlayerHandler = async (req, res) => {
  const { name, nick, img, role, nationality, age, teamId, network } = req.body;

  try {
    const newPlayer = await createPlayer(name, nick, img, role, nationality, age, teamId, network);
    return res.status(201).json(newPlayer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener todos los jugadores
const getPlayersHandler = async (req, res) => {
  try {
    const players = await getPlayers();
    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener un jugador por ID
const getPlayerByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const player = await getPlayerById(id);
    return res.status(200).json(player);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createPlayerHandler,
  getPlayersHandler,
  getPlayerByIdHandler,
};
