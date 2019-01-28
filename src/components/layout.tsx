import { graphql, StaticQuery } from 'gatsby'
import { rem } from 'polished'
import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Footer from './footer'
import Header from './header'
import Main from './main'

import theme from '../styles/theme'

interface LayoutProps {
  children: JSX.Element[]
}

const StyledLayout = styled.div`
  display: grid;
  grid-row-gap: ${rem(48)};
  grid-template: ${rem(48)} auto ${rem(24)} / 960px;
  justify-content: center;
  margin: auto 0;
`

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto:900');

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
        min-height: 100%;
    }

    body {
        background: linear-gradient(
            ${props => props.theme.colors.darkBlue},
            ${props => props.theme.colors.black}
        );
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.grey};
        font-family: ${props => props.theme.fonts.body};
        min-height: 100%;
        margin: 0;
    }

    ul, ol, li {
        list-style-type: none;
        padding: 0;
        padding-inline-start: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }


`

const Layout = ({ children }: LayoutProps) => (
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
    render={data => (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    )}
  />
)

export default Layout
