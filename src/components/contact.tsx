import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'
import ButtonLink from './button-link'
import { H2 } from './heading'
import Section from './section'
import Text from './text'

const StyledButtonLink = styled(ButtonLink)`
  align-self: center;
`

const StyledText = styled(Text)`
  margin-bottom: ${rem(48)};
`

const Contact = () => (
  <Section>
    <H2>Contact</H2>
    <StyledText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat
      unde architecto incidunt rerum temporibus magni odio nam, modi harum
      magnam voluptatum quo! Voluptatibus tenetur soluta numquam. Officia,
      incidunt velit!
    </StyledText>
    <StyledButtonLink href="mailto:hello@kansu.co" title="Contact" />
  </Section>
)

export default Contact
