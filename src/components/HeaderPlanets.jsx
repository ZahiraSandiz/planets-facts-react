import { css } from "@emotion/react";
import { dataHeaderPlanets } from "../mocks/dataHeaderPlanets";
import HeaderPlanet from "./HeaderPlanet";

const container = css`
  display: flex;
  gap: 33px;
  padding-right: 32px;
  @media (max-width: 900px) {
    padding: 20px 50px 27px 50px;
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
        const { id, planet, color } = dataPlanet;
        return <HeaderPlanet key={id} planet={planet} color={color} />;
      })}
    </div>
  );
};

export default HeaderPlanets;
