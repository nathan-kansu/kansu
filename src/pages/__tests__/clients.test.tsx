import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '../../components/__tests__/helpers'
import Clients from '../clients'

jest.mock('../../components/seo')

describe('Clients', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Clients />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
