import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { theme } from "./default";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
