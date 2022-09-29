import { css } from "@emotion/react";
import { dataHeaderPlanets } from "../mocks/dataHeaderPlanets";
import HeaderPlanet from "./HeaderPlanet";

const container = css`
  display: flex;
  gap: 33px;
`;

const HeaderPlanets = () => {
  return (
    <div css={container}>
      {dataHeaderPlanets.map((dataPlanet) => {
        const { id, planet } = dataPlanet;
        return <HeaderPlanet key={id} planet={planet} />;
      })}
    </div>
  );
};

export default HeaderPlanets;
