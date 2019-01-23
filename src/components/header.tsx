import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

interface Header {
  siteTitle: string
}

const StyledHeader = styled.div``

const Header = ({ siteTitle }: Header) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </StyledHeader>
)

export default Header
