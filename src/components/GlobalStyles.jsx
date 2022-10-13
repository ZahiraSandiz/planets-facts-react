import { css, Global, useTheme } from "@emotion/react";
import backgroundStars from "../assets/background-stars.svg";

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes stars {
    0% {
      background-position: 50% 0px;
    }

    100% {
      background-position: 0px center;
    }
  }

  body {
    font-family: "Antonio", sans-serif;
    font-family: "League Spartan", sans-serif;
    -webkit-font-smoothing: antialiased;
    min-width: 350px;
    padding: 0;
    margin: 0;
    color: #f2f2f2;
    background-color: #070724;
    background-image: url(${backgroundStars});
    animation: 15s linear 0.8s infinite alternate none running stars;
  }
`;

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
