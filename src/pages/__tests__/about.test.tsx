import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../components/__tests__/helpers'
import About from '../about'

jest.mock('../../components/seo')

describe('About', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
