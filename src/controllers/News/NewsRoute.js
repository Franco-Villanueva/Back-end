const express = require('express');
const { createNewsHandler, getAllNewsHandler, getNewsByIdHandler } = require('./NewHandler');
const router = express.Router();

router.post('/news', createNewsHandler); // Crear un jugador
router.get('/news', getAllNewsHandler); // Obtener todos los jugadores
router.get('/news/:id', getNewsByIdHandler); // Obtener jugador por ID

module.exports = router;

