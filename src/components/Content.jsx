import { css } from "@emotion/react";
import ImagePlanet from "./ImagePlanet";
import ContainInfoPlanet from "./ContainInfoPlanet";

const content = css`
  margin: 126px 165px 87px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
