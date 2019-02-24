import { rem } from 'polished'
import React, { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import Animation from './animation'

interface BackgroundProps {
  isHomePage: boolean
}

const StyledWrapper = styled(animated.div)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const Background = ({ isHomePage }: BackgroundProps) => {
  const styleProps = useSpring({
    filter: isHomePage ? 'blur(0)' : `blur(${rem(12)})`,
  })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const [backgroundDimensions, setBackgroundDimensions] = useState({
    height: 0,
    width: 0,
  })

  const handleResize = () => {
    if (wrapperRef.current) {
      const { offsetHeight, offsetWidth } = wrapperRef.current

      setBackgroundDimensions({
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
    <StyledWrapper ref={wrapperRef} style={styleProps}>
      {backgroundDimensions.width && <Animation {...backgroundDimensions} />}
    </StyledWrapper>
  )
}

export default Background
