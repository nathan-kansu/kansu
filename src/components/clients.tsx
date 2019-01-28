import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { modularScale } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

import AmazonLogo from '../images/amazon.svg'
import MubalooLogo from '../images/mubaloo.svg'
import ZoneLogo from '../images/zone.svg'

const StyledOl = styled.ol`
  align-items: center;
  display: grid;
  grid-column-gap: ${modularScale(3)};
  grid-row-gap: ${modularScale(3)};
  grid-template-columns: repeat(3, 1fr);
`

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Clients = () => (
  <StaticQuery
    query={graphql`
      query {
        fresh8Logo: file(relativePath: { eq: "fresh-8.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        genomicsEnglandLogo: file(
          relativePath: { eq: "genomics-england.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rheLogo: file(relativePath: { eq: "rhe.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledOl>
        <StyledLi>
          <AmazonLogo />
        </StyledLi>
        <StyledLi>
          <ZoneLogo />
        </StyledLi>
        <StyledLi>
          <MubalooLogo />
        </StyledLi>
        <StyledLi>
          <Img
            title="Fresh 8 Gaming"
            alt="Fresh 8 Gaming logo"
            sizes={data.fresh8Logo.childImageSharp.fluid}
          />
        </StyledLi>
        <StyledLi>
          <Img
            title="Genomics England"
            alt="Genomics England logo"
            sizes={data.genomicsEnglandLogo.childImageSharp.fluid}
          />
        </StyledLi>
        <StyledLi>
          <Img
            title="RHE Global"
            alt="RHE Global logo"
            sizes={data.rheLogo.childImageSharp.fluid}
          />
        </StyledLi>
      </StyledOl>
    )}
  />
)

export default Clients
