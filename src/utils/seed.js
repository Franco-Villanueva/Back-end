const { Team, Player, Game, Match1, Match2, News } = require('../DB'); // Asegúrate de tener Match1 y Match2 también

const initializeData = async () => {
  try {
    // Datos de ejemplo para juegos
    const games = [
      { name: 'Counter-Strike 2',
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
        name: 'Shinden',
        aka: 'SHI',
        logo: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png', 
        gameId: createdGames[0].id // Asociar con CS2
      },
      { 
        name: 'Shinden',
        aka: 'SHI',
        logo: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726685923/Logos%20shindengg/mkmaixtljrwfu16bxjul.png', 
        gameId: createdGames[1].id // Asociar con Fortnite (solo equipo propio)
      },
      { 
        name: 'Shinden',
        aka: 'SHI',
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
      { name: 'Matias Muñis', 
        nick: 'abizz', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/Sicdo7ZniFq9jAoiaGKl8v.png?ixlib=java-2.1.0&w=400&s=3a2ffee8aa4dff76720bd842b3cfa3c8', 
        role: 'Player', 
        nationality: 'ARG', 
        age: 20, 
        teamId: 1 
      },
      { name: 'Nicolas Cespedes', 
        nick: 'BK1', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/vFColU8aDspSi4qJ79IV_9.png?ixlib=java-2.1.0&w=400&s=92979d5fb62d46917546e8601f4dd327', 
        role: 'Player', 
        nationality: 'ARG', 
        age: 25, 
        teamId: 1
      },
      { name: 'Santiago Barchiesi', 
        nick: 'relentless', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/c3oI8YtRyICs-VU-4PDYX_.png?ixlib=java-2.1.0&w=400&s=fd73599e3f3242b24e3b349fbfd64387', 
        role: 'Player', 
        nationality: 'ARG', 
        age: 22, 
        teamId: 1 
      },
      { name: 'Roy Salaverry', 
        nick: 'roy', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/ybQNH5iI3enGt3OgTUcEzu.png?ixlib=java-2.1.0&w=400&s=c0e4e70fa7edcce6b9116733d367ae09', 
        role: 'Player', 
        nationality: 'ARG', 
        age: 20, 
        teamId: 1 
      },
      { name: 'Ivan Quintana', 
        nick: 'ivz', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/oTW7FWXBVWZwI0gjcr4NWk.png?ixlib=java-2.1.0&w=400&s=b01877b70555c01354bec63dd3ea6957', 
        role: 'Player', 
        nationality: 'ARG', 
        age: 21, 
        teamId: 1 
      },
      { name: 'Lorenzo Rugo', 
        nick: 'RUGO', 
        img: 'https://img-cdn.hltv.org/playerbodyshot/8_6KksfJ96YX9gzOtdlhEd.png?ixlib=java-2.1.0&w=400&s=f81bff98aeb9b2f785b7e895af52e5a5', 
        role: 'Coach', 
        nationality: 'ARG', 
        age: 22, 
        teamId: 1 
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
      },
      {
        gameId: createdGames[0].id, // CS2
        competition: 'CS2 Championship',
        date: '2024-12-24T17:30:00Z',
        teamAId: createdTeams[0].id, // Team Counter-Strike 2
        teamBId: createdTeams[1].id, // Team Fortnite
        result: 'N/A'
      },

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
      },
      {
        gameId: createdGames[1].id, // Fortnite
        competition: 'Fortnite Pro-Am',
        date: '2024-11-30T19:30:00Z',
        playerId: createdPlayers[2].id, // Player zeko
        kills: null,
        position: null
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

  const news = [
    {
      title: 'New Update in Valorant Brings Exciting Features',
      image: 'https://example.com/images/valorant-update.jpg',
      body: 'Riot Games has released a new update for Valorant with exciting features including new agents, maps, and enhanced game mechanics. This update is expected to balance the competitive scene.',
      videoUrl: 'https://example.com/videos/valorant-update.mp4',
    },
    {
      title: 'Fortnite Championship Finals Announced',
      image: 'https://example.com/images/fortnite-championship.jpg',
      body: 'Epic Games has officially announced the dates for the Fortnite Championship Finals. Players from around the world will compete for the ultimate title and a grand prize.',
      videoUrl: 'https://example.com/videos/fortnite-championship.mp4',
    },
    {
      title: "CS2's Latest Patch Focuses on Anti-Cheat Measures",
      image: null,
      body: "Counter-Strike 2's latest patch focuses heavily on improving the anti-cheat system, aiming to provide a more fair and balanced experience for all players.",
      videoUrl: null,
    },
    {
      title: 'New Update in Valorant Brings Exciting Features',
      image: 'https://example.com/images/valorant-update.jpg',
      body: 'Riot Games has released a new update for Valorant with exciting features including new agents, maps, and enhanced game mechanics. This update is expected to balance the competitive scene.',
      videoUrl: 'https://example.com/videos/valorant-update.mp4',
    },
    {
      title: 'Fortnite Championship Finals Announced',
      image: 'https://example.com/images/fortnite-championship.jpg',
      body: 'Epic Games has officially announced the dates for the Fortnite Championship Finals. Players from around the world will compete for the ultimate title and a grand prize.',
      videoUrl: 'https://example.com/videos/fortnite-championship.mp4',
    },
    {
      title: "CS2's Latest Patch Focuses on Anti-Cheat Measures",
      image: null,
      body: "Counter-Strike 2's latest patch focuses heavily on improving the anti-cheat system, aiming to provide a more fair and balanced experience for all players.",
      videoUrl: null,
    },
    {
      title: 'New Update in Valorant Brings Exciting Features',
      image: 'https://example.com/images/valorant-update.jpg',
      body: 'Riot Games has released a new update for Valorant with exciting features including new agents, maps, and enhanced game mechanics. This update is expected to balance the competitive scene.',
      videoUrl: 'https://example.com/videos/valorant-update.mp4',
    },
    {
      title: 'Fortnite Championship Finals Announced',
      image: 'https://example.com/images/fortnite-championship.jpg',
      body: 'Epic Games has officially announced the dates for the Fortnite Championship Finals. Players from around the world will compete for the ultimate title and a grand prize.',
      videoUrl: 'https://example.com/videos/fortnite-championship.mp4',
    },
    {
      title: "CS2's Latest Patch Focuses on Anti-Cheat Measures",
      image: null,
      body: "Counter-Strike 2's latest patch focuses heavily on improving the anti-cheat system, aiming to provide a more fair and balanced experience for all players.",
      videoUrl: null,
    }
  ];

  await Promise.all(
    news.map(news => News.create(news))
  );




};

module.exports = initializeData;
