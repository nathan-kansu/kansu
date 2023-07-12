import 'jest-styled-components'
import React from 'react'

import { Section } from '../Section'
import { renderWithTheme } from '../../utils/tests'

describe('Section', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Section>
        <h1>Heading</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          amet quae laudantium sapiente illum expedita, culpa, nostrum, esse
          tenetur dicta ducimus? At suscipit nam amet perspiciatis veritatis
          repellendus accusantium.
        </div>
      </Section>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
