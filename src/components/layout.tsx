import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

interface LayoutProps {
  children: JSX.Element[]
}

const StyledLayout = styled.div``

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledLayout>
      </>
    )}
  />
)

export default Layout
