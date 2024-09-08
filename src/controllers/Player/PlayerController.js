const { Player, Team } = require('../../DB');

// Crear un nuevo jugador
const createPlayer = async (req, res) => {
  const { name, role, nationality, age, teamId } = req.body;
  try {
    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Equipo no encontrado.' });
    }
    const newPlayer = await Player.create({ name, role, nationality, age, teamId });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el jugador.' });
  }
};

// Obtener todos los jugadores
const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los jugadores.' });
  }
};

// Obtener un jugador por ID
const getPlayerById = async (req, res) => {
  const { id } = req.params;
  try {
    const player = await Player.findByPk(id, {
      include: { model: Team, as: 'team' }
    });
    if (!player) {
      return res.status(404).json({ error: 'Jugador no encontrado.' });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el jugador.' });
  }
};

module.exports = {
  createPlayer,
  getPlayers,
  getPlayerById,
};
