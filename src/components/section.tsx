import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: ${rem(72)};
  position: relative;
`

interface SectionProps {
  children: JSX.Element[]
  className?: string
}

const Section = ({ children, className }: SectionProps) => (
  <StyledSection className={className}>{children}</StyledSection>
)

export default Section
