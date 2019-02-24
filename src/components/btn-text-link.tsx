import { rem } from 'polished'
import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

interface ButtonTextLinkProps {
  className?: string
  href: string
  title: string
}

const StyledButton = styled(animated.a)`
  background: ${props => props.theme.colors.white};
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
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: none;
    color: ${props => props.theme.colors.white};
  }
`

const ButtonTextLink = ({ className, href, title }: ButtonTextLinkProps) => {
  const styleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(-${rem(24)})`,
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })

  return (
    <StyledButton className={className} href={href} style={styleProps}>
      {title}
    </StyledButton>
  )
}

export default ButtonTextLink
