import 'jest-styled-components'
import React from 'react'

import { Footer } from '../Footer'
import { renderWithTheme } from '../../utils/tests'

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
