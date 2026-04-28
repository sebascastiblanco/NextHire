import "../src/styles/BarraLateral.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BarraLateral() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth");
        navigate("/");
    };


    return (
        <aside className="barra">

            <div className="header">
                <img src="/next-hire.jpeg" alt="logo" />
                <h2>Next-Hire</h2>
            </div>

            <nav className="menu">

                <div className="grupo">
                    <ul className="lista">
                        <Link to="/home" className="mi-link"><li>Inicio</li></Link>
                        <ul className="submenu">
                            <li>Resumen</li>
                            <li>Personalización</li>
                        </ul>
                    </ul>
                </div>

                <ul className="lista">
                    <li>Mensajes</li>
                    <li>Ofertas</li>
                    <li>Documentos</li>
                    <li>Reclutadores</li>
                    <li>Configuración</li>
                </ul>

                <hr />


                <div className="footer">
                    <li>Ayuda</li>
                    <li>Contactos</li>
                    <li onClick={logout} className="mi-link">Cerrar sesión</li>
                </div>

            </nav>

        </aside>
    );
}

export default BarraLateral;