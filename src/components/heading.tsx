import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface HeadingProps {
  children: string
  className?: string
}

const BaseHeader = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  line-height: calc(48 / 36);
  letter-spacing: 2.3px;
  margin: 0 0 ${rem(48)};
  position: relative;
  text-transform: uppercase;

  &:after {
    color: ${props => props.theme.colors.white};
    content: '■';
    bottom: ${rem(1)};
    font-size: ${rem(24)};
    position: absolute;
    right: -${rem(15)};
  }
`

const StyledH2 = styled(BaseHeader)`
  font-size: ${rem(36)};
`

export const H2 = ({ className, children }: HeadingProps) => (
  <StyledH2 as="h2" className={className}>
    {children}
  </StyledH2>
)
