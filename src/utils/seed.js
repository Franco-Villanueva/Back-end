const { Team, Player, Game } = require('../DB'); // Asegúrate de tener el modelo Game también

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
      { name: 'Player 11', 
        nick: 'zzk1', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726687859/Teams%20shindengg/pyu3lyqrfxal1ytlacva.png', 
        role: 'Attacker', 
        nationality: 'USA', 
        age: 25, 
        teamId: createdTeams[0].id 
      },
      { name: 'Player 12', 
        nick: 'zzk2', 
        img: 'https://res.cloudinary.com/df21bcvs0/image/upload/v1726687859/Teams%20shindengg/pyu3lyqrfxal1ytlacva.png', 
        role: 'Attacker', 
        nationality: 'USA', 
        age: 25, 
        teamId: createdTeams[0].id 
      },
      { name: 'Player 13', 
        nick: 'zzk3', 
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
    await Promise.all(
      players.map(player => Player.create(player))
    );

    console.log('Base de datos inicializada con datos de ejemplo.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

module.exports = initializeData;
