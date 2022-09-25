import { Link } from "react-router-dom";
import { NavStyled } from "../styled-componentes/NavStyled";

export const MenuNav = (props) => {
  const cantTareas = props.nTareas;
  const setEstilo = () => (cantTareas > 0 ? "red" : "green");
  const cantidadTareas = () => (cantTareas > 0 ? ": " + cantTareas : "");
  return (
    <NavStyled>
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link
        to="/todo-list"
        style={{ textDecoration: "none", backgroundColor: setEstilo() }}
      >
        Todo-List {cantidadTareas()}
      </Link>
      <Link to="/buscador-poke" style={{ textDecoration: "none" }}>
        Buscador Pokemon
      </Link>
    </NavStyled>
  );
};
