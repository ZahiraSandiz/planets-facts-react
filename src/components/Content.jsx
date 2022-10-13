import { css } from "@emotion/react";
import ImagePlanet from "./ImagePlanet";
import ContainInfoPlanet from "./ContainInfoPlanet";

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

const Content = () => {
  return (
    <div css={content}>
      <ImagePlanet />
      <ContainInfoPlanet />
    </div>
  );
};

export default Content;
