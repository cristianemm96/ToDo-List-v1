import { FormStyled } from "../styled-componentes/FormStyled";
import { BotonRojo } from "../styled-componentes/BotonRojo";
import { InputTextStyled } from "../styled-componentes/InputTextStyled";
import { useContext, useState } from "react";
import { TareaContext } from "../Contextos/TareaContext";
import { BotonVerde } from "../styled-componentes/BotonVerde";

const FormTarea = () => {
  const { tareas, setTareas } = useContext(TareaContext);
  const [inputTarea, setInputTarea] = useState("");
  const manejarCambios = (e) => {
    setInputTarea(e.target.value);
  };

  const agregarTarea = (event) => {
    event.preventDefault();
    if (inputTarea.trim() !== "") {
      setTareas([inputTarea, ...tareas]);
    }
    setInputTarea("");
  };
  const eliminarTareas = () => {
    setTareas([]);
    setInputTarea("");
  };
  return (
    <>
      <FormStyled action="" className="formTarea" onSubmit={agregarTarea}>
        <label htmlFor="tarea">Ingresar tarea</label>
        <InputTextStyled
          type="text"
          placeholder="Nueva tarea"
          onChange={manejarCambios}
          value={inputTarea}
        />
        <BotonVerde>Agregar tarea</BotonVerde>
        <BotonRojo onClick={eliminarTareas}>Eliminar tareas</BotonRojo>
      </FormStyled>
    </>
  );
};

export default FormTarea;
