import React from 'react'
import Clients from '../components/clients'
import Contact from '../components/contact'
import { H2 } from '../components/heading'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section>
      <H2>About</H2>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        fugiat unde architecto incidunt rerum temporibus magni odio nam, modi
        harum magnam voluptatum quo! Voluptatibus tenetur soluta numquam.
        Officia, incidunt velit!
      </Text>
    </Section>
    <Section>
      <H2>Clients</H2>
      <Clients />
    </Section>
    <Contact />
  </Layout>
)

export default IndexPage
