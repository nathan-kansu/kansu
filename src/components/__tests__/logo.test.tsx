import React from 'react'

import Logo from '../logo'
import { renderWithTheme } from './helpers'

describe('Logo', () => {
  it('renders correctly', () => {
    const src = 'Footer.jpg'
    const tree = renderWithTheme(<Logo src={src} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
