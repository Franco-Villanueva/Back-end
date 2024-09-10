const { News } = require('../../DB');

// Crear una noticia
const createNews = async (req, res) => {
  const { title, image, body, videoUrl } = req.body;
  try {
    const newNews = await News.create({ title, image, body, videoUrl });
    return newNews;
  } catch (error) {
    throw new Error('Error al crear noticia: ' + error.message);
  }
};

// Obtener todas las noticias
const getAllNews = async (req, res) => {
    try {
        const news = await News.findAll();

        return news;
      } catch (error) {
        throw new Error('Error al obtener las noticias: ' + error.message);
      }
};

// Obtener una noticia por ID
const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findByPk(id);
    if (!news) throw new Error('Noticia no encontrada.');
    
    return news;
  } catch (error) {
    throw new Error('Error al obtener noticia: ' + error.message);
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
};
