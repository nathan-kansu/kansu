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

  a {
    color: ${props => props.theme.colors.grey};
    position: relative;
    transition: all 0.3s;

    &:hover {
      color: ${props => props.theme.colors.white};
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
