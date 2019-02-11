import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

const StyledNavMobile = styled.nav`
  background: ${props => `${props.theme.colors.black}99`};
  bottom: 0;
  font-family: ${props => props.theme.fonts.heading};
  left: 0;
  position: absolute;
  right: 0;
  top: ${rem(72)};
  z-index: 999;

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledLi = styled.li``

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: ${rem(24)};
  letter-spacing: 2.3px;
  padding: ${rem(18)};
  position: relative;
  text-transform: uppercase;

  &:after {
    color: ${props => props.theme.colors.white};
    content: '■';
    bottom: ${rem(19)};
    font-size: 1rem;
    position: absolute;
  }

  &.active {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};

    &:after {
      color: ${props => props.theme.colors.black};
    }
  }
`

const NavMobile = () => (
  <StyledNavMobile>
    <StyledUl>
      <StyledLi>
        <StyledLink to="/" activeClassName="active">
          Home
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/about" activeClassName="active">
          About
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/clients" activeClassName="active">
          Clients
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/contact" activeClassName="active">
          Contact
        </StyledLink>
      </StyledLi>
    </StyledUl>
  </StyledNavMobile>
)

export default NavMobile
