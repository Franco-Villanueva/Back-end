const express = require('express');
const { createPlayerHandler, getPlayersHandler, getPlayerByIdHandler } = require('../Player/PlayerHandler');
const router = express.Router();

router.post('/players', createPlayerHandler); // Crear un jugador
router.get('/players', getPlayersHandler); // Obtener todos los jugadores
router.get('/players/:id', getPlayerByIdHandler); // Obtener jugador por ID

module.exports = router;

