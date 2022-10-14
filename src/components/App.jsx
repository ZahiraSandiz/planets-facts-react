import { css } from "@emotion/react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./Header";
import ButtonsInfoMobile from "./ButtonsInfoMobile";
import Footer from "./Footer";
import PlanetDetails from "./PlanetDetails";

const contentContainer = css`
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
`;

const App = () => {
  return (
    <div css={contentContainer}>
      <Header />
      <ButtonsInfoMobile />

      <PlanetDetails />

      <Footer />
    </div>
  );
};

export default App;
