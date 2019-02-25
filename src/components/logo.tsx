import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  height: ${rem(54)};
`

interface LogoProps {
  src: string
}

const Footer = ({ src }: LogoProps) => (
  <Logo>
    <img src={src} alt="Kansu logo" />
  </Logo>
)

export default Footer
