import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface NavLinkLargeProps {
  title: string
  url: string
}

const StyledNavLinkLarge = styled(Link)`
  color: ${props => props.theme.colors.grey};
  display: block;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2.3px;
  position: relative;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    position: relative;

    &:after {
      border-bottom: solid ${rem(6)} ${props => props.theme.colors.white};
      bottom: -${rem(6)};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.l}) {
      &:after {
        bottom: -${rem(12)};
      }
    }
  }
`
const NavLinkLarge = ({ title, url }: NavLinkLargeProps) => {
  return (
    <StyledNavLinkLarge
      activeClassName="active"
      aria-label={`${title} page`}
      to={url}
    >
      {title}
    </StyledNavLinkLarge>
  )
}

export default NavLinkLarge
