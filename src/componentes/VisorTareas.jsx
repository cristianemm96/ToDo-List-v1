import { ContenedorFlexStyled } from "../styled-componentes/ContenedorFlexStyled";
import Tarjeta from "./Tarjeta";
import { useContext } from "react";
import { TareaContext } from "../Contextos/TareaContext";

const VisorTareas = () => {
  const { tareas } = useContext(TareaContext);
  return (
    <>
      <h2>Tareas: </h2>
      <ContenedorFlexStyled>
        {tareas.length !== 0 ? (
          tareas.map((t) => <Tarjeta noticia={t} key={Math.random()} />)
        ) : (
          <h2>No hay tareas</h2>
        )}
      </ContenedorFlexStyled>
    </>
  );
};
export default VisorTareas;
