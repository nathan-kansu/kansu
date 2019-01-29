import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Nav from './nav'

interface Header {
  siteTitle: string
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

const Header = ({ siteTitle }: Header) => (
  <StyledHeader>
    <StyledH1>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
    </StyledH1>
    <Nav />
  </StyledHeader>
)

export default Header
