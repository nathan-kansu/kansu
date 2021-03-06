import { hideVisually } from 'polished'
import React from 'react'
import styled from 'styled-components'
import Heading from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import { META_TITLES } from '../constants'

const StyledSection = styled(Section)`
  padding-bottom: 0;
`

const StyledHeading = styled(Heading)`
  ${hideVisually()}
`

const StyledText = styled(Text)`
  ${hideVisually()}
`

const IndexPage = (props: any) => {
  return (
    <>
      <SEO title={META_TITLES.HOME} />
      <StyledSection>
        <StyledHeading>Home</StyledHeading>
        <StyledText>
          <p>Bristol-based freelance full-stack developer, Nathan Tredgett</p>
        </StyledText>
      </StyledSection>
    </>
  )
}

export default IndexPage
