import { css } from "@emotion/react";
import image from "../assets/planet-mercury.svg";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePlanet = () => {
  return (
    <div css={container}>
      <img src={image} alt="Mercury" />
    </div>
  );
};

export default ImagePlanet;
