import { graphql, StaticQuery } from 'gatsby'
import { rem } from 'polished'
import { RouteComponentProps } from 'reach__router'
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Footer from './footer'
import Header from './header'
import Main from './main'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

interface LayoutProps extends RouteComponentProps {
  children: JSX.Element[]
}

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-row-gap: ${rem(24)};
  grid-template-rows: ${rem(72)} 1fr ${rem(72)};
  grid-template-columns: 90%;
  justify-content: center;
  margin: auto 0;

  @media only screen and (min-width: 1090px) {
    grid-template-columns: ${props => props.theme.breakpoints.l};
  }
`

const Layout = ({ children, location }: LayoutProps) => {
  const [isMobileNavActive, handleMobileNavToggle] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    if (location) {
      setIsHomePage(location.pathname === '/')
    }
  })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <ThemeProvider theme={theme}>
          <StyledLayout>
            <GlobalStyle />
            <Header
              handleMobileNavToggle={() =>
                handleMobileNavToggle(prevState => !prevState)
              }
              isMobileNavActive={isMobileNavActive}
            />
            <Main isHomePage={isHomePage} isMobileNavActive={isMobileNavActive}>
              {children}
            </Main>
            <Footer />
          </StyledLayout>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout
