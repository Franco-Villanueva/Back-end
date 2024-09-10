const server = require('./src/App.js'); // Importa tu servidor Express
const { conn } = require('./src/DB.js'); // Importa tu conexión a la base de datos
require('dotenv').config(); // Carga variables de entorno
const initializeData = require('./src/utils/seed.js');

const PORT = process.env.PORT ; // Usa el puerto de la variable de entorno o el puerto 3001

// Sincroniza la base de datos y luego inicia el servidor
conn
  .sync({ force: true }) // `force: true` borra y recrea las tablas
  .then(async () => {
    await initializeData(); // Inicializar datos antes de iniciar el servidor
    server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
    });
  })
  .catch(err => {
    console.log('Error al sincronizar la base de datos:', err);
  });
