import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import ButtonBurger from './btn-burger-menu'
import Logo from './logo'
import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'

interface HeaderProps {
  handleMobileNavToggle: () => void
  isMobileNavActive: boolean
}

const StyledHeader = styled(animated.header)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  display: block;
  margin-right: ${rem(24)};
`

const Header = ({ handleMobileNavToggle, isMobileNavActive }: HeaderProps) => {
  const props = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <StyledHeader style={props}>
      <StyledH1>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </StyledH1>
      <ButtonBurger
        handleClick={handleMobileNavToggle}
        isActive={isMobileNavActive}
      />
      {isMobileNavActive && <NavMobile handleClick={handleMobileNavToggle} />}
      <NavDesktop />
    </StyledHeader>
  )
}
export default Header
