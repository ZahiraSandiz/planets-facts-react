import { css } from "@emotion/react";
import { dataHeaderPlanets } from "../mocks/dataHeaderPlanets";
import DropdownMobileLink from "./DropdownMobileLink";

const wrapLinks = css`
  position: absolute;
  top: 69px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #070724;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 44px 24px 67px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DropdownMobileLinks = () => {
  return (
    <div css={wrapLinks}>
      {dataHeaderPlanets.map((currentPlanet) => {
        const { id, planet, color } = currentPlanet;
        return <DropdownMobileLink key={id} planet={planet} color={color} />;
      })}
    </div>
  );
};

export default DropdownMobileLinks;
