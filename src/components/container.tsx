import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: ${rem(48)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    max-width: ${rem(600)};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.l}) {
    max-width: ${rem(648)};
  }
`

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
