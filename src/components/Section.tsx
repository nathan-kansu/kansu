import { rem } from "polished";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(48)};
  position: relative;

  &:last-child {
    margin-bottom: ${rem(60)};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: ${rem(66)};

    &:last-child {
      margin-bottom: 0;
      padding-bottom: ${rem(108)};
    }
  }
`;
