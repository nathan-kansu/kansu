import * as React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section``

interface SectionProps {
  children: JSX.Element[]
}

const Section = ({ children }: SectionProps) => (
  <StyledSection>{children}</StyledSection>
)

export default Section
