import { useContext } from "react";
import { TareaContext } from "../Contextos/TareaContext";
import { ContenedorFlexColumn } from "../styled-componentes/ContenedorFlexColumn";
import FormTarea from "./FormTarea";
import { MenuNav } from "./MenuNav";
import VisorTareas from "./VisorTareas";

const Tareas = () => {
  const { tareas } = useContext(TareaContext);
  const cantidadTareas = tareas.length;
  return (
    <>
      <ContenedorFlexColumn>
        <MenuNav nTareas={cantidadTareas} />
        <FormTarea />
        <VisorTareas />
      </ContenedorFlexColumn>
    </>
  );
};

export default Tareas;
