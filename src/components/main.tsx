import { rem } from 'polished'
import { RouteComponentProps } from 'reach__router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PAGE_URLS } from '../constants'
import getPageNav from '../utils'
import Background from './background'
import NavThumb from './nav-thumb'

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
  const pageNav = getPageNav(location, PAGE_URLS)

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

      <div>
        {pageNav && (
          <NavThumb prevPage={pageNav.prevPage} nextPage={pageNav.nextPage} />
        )}
      </div>
    </StyledMain>
  )
}

export default Main
