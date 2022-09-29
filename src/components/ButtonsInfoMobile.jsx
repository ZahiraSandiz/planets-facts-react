import { css } from "@emotion/react";
import ButtonInfoMobile from "./ButtonInfoMobile";
import { dataButtonsInfoMobile } from "../mocks/dataButtonsInfoMobile";

const container = css`
  display: none;

  @media (max-width: 590px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0px 24px;
  }
`;

const ButtonsInfoMobile = () => {
  return (
    <div css={container}>
      {dataButtonsInfoMobile.map((buttonInfo) => {
        const { id, text } = buttonInfo;
        return <ButtonInfoMobile key={id} text={text} />;
      })}
    </div>
  );
};

export default ButtonsInfoMobile;

// hacer que mapee un mock y que por cada objeto, genere un boton en ButtonInfoMobile
