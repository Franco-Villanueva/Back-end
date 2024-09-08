const express = require('express');
const { createPlayer, getPlayers, getPlayerById } = require('../Player/PlayerController');
const router = express.Router();

router.post('/players', createPlayer); // Crear un jugador
router.get('/players', getPlayers); // Obtener todos los jugadores
router.get('/players/:id', getPlayerById); // Obtener jugador por ID

module.exports = router;

