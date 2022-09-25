import styled from "styled-components";

export const ContenedorFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    margin: auto;
    @media only screen and (min-width: 320px) and (max-width: 450px) {
        width: 109vw;
        margin: auto;
    }
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        width: 90%;
    }
    @media only screen and (min-width: 601px) and (max-width: 800px) {
        width: 70%;
    }
    @media only screen and (min-width: 801px) and (max-width: 1000px){
        width:55%;
    }
    @media only screen and (min-width: 1001px){
        width:78%;
    }
`