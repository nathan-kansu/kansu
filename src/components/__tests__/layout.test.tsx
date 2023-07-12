import { StaticQuery } from 'gatsby'
import 'jest-styled-components'
import React from 'react'
import { Layout } from '../Layout'
import { renderWithTheme } from '../../utils/tests'

describe('Layout', () => {
  // beforeEach(() => {
  //   ;(StaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
  //     render({
  //       site: {
  //         siteMetadata: {
  //           title: `GatsbyJS`,
  //         },
  //       },
  //     })
  //   )
  // })

  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Layout>
        <div>foo</div>
        <div>bar</div>
      </Layout>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
