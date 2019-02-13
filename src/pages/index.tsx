import { hideVisually } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { H2 } from '../components/heading'
import Hero from '../components/hero'
import Section from '../components/section'
import SEO from '../components/seo'

const StyledSection = styled(Section)`
  padding-bottom: 0;
`

const StyledH2 = styled(H2)`
  ${hideVisually()}
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <StyledSection>
      <StyledH2>Home</StyledH2>
      <Hero />
    </StyledSection>
  </>
)

export default IndexPage
