import 'jest-styled-components'
import React from 'react'

import NavLinkLarge from '../nav-link-large'
import { renderWithTheme } from './helpers'

describe('NavLinkLarge', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<NavLinkLarge title="foo" url="#" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
