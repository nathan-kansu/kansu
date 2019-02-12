import { rem } from 'polished'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Animation from './animation'

const StyledWrapper = styled.div`
  height: ${rem(424)};
  width: 100%;
`

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [heroDimensions, setHeroDimensions] = useState({
    height: 0,
    width: 0,
  })

  const handleResize = () => {
    if (wrapperRef.current) {
      const { offsetHeight, offsetWidth } = wrapperRef.current

      setHeroDimensions({
        height: offsetHeight,
        width: offsetWidth,
      })
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StyledWrapper ref={wrapperRef}>
      {heroDimensions.width && <Animation {...heroDimensions} />}
    </StyledWrapper>
  )
}

export default Hero
