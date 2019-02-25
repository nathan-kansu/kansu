import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './src/components/layout'

import theme from './src/styles/theme'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
