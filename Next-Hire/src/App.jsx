import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Home from "./views/Home";
import Documentos from "./views/Documentos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/home" element={<Home />} />
      <Route path="/documentos" element={<Documentos />} />
    </Routes>
  );
}

export default App;