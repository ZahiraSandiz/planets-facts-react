import { css } from "@emotion/react";
import hamburger from "../assets/icon-hamburger.svg";

const dropdown = css`
  display: none;
  width: 24px;
  height: 17px;
  cursor: pointer;
  @media (max-width: 590px) {
    display: inline;
  }
`;

const DropdownPlanetsMobile = () => {
  return <img css={dropdown} src={hamburger} alt="" />;
};

export default DropdownPlanetsMobile;
