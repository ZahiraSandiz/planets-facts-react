import { css, Global, useTheme } from "@emotion/react";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Antonio", sans-serif;
    font-family: "League Spartan", sans-serif;
    padding: 0;
    margin: 0;
    color: #f2f2f2;
    background-color: #070724;
    background-image: url("../assets/background-stars.svg");
    -webkit-font-smoothing: antialiased;
    min-width: 350px;
  }
`;

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
