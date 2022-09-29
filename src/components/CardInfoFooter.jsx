import { css } from "@emotion/react";

const card = css`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(255, 255, 255, 0.2);
  padding: 20px 23px 27px 23px;
  width: 255px;
  min-width: 190px;
  height: 128px;
  gap: 4px;
  @media (max-width: 1200px) {
    min-width: 120px;
    padding: 16px 15px 19px 15px;
    height: 88px;
  }
  @media (max-width: 590px) {
    flex-direction: row;
    width: 100%;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 9px 24px 13px 24px;
  }
`;

const styleTitle = css`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  @media (max-width: 1200px) {
    font-size: 8px;
    line-height: 16px;
    padding: 7px 0px 3px 0px;
  }
`;

const styleDescription = css`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;

  @media (max-width: 1200px) {
    font-size: 24px;
    letter-spacing: -0.9px;
    line-height: 31px;
  }
  @media (max-width: 590px) {
    font-size: 20px;
    letter-spacing: -0.75px;
    line-height: 26px;
  }
`;

const CardInfoFooter = (props) => {
  const { title, description } = props;
  return (
    <div css={card}>
      <span css={styleTitle}>{title}</span>
      <span css={styleDescription}>{description}</span>
    </div>
  );
};

export default CardInfoFooter;
