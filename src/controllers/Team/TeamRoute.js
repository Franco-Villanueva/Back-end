const express = require('express');
const { createTeamHandler, getTeamByIdHandler, getTeamsHandler } = require('../Team/TeamHandler');
const router = express.Router();

router.post('/teams', createTeamHandler); // Crear un equipo
router.get('/teams', getTeamsHandler); // Obtener todos los equipos
router.get('/teams/:id', getTeamByIdHandler); // Obtener equipo por ID

module.exports = router;