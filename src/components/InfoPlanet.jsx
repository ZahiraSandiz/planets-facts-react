import { css } from "@emotion/react";
import svgSource from "../assets/icon-source.svg";

const container = css`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media (max-width: 900px) {
    width: 49%;
  }
  @media (max-width: 590px) {
    width: 100%;
    align-items: center;
    gap: 16px;
  }
`;

const namePlanet = css`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 80px;
  line-height: 104px;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 62px;
  }
  @media (max-width: 590px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

const text = css`
  font-family: "League Spartan";
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 11px;
    line-height: 22px;
  }
  @media (max-width: 590px) {
    font-size: 11px;
    line-height: 22px;
    padding-bottom: 16px;
  }
`;

const link = css`
  font-family: "League Spartan";
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const source = css`
  font-weight: 700;
  text-decoration: underline;
`;

const styleSvgSource = css`
  width: 12px;
  height: 12px;
`;

const InfoPlanet = (props) => {
  const { planet, aspect } = props;

  return (
    <div css={container}>
      <h2 css={namePlanet}>{planet.name}</h2>
      <p css={text}>{planet[aspect].content}</p>

      <a href={planet[aspect].source} target="_blank" css={link}>
        <div>
          <span>Source : </span>
        </div>
        <img css={styleSvgSource} src={svgSource} alt="source" />
      </a>
    </div>
  );
};

export default InfoPlanet;
