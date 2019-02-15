import { hideVisually } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { H2 } from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'

const StyledSection = styled(Section)`
  padding-bottom: 0;
`

const StyledH2 = styled(H2)`
  ${hideVisually()}
`

const IndexPage = (props: any) => {
  return (
    <>
      <SEO title="Home" />
      <StyledSection>
        <StyledH2>Home</StyledH2>
      </StyledSection>
    </>
  )
}

export default IndexPage
