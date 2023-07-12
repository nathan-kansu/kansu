import 'jest-styled-components'
import React from 'react'

import { Header } from '../Header'
import { renderWithTheme } from '../../utils/tests'

describe('Header', () => {
  it('renders correctly', () => {
    let tree = renderWithTheme(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
