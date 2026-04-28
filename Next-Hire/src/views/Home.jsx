import BarraLateral from "../../components/BarraLateral";
import { Navigate } from "react-router-dom";

function Home() {

    const auth = localStorage.getItem("auth");

        if (!auth) {
            return <Navigate to="/" />;
        }


    return (
        <>
        <BarraLateral />

        <h1>Hola</h1>
        </>
    )
}

export default Home;