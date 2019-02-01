import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface MainProps {
  children: JSX.Element[]
  isMobileNavActive: boolean
}

const StyledMain = styled.main`
  ${props => props.isMobileNavActive && `filter: blur(${rem(4)});`}
`

const Main = ({ children, isMobileNavActive }: MainProps) => (
  <StyledMain isMobileNavActive={isMobileNavActive}>{children}</StyledMain>
)

export default Main
