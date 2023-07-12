import React, { useEffect, useState } from 'react'
import { ANIMATION_TOTAL_SHAPES } from '../constants'
import { Shape } from '../types'
import { generateShapeFactory } from '../utils/shape'
import { Canvas } from './Canvas'

import {
  ANIMATION_OPACITY_SPEED,
  ANIMATION_REPOSITION_SPEED,
  ANIMATION_RESIZE_SPEED,
} from '../constants'

interface AnimationProps {
  height: number
  width: number
}

export const Animation = (props: AnimationProps) => {
  const generateShape = () => {
    const { height, width } = props
    return generateShapeFactory(height, width)
  }

  const generateShapes = () => {
    const generatedShapes = []
    for (let i = 0; i < ANIMATION_TOTAL_SHAPES; i++) {
      generatedShapes.push(generateShape())
    }
    return generatedShapes
  }

  const updateShape = (shape: Shape) => {
    const {
      fill: [red, green, blue, opacity],
      height,
      width,
      x,
      y,
    } = shape

    const shapeAnimationComplete = height <= 1 || opacity >= 1 || width <= 1

    if (shapeAnimationComplete) {
      return generateShape()
    }

    return {
      fill: [red, green, blue, opacity + ANIMATION_OPACITY_SPEED],
      height: height - ANIMATION_RESIZE_SPEED,
      width: width - ANIMATION_RESIZE_SPEED,
      x: x + ANIMATION_REPOSITION_SPEED,
      y: y - 1 + ANIMATION_REPOSITION_SPEED,
    }
  }

  const [shapes, setShapes] = useState(() => generateShapes())

  useEffect(() => {
    let requestId: number = 0

    const animate = () => {
      setShapes((prevShapes) => prevShapes.map(updateShape))
      requestId = requestAnimationFrame(animate)
    }

    requestId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestId)
  }, [])

  return <Canvas {...props} shapes={shapes} />
}
