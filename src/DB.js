const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const teamModel = require('./models/Team');
const playerModel = require('./models/Player');
const matchModel = require('./models/Match');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false, dialect: 'postgres' }
);

// // Test de conexión
// async function testConnection() {
//    try {
//       await sequelize.authenticate();
//       console.log('Conexión correcta');
//    } catch (error) {
//       console.error('Conexión fallida:', error);
//    }
// }
// testConnection();

// Inicializar modelos
teamModel(sequelize)
playerModel(sequelize)
matchModel(sequelize)



const { Team, Player, Match } = sequelize.models;

Team.hasMany(Match, { foreignKey: 'teamAId', as: 'MatchesAsTeamA' });
Team.hasMany(Match, { foreignKey: 'teamBId', as: 'MatchesAsTeamB' });

// Relación entre jugadores y partidos de Fortnite
Player.hasMany(Match, { foreignKey: 'playerId' });
Match.belongsTo(Player, { foreignKey: 'playerId' });

// Relación entre partidos y equipos
Match.belongsTo(Team, { foreignKey: 'teamAId', as: 'TeamA' });
Match.belongsTo(Team, { foreignKey: 'teamBId', as: 'TeamB' });

module.exports = {
   conn: sequelize, // Exporta la conexión como `conn`
   Team,
   Player,
   Match,
};
