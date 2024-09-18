const { createTeam, getTeams, getTeamById } = require('./TeamController');

// Handler para crear un nuevo equipo
const createTeamHandler = async (req, res) => {
  const { name, game, logo } = req.body;

  try {
    const newTeam = await createTeam(name, game, logo);
    return res.status(201).json({ message: 'Equipo creado con éxito', team: newTeam });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener todos los equipos
const getTeamsHandler = async (req, res) => {
  try {
    const teams = await getTeams();
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener un equipo por ID
const getTeamByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await getTeamById(id);
    return res.status(200).json(team);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createTeamHandler,
  getTeamsHandler,
  getTeamByIdHandler,
};
