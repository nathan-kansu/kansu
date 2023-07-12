import { rem } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-row-gap: ${rem(24)};
  grid-template-columns: 90%;
  justify-content: center;
  margin: auto;
  max-height: 100vh;
  max-width: ${(props) => props.theme.breakpoints.l};
  overflow: scroll;
  position: relative;
  padding: ${rem(12)} 0;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: ${rem(24)} 0;
    grid-row-gap: ${rem(48)};
  }

  @media only screen and (min-width: 1090px) {
    grid-row-gap: ${rem(60)};
    grid-template-columns: ${(props) => props.theme.breakpoints.l};
  }
`;
