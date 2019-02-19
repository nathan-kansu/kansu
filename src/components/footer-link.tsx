import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import theme from '../styles/theme'

interface FooterLinkProps {
  children: JSX.Element
  href: string
}

const StyledLink = styled(animated.a)``

const FooterLink = ({ children, href }: FooterLinkProps) => {
  const [isHovered, setHovered] = useState(false)
  const styleProps = useSpring({
    fill: isHovered ? theme.colors.white : theme.colors.grey,
  })

  return (
    <StyledLink
      href={href}
      style={styleProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </StyledLink>
  )
}

export default FooterLink
