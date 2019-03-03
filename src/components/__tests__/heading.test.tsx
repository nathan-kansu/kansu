import React from 'react'

import Heading from '../heading'
import { renderWithTheme } from './helpers'

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Heading>foo</Heading>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
