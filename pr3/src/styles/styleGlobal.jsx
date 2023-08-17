import { css } from "styled-components";

// variables
 export const colors = {
  primary: "#0554F2",
  secondary: "#056CF2",
  success: "#29A649",
  danger: "#A7D9B3",
  light: "#F3F1EF",
  dark: "#191B3D",
  customColor1: "#ff5733",
  customColor2: "#8a2be2",
};

export const fonts ={
    principal : "@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Poppins:ital,wght@1,900&display=swap');", 

}
 export const sizes = {
  ssmall:"30vw",
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px",
  modify:"70vw",
};

export const ComunStyles = css`
display: flex;
align-items: center;
justify-content: center;
`;

export const media = {
  small: (...args) => css`
    @media (max-width: ${sizes.small}) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${parseInt(sizes.small) + 1}px) and (max-width: ${sizes.medium}) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: ${parseInt(sizes.medium) + 1}px) and (max-width: ${sizes.large}) {
      ${css(...args)};
    }
  `,
  extraLarge: (...args) => css`
    @media (min-width: ${parseInt(sizes.large) + 1}px) {
      ${css(...args)};
    }
  `,
};


