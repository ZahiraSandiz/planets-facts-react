import { css } from "@emotion/react";
import HeaderPlanets from "./HeaderPlanets";
import DropdownMobile from "./DropdownMobile";

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  user-select: none;

  @media (max-width: 900px) {
    flex-direction: column;
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
  padding: 22px 20px 27px 32px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    padding: 32px 20px 19px 20px;
  }

  @media (max-width: 590px) {
    padding: 0;
  }
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
