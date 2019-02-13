import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
  align-self: center;
  font-size: ${rem(18)};
  line-height: ${rem(24)};
  max-width: 36em;
`

interface TextProps {
  children: string | JSX.Element
  className?: string
}

const Text = ({ className, children }: TextProps) => (
  <StyledText className={className}>{children}</StyledText>
)

export default Text
