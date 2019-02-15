import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
import Background from './background'

interface MainProps {
  children: any
  isHomePage: boolean
  isMobileNavActive: boolean
}

const StyledMain = styled.main`
  position: relative;
  ${(props: MainProps) => props.isMobileNavActive && `filter: blur(${rem(4)});`}
`

const Main = (props: MainProps) => {
  const { children, isHomePage } = props

  return (
    <StyledMain {...props}>
      <Background isHomePage={isHomePage} />
      {children}
    </StyledMain>
  )
}

export default Main
