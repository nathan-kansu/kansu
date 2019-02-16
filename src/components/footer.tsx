import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import GithubLogo from '../images/github.svg'
import InstagramLogo from '../images/instagram.svg'

import { URL_GITHUB, URL_INSTAGRAM } from '../constants'

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
  const props = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <StyledFooter style={props}>
      <StyledLink href={URL_GITHUB}>
        <img src={GithubLogo} alt="" />
      </StyledLink>
      <StyledLink href={URL_INSTAGRAM}>
        <img src={InstagramLogo} alt="" />
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer
