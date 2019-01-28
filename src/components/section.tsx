import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-bottom: ${rem(48)};
  position: relative;
  margin-bottom: ${rem(72)};

  &:after {
    border-bottom: solid 5px ${props => props.theme.colors.white};
    bottom: 0;
    content: '';
    position: absolute;
    width: ${rem(24)};
  }
`

interface SectionProps {
  children: JSX.Element[]
}

const Section = ({ children }: SectionProps) => (
  <StyledSection>{children}</StyledSection>
)

export default Section
