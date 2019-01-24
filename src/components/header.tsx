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

const H1 = styled.h1`
  margin: 0;
`

const Header = ({ siteTitle }: Header) => (
  <StyledHeader>
    <H1>
      <Link to="/">
        <Logo />
      </Link>
    </H1>
    <Nav />
  </StyledHeader>
)

export default Header
