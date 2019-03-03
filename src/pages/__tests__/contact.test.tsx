import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../components/__tests__/helpers'
import Contact from '../contact'

jest.mock('../../components/seo')

describe('Contact', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Contact />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
