import { rem } from "polished";
import React, { memo } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const _Text = ({ children }: Props) => {
  const styleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(${rem(24)})`,
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  });

  return <Container style={styleProps}>{children}</Container>;
};

const Container = styled(animated.div)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: ${rem(18)};
  line-height: 1.25;
  // margin-left: ${rem(48)};
  margin: auto;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: ${rem(600)};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: ${rem(672)};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    line-height: 1.3333333333;
  }

  // @media only screen and (min-width: ${(props) =>
    props.theme.breakpoints.l}) {
  //   margin-top: ${rem(24)};
  // }

  a {
    color: ${(props) => props.theme.colors.white};
    position: relative;
    transition: all 0.3s;

    &:after {
      border-bottom: solid 2px ${(props) => props.theme.colors.white};
      content: "";
      position: absolute;
      bottom: -${rem(4)};
      left: 0;
      right: 0;
    }

    &:hover {
      border-bottom: solid 2px ${(props) => props.theme.colors.grey};
      color: ${(props) => props.theme.colors.grey};
    }
  }

  p {
    margin-bottom: ${rem(24)};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Text = memo(_Text);
