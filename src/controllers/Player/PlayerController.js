const { Player, Team } = require('../../DB');

// Lógica para crear un nuevo jugador
const createPlayer = async (name, nick, img, role, nationality, age, teamId, network) => {
  try {
    const team = await Team.findByPk(teamId);
    if (!team) throw new Error('Equipo no encontrado.');
    
    const newPlayer = await Player.create({ name, nick, img, role, nationality, age, teamId, network });
    return newPlayer;
  } catch (error) {
    throw new Error('Error al crear el jugador: ' + error.message);
  }
};

// Lógica para obtener todos los jugadores
const getPlayers = async () => {
  try {
    const players = await Player.findAll({
      include: { model: Team, as: 'team' }
    });
    return players;
  } catch (error) {
    throw new Error('Error al obtener los jugadores: ' + error.message);
  }
};

// Lógica para obtener un jugador por ID
const getPlayerById = async (id) => {
  try {
    const player = await Player.findByPk(id, {
      include: { model: Team, as: 'team' }
    });
    if (!player) throw new Error('Jugador no encontrado.');
    
    return player;
  } catch (error) {
    throw new Error('Error al obtener el jugador: ' + error.message);
  }
};

module.exports = {
  createPlayer,
  getPlayers,
  getPlayerById,
};
