import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import GithubLogo from '../images/github.svg'
import InstagramLogo from '../images/instagram.svg'

const StyledFooter = styled(animated.footer)`
  align-content: center;
  display: grid;
  grid-column-gap: ${rem(24)};
  grid-template-columns: repeat(2, ${rem(24)});
  grid-template-rows: ${rem(24)};
  justify-content: flex-end;
`

const StyledLink = styled.a``

const Footer = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <StyledFooter style={props}>
      <StyledLink href="https://foo.com">
        <img src={GithubLogo} alt="" />
      </StyledLink>
      <StyledLink href="https://bar.com">
        <img src={InstagramLogo} alt="" />
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer
