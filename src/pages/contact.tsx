import { rem } from 'polished'
import React from 'react'
import { animated, useTrail } from 'react-spring'
import styled from 'styled-components'

import Container from '../components/container'
import Heading from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import EmailIcon from '../images/email.svg'
import GithubIcon from '../images/github.svg'
import InstagramIcon from '../images/instagram.svg'

import {
  ARIA_EMAIL,
  ARIA_GITHUB,
  ARIA_INSTAGRAM,
  META_TITLES,
  URL_EMAIL,
  URL_GITHUB,
  URL_INSTAGRAM,
} from '../constants'

const StyledText = styled(Text)`
  margin-bottom: ${rem(24)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    margin-bottom: ${rem(48)};
  }
`

const StyledImg = styled.img`
  object-fit: contain;
`

const StyledLink = styled(animated.a)`
  display: block;
  height: 100%;
`

const StyledDiv = styled.div`
  align-items: center;
  align-content: space-between;
  display: grid;
  grid-column-gap: ${rem(24)};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${rem(36)} ${rem(36)};
  max-width: ${rem(156)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    grid-column-gap: ${rem(48)};
    grid-row-gap: ${rem(24)};
    grid-template-rows: ${rem(72)} ${rem(72)};
    max-width: ${rem(312)};
  }
`

const contactButtons = [
  { src: GithubIcon, label: ARIA_GITHUB, url: URL_GITHUB },
  { src: EmailIcon, label: ARIA_EMAIL, url: URL_EMAIL },
  { src: InstagramIcon, label: ARIA_INSTAGRAM, url: URL_INSTAGRAM },
]

const ContactPage = () => {
  const trail = useTrail(contactButtons.length, {
    from: { opacity: 0 },
    opacity: 1,
  })

  return (
    <>
      <SEO title={META_TITLES.CONTACT} />
      <Section>
        <Heading>Contact</Heading>
        <Container>
          <StyledText>
            <p>
              I am available for contract work in Bristol, London and the
              South-West of the UK. If you would like to get in touch to discuss
              any opportunities, click the button below to drop me an{' '}
              <a href={URL_EMAIL} aria-label={ARIA_EMAIL}>
                email
              </a>{' '}
              .
            </p>

            <p>
              Alternativly, view my projects on{' '}
              <a href={URL_GITHUB} aria-label={ARIA_GITHUB}>
                Github
              </a>{' '}
              or follow me on{' '}
              <a href={URL_INSTAGRAM} aria-label={ARIA_INSTAGRAM}>
                Instagram
              </a>
              .
            </p>
          </StyledText>

          <StyledDiv>
            {trail.map((styleProps, index) => {
              const { label, src, url } = contactButtons[index]
              return (
                <StyledLink
                  href={url}
                  key={url}
                  aria-label={label}
                  style={styleProps}
                >
                  <StyledImg alt="" key={url} src={src} />
                </StyledLink>
              )
            })}
          </StyledDiv>
        </Container>
      </Section>
    </>
  )
}

export default ContactPage
