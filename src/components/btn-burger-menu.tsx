import { rem } from 'polished'
import * as React from 'react'
import styled from 'styled-components'

interface BtnBurgerMenuProps {
  isActive: boolean
  handleClick(): void
}

const StyledButton = styled.button`
  display: flex;
  height: ${rem(24)};
  justify-content: center;
  width: ${rem(36)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`

const barHeight = rem(4)

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: ${barHeight};
  position: relative;
  width: 100%;
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  .is-active & {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:before {
    border-top: solid ${barHeight} ${props => props.theme.colors.white};
    content: '';
    height: ${barHeight};
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: -${rem(10)};
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;

    .is-active & {
      opacity: 0;
      top: 0;
      transition: top 0.075s ease, opacity 0.075s 0.12s ease;
    }
  }

  &:after {
    bottom: -${rem(10)};
    border-bottom: solid ${barHeight} ${props => props.theme.colors.white};
    content: '';
    height: ${barHeight};
    left: 0;
    position: absolute;
    right: 0;
    opacity: 1;
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    .is-active & {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`

const BtnBurgerMenu = ({ handleClick, isActive }: BtnBurgerMenuProps) => {
  return (
    <StyledButton onClick={handleClick} className={isActive ? 'is-active' : ''}>
      <StyledDiv />
    </StyledButton>
  )
}

export default BtnBurgerMenu
