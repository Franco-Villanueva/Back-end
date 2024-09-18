const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const teamModel = require('./models/Team');
const playerModel = require('./models/Player');
const match1Model = require('./models/Match1');
const match2Model = require('./models/Match2');
const newsModel = require('./models/News');
const gameModel = require('./models/Game')

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
gameModel(sequelize);

const { Team, Player, Match1, Match2, News, Game } = sequelize.models;

// Relaciones
Team.hasMany(Player, { foreignKey: 'teamId', as: 'players' });
Player.belongsTo(Team, { as: 'team', foreignKey: 'teamId' });

Team.hasMany(Match1, { foreignKey: 'teamAId', as: 'MatchesAsTeamA' });
Team.hasMany(Match1, { foreignKey: 'teamBId', as: 'MatchesAsTeamB' });

Match1.belongsTo(Team, { as: 'teamA', foreignKey: 'teamAId' });
Match1.belongsTo(Team, { as: 'teamB', foreignKey: 'teamBId' });

Player.hasMany(Match2, { foreignKey: 'playerId' });
Match2.belongsTo(Player, { foreignKey: 'playerId' });


Game.hasMany(Team, { foreignKey: 'gameId', as: 'Teams' });
Team.belongsTo(Game, { foreignKey: 'gameId', as: 'Game' });

// Relación entre juegos y partidos
Game.hasMany(Match1, { foreignKey: 'gameId', as: 'GameMatches' });
Match1.belongsTo(Game, { foreignKey: 'gameId', as: 'Game' });

// Relación entre Game y Match2
Game.hasMany(Match2, { foreignKey: 'gameId', as: 'matchesForGame' }); // Cambia el alias
Match2.belongsTo(Game, { foreignKey: 'gameId', as: 'Game' });



module.exports = {
    conn: sequelize, 
    Team,
    Player,
    Match1,
    Match2,
    News,
    Game,
};
