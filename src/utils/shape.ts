import { ANIMATION_MAX_DIMENSION, COLORS } from '../constants'

export const generateDimension = () =>
  Math.round(Math.random() * ANIMATION_MAX_DIMENSION)

export const generateFill = () => {
  const fillColorKey = Math.floor(Math.random() * COLORS.length)
  return COLORS[fillColorKey]
}

export const generatePosition = (limit: number, dimension: number) => {
  const edge = limit - dimension
  return Math.round(Math.random() * edge)
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
