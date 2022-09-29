import { css } from "@emotion/react";
import image from "../assets/planet-mercury.svg";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleImage = css`
  @media (max-width: 900px) {
    width: 148px;
    height: 148px;
  }
`;
const ImagePlanet = () => {
  return (
    <div css={container}>
      <img src={image} alt="" css={styleImage} />
    </div>
  );
};

export default ImagePlanet;
