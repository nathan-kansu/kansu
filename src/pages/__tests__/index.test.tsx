import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../components/__tests__/helpers'
import Index from '../index'

jest.mock('../../components/seo')

describe('Index', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
