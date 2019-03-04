import { graphql, StaticQuery } from 'gatsby'
import { rem } from 'polished'
import { RouteComponentProps } from 'reach__router'
import React, { useState } from 'react'
import styled from 'styled-components'

import Footer from './footer'
import Header from './header'
import Main from './main'

import KansuLogo from '../images/kansu-logo.svg'
import GlobalStyle from '../styles/global'

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

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    grid-row-gap: ${rem(48)};
  }

  @media only screen and (min-width: 1090px) {
    grid-row-gap: ${rem(24)};
    grid-template-columns: ${props => props.theme.breakpoints.l};
  }
`

const Layout = (props: LayoutProps) => {
  const [isMobileNavActive, setMobileNavActive] = useState(false)

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
        <StyledLayout>
          <GlobalStyle />
          <Header
            handleMobileNavToggle={() =>
              setMobileNavActive(prevState => !prevState)
            }
            isMobileNavActive={isMobileNavActive}
            logo={KansuLogo}
          />

          <Main {...props} isMobileNavActive={isMobileNavActive} />
          <Footer />
        </StyledLayout>
      )}
    />
  )
}

export default Layout
