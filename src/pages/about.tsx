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
          <p>
            Kansu is myself, Nathan Tredgett. A freelance, full-stack developer
            from Bristol, England.
          </p>

          <p>
            I've been a developer for nearly a decade and have worked on all
            types of projects: big to small, simple to complex, inspiring to the
            functional.
          </p>

          <p>
            I feel code should be clean, elegant and concise, which can result
            in projects that are intuitive, fast and beautiful.
          </p>
        </Text>
      </Container>
    </Section>
  </>
)

export default AboutPage
