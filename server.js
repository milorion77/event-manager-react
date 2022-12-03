const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')


app.use(cookieParser());


app.use( express.json(), express.urlencoded({ extended: true }) );


app.use(
    cors({

        origin: "http://localhost:3000",
        credentials: true 
    }),
);



require("./Server/config/moongose.config");

// //Importamos rutas
// const misRutas = require("./server/routes/event.routes");
// misRutas(app);


app.listen(8000, ()=>console.log("Servidor listo !"));
