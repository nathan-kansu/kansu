import { rem } from 'polished'
import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface HeadingProps {
  children: string
  className?: string
}

const BaseHeader = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
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

const StyledH2 = styled(BaseHeader)`
  font-size: ${rem(36)};
`

export const H2 = ({ className, children }: HeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [headingWidth, setHeadingWidth] = useState('0')

  useLayoutEffect(() => {
    if (headingRef.current) {
      const { offsetWidth } = headingRef.current
      setHeadingWidth(`${rem(offsetWidth)}`)
    }
  }, [])

  return (
    <StyledH2
      as="h2"
      className={className}
      style={{ top: headingWidth }}
      ref={headingRef}
    >
      {children}
    </StyledH2>
  )
}
