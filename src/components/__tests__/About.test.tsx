import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'
import { About } from '../About'

describe('About', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
