import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import theme from '../styles/theme'

interface FooterLinkProps {
  ariaLabel: string
  children: JSX.Element
  href: string
}

const StyledLink = styled(animated.a)``

const FooterLink = ({ ariaLabel, children, href }: FooterLinkProps) => {
  const [isHovered, setHovered] = useState(false)
  const styleProps = useSpring({
    fill: isHovered ? theme.colors.white : theme.colors.grey,
  })

  return (
    <StyledLink
      aria-label={ariaLabel}
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
