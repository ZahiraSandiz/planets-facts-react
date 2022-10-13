import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const wrap = css``;

function HeaderPlanet(props) {
  const { planet, color } = props;

  const text = css`
    font-family: "League Spartan";
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 1px;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 1px;
    border-top: 4px solid transparent;
    padding-top: 35px;
    padding-bottom: 27px;
    transition: all 0.4s;
    &:hover {
      border-top: 4px solid ${color};
    }

    @media (max-width: 900px) {
      border-top: none;
      padding-bottom: 25px;
      border-bottom: 4px solid transparent;
      &:hover {
        border-top: none;
        border-bottom: 4px solid ${color};
      }
    }
  `;

  return (
    <span css={wrap}>
      <Link css={text} to={`/${planet}`}>
        {planet}
      </Link>
    </span>
  );
}

export default HeaderPlanet;
