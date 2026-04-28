import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Inicio() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(false);

    const inicioSesion = async (e) => {

        e.preventDefault();

        try {

            const revisarUsuario = await axios.post("http://localhost:3000/inicio", {
                correo,
                contrasena
            });

            const respuesta = revisarUsuario.data;

                if (revisarUsuario.status === 200) {
                    localStorage.setItem("auth", "true");
                    navigate("/home");
                    setError(false);
                    setMensaje(respuesta.mensaje);
                } else {
                    setError(true);
                    setMensaje(respuesta.mensaje);
                }

            console.log("Enviando datos...", revisarUsuario.data);

        } catch ( error ) {
            console.error("Error al enviar datos...", error.message);

            setError(true);
            setMensaje(
                error.response?.data?.mensaje || "Error al conectar con el servidor"
            );
        }

    }

    return(
        <>
            <div id="container-principal">
                <h1>Bienvenido a Next-Hire</h1>

            <form onSubmit={inicioSesion} >
                <label htmlFor="correo">Correo electronico:</label><br />
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Ej: Jose@outlook.com" required></input><br />
                <label htmlFor="contrasena">Contraseña:</label><br />
                <input type="password" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required></input><br />
                
                <p htmlFor="registro">Si no tienes cuenta, <Link to="/">Registrarse</Link></p><br />
                <button type="submit">Ingresar</button>
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

export default Inicio; 