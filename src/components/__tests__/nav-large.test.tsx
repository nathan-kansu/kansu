import 'jest-styled-components'
import React from 'react'

import NavLarge from '../nav-large'
import { renderWithTheme } from './helpers'

describe('NavLarge', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<NavLarge />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
