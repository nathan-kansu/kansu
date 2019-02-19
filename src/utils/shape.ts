import {
  ANIMATION_MAX_DIMENSION,
  COLOR_DARK_BLUE_RGBA,
  COLOR_GREY_RGBA,
  COLOR_WHITE_RGBA,
} from '../constants'

const colors: [number[], number[], number[]] = [
  COLOR_DARK_BLUE_RGBA,
  COLOR_GREY_RGBA,
  COLOR_WHITE_RGBA,
]

const generateDimension = () =>
  Math.round(Math.random() * ANIMATION_MAX_DIMENSION)

const generateFill = () => {
  const fillColorKey = Math.floor(Math.random() * colors.length)
  return colors[fillColorKey]
}

const generatePosition = (limit: number, dimension: number) => {
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
