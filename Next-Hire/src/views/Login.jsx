import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [rol, setRol] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(false);

    const envioRegistro = async (e) => {

        e.preventDefault(); //Evitar recargar la pagina web

        try {

            const creacion_usuario = await axios.post("http://localhost:3000/registrar", {
                usuario,
                correo,
                contrasena,
                rol
            });

            const respuestaBack = creacion_usuario.data;

            if (respuestaBack.mensaje) {
                setError(false);
                setMensaje(respuestaBack.mensaje);
            } else {
                setError(true);
                setMensaje(respuestaBack.mensaje);
            }

            console.log("Enviando datos...", creacion_usuario.data);

        } catch (error) {
            console.error("Error al enviar los datos", error);

            setError(true);
            setMensaje(
                error.response?.data?.mensaje || "Error al conectar con el servidor"
            );
        }
    }



return (
    <>
        <div id="container-principal">
            <h1>Bienvenido a Next-Hire</h1>
            <p>Registrate para iniciar sesion</p>


            <form onSubmit={envioRegistro} >
                <label htmlFor="usuario">Nombre usuario:</label><br />
                <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Ej: Jose" required></input><br />
                <label htmlFor="correo">Correo electronico:</label><br />
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej: Jose@outlook.com" required></input><br />
                <label htmlFor="contrasena">Contraseña:</label><br />
                <input type="password" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required></input><br />
                <label htmlFor="rol">Rol:</label><br />
                    <select value={rol} id="rol" onChange={(e) => setRol(e.target.value)} required>
                        <option value=""> -- Selecciona un Rol --</option>
                        <option value="Trabajador">Trabajador</option>
                        <option value="Contratista">Contratista</option>
                    </select><br />
                <p htmlFor="inicio">Si ya tienes cuenta, <Link to="/inicio">Inicia sesion</Link></p><br />
                <button type="submit">Registrarse</button>
            </form>

            {mensaje && (
                <p style={{ color: error ? "red" : "green" }}>
                    {mensaje}
                </p>
            )}
        </div>
    </>
)

}

export default Login; 