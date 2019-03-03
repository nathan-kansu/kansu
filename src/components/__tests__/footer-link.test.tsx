import React from 'react'
import {
  cleanup,
  fireEvent,
  getByLabelText,
  render,
} from 'react-testing-library'
import FooterLink from '../footer-link'

describe('FooterLink', () => {
  afterEach(cleanup)

  test('should render correctly', () => {
    const { container } = render(
      <FooterLink ariaLabel="label" href="#">
        <span>bar</span>
      </FooterLink>
    )

    const link = getByLabelText(container, 'label')
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.mouseEnter(link)
    expect(link).toMatchSnapshot()

    fireEvent.mouseLeave(link)
    expect(link).toMatchSnapshot()
  })
})
