import { modularScale } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

const StyledText = styled.div`
  align-self: center;
  font-size: ${modularScale(1)};
  line-height: 1.5;
  max-width: 36em;
`

interface TextProps {
  children: string | JSX.Element
}

const Text = ({ children }: TextProps) => <StyledText>{children}</StyledText>

export default Text
