import { css } from "@emotion/react";
import Header from "./Header";
import ButtonsInfoMobile from "./ButtonsInfoMobile";
import Footer from "./Footer";
import PlanetDetails from "./PlanetDetails";
import { useParams } from "react-router-dom";
import planetsData from "../mocks/planets.json";

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
  // donde estamos? en que planeta estamos? en que ruta estamos? en que url estamos?
  // es lo que ingreso el usuario luego de /
  const { planetParam } = useParams();

  const planet = planetsData.find((planetData) => {
    return (
      planetData.name.toLocaleLowerCase() === planetParam.toLocaleLowerCase()
    );
  });

  return (
    <div css={contentContainer}>
      <Header />
      <ButtonsInfoMobile />

      <PlanetDetails planet={planet} />

      <Footer planet={planet} />
    </div>
  );
};

export default App;
