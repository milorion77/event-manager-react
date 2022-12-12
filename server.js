const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')


app.use(cookieParser());


app.use(express.json(), express.urlencoded({ extended: true }));


app.use(

    cors({

        origin: "http://localhost:3000",
        credentials: true
    }),
);


// app.use((req, res, next) => {

//     // Dominio que tengan acceso (ej. 'http://example.com')
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

//     // Metodos de solicitud que deseas permitir
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

//     // Encabecedados que permites (ej. 'X-Requested-With,content-type')
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next();
// })

require("./Server/config/moongose.config");

//Importamos rutas
const misRutas = require("./server/routes/event.routes");
misRutas(app);


app.listen(8000, () => console.log("Servidor listo !"));
