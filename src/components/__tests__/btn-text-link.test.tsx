import 'jest-styled-components'
import React from 'react'

import ButtonTextLink from '../btn-text-link'
import { renderWithTheme } from './helpers'

describe('ButtonTextLink', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <ButtonTextLink className="foo" href="#" title="bar" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
