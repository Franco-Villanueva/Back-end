const express = require('express');
const { createNewsHandler, getAllNewsHandler, getNewsByIdHandler, deleteNewsIdHandler } = require('./NewHandler');
const router = express.Router();

router.post('/news', createNewsHandler); // Crear un jugador
router.get('/news', getAllNewsHandler); // Obtener todos los jugadores
router.get('/news/:id', getNewsByIdHandler); // Obtener jugador por ID
router.delete('/news/:id', deleteNewsIdHandler) //elimina la noticia por ID

module.exports = router;

