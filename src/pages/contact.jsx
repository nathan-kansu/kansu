import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import ButtonTextLink from '../components/btn-text-link'
import Container from '../components/container'
import Heading from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import { META_TITLES, URL_GITHUB, URL_INSTAGRAM } from '../constants'

const StyledText = styled(Text)`
  margin-bottom: ${rem(48)};
`

const StyledButtonTextLink = styled(ButtonTextLink)`
  align-self: center;
`

const ContactPage = () => {
  return (
    <>
      <SEO title={META_TITLES.CONTACT} />
      <Section>
        <Heading>Contact</Heading>
        <Container>
          <StyledText>
            <p>
              I am available for contract work in Bristol, London and the
              South-West of the UK. If you would like to get in touch to discuss
              any opportunities, click the button below to drop me an email.
            </p>

            <p>
              Alternativly, view my projects on <a href={URL_GITHUB}>Github</a>{' '}
              or follow me on <a href={URL_INSTAGRAM}>Instagram</a>.
            </p>
          </StyledText>
          <StyledButtonTextLink href="mailto:hello@kansu.co" title="Contact" />
        </Container>
      </Section>
    </>
  )
}

export default ContactPage
