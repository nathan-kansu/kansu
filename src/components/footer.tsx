import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

import GithubLogo from '../images/github.svg'
import InstagramLogo from '../images/instagram.svg'

const StyledFooter = styled.footer`
  align-content: center;
  display: grid;
  grid-column-gap: ${rem(24)};
  grid-template-columns: repeat(2, ${rem(24)});
  grid-template-rows: ${rem(24)};
  justify-content: flex-end;
`

const StyledLink = styled.a``

const Footer = () => (
  <StyledFooter>
    <StyledLink href="https://foo.com">
      <GithubLogo />
    </StyledLink>
    <StyledLink href="https://bar.com">
      <InstagramLogo />
    </StyledLink>
  </StyledFooter>
)

export default Footer
