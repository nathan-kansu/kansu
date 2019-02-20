import { rem } from 'polished'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

interface HeadingProps {
  children: string
  className?: string
}

const StyledHeading = styled(animated.h2)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${rem(36)};
  left: 0;
  letter-spacing: 2.3px;
  line-height: 1;
  margin: 0;
  padding-right: ${rem(12)};
  position: absolute;
  text-transform: uppercase;
  transform: rotate(-90deg);
  transform-origin: 0 0;

  &:after {
    color: ${props => props.theme.colors.white};
    content: '■';
    bottom: ${rem(1)};
    font-size: ${rem(24)};
    position: absolute;
  }
`

const Heading = ({ className, children }: HeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [headingWidth, setHeadingWidth] = useState('0')

  const animationProps = useSpring({
    from: {
      marginTop: `-${rem(24)}`,
      opacity: 0,
    },
    to: {
      marginTop: '0',
      opacity: 1,
    },
  })

  const styleProps = { ...animationProps, top: headingWidth }

  useLayoutEffect(() => {
    if (headingRef.current) {
      const { offsetWidth } = headingRef.current
      setHeadingWidth(`${rem(offsetWidth)}`)
    }
  }, [])

  return (
    <StyledHeading className={className} ref={headingRef} style={styleProps}>
      {children}
    </StyledHeading>
  )
}

export default Heading
