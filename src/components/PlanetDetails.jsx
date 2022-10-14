import ImagePlanet from "./ImagePlanet";
import ContainInfoPlanet from "./ContainInfoPlanet";
import { css } from "@emotion/react";

const content = css`
  padding: 126px 11.5% 87px 11.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 146px 5.2% 27px 5.2%;
    gap: 130px;
  }
  @media (max-width: 590px) {
    padding: 95px 24px 28px 24px;
    gap: 98px;
  }
`;

const PlanetDetails = (props) => {
  const { planet } = props;
  // const planet = props.planet;

  return (
    <div>
      <h1>Soy el planeta {planet.name}</h1>
      <div css={content}>
        <ImagePlanet filename={planet.images} />

        <ContainInfoPlanet planet={planet} />
      </div>
    </div>
  );
};

export default PlanetDetails;
