import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import ButtonTextLink from '../components/btn-text-link'
import Container from '../components/container'
import { H2 } from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import { META_TITLES } from '../constants'

const StyledButtonTextLink = styled(ButtonTextLink)`
  align-self: center;
`

const StyledText = styled(Text)`
  margin-bottom: ${rem(48)};
`

const ContactPage = () => (
  <>
    <SEO title={META_TITLES.CONTACT} />
    <Section>
      <H2>Contact</H2>
      <Container>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugiat unde architecto incidunt rerum temporibus magni odio nam, modi
          harum magnam voluptatum quo! Voluptatibus tenetur soluta numquam.
          Officia, incidunt velit!
        </StyledText>
        <StyledButtonTextLink href="mailto:hello@kansu.co" title="Contact" />
      </Container>
    </Section>
  </>
)

export default ContactPage
