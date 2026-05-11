import BarraLateral from "../../components/BarraLateral";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "../styles/estilos_documentos.css";

function Documentos() {

    const auth = localStorage.getItem("auth");
    const usuario = localStorage.getItem("usuario");

    if (!auth) {
        return <Navigate to="/" />;
    }

        return (
            <>
                <BarraLateral />

                <div>
                    <h3>{usuario}</h3>
                </div>
                <div>
                    <h1>Documentos</h1>
                </div>
                <div>
                    <ul>
                        <li>Hoja de Vida <img src="./src/assets/icono-hojadevida.jpeg" alt="logo" /></li>
                        <li>Cedula <img src="./src/assets/icono-cedula.png" alt="logo" id="imagen"/></li>
                        <li>Cursos</li>
                        <li>Otros</li>
                    </ul>
                </div>

            </>
        )
}

    export default Documentos;