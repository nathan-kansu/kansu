import 'jest-styled-components'
import React from 'react'

import Header from '../header'
import { renderWithTheme } from './helpers'

describe('Header', () => {
  it('renders correctly', () => {
    let tree = renderWithTheme(
      <Header
        logo="foo.svg"
        isMobileNavActive={false}
        handleMobileNavToggle={() => 'foo'}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderWithTheme(
      <Header
        logo="foo.svg"
        isMobileNavActive={true}
        handleMobileNavToggle={() => 'foo'}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
