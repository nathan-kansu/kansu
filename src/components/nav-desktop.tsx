import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
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

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2.3px;
  position: relative;
  text-transform: uppercase;

  &.active {
    position: relative;

    &:after {
      border-bottom: solid ${rem(6)} ${props => props.theme.colors.white};
      bottom: -${rem(12)};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
    }
  }
`

const Nav = () => (
  <StyledNavDesktop>
    <StyledUl>
      {NAV.map(({ title, url }) => (
        <StyledLi key={title}>
          <StyledLink to={url} activeClassName="active">
            {title}
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  </StyledNavDesktop>
)

export default Nav
