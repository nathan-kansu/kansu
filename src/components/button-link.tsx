import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface ButtonLinkProps {
  href: string
  title: string
}

const StyledButton = styled.a`
  border: solid ${rem(3)} ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${rem(24)};
  padding: ${rem(21)};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;

  &:before {
    border: solid 20px ${props => props.theme.colors.black};
    content: '';
    position: absolute;
    left: -20px;
    top: -20px;
  }

  &:after {
    border: solid 20px ${props => props.theme.colors.black};
    bottom: -20px;
    content: '';
    position: absolute;
    right: -20px;
  }

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};

    &:before {
      border: 0;
    }

    &:after {
      border: 0;
    }
  }
`

const ButtonLink = ({ href, title }: ButtonLinkProps) => (
  <StyledButton href={href}>{title}</StyledButton>
)

export default ButtonLink
