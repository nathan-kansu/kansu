import { Link } from 'gatsby'
import { rem } from 'polished'
import React from 'react'
import KansuLogo from '../images/kansu-logo.svg'
import styled from 'styled-components'
import { Links } from './Links'

export const Header = () => (
  <Container>
    <Heading>
      <StyledLink to="/">
        <img src={KansuLogo} alt="Kansu logo" />
      </StyledLink>
    </Heading>
    <Links />
  </Container>
)

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Heading = styled.h1`
  margin: 0;
  color ${(props) => props.theme.colors.white}
`

const StyledLink = styled(Link)`
  display: block;
  height: ${rem(54)};
  margin-right: ${rem(24)};
`
