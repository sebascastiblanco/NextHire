import express from "express";
import bcrypt from "bcrypt";
import db from "../db/conexionDB.js";

const router = express.Router();


router.post("/registrar", async (req, res) => {

    try {

        const { usuario, correo, contrasena, rol } = req.body;

        if (!usuario || !correo || !contrasena) {
            console.log("Todos los campos son obligatorios");
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

        const existe = await db.query("SELECT nombre_usuario, correo_usuario FROM usuarios WHERE nombre_usuario = $1 OR correo_usuario = $2;", 
            [usuario, correo]);

            if (existe.rows.length > 0) {
                console.log("El usuario o el correo ya se encuentran asociados...");
                return res.status(400).json({ mensaje: "El usuario o el correo ya se encuentran asociados..." });
            }

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        await db.query("INSERT INTO usuarios (nombre_usuario, correo_usuario, contrasena, rol) VALUES ($1, $2, $3, $4);", [usuario, correo, hashedPassword, rol]);
        return res.status(200).json({ mensaje: "Usuario creado con exito" });

    } catch (error) {
        console.error(error.message);
        console.log("Error al registrar el usuario");
        return res.status(400).json({ mensaje: "Error al registrar el usuario"});
    }


});

export default router;