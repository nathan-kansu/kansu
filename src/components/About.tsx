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
          I'm Nathan Tredgett. A freelance, senior TypeScript / JavaScript
          developer based in Bristol, England.
        </p>
        <p>
          With 14 years professional development experience, I have developed
          solutions for a wide range of clients, from small startups to
          household names such as Guinness and Amazon.
        </p>
        <p>
          Specialising in React and TypeScript projects, I'm also highly skilled
          in industry standard frameworks and technologies across the JavaScript
          ecosystem, such as Next.js, Node.js, Tailwind and GraphQL.
        </p>
        <p>
          My knowledge and experience allows me to consistently deliver
          effective, well-tested code, quickly, so you can be confident that
          your project deadlines will be met.
        </p>

        <p>
          I love being part of a team delivering fantastic web applications that
          are fast, highly optimised and fully accessible, which work perfectly
          across any device.
        </p>
      </Text>
    </Container>
  </Section>
)
