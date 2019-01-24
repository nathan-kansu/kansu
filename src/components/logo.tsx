import * as React from 'react'
import styled from 'styled-components'
import Icon from '../images/kansu-logo.svg'

const Logo = styled.span`
  .icon {
    display: block;
  }
`

const Footer = () => (
  <Logo>
    <Icon className="icon" />
  </Logo>
)

export default Footer
