import 'jest-styled-components'
import React from 'react'

import { Text } from '../Text'
import { renderWithTheme } from '../../utils/tests'

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Text>foo</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
