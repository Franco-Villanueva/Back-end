const express = require('express');
const cors = require('cors');
const teamRoutes = require('./controllers/Team/TeamRoute');
const playerRoutes = require('./controllers/Player/PlayerRoute');
const newsRoutes = require('./controllers/News/NewsRoute')
const match1Routes = require('./controllers/Match/Five/Match1Route')
const match2Routes = require('./controllers/Match/One/Match2Route')
const gameRoutes = require('./controllers/Games/GameRoute')
// Asumiendo que tienes un archivo database.js para la conexión

const server = express();
server.use(cors());
server.use(express.json()); // Para poder parsear el body en formato JSON

// Rutas
server.use('/api', teamRoutes);
server.use('/api', playerRoutes);
server.use('/api', newsRoutes);
server.use('/api', match1Routes);
server.use('/api', match2Routes);
server.use('/api', gameRoutes);

module.exports = server;
