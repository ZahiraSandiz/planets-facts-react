import { Outlet } from "react-router-dom";

import { css } from "@emotion/react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ButtonsInfoMobile from "./ButtonsInfoMobile";

const contentContainer = css`
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
`;

const Layout = () => {
  return (
    <div css={contentContainer}>
      <Header />
      <ButtonsInfoMobile />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
