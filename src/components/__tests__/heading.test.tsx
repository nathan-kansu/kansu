import React from 'react'

import { Heading } from '../Heading'
import { renderWithTheme } from '../../utils/tests'

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Heading>foo</Heading>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
