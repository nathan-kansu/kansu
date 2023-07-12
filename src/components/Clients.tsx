import React, { memo } from 'react'
import { rem } from 'polished'
import { animated, useTrail } from '@react-spring/web'
import styled from 'styled-components'
import { Container } from './Container'
import { Heading } from './Heading'
import { Section } from './Section'

import AmazonLogo from '../images/amazon.svg'

import Fresh8LogoL from '../images/fresh-8-l.png'
import Fresh8LogoM from '../images/fresh-8-m.png'
import Fresh8LogoS from '../images/fresh-8-s.png'
import GenomicsEnglandLogoL from '../images/genomics-england-l.png'
import GenomicsEnglandLogoM from '../images/genomics-england-m.png'
import GenomicsEnglandLogoS from '../images/genomics-england-s.png'

import MubalooLogo from '../images/mubaloo.svg'
import RHELogoL from '../images/rhe-l.png'
import RHELogoM from '../images/rhe-m.png'
import RHELogoS from '../images/rhe-s.png'
import ZoneLogo from '../images/zone.svg'

const clients = [
  { src: AmazonLogo, alt: 'Amazon logo' },
  { src: ZoneLogo, alt: 'Zone Digital logo' },
  { src: MubalooLogo, alt: 'Mubaloo logo' },
  {
    alt: 'Fresh 8 Logo logo',
    images: [Fresh8LogoS, Fresh8LogoM, Fresh8LogoL],
    src: Fresh8LogoM,
  },
  {
    alt: 'Genomics England logo',
    images: [GenomicsEnglandLogoS, GenomicsEnglandLogoM, GenomicsEnglandLogoL],
    src: GenomicsEnglandLogoM,
  },
  { src: RHELogoM, images: [RHELogoS, RHELogoM, RHELogoL], alt: 'RHE logo' },
]

const _Clients = () => {
  const trail = useTrail(6, {
    from: { opacity: 0 },
    opacity: 1,
  })

  return (
    <Section>
      <Heading>Clients</Heading>
      <Container>
        <Logos>
          {trail.map((styleProps, index) => {
            const { alt, src, images } = clients[index]

            const srcSet = images
              ? `${images[0]} 88w, ${images[1]} 184w, ${images[2]} 2x`
              : undefined
            const sizes = images ? '(min-width: 320px) 88px, 184px"' : undefined

            return (
              <StyledImg
                alt={alt}
                key={alt}
                src={src}
                sizes={sizes}
                srcSet={srcSet}
                style={styleProps}
              />
            )
          })}
        </Logos>
      </Container>
    </Section>
  )
}

const Logos = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: ${rem(24)};
  grid-row-gap: ${rem(24)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${rem(48)} ${rem(48)};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    grid-column-gap: ${rem(48)};
    grid-row-gap: ${rem(48)};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${rem(96)} ${rem(96)};
  }
`

const StyledImg = styled(animated.img)`
  height: ${rem(48)};
  object-fit: contain;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 100%;
  }
`

export const Clients = memo(_Clients)
