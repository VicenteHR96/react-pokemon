import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Home from "./views/home/Home.jsx";
import Pokemones from "./views/Pokemones/Pokemones.jsx";
import Detalle from "./views/detalle/Detalle.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="cont-general">
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
        <Route
          path="/pokemones/:idPokemon"
          element={<Detalle></Detalle>}
        ></Route>
        <Route path="*" element={<h1>Ruta no válida</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
