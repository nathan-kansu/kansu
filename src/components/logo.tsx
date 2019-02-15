import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

import KansuLogo from '../images/kansu-logo.svg'

const Logo = styled.div`
  height: ${rem(54)};
`

const Footer = () => (
  <Logo>
    <img src={KansuLogo} alt="Kansu logo" />
  </Logo>
)

export default Footer
