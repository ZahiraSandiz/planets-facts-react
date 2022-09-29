import { css } from "@emotion/react";
import { dataFooter } from "../mocks/dataFooter";
import CardInfoFooter from "./CardInfoFooter";

const footer = css`
  display: flex;
  padding: 0 165px 56px 165px;
  gap: 30px;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <footer css={footer}>
      {dataFooter.map((data) => {
        const { id, title, description } = data;
        return (
          <CardInfoFooter key={id} title={title} description={description} />
        );
      })}
    </footer>
  );
};

export default Footer;
