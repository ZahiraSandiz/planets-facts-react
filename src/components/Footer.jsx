import { css } from "@emotion/react";
import { dataFooter } from "../mocks/dataFooter";
import CardInfoFooter from "./CardInfoFooter";

const footer = css`
  display: flex;
  padding: 0 11.5% 56px 11.5%;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 11px;
  }

  @media (max-width: 900px) {
    padding: 0px 5.2% 36px 5.2%;
  }
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
