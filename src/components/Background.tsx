import { rem } from 'polished'
import React, { memo, useEffect, useRef, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import styled from 'styled-components'
import { Animation } from './Animation'

const _Background = () => {
  const [backgroundDimensions, setBackgroundDimensions] = useState({
    height: 0,
    width: 0,
  })

  const styleProps = useSpring({
    filter: `blur(${rem(3)})`,
  })

  const wrapperRef = useRef<HTMLDivElement>(null)

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
      {backgroundDimensions.width ? (
        <Animation {...backgroundDimensions} />
      ) : null}
    </StyledWrapper>
  )
}

const StyledWrapper = styled(animated.div)`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`

export const Background = memo(_Background)
