import { css } from "@emotion/react";
import iconChevron from "../assets/icon-chevron.svg";

const wrapLink = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const wrapCircleAndPlanet = css`
  display: flex;
  align-items: end;
  gap: 24px;
`;

const namePlanet = css`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.36364px;
  color: #ffffff;
`;

const icon = css`
  padding-right: 7px;
`;

const DropdownMobileLink = (promps) => {
  const { planet, color } = promps;

  const circle = css`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${color};
  `;

  return (
    <div css={wrapLink}>
      <div css={wrapCircleAndPlanet}>
        <span css={circle}></span>
        <span css={namePlanet}>{planet}</span>
      </div>

      <img css={icon} src={iconChevron} alt="icon chevron " />
    </div>
  );
};

export default DropdownMobileLink;
