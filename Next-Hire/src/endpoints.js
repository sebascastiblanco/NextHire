import express from "express";
import cors from "cors";
import db from "./db/conexionDB.js";
import registro from "./rutas/registrar.js";
import inicio from "./rutas/inicio.js";
import home from "./rutas/home.js";


const app = express();
const puerto = 3000;

app.use(express.json());
app.use(cors());

//Rutas nuevas
app.use(registro);
app.use(inicio);
app.use(home);

//Conexion base de datos con el servidor
const servidorConectado = async () => {

    try {

        await db.connect();
        console.log("Conectado correctamente a la base de datos...");

        app.listen(puerto, () => {
            console.log(`Escuchando el puerto ${puerto}`);
        });

    } catch (error) {

        console.error("Error al conectarse con el servidor", error.message);
        process.exit(1);

    }

};

servidorConectado();