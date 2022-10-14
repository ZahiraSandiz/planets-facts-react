import { useParams } from "react-router-dom";
import planetsData from "../mocks/planets.json";
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

const PlanetDetails = () => {
  // donde estamos? en que planeta estamos? en que ruta estamos? en que url estamos?
  // es lo que ingreso el usuario luego de /
  const { planetParam } = useParams();

  const planet = planetsData.find((planetData) => {
    return (
      planetData.name.toLocaleLowerCase() === planetParam.toLocaleLowerCase()
    );
  });

  return (
    <div>
      <h1>Soy el planeta {planet.name}</h1>

      <div css={content}>
        <ImagePlanet filename={planet.images.geology} />
        {/* TODO: Tratar de rehacer todo el caminito que hicimos para entenderlo.*/}
        {/* <ContainInfoPlanet /> */}
      </div>
    </div>
  );
};

export default PlanetDetails;
