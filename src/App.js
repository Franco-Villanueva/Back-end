const express = require('express');
const cors = require('cors');
const teamRoutes = require('./controllers/Team/TeamRoute');
const playerRoutes = require('./controllers/Player/PlayerRoute');
// Asumiendo que tienes un archivo database.js para la conexión

const server = express();
server.use(cors());
server.use(express.json()); // Para poder parsear el body en formato JSON

// Rutas
server.use('/api', teamRoutes);
server.use('/api', playerRoutes);

module.exports = server;
