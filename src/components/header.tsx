import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import ButtonBurger from './btn-burger-menu'
import Logo from './logo'
import NavLarge from './nav-large'
import NavSmall from './nav-small'

interface HeaderProps {
  handleMobileNavToggle: () => void
  isMobileNavActive: boolean
  logo: string
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

const Header = ({
  handleMobileNavToggle,
  isMobileNavActive,
  logo,
}: HeaderProps) => {
  const styleProps = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <StyledHeader style={styleProps}>
      <StyledH1>
        <StyledLink to="/">
          <Logo src={logo} />
        </StyledLink>
      </StyledH1>
      <ButtonBurger
        handleClick={handleMobileNavToggle}
        isActive={isMobileNavActive}
      />
      {isMobileNavActive && <NavSmall handleClick={handleMobileNavToggle} />}
      <NavLarge />
    </StyledHeader>
  )
}
export default Header
