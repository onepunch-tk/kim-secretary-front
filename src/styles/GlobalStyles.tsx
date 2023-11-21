import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: -apple-system, "Source Code Pro", sans-serif ;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text.primary};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
