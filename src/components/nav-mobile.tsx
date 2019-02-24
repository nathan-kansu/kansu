import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import { animated, useTrail } from 'react-spring'
import styled from 'styled-components'
import { NAV } from '../constants/index'

interface NavMobileProps {
  handleClick(): void
}

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

const StyledLi = styled(animated.li)``

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: ${rem(24)};
  letter-spacing: 2.3px;
  padding: ${rem(18)};
  text-transform: uppercase;

  &.active {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};

    &:after {
      color: ${props => props.theme.colors.black};
    }
  }
`

const NavMobile = ({ handleClick }: NavMobileProps) => {
  const trail = useTrail(NAV.length, {
    from: { opacity: 0 },
    opacity: 1,
  })

  return (
    <StyledNavMobile>
      <StyledUl>
        {trail.map((props, index) => (
          <StyledLi key={NAV[index].title} style={props}>
            <StyledLink
              to={NAV[index].url}
              onClick={handleClick}
              activeClassName="active"
            >
              {NAV[index].title}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNavMobile>
  )
}

export default NavMobile
