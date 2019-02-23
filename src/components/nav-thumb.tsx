import { navigate } from '@reach/router'
import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface NavThumbProps {
  nextPage?: string
  prevPage?: string
}

const StyledNavThumb = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`

const StyledButton = styled.button`
  fill: ${props => props.theme.colors.white};
  height: ${rem(24)};
  width: ${rem(24)};

  &.prev {
    align-self: flex-start;
    margin-right: auto;
    transform: rotate(180deg);
  }

  &.next {
    align-self: flex-end;
    color: ${props => props.theme.colors.grey};
    margin-left: auto;
  }
`

const NavThumb = ({ nextPage, prevPage }: NavThumbProps) => {
  const handleNextPageClick = () => {
    if (!nextPage) {
      return
    }
    navigate(nextPage)
  }

  const handlePrevPageClick = () => {
    if (!prevPage) {
      return
    }

    navigate(prevPage)
  }

  return (
    <StyledNavThumb>
      {prevPage && (
        <StyledButton onClick={handlePrevPageClick} className="prev">
          <svg width="100%" height="100%" viewBox="0 0 306 306">
            <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153" />
          </svg>
        </StyledButton>
      )}

      {nextPage && (
        <StyledButton onClick={handleNextPageClick} className="next">
          <svg width="100%" height="100%" viewBox="0 0 306 306">
            <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153" />
          </svg>
        </StyledButton>
      )}
    </StyledNavThumb>
  )
}

export default NavThumb
