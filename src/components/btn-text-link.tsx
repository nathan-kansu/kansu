import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface ButtonTextLinkProps {
  className?: string
  href: string
  title: string
}

const StyledButton = styled.a`
  border: solid ${rem(3)} ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${rem(18)};
  letter-spacing: 2.3px;
  line-height: 1.3333333333;
  padding: ${rem(21)};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;

  &:before {
    border: solid ${rem(24)} ${props => props.theme.colors.black};
    content: '';
    position: absolute;
    left: -${rem(24)};
    top: -${rem(24)};
  }

  &:after {
    border: solid ${rem(24)} ${props => props.theme.colors.black};
    bottom: -${rem(24)};
    content: '';
    position: absolute;
    right: -${rem(24)};
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

const ButtonTextLink = ({ className, href, title }: ButtonTextLinkProps) => (
  <StyledButton className={className} href={href}>
    {title}
  </StyledButton>
)

export default ButtonTextLink
