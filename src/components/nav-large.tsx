import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

import { NAV } from '../constants'
import NavLinkLarge from './nav-link-large'

const StyledNavLarge = styled.nav`
  display: none;

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: block;
    font-family: ${props => props.theme.fonts.heading};
  }
`
const StyledUl = styled.ul`
  display: flex;
`

const StyledLi = styled.li`
  margin-right: ${rem(24)};

  &:last-child {
    margin-right: 0;
  }
`

const Nav = () => (
  <StyledNavLarge>
    <StyledUl>
      {NAV.map(({ title, url }) => (
        <StyledLi key={title}>
          <NavLinkLarge url={url} title={title} />
        </StyledLi>
      ))}
    </StyledUl>
  </StyledNavLarge>
)

export default Nav
