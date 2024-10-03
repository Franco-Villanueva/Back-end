const { createNews, getAllNews, getNewsById } = require('./NewsController');

// Handler para crear una noticia
const createNewsHandler = async (req, res) => {
  try {
    const response = await createNews(req, res);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener todas las noticias
const getAllNewsHandler = async (req, res) => {
  try {
    const response = await getAllNews(req, res);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Handler para obtener una noticia por ID
const getNewsByIdHandler = async (req, res) => {
  try {
    const response = await getNewsById(req, res);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteNewsIdHandler = async (req, res) => {
  try {
      const result = await deleteNewsId(req.body);
      res.status(result.status).json(result.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createNewsHandler,
  getAllNewsHandler,
  getNewsByIdHandler,
  deleteNewsIdHandler,
};
