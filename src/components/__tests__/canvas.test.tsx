import 'jest-styled-components'
import React from 'react'
import { Canvas } from '../Canvas'
import { renderWithTheme } from '../../utils/tests'

import { COLOR_DARK_BLUE_RGBA } from '../../constants'

describe('Canvas', () => {
  it('renders correctly', () => {
    const props = {
      height: 100,
      shapes: [
        {
          fill: COLOR_DARK_BLUE_RGBA,
          height: 10,
          width: 10,
          x: 0,
          y: 0,
        },
      ],
      width: 100,
    }

    const tree = renderWithTheme(<Canvas {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
