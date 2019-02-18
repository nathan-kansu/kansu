import { rem } from 'polished'
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const StyledText = styled(animated.div)`
  align-self: center;
  font-size: ${rem(18)};
  line-height: ${rem(24)};
`

interface TextProps {
  children: string | JSX.Element
  className?: string
}

const Text = ({ className, children }: TextProps) => {
  const styleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(${rem(24)})`,
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })

  return (
    <StyledText style={styleProps} className={className}>
      {children}
    </StyledText>
  )
}

export default Text
