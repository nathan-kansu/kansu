import { rem } from 'polished'
import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import theme from '../styles/theme'

interface ButtonTextLinkProps {
  className?: string
  href: string
  title: string
}

const StyledButton = styled(animated.a)`
  background-position: 0 0;
  background-size: 100% 200%;
  background-image: linear-gradient(
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white} 50%,
    transparent 50%,
    transparent
  );
  border: solid ${rem(6)} ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkBlue};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${rem(18)};
  letter-spacing: 2.3px;
  line-height: 1;
  padding: ${rem(9)};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
`

const ButtonTextLink = ({ className, href, title }: ButtonTextLinkProps) => {
  const [isHovered, setHovered] = useState(false)

  const styleProps = useSpring({
    backgroundPositionY: isHovered ? '100%' : '0%',
    color: isHovered ? theme.colors.white : theme.colors.darkBlue,
  })

  return (
    <StyledButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      href={href}
      style={styleProps}
    >
      {title}
    </StyledButton>
  )
}

export default ButtonTextLink
