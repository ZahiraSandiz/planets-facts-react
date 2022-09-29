import { css } from "@emotion/react";

const container = css`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media (max-width: 900px) {
    width: 49%;
  }
`;

const namePlanet = css`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 80px;
  line-height: 104px;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 62px;
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
`;

const link = css`
  font-family: "League Spartan";
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
  text-decoration: none;
  display: flex;
  gap: 8px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const source = css`
  font-weight: 700;
  text-decoration: underline;
`;

const InfoPlanet = () => {
  return (
    <div css={container}>
      <h2 css={namePlanet}>MERCURY</h2>
      <p css={text}>
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </p>
      <a href="" css={link}>
        <div>
          <span>Source : </span>
          <span css={source}>Wikipedia</span>
        </div>
        <span> agreg flechita</span>
      </a>
    </div>
  );
};

export default InfoPlanet;
