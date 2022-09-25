import React from "react";
import { useState } from "react";
import { InputTextStyled } from "../styled-componentes/InputTextStyled";
import { FormStyled } from "../styled-componentes/FormStyled";
import { MenuNav } from "./MenuNav";
import { BotonVerde } from "../styled-componentes/BotonVerde";

export const FormBusquedaPoke = ({ buscarFunc }) => {
  const [nPokemon, setNPokemon] = useState("");
  const actualizarNPokemon = (e) => {
    setNPokemon(e.target.value);
  };
  const buscar = (e) => {
    e.preventDefault();
    if (nPokemon.trim() !== "") {
      buscarFunc(e, nPokemon);
    }
  };
  return (
    <>
      <MenuNav />
      <FormStyled action="" className="formPoke" onSubmit={buscar}>
        <label htmlFor="tarea">Buscar Pokemon</label>
        <InputTextStyled
          type="text"
          placeholder="Pokemon"
          value={nPokemon}
          onChange={actualizarNPokemon}
        />
        <BotonVerde>Buscar</BotonVerde>
      </FormStyled>
    </>
  );
};
