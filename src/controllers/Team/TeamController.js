const { Team } = require('../../DB');

// Crear un nuevo equipo
const createTeam = async (req, res) => {

  const { name, game } = req.body;
  console.log(name, game)
  try {
    const newTeam = await Team.create({ name, game });
    res.status(201).json({ exito: 'Se creó con éxito' });
  } catch (error) {
    console.error('Error al crear el equipo:', error);
    res.status(500).json({ error: 'Error al crear el equipo.' });
  }
};

// Obtener todos los equipos
const getTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos.' });
  }
};

// Obtener un equipo por ID
const getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      return res.status(404).json({ error: 'Equipo no encontrado.' });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el equipo.' });
  }
};

module.exports = {
  createTeam,
  getTeams,
  getTeamById,
};