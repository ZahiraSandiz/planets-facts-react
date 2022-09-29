import { css } from "@emotion/react";
import ButtonsInfo from "./ButtonsInfo";
import InfoPlanet from "./InfoPlanet";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 39px;
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
