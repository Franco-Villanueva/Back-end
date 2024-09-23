// src/routes/gameRoutes.js
const { Router } = require('express');
const { createGame } = require('./GameController');

const router = Router();

// Ruta para crear un nuevo juego
router.post('/game', createGame);
router.delete('/game/:id', createGame);

module.exports = router;
