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

const deleteGameHandler = async (id) => {
    try {
        // Verifica si el partido existe en Match1 o Match2
        const game = await Game.findByPk(id);


        if (!game) {
            throw new Error('Game no encontrado.');
        }
        else {
            await game.destroy();
        }


        return { status: 204, message: 'Game eliminado exitosamente.' };
        
    } catch (error) {
        throw new Error(error.message || 'Error al eliminar el partido.');
    }
};

module.exports = {
    createGameHandler,
    deleteGameHandler
  };