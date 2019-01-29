import { rem } from 'polished'
import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.nav`
  font-family: ${props => props.theme.fonts.heading};
`
const StyledUl = styled.ul`
  display: flex;
`

const StyledLi = styled.ul`
  margin-right: ${rem(24)};

  &:last-child {
    margin-right: 0;
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2.3px;
  text-transform: uppercase;
`

const Nav = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <StyledLink to="/">Home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/about">About</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/clients">Clients</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLi>
    </StyledUl>
  </StyledNav>
)

export default Nav
