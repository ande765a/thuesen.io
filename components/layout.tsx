import React from "react";

import styled from "styled-components";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

const Main = styled.main`
  min-height: 680px;
`;

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
