import { rem } from "polished";
import React from "react";
import { Text } from "./Text";
import styled from "styled-components";

export const Footer = () => (
  <StyledFooter>
    <Text>&copy; Kansu Ltd</Text>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  align-items: flex-start;
  display: flex;
`;
