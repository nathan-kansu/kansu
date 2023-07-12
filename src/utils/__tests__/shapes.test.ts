import { ANIMATION_MAX_DIMENSION, COLORS } from '../../constants'
import * as shape from '../shape'

describe('util/shapes', () => {
  test('it should generate a random "dimension" value', () => {
    const dimension = shape.generateDimension()

    expect(dimension).toBeGreaterThanOrEqual(0)
    expect(dimension).toBeLessThanOrEqual(ANIMATION_MAX_DIMENSION)
    expect(typeof dimension).toBe('number')
  })

  test('it should generate a random "fill color" value', () => {
    const fill = shape.generateFill()
    expect(COLORS).toContain(fill)
  })

  test('it should generate a random "position" value', () => {
    const limit = 10
    const dimension = 5
    const edge = limit - dimension
    const position = shape.generatePosition(limit, dimension)

    expect(position).toBeGreaterThanOrEqual(0)
    expect(position).toBeLessThanOrEqual(edge)
    expect(typeof position).toBe('number')
  })
})
