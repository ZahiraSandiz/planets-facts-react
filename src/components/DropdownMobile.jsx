import { css } from "@emotion/react";
import { useState } from "react";

import iconHamburger from "../assets/icon-hamburger.svg";

import DropdownMobileLinks from "./DropdownMobileLinks";

const dropdown = css`
  display: none;
  @media (max-width: 590px) {
    display: inline;
  }
`;

const wrapCloseAndLinks = css`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const DropdownMobile = () => {
  const [open, setOpen] = useState(false);

  const hamburger = css`
    background: transparent;
    border: none;
    cursor: pointer;
    opacity: ${open ? "0.25" : "1"};
  `;

  return (
    <div css={dropdown}>
      {open ? (
        <div css={wrapCloseAndLinks}>
          <button
            css={hamburger}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img src={iconHamburger} alt="open menu" />
          </button>
          <DropdownMobileLinks />
        </div>
      ) : (
        <button
          css={hamburger}
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={iconHamburger} alt="menu" />
        </button>
      )}
    </div>
  );
};

export default DropdownMobile;
