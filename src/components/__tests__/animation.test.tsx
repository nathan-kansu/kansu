import 'jest-styled-components'
import React from 'react'

import Animation from '../animation'
import { renderWithTheme } from './helpers'

describe('Animation', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Animation width={100} height={100} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
