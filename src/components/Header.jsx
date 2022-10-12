import { css } from "@emotion/react";
import HeaderPlanets from "./HeaderPlanets";
import DropdownMobile from "./DropdownMobile";

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px 27px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  user-select: none;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 51px 27px;
    gap: 39px;
  }

  @media (max-width: 590px) {
    flex-direction: row;
    padding: 16px 24px;
  }
`;

const title = css`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  color: rgb(255, 255, 255);
`;

function Header() {
  return (
    <header css={header}>
      <h1 css={title}>THE PLANETS</h1>
      <HeaderPlanets />

      <DropdownMobile />
    </header>
  );
}

export default Header;
