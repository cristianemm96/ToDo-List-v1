import {React, createContext, useState } from "react";
import Tareas from "../componentes/Tareas";

export const TareaContext = createContext();
export const TareaProvider = () =>{
    const [tareas, setTareas] = useState([]);
    return (
        <TareaContext.Provider value={{tareas, setTareas}}>
            <Tareas/>
        </TareaContext.Provider>
    )
}

     
        