import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TareasComponent } from "./TareasComponent";
import { BuscadorPoke } from "./BuscadorPoke";
import { Home } from "./Home";

export const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/todo-list" element={<TareasComponent />} />
      <Route exact path="/buscador-poke" element={<BuscadorPoke />} />
    </Routes>
  );
};
