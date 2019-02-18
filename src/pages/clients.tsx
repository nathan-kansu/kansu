import { graphql, StaticQuery } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import { H2 } from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import AmazonLogo from '../images/amazon.svg'
import MubalooLogo from '../images/mubaloo.svg'
import ZoneLogo from '../images/zone.svg'

const StyledOl = styled.ol`
  align-items: center;
  display: grid;
  grid-column-gap: ${rem(48)};
  grid-row-gap: ${rem(48)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${rem(96)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${rem(96)} ${rem(96)};
  }
`

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const StyledText = styled(Text)`
  margin-bottom: ${rem(24)};
`

const ClientsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        fresh8Logo: file(relativePath: { eq: "fresh-8.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        genomicsEnglandLogo: file(
          relativePath: { eq: "genomics-england.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rheLogo: file(relativePath: { eq: "rhe.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="About" />
        <Section>
          <H2>Clients</H2>
          <Container>
            <StyledText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident omnis molestiae deserunt? Dolore, eos exercitationem!
              Vitae doloremque illum aliquam esse laboriosam, nihil nostrum,
              vero dolores, magnam ipsam maiores quos mollitia!
            </StyledText>
            <StyledOl>
              <StyledLi>
                <img src={AmazonLogo} alt="Amazon logo" />
              </StyledLi>
              <StyledLi>
                <img src={ZoneLogo} alt="Zone Digital logo " />
              </StyledLi>
              <StyledLi>
                <img src={MubalooLogo} alt="Mubaloo logo" />
              </StyledLi>
              <StyledLi>
                <GatsbyImg
                  alt="Fresh 8 Gaming"
                  imgStyle={{ objectFit: 'contain' }}
                  sizes={data.fresh8Logo.childImageSharp.fluid}
                />
              </StyledLi>
              <StyledLi>
                <GatsbyImg
                  alt="Genomics England logos"
                  imgStyle={{ objectFit: 'contain' }}
                  sizes={data.genomicsEnglandLogo.childImageSharp.fluid}
                />
              </StyledLi>
              <StyledLi>
                <GatsbyImg
                  alt="RHE Global logo"
                  imgStyle={{ objectFit: 'contain' }}
                  sizes={data.rheLogo.childImageSharp.fluid}
                />
              </StyledLi>
            </StyledOl>
          </Container>
        </Section>
      </>
    )}
  />
)

export default ClientsPage
