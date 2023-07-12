import { rem } from 'polished'
import React, { memo } from 'react'
import styled from 'styled-components'

import { Container } from './Container'
import { Heading } from './Heading'
import { Section } from './Section'
import { Text } from './Text'

import {
  ARIA_EMAIL,
  ARIA_GITHUB,
  ARIA_LINKEDIN,
  URL_EMAIL,
  URL_GITHUB,
  URL_LINKEDIN,
} from '../constants'

const StyledText = styled(Text)`
  margin-bottom: ${rem(24)};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: ${rem(48)};
  }
`

const _Contact = () => {
  return (
    <Section>
      <Heading>Contact</Heading>
      <Container>
        <StyledText>
          <p>
            I am available for fully-remote contracts, or for hybrid-based
            contracts in the UK. If you would like to get in touch to discuss
            any opportunities, please contact me via{' '}
            <a href={URL_EMAIL} aria-label={ARIA_EMAIL}>
              email
            </a>
            .
          </p>

          <p>
            Alternatively, you can contact me on{' '}
            <a href={URL_LINKEDIN} aria-label={ARIA_LINKEDIN}>
              LinkedIn
            </a>{' '}
            or view examples of my work via my{' '}
            <a href={URL_GITHUB} aria-label={ARIA_GITHUB}>
              Github
            </a>
            .
          </p>
        </StyledText>
      </Container>
    </Section>
  )
}

export const Contact = memo(_Contact)
