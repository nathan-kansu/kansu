import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

import Footer from './footer'
import Header from './header'
import './layout.css'

interface LayoutProps {
  children: JSX.Element[]
}

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 960px;
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>{children}</StyledLayout>
        <Footer />
      </>
    )}
  />
)

export default Layout
