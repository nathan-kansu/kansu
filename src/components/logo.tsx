import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

import KansuLogo from '../images/kansu-logo.svg'

const Logo = styled.div`
  /* filter: blur(2px); */
  height: ${rem(54)};
`

const Footer = () => (
  <Logo>
    <img src={KansuLogo} alt="Kansu logo" />
  </Logo>
)

export default Footer
