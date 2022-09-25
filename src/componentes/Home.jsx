import React from "react";
import { ContenedorFlexColumn } from "../styled-componentes/ContenedorFlexColumn";
import { MenuNav } from "./MenuNav";

export const Home = () => {
  return (
    <>
      <ContenedorFlexColumn>
        <MenuNav />
        <h1>Home</h1>
      </ContenedorFlexColumn>
    </>
  );
};
