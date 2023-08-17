import { styled } from "styled-components";
import { colors,sizes,media, ComunStyles ,setgradient} from "./styleGlobal";

export const Navbar = styled.nav`
  background-color: ${colors.primary};
  width:${sizes.small};
  height:100vh;
  ${ComunStyles};
  flex-direction:column;
  ${media.small`
    background-color: ${colors.customColor2};
  `}
  ${media.medium`
    background-color: ${colors.light};
  `}
  ${media.large`
    background-color: ${colors.customColor1};
  `}
  ${media.extraLarge`
    background-color: ${colors.secondary};
  `};
`;

export const Content = styled.section`
  ${ComunStyles};
  width:100%;
`;

export const Home = styled.div`
width:  ${sizes.extraLarge};
background-color:${colors.success};
height:100vh;
${ComunStyles}
`;
export const Button =styled.button`
    background:${setgradient.gradient};
`;