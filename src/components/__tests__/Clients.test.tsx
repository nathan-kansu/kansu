import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../utils/tests'
import { Clients } from '../Clients'

describe('Clients', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Clients />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
