import { css } from "@emotion/react";

const card = css`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(255, 255, 255, 0.2);
  padding: 20px 23px 27px 23px;
  width: 255px;
  min-width: 190px;

  gap: 4px;
`;

const styleTitle = css`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
`;

const styleDescription = css`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;
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
