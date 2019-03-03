import 'jest-styled-components'
import React from 'react'

import Main from '../main'
import { renderWithTheme } from './helpers'

describe('Main', () => {
  it('renders correctly', () => {
    let tree = renderWithTheme(
      <Main isMobileNavActive={false}>
        <div>foo</div>
      </Main>
    ).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderWithTheme(
      <Main isMobileNavActive={true}>
        <div>foo</div>
      </Main>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
