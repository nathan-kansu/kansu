import { modularScale } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface ButtonLinkProps {
  href: string
  title: string
}

const StyledButton = styled.a`
  border: solid 3px ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${modularScale(1)};
  padding: ${modularScale(0)};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
  }
`

const ButtonLink = ({ href, title }: ButtonLinkProps) => (
  <StyledButton href={href}>{title}</StyledButton>
)

export default ButtonLink
