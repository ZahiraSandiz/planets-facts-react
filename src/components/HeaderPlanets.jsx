import { css } from "@emotion/react";
import { dataHeaderPlanets } from "../mocks/dataHeaderPlanets";
import HeaderPlanet from "./HeaderPlanet";

const container = css`
  display: flex;
  gap: 33px;
  @media (max-width: 900px) {
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 590px) {
    display: none;
  }
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
