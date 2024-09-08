const express = require('express');
const { createTeam, getTeams, getTeamById } = require('../Team/TeamController');
const router = express.Router();

router.post('/teams', createTeam); // Crear un equipo
router.get('/teams', getTeams); // Obtener todos los equipos
router.get('/teams/:id', getTeamById); // Obtener equipo por ID

module.exports = router;