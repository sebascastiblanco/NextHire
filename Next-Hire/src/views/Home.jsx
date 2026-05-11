import BarraLateral from "../../components/BarraLateral";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Home() {

    const auth = localStorage.getItem("auth");
    const usuario = localStorage.getItem("usuario");

    if (!auth) {
        return <Navigate to="/" />;
    }

        return (
            <>
                <BarraLateral />

                <div>
                    <h1>Hola, {usuario}</h1>
                    <h3>Cada día es una nueva oportunidad</h3>
                </div>

            </>
        )
}

    export default Home;