import React from 'react'
import { Section } from './Section'
import { Text } from './Text'
import { Heading } from './Heading'
import { Container } from './Container'

export const About = () => (
  <Section>
    <Heading>About</Heading>
    <Container>
      <Text>
        <p>
          Kansu is myself, Nathan Tredgett. A freelance, senior frontend
          JavaScript developer based in Bristol, England.
        </p>
        <p>
          With 10 years experience in senior roles, I specialise in React and
          React-based frameworks, although I have commercial experience in most
          JS frameworks.
        </p>
        <p>
          My knowledge and experience allows me to consistently deliver
          effective, well-tested code, quickly. I work with teams of any size to
          create applications that are fast, consistent and accessible across
          any and all devices.
        </p>
      </Text>
    </Container>
  </Section>
)
