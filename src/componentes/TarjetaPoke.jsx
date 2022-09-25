import { TarjetaPokeStyled } from "../styled-componentes/TarjetaPokeStyled";

export const TarjetaPoke = (props) => {
  return (
    <TarjetaPokeStyled>
      <span>{props.nombre.toUpperCase()}</span>
      <img src={props.imagen} />
      <span>EXPERIENCIA BASE: {props.experiencia}</span>
    </TarjetaPokeStyled>
  );
};
