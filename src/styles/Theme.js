import theme from 'styled-theming'

const fontSize = theme("mode", "variant", {
  primary: {
    light: "55rem",
    dark: "8rem",
  },
});
 const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee",
});
 const buttonTextColor = theme("mode", {
  light: "white",
  dark: "black",
});
export { fontSize, buttonBackgroundColor, buttonTextColor };