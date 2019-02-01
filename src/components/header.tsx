import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import ButtonBurger from './btn-burger-menu'

import Logo from './logo'
import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'

interface HeaderProps {
  handleMobileNavToggle: () => void
  isMobileNavActive: boolean
}

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  display: block;
`

const Header = ({ handleMobileNavToggle, isMobileNavActive }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledH1>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </StyledH1>
      <ButtonBurger
        handleClick={handleMobileNavToggle}
        isActive={isMobileNavActive}
      />
      {isMobileNavActive && <NavMobile />}
      <NavDesktop />
    </StyledHeader>
  )
}
export default Header
