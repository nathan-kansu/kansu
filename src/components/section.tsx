import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: ${rem(72)};
  position: relative;

  &:after {
    border-bottom: solid ${rem(6)} ${props => props.theme.colors.white};
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
