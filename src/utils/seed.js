const { Team, Player, Game, Match1, Match2 } = require('../DB'); // Asegúrate de tener Match1 y Match2 también

const initializeData = async () => {
  try {
    // Datos de ejemplo para juegos
    const games = [
      { name: 'CS2',
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685991/Teams%20shindengg/qlvkprnmhoarilykfafp.webp', 
      },
      { name: 'Fortnite', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685991/Teams%20shindengg/r5vfnvmxide7m6vurtr0.webp', 
      },
      { name: 'Valorant',
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685991/Teams%20shindengg/xmq4uhj7i2bgkdzhgbzu.webp',
      }
    ];

    // Crear juegos
    const createdGames = await Promise.all(
      games.map(game => Game.create(game))
    );

    // Datos de ejemplo para equipos con la referencia a sus juegos
    const teams = [
      { 
        name: 'Team Counter-Strike 2',
        logo: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png', 
        gameId: createdGames[0].id // Asociar con CS2
      },
      { 
        name: 'Team Fortnite', 
        logo: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png', 
        gameId: createdGames[1].id // Asociar con Fortnite
      },
      { 
        name: 'Team Valorant',  
        logo: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png', 
        gameId: createdGames[2].id // Asociar con Valorant
      },
    ];

    // Crear equipos
    const createdTeams = await Promise.all(
      teams.map(team => Team.create(team))
    );

    // Datos de ejemplo para jugadores
    const players = [
      { name: 'Player 1', 
        nick: 'zzk', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726687859/Teams%20shindengg/pyu3lyqrfxal1ytlacva.png', 
        role: 'Attacker', 
        nationality: 'USA', 
        age: 25, 
        teamId: createdTeams[0].id 
      },
      { name: 'Player 2', 
        nick: 'coscu', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726687859/Teams%20shindengg/pyu3lyqrfxal1ytlacva.png', 
        role: 'Defender', 
        nationality: 'Canada', 
        age: 28, 
        teamId: createdTeams[1].id 
      },
      { name: 'Player 3', 
        nick: 'zeko', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726687859/Teams%20shindengg/pyu3lyqrfxal1ytlacva.png', 
        role: 'Support', 
        nationality: 'UK', 
        age: 22, 
        teamId: createdTeams[2].id 
      }
    ];

    // Crear jugadores
    const createdPlayers = await Promise.all(
      players.map(player => Player.create(player))
    );

    // Datos de ejemplo para partidos de equipo (Match1)
    const matches1 = [
      {
        gameId: createdGames[0].id, // CS2
        competition: 'CS2 Championship',
        date: '2024-10-05T15:00:00Z',
        teamAId: createdTeams[0].id, // Team Counter-Strike 2
        teamBId: createdTeams[1].id, // Team Fortnite
        result: '3-2'
      },
      {
        gameId: createdGames[2].id, // Valorant
        competition: 'Valorant Masters',
        date: '2024-11-10T18:00:00Z',
        teamAId: createdTeams[2].id, // Team Valorant
        teamBId: createdTeams[0].id, // Team Counter-Strike 2
        result: '1-1'
      }
    ];

    // Crear partidos de equipo (Match1)
    await Promise.all(
      matches1.map(match => Match1.create(match))
    );

    // Datos de ejemplo para partidos individuales (Match2 - Fortnite)
    const matches2 = [
      {
        gameId: createdGames[1].id, // Fortnite
        competition: 'Fortnite World Cup',
        date: '2024-10-20T20:00:00Z',
        playerId: createdPlayers[1].id, // Player coscu
        kills: 8,
        position: 1
      },
      {
        gameId: createdGames[1].id, // Fortnite
        competition: 'Fortnite Pro-Am',
        date: '2024-11-15T18:30:00Z',
        playerId: createdPlayers[2].id, // Player zeko
        kills: 5,
        position: 2
      }
    ];

    // Crear partidos individuales (Match2)
    await Promise.all(
      matches2.map(match => Match2.create(match))
    );

    console.log('Base de datos inicializada con datos de ejemplo.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

module.exports = initializeData;
