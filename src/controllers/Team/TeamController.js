const { Team } = require('../../DB');

// Lógica para crear un equipo
const createTeam = async (name, game) => {
  try {
    const newTeam = await Team.create({ name, game });
    return newTeam;
  } catch (error) {
    throw new Error('Error al crear el equipo: ' + error.message);
  }
};

// Lógica para obtener todos los equipos
const getTeams = async () => {
  try {
    const teams = await Team.findAll();
    return teams;
  } catch (error) {
    throw new Error('Error al obtener los equipos: ' + error.message);
  }
};

// Lógica para obtener un equipo por ID
const getTeamById = async (id) => {
  try {
    const team = await Team.findByPk(id);
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
