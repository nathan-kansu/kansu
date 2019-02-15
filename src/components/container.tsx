import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: ${rem(72)};
`

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
