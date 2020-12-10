import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#Ae1D1D",
    primaryLight: "#fff3f3",
    secondary: "#00ff19",
    light: "#ffffff",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
