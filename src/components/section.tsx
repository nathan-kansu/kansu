import { rem } from 'polished'
import React from 'react'
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
  className?: string
}

const Section = ({ children, className }: SectionProps) => (
  <StyledSection className={className}>{children}</StyledSection>
)

export default Section
