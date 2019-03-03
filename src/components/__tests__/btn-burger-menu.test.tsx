import 'jest-styled-components'
import React from 'react'

import BtnBurgerMenu from '../btn-burger-menu'
import { renderWithTheme } from './helpers'

describe('BtnBurgerMenu', () => {
  it('renders correctly', () => {
    let tree = renderWithTheme(
      <BtnBurgerMenu isActive={false} handleClick={() => 'foo'} />
    ).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderWithTheme(
      <BtnBurgerMenu isActive={true} handleClick={() => 'foo'} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
