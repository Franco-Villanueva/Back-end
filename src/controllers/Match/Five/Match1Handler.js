// src/handlers/MatchFortniteHandler.js
const { Match1, Team, Game, Match2, Player } = require('../../../DB');

// Crear un nuevo partido
const createMatch1Handler = async (data) => {
    const { gameId, competition, date, teamAId, teamBId, playerId, kills, position } = data;

    try {
        if (playerId) {
            // Manejo para crear un partido de Fortnite
            if (kills === undefined || position === undefined) {
                throw new Error('Faltan datos requeridos para el partido de Fortnite.');
            }

            const newMatch = await Match2.create({ gameId, competition, date, playerId, kills, position });
            return { status: 201, data: newMatch };
        } else {
            // Manejo para crear un partido de CS2
            const teamA = await Team.findByPk(teamAId);
            const teamB = await Team.findByPk(teamBId);

            if (teamAId === teamBId) {
                throw new Error('Los Teams no pueden ser los mismos.');
            }
            if (!teamA || !teamB) {
                throw new Error('Team no encontrado.');
            }

            const newMatch = await Match1.create({ gameId, competition, date, teamAId, teamBId, result: null }); // result puede ser null inicialmente
            return { status: 201, data: newMatch };
        }
    } catch (error) {
        throw new Error(error.message || 'Error al crear el partido.');
    }
};


const getMatches1Handler = async () => {
    try {
        // Obtener partidos de Match1
        const matches1 = await Match1.findAll({
            include: [
                {
                    model: Team,
                    as: 'teamA',
                    attributes: ['name','aka', 'logo'],
                },
                {
                    model: Team,
                    as: 'teamB',
                    attributes: ['name', 'aka', 'logo'],
                },
                {
                    model: Game,
                    as: 'Game',
                    attributes: ['id', 'name', 'img'],
                }
            ],
        });

        // Obtener partidos de Match2
        const matches2 = await Match2.findAll({
            include: [
                {
                    model: Player,
                    attributes: ['name'],
                    include: [{
                        model: Team,
                        as: 'team',
                        attributes: ['name', 'logo'],
                    }]
                },
                {
                    model: Game,
                    as: 'Game',
                    attributes: ['id', 'name', 'img'],
                }
            ],
        });

        // Combinar los partidos
        const allMatches = [...matches1, ...matches2];

        // Ordenar todos los partidos por fecha
        allMatches.sort((a, b) => new Date(a.date) - new Date(b.date));

        return { status: 200, data: allMatches };
    } catch (error) {
        throw new Error(error.message || 'Error al obtener los partidos.');
    }
};

const deleteMatchHandler = async (id) => {
    try {
        // Verifica si el partido existe en Match1 o Match2
        const match1 = await Match1.findByPk(id);
        const match2 = await Match2.findByPk(id);

        if (!match1 && !match2) {
            throw new Error('Partido no encontrado.');
        }

        // Elimina según el modelo encontrado
        if (match1) {
            await match1.destroy();
        } else {
            await match2.destroy();
        }

        return { status: 204, message: 'Partido eliminado exitosamente.' };
    } catch (error) {
        throw new Error(error.message || 'Error al eliminar el partido.');
    }
};


module.exports = {
    createMatch1Handler,
    getMatches1Handler,
    deleteMatchHandler
};
