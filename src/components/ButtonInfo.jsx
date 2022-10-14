import { css } from "@emotion/react";
import { useState } from "react";

const styleText = css`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 2.57143px;
`;

const styleNumber = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;

  letter-spacing: 2.57143px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

const ButtonInfo = (props) => {
  const { number, text, setAspect, id, aspect } = props;

  const button = css`
    user-select: none;
    cursor: pointer;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 28px;
    gap: 28px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${aspect === id ? "#419ebb" : "transparent"};
    @media (max-width: 900px) {
      height: 40px;
      padding-left: 20px;
    }
  `;

  return (
    <div
      css={button}
      onClick={() => {
        setAspect(id);
      }}
    >
      <span css={styleNumber}>{number}</span>
      <span css={styleText}>{text}</span>
    </div>
  );
};

export default ButtonInfo;
