import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

import NavLinkDesktop from '../components/nav-link-desktop'
import { NAV } from '../constants'

const StyledNavDesktop = styled.nav`
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
  <StyledNavDesktop>
    <StyledUl>
      {NAV.map(({ title, url }) => (
        <StyledLi key={title}>
          <NavLinkDesktop url={url} title={title} />
        </StyledLi>
      ))}
    </StyledUl>
  </StyledNavDesktop>
)

export default Nav
