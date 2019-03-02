import 'jest-styled-components'
import React from 'react'

import Footer from '../footer'
import { renderWithTheme } from './helpers'

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
