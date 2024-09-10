const { Team, Player } = require('../DB'); // Ajusta la ruta si es necesario

const initializeData = async () => {
  try {
    // Datos de ejemplo para equipos
    const teams = [
      { name: 'Team Alpha', game: 'Valorant' },
      { name: 'Team Bravo', game: 'Fortnite' },
      { name: 'Team Charlie', game: 'CS2' }
    ];

    // Crear equipos
    const createdTeams = await Promise.all(
      teams.map(team => Team.create(team))
    );

    // Datos de ejemplo para jugadores
    const players = [
      { name: 'Player 1', role: 'Attacker', nationality: 'USA', age: 25, teamId: createdTeams[0].id },
      { name: 'Player 2', role: 'Defender', nationality: 'Canada', age: 28, teamId: createdTeams[1].id },
      { name: 'Player 3', role: 'Support', nationality: 'UK', age: 22, teamId: createdTeams[2].id }
    ];

    // Crear jugadores
    await Promise.all(
      players.map(player => Player.create(player))
    );

    console.log('Base de datos inicializada con datos de ejemplo.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

module.exports = initializeData;
