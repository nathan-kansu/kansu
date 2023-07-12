import { rem } from "polished";
import { animated } from "@react-spring/web";
import styled from "styled-components";

export const Heading = styled(animated.h2)`
  bottom: 0;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${rem(24)};
  left: 0;
  letter-spacing: 2.3px;
  line-height: 1;
  margin: 0;
  position: absolute;
  text-align: right;
  text-transform: uppercase;
  top: ${rem(12)};
  position: absolute;
  writing-mode: sideways-lr;

  &:after {
    color: ${(props) => props.theme.colors.white};
    content: "■";
    right: 0;
    top: -${rem(10)};
    font-size: ${rem(12)};
    position: absolute;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${rem(30)};
    margin-top: ${rem(10)};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${rem(36)};

    &:after {
      font-size: ${rem(24)};
      top: -${rem(16)};
    }
  }
`;
