import styled, { css } from "styled-components";

// Crearemos variables para poder interpolarlos
let colora = "#000";
let colorb = "#fff";
// tambien usando funciones a ejecutar
const setTimer = (time) => `all ${time} ease-in-out`;

export const Parrafo = styled.p`
  padding: 10em;
  background-color: ${colora};
  color: ${colorb};
  margin: 0;
  box-sizing: border-box;
  // para llamar una funcion  y enviar un parametro
  transition: ${setTimer("1s")};
  // por envio de parametros
  border: ${(props) => props.valor};
  // para renderizados condicionales
  transform: rotate(${({ dato }) => dato || "5deg"});

  // si queremos evaluar parametros 
  ${
    (props)=>props.valorbool && css `
    margin:0;
    transform: rotate(${({ dato }) => dato || "-5deg"});
    color:${colora};
    `
  }
  &:hover {
    background-color: ${colorb};
    color: ${colora};
  }
`;
