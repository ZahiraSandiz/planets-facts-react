import { css } from "@emotion/react";

const wrap = css`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 4px transparent;
  transition: all 0.5s;
  &:hover {
    border-bottom: solid 4px #419ebb;
  }
`;

const button = css`
  border: none;
  background-color: transparent;
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  color: rgba(255, 255, 255, 0.5);
  padding: 20px 0 17px 0px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: rgb(255, 255, 255);
    transform: scale(1.2);
  }
`;

const ButtonInfoMobile = (props) => {
  const { text } = props;
  return (
    <div css={wrap}>
      <button css={button}>{text}</button>
    </div>
  );
};

export default ButtonInfoMobile;
