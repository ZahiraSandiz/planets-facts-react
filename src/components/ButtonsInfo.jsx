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
  @media (max-width: 590px) {
    display: none;
  }
`;

const ButtonsInfo = (props) => {
  const { planet } = props;
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

// traigo los botones acá y les agrego un onclick
