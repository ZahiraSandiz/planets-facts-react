import { css } from "@emotion/react";
import ButtonsInfo from "./ButtonsInfo";
import InfoPlanet from "./InfoPlanet";

const container = css`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
  }
`;

const ContainInfoPlanet = () => {
  return (
    <div css={container}>
      <InfoPlanet />
      <ButtonsInfo />
    </div>
  );
};

export default ContainInfoPlanet;
