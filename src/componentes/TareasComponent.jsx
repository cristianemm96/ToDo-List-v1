import { TareaProvider } from "../Contextos/TareaContext";
import Tareas from "./Tareas";

export const TareasComponent = () => {
  return (
    <>
    <TareaProvider>
      <Tareas />
    </TareaProvider>
    </>
    
  );
};
