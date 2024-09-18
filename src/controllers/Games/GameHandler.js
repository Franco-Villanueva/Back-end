const { Game } = require('../../DB');


const createGameHandler = async (data) => {
    const { name, img } = data;
    try {

        if (!name || !img) {
            throw new Error('Faltan valores');
        }

        const newGame = await Game.create({ name, img });
        return { status: 201, data: newGame };
    } catch (error) {
        throw new Error(error.message || 'Error al crear Game.');
    }
};

module.exports = {
    createGameHandler,
  };