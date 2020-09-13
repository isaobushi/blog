import theme from 'styled-theming'

const fontSize = theme("mode", "variant", {
  primary: {
    light: "55rem",
    dark: "8rem",
  },
});
const buttonBackgroundColor = theme("mode", "variant", {
  default: { light: "gray", dark: "darkgray" },
  primary: { light: "blue", dark: "darkblue" },
  success: { light: "green", dark: "darkgreen" },
  warning: { light: "orange", dark: "darkorange" }
});
 const buttonTextColor = theme("mode", {
  light: "white",
  dark: "black",
});
export { fontSize, buttonBackgroundColor, buttonTextColor };