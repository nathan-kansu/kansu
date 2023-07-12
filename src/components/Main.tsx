import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
}

export const Main = ({ children }: Props) => (
  <StyledMain>{children}</StyledMain>
);

const StyledMain = styled.main`
  position: relative;
`;
