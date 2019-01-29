import React from 'react'
import { H2 } from '../components/heading'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <H2>Home</H2>
      <Text>Hi</Text>
    </Section>
  </Layout>
)

export default IndexPage
