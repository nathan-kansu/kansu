import { modularScale, rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface HeadingProps {
  children: string
}

const BaseHeader = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  line-height: 1;
  margin-top: 0;
`

const StyledH2 = styled(BaseHeader)`
  font-size: ${modularScale(2)};
`

export const H2 = ({ children }: HeadingProps) => (
  <StyledH2 as="h2">{children}</StyledH2>
)
