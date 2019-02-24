import { rem } from 'polished'
import { RouteComponentProps } from 'reach__router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Background from './background'

interface MainProps extends RouteComponentProps {
  children: any
  isMobileNavActive: boolean
}

const StyledMain = styled.main`
  position: relative;
  ${(props: MainProps) => props.isMobileNavActive && `filter: blur(${rem(4)});`}
`

const Main = (props: MainProps) => {
  const [isHomePage, setIsHomePage] = useState(false)
  const { children, location } = props

  useEffect(
    () => {
      if (location) {
        setIsHomePage(location.pathname === '/')
      }
    },
    [props.location]
  )

  return (
    <StyledMain {...props}>
      <Background isHomePage={isHomePage} />
      {children}
    </StyledMain>
  )
}

export default Main
