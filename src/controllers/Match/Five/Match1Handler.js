// src/handlers/MatchFortniteHandler.js
const { Match1, Player, Team } = require('../../../DB');

// Crear un nuevo partido de Fortnite
const createMatch1Handler = async (data) => {
    const { competition, date, teamAId, teamBId, result } = data;
    try {
        const teamA = await Team.findByPk(teamAId);
        const teamB = await Team.findByPk(teamBId);

        if (teamAId === teamBId) {
            throw new Error('Los Teams no pueden ser los mismos.');
        }
        if (!teamA || !teamB) {
            throw new Error('Team no encontrado.');
        }
        const newMatch = await Match1.create({ competition, date, teamAId, teamBId, result });
        return { status: 201, data: newMatch };
    } catch (error) {
        throw new Error(error.message || 'Error al crear Matchs.');
    }
};

// Obtener todos los partidos de Fortnite
const getMatches1Handler = async () => {
    try {
        const matches = await Match1.findAll({
            include: [
                {
                    model: Team,
                    as: 'teamA',  // Alias para teamA
                    attributes: ['name', 'img'],
                },
                {
                    model: Team,
                    as: 'teamB',  // Alias para teamB
                    attributes: ['name', 'img'],
                },
            ],
        });
        return { status: 200, data: matches };
    } catch (error) {
        throw new Error(error.message || 'Error al obtener los Matchs.');
    }
};

// Obtener un partido de Fortnite por ID
const getMatch1ByIdHandler = async (id) => {
    try {
        const match = await Match1.findByPk(id,{
            include: [
                {
                    model: Team,
                    as: 'teamA',  // Alias para teamA
                    attributes: ['name', 'img'],
                },
                {
                    model: Team,
                    as: 'teamB',  // Alias para teamB
                    attributes: ['name', 'img'],
                },
            ],
        });
        if (!match) {
            throw new Error('Partido no encontrado.');
        }
        return { status: 200, data: match };
    } catch (error) {
        throw new Error(error.message || 'Error al obtener Matchs.');
    }
};

module.exports = {
    createMatch1Handler,
    getMatches1Handler,
    getMatch1ByIdHandler,
};
