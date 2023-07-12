import 'jest-styled-components'
import React from 'react'

import { renderWithTheme } from '../../utils/tests'
import { GlobalStyle } from '../global'

describe('GlobalStyle', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<GlobalStyle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
