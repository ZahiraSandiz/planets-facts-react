import { css } from "@emotion/react";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleImage = css`
  @keyframes planet-transform {
    0% {
      transform: scale(7) rotate(360deg);
      opacity: 0.1;
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  animation: 0.8s linear 0s 1 normal none running planet-transform;

  @media (max-width: 900px) {
    width: 148px;
    height: 148px;
  }
  @media (max-width: 590px) {
    width: 111px;
    height: 111px;
  }
`;

const ImagePlanet = ({ filename }) => {
  const imagePlanet = filename.planet;
  const imageInternal = filename.internal;
  const imageGeology = filename.geology;

  const imageUrl = `/src/${imagePlanet}`;

  return (
    <div css={container}>
      <img src={imageUrl} alt="" css={styleImage} />
    </div>
  );
};

export default ImagePlanet;
