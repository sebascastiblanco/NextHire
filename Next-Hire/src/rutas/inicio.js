import express from "express";
import bcrypt from "bcrypt";
import db from "../db/conexionDB.js";

const router = express.Router();

router.post("/inicio", async (req, res) => {

    
    try {

        const { correo, contrasena } = req.body;

        console.log(correo, contrasena);

        const existe = await db.query("SELECT correo_usuario, contrasena, nombre_usuario FROM usuarios WHERE correo_usuario = $1;",
            [correo]);


            if (existe.rows.length === 0) {
                return res.status(401).json({ mensaje: "Correo o contraseña incorrectos" });
            }

            const usuario = existe.rows[0];

            const coincide = await bcrypt.compare(contrasena, usuario.contrasena);

            if (coincide) {
                console.log("El usuario es correcto");
                return res.status(200).json({ mensaje: "Sesion iniciada",
                    usuario: usuario.nombre_usuario
                });
            } else {
                console.log("El usuario o contraseña es incorrecto");
                return res.status(400).json({ mensaje: "Correo o contraseña incorrectas"});  
            }

    } catch ( error ) {
        console.log(error.message);

    return res.status(500).json({
        mensaje: "Error en el servidor"
    });
}

});

export default router;