import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.secondary}
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
