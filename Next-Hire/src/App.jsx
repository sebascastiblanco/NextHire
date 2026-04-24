import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  );
}

export default App;