import { Link } from 'gatsby'
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
            Kansu is myself, Nathan Tredgett. A creative coder from Bristol,
            England.
          </p>

          <p>
            I've been a professional developer nearly 10 years and worked on all
            types of projects: big to small, simple to complex, inspiring to the
            functional.
          </p>
        </Text>
      </Container>
    </Section>
  </>
)

export default AboutPage
