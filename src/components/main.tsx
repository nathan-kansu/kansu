import * as React from 'react'
import styled from 'styled-components'

interface MainProps {
  children: JSX.Element[]
}

const StyledMain = styled.main``

const Main = ({ children }: MainProps) => <StyledMain>{children}</StyledMain>

export default Main
