import 'jest-styled-components'
import React from 'react'

import NavSmall from '../nav-small'
import { renderWithTheme } from './helpers'

describe('NavSmall', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <NavSmall handleClick={() => 'foo'} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
