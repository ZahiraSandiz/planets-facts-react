import { css } from "@emotion/react";

const wrap = css``;

const text = css`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  color: #ffffff;
  text-decoration: none;
`;

function HeaderPlanet(props) {
  const { planet } = props;
  return (
    <span css={wrap}>
      <a href="" css={text}>
        {planet}
      </a>
    </span>
  );
}

export default HeaderPlanet;
