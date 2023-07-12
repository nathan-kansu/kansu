import 'jest-styled-components'
import React from 'react'

import { Main } from '../Main'
import { renderWithTheme } from '../../utils/tests'

describe('Main', () => {
  it('renders correctly', () => {
    let tree = renderWithTheme(
      <Main>
        <div>foo</div>
      </Main>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
