import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'
import { Contact } from '../Contact'

describe('Contact', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Contact />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
