import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(648)};
  margin-left: ${rem(36)};
`

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
