import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import Logo from './logo'

interface Header {
  siteTitle: string
}

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
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
  </StyledHeader>
)

export default Header
