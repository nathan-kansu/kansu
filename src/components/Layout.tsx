import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { Background } from "./Background";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { theme } from "../styles/theme";
import { Wrapper } from "./Wrapper";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Background />
        <Header />
        <Main>{children}</Main>
      </Wrapper>
    </ThemeProvider>
  );
};
