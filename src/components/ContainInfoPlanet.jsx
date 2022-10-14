import { css } from "@emotion/react";
import { useState } from "react";
import ButtonInfo from "./ButtonInfo";
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
const wrapButtons = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 255px;
  gap: 16px;
  @media (max-width: 900px) {
    width: 40%;
    gap: 14px;
  }
  @media (max-width: 590px) {
    display: none;
  }
`;

const ContainInfoPlanet = (props) => {
  const { planet } = props;
  const [aspect, setAspect] = useState("overview");

  return (
    <div css={container}>
      <InfoPlanet planet={planet} aspect={aspect} />

      <div css={wrapButtons}>
        <ButtonInfo number="01" text="OVERVIEW" setAspect={setAspect} />
        <ButtonInfo
          number="02"
          text="INTERNAL STRUCTURE"
          setAspect={setAspect}
        />
        <ButtonInfo number="03" text="SURFACE GEOLOGY" setAspect={setAspect} />
      </div>
    </div>
  );
};

export default ContainInfoPlanet;
