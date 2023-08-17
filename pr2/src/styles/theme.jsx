import { keyframes , styled } from "styled-components";
import { GlobalStyle, backgroundStyle } from "./GlobalStyles";

export const fadeInAnimation = keyframes` // Define la animación con keyframes
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Button =styled.button`
${backgroundStyle}
/* background: linear-gradient(to right, #27133A, #31384F, #31384F); */
width:100px;
height:50px;
color:${({colors})=>(GlobalStyle.colors.primary)|| "blue"};
`;
export const Parrafo = styled.p`
background:${GlobalStyle.colors.tercer||"#fff"};
&:hover{
    animation: ${fadeInAnimation} ${({ timer }) => timer || "5s"} ease-in-out;

}
` ;


