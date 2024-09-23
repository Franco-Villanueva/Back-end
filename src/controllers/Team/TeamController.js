const { Team, Player, Game } = require('../../DB');

// Lógica para crear un equipo
const createTeam = async (name, logo, gameId ) => {
  try {
    const newTeam = await Team.create({ name, logo, gameId });
    return newTeam;
  } catch (error) {
    throw new Error('Error al crear el equipo: ' + error.message);
  }
};

// Lógica para obtener todos los equipos
const getTeams = async () => {
  try {
    const teams = await Team.findAll({
      include: {
        model: Game,
        as: 'Game',  // Alias de la relación con Game
        attributes: ['id', 'name', 'img'],  // Campos específicos de Game
      }
    });
    return teams;
  } catch (error) {
    throw new Error('Error al obtener los equipos: ' + error.message);
  }
};

// Lógica para obtener un equipo por ID
const getTeamById = async (id) => {
  try {
    const team = await Team.findByPk(id, {
      include: [{
        model: Player,
        as: 'players',  // Asegúrate de que el alias sea correcto según tu definición de relaciones
        attributes: ['id', 'name', 'nick', 'img', 'role', 'nationality', 'age'],  // Solo selecciona los campos que necesites
      },
      {
        model: Game,
        as: 'Game',  // Alias de la relación con Game
        attributes: ['id', 'name', 'img'],  // Campos específicos de Game
      }]
    });
    if (!team) throw new Error('Equipo no encontrado.');
    return team;
  } catch (error) {
    throw new Error('Error al obtener el equipo: ' + error.message);
  }
};

module.exports = {
  createTeam,
  getTeams,
  getTeamById,
};
