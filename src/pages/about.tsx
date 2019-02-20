import React from 'react'
import Container from '../components/container'
import Heading from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import { META_TITLES } from '../constants'

const AboutPage = () => (
  <>
    <SEO title={META_TITLES.ABOUT} />
    <Section>
      <Heading>About</Heading>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugiat unde architecto incidunt rerum temporibus magni odio nam, modi
          harum magnam voluptatum quo! Voluptatibus tenetur soluta numquam.
          Officia, incidunt velit!
        </Text>
      </Container>
    </Section>
  </>
)

export default AboutPage
