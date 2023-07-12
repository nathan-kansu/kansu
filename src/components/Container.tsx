import { rem } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: ${rem(48)};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 0;
    max-width: ${rem(600)};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: ${rem(648)};
  }
`;
