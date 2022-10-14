import { css } from "@emotion/react";
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
  @media (max-width: 590px) {
    padding: 0px 24px 47px 24px;
    flex-direction: column;
  }
`;

const Footer = (props) => {
  const { planet } = props;

  return (
    <footer css={footer}>
      <CardInfoFooter title="ROTATION TIME" description={planet.rotation} />
      <CardInfoFooter title="REVOLUTION TIME" description={planet.revolution} />
      <CardInfoFooter title="RADIUS" description={planet.radius} />
      <CardInfoFooter title="AVERAGE TEMP." description={planet.temperature} />
    </footer>
  );
};

export default Footer;
