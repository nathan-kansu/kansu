import { StaticQuery } from 'gatsby'
import 'jest-styled-components'
import React from 'react'
import Seo from '../seo'
import { renderWithTheme } from './helpers'

describe('Seo', () => {
  const title = 'foo'

  beforeEach(() => {
    ;(StaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title,
          },
        },
      })
    )
  })

  it('renders correctly', () => {
    const tree = renderWithTheme(<Seo title={title} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
