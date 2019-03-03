import 'jest-styled-components'
import React from 'react'

import { renderWithTheme } from '../../components/__tests__/helpers'
import GlobalStyles from '../global'

describe('GlobalStyles', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<GlobalStyles />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
