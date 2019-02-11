import {
  ANIMATION_MAX_DIMENSION,
  COLOR_DARK_BLUE_RGBA,
  COLOR_GREY_RGBA,
  COLOR_WHITE_RGBA,
} from '../constants'

import { Shape } from '../interfaces'

const colors: [number[], number[], number[]] = [
  COLOR_DARK_BLUE_RGBA,
  COLOR_GREY_RGBA,
  COLOR_WHITE_RGBA,
]

const generateDimension = () => Math.random() * ANIMATION_MAX_DIMENSION

const generateFill = () => {
  const fillColorKey = Math.floor(Math.random() * colors.length)
  return colors[fillColorKey]
}

const generatePosition = (limit: any, dimension: any) => {
  const edge = limit - dimension
  return Math.random() * edge
}

export const generateShapeFactory = (
  canvasHeight: number,
  canvasWidth: number
) => {
  const height = generateDimension()
  const width = generateDimension()

  return {
    fill: generateFill(),
    height,
    width,
    x: generatePosition(canvasWidth, width),
    y: generatePosition(canvasHeight, height),
  }
}
