import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'
import Index from '../index'

describe('Index', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
