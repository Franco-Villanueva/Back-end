const server = require('./src/App.js'); // Importa tu servidor Express
const { conn } = require('./src/DB.js'); // Importa tu conexión a la base de datos
require('dotenv').config(); // Carga variables de entorno

const PORT = process.env.PORT ; // Usa el puerto de la variable de entorno o el puerto 3001

// Sincroniza la base de datos y luego inicia el servidor
conn
.sync({force:true})
    .then(value=>{
        server.listen(PORT, () => {
            console.log('Server raised in port: ' + PORT);
        });
    })
.catch(err =>{console.log(err)})
