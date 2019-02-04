import { graphql, StaticQuery } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

import AmazonLogo from '../images/amazon.svg'
import MubalooLogo from '../images/mubaloo.svg'
import ZoneLogo from '../images/zone.svg'

const StyledOl = styled.ol`
  align-items: center;
  display: none;
  grid-column-gap: ${rem(48)};
  grid-row-gap: ${rem(48)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${rem(96)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: none;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${rem(96)} ${rem(96)}; */
  }
`

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const Clients = () => (
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
      <StyledOl>
        <StyledLi>
          <img src={AmazonLogo} alt="Amazon logo" />
        </StyledLi>
        <StyledLi>
          <img src={ZoneLogo} alt="Zone Digital logo" />
        </StyledLi>
        <StyledLi>
          <img src={MubalooLogo} alt="Mubaloo logo" />
        </StyledLi>
        <StyledLi>
          <GatsbyImg
            title="Fresh 8 Gaming"
            alt=""
            sizes={data.fresh8Logo.childImageSharp.fluid}
          />
        </StyledLi>
        <StyledLi>
          <GatsbyImg
            imgStyle={{ objectFit: 'contain' }}
            title="Genomics England"
            alt=""
            sizes={data.genomicsEnglandLogo.childImageSharp.fluid}
          />
        </StyledLi>
        <StyledLi>
          <GatsbyImg
            imgStyle={{ objectFit: 'contain' }}
            title="RHE Global"
            alt=""
            sizes={data.rheLogo.childImageSharp.fluid}
          />
        </StyledLi>
      </StyledOl>
    )}
  />
)

export default Clients
