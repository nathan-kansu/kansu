import React from 'react'
import { H2 } from '../components/heading'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <H2>Contact</H2>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        fugiat unde architecto incidunt rerum temporibus magni odio nam, modi
        harum magnam voluptatum quo! Voluptatibus tenetur soluta numquam.
        Officia, incidunt velit!
      </Text>
    </Section>
  </Layout>
)

export default ContactPage
