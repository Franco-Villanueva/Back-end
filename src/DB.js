const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const teamModel = require('./models/Team');
const playerModel = require('./models/Player');
const match1Model = require('./models/Match1');
const match2Model = require('./models/Match2');
const newsModel = require('./models/News');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false, dialect: 'postgres' }
);

// Test de conexión
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexión correcta');
//     } catch (error) {
//         console.error('Conexión fallida:', error);
//     }
// }
// testConnection();

// Inicializar modelos
teamModel(sequelize);
playerModel(sequelize);
match1Model(sequelize);
match2Model(sequelize);
newsModel(sequelize);

const { Team, Player, Match1, Match2, News } = sequelize.models;

// Relaciones
Team.hasMany(Player, { foreignKey: 'teamId', as: 'players' });
Player.belongsTo(Team, { as: 'team', foreignKey: 'teamId' });

Team.hasMany(Match1, { foreignKey: 'teamAId', as: 'MatchesAsTeamA' });
Team.hasMany(Match1, { foreignKey: 'teamBId', as: 'MatchesAsTeamB' });

Match1.belongsTo(Team, { foreignKey: 'teamAId', as: 'TeamA' });
Match1.belongsTo(Team, { foreignKey: 'teamBId', as: 'TeamB' });

Player.hasMany(Match2, { foreignKey: 'playerId' });
Match2.belongsTo(Player, { foreignKey: 'playerId' });

module.exports = {
    conn: sequelize, // Exporta la conexión como `conn`
    Team,
    Player,
    Match1,
    Match2,
    News,
};
