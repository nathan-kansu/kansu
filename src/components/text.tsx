import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const StyledText = styled(animated.div)`
  align-self: center;
  font-size: ${rem(18)};
  line-height: 1.25;

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    line-height: 1.3333333333;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.l}) {
    margin-top: ${rem(24)};
  }

  a {
    color: ${props => props.theme.colors.white};
    position: relative;
    transition: all 0.3s;

    &:hover {
      &:after {
        border-bottom: solid ${rem(2)} ${props => props.theme.colors.white};
        content: '';
        position: absolute;
        bottom: -${rem(2)};
        left: 0;
        right: 0;
      }
    }
  }

  p {
    margin-bottom: ${rem(24)};

    &:last-child {
      margin-bottom: 0;
    }
  }
`

interface TextProps {
  children: string | JSX.Element | JSX.Element[]
  className?: string
}

const Text = ({ className, children }: TextProps) => {
  const styleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(${rem(24)})`,
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })

  return (
    <StyledText style={styleProps} className={className}>
      {children}
    </StyledText>
  )
}

export default Text
