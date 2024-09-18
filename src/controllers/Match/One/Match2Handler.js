// src/handlers/MatchFortniteHandler.js
const { Match2, Player, Team, Game } = require('../../../DB');

// Crear un nuevo partido de Fortnite
const createMatch2Handler = async (data) => {
    const { gameId, date, competition, playerId, kills, position } = data;
    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            throw new Error('Jugador no encontrado.');
        }
        const newMatch = await Match2.create({ gameId, date, competition, playerId, kills, position });
        return { status: 201, data: newMatch };
    } catch (error) {
        throw new Error(error.message || 'Error al crear el partido de Fortnite.');
    }
};

// Obtener todos los partidos de Fortnite
const getMatches2Handler = async () => {
    try {
        const matches = await Match2.findAll({
            include: [
                { 
                    model: Player, 
                    attributes: ['name'], 
                    include: [{ 
                        model: Team, 
                        as: 'team', 
                        attributes: ['name', 'logo'] 
                    }]
                },
                {
                    model: Game,
                    as: 'Game',  // Alias de la relación con Match
                    attributes: ['id', 'name', 'img'],  // Campos específicos de Game
                }
            ]
        });
        return { status: 200, data: matches };
    } catch (error) {
        throw new Error(error.message || 'Error al obtener los partidos de Fortnite.');
    }
};

// Obtener un partido de Fortnite por ID
const getMatch2ByIdHandler = async (id) => {
    try {
        const match = await Match2.findByPk(id, {
            include: [
                { 
                    model: Player, 
                    attributes: ['name'], 
                    include: [{ 
                        model: Team, 
                        as: 'team', 
                        attributes: ['name', 'logo'] 
                    }]
                },
                {
                    model: Game,
                    as: 'Game',  // Alias de la relación con Match
                    attributes: ['id', 'name', 'img'],  // Campos específicos de Game
                }
            ]
        });
        if (!match) {
            throw new Error('Partido de Fortnite no encontrado.');
        }
        return { status: 200, data: match };
    } catch (error) {
        throw new Error(error.message || 'Error al obtener el partido de Fortnite.');
    }
};

module.exports = {
    createMatch2Handler,
    getMatches2Handler,
    getMatch2ByIdHandler,
};
