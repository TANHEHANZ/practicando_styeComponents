export const GlobalStyle = {
  colors: {
    primary: "#fff",
    secondary: "blue",
    tercer: "#7445CF",
  },
  sizes: {
    pequeño: "50%",
    mediano: "70%",
    grande: "90%",
  },
};
export const setgradient = (colors) =>
  `linear-gradient(to right , ${colors.primary} ,${colors.tercer},${colors.secondary})`;
export const backgroundStyle = {
  background: setgradient(GlobalStyle.colors),
};
