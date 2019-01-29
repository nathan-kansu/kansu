import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'
import Icon from '../images/kansu-logo.svg'

const Logo = styled.div`
  height: ${rem(54)};
`

const Footer = () => (
  <Logo>
    <Icon className="icon" />
  </Logo>
)

export default Footer
