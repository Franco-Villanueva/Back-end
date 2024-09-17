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
      { name: 'Player 1',nick:'zzk' ,img: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Attacker', nationality: 'USA', age: 25, teamId: createdTeams[0].id },
      { name: 'Player 11',nick:'zzk1' ,img: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Attacker', nationality: 'USA', age: 25, teamId: createdTeams[0].id },
      { name: 'Player 12',nick:'zzk2' ,img: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Attacker', nationality: 'USA', age: 25, teamId: createdTeams[0].id },
      { name: 'Player 13',nick:'zzk3' ,img: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Attacker', nationality: 'USA', age: 25, teamId: createdTeams[0].id },
      { name: 'Player 2',nick:'coscu' ,img: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Defender', nationality: 'Canada', age: 28, teamId: createdTeams[1].id },
      { name: 'Player 3',nick:'zeko' ,img:'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png', role: 'Support', nationality: 'UK', age: 22, teamId: createdTeams[2].id }
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
