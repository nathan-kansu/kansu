import React from 'react'
import Container from '../components/container'
import { H2 } from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

const AboutPage = () => (
  <>
    <SEO title="About" />
    <Section>
      <H2>About</H2>
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
