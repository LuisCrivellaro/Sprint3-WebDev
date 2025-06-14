import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Gerenciamento from "./pages/Gerenciamento";
import Telemedicina from "./pages/Telemedicina";
import Login from "./pages/Login";
import ListaPacientes from "./components/ListaPacientes"
import "./App.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/documentos" element={<Gerenciamento />} />
        <Route path="/telemedicina" element={<Telemedicina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pacientes" element={<ListaPacientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
