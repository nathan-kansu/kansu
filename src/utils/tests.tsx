import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export const renderWithTheme = (component: JSX.Element) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
