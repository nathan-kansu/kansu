import React from 'react'

import Text from '../text'
import { renderWithTheme } from './helpers'

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Text>foo</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
