import { styled } from "styled-components";
export const theme = {
    colors: {
      primary: "#fff",
      secondary: "#000",
      tercer: "#7445CF",
      lineal_gradient:"",
    },
    sizes: {
      pequeño: "50%",
      mediano: "70%",
      grande: "90%",
    },
  };

export const Car= styled.div`
// de esta forma instanciaria objetos donde pueda tener los datos para mantener la estetica de la web
background-color:${(props)=>(props.value)|| "#000"};
color:${(col)=>(col)|| "#000"};
height:400px;
`;