import { css } from "@emotion/react";
import { dataButtonsInfo } from "../mocks/dataButtonsInfo";
import ButtonInfo from "./ButtonInfo";

const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 255px;
  gap: 16px;
  @media (max-width: 900px) {
    width: 40%;
    gap: 14px;
  }
`;

const ButtonsInfo = () => {
  return (
    <div css={container}>
      {dataButtonsInfo.map((buttonInfo) => {
        const { id, number, text } = buttonInfo;
        return <ButtonInfo key={id} number={number} text={text} />;
      })}
    </div>
  );
};

export default ButtonsInfo;
