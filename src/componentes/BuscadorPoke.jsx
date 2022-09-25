import axios from "axios";
import { useState } from "react";
import { ContenedorFlexColumn } from "../styled-componentes/ContenedorFlexColumn";
import { FormBusquedaPoke } from "./FormBusquedaPoke";
import { TarjetaPoke } from "./TarjetaPoke";

export const BuscadorPoke = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const buscarPokemon = async (e, buscado) => {
    setData(null);
    setIsLoading(true);
    setError(false);
    try {
      const pokeBuscado = buscado.toLowerCase().trim();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeBuscado}`
      );
      setData(data);
      console.log(data)
    } catch (error) {
      setError("No hay pokemon con ese nombre");
    }
    setIsLoading(false);
  };

  return (
    <ContenedorFlexColumn>
      <FormBusquedaPoke buscarFunc={buscarPokemon} />
      {isLoading && <span>cargando...</span>}
      {data && (
        <TarjetaPoke nombre={data.name} imagen={data.sprites.front_default} experiencia={data.base_experience}/>
      )}
      {error && <span style={{backgroundColor:'red', color:'white',width:'300px', margin:'auto'}}>{error}</span>}
    </ContenedorFlexColumn>
  );
};
