import React, { Component } from 'react'
import { ANIMATION_TOTAL_SHAPES } from '../constants'
import { Shape } from '../interfaces'
import { generateShapeFactory } from '../utils/shape'
import Canvas from './canvas'

import {
  ANIMATION_OPACITY_SPEED,
  ANIMATION_REPOSITION_SPEED,
  ANIMATION_RESIZE_SPEED,
} from '../constants'

interface AnimationState {
  shapes: any[]
}

interface AnimationProps {
  height: number
  width: number
}

class Animation extends Component<AnimationProps, AnimationState> {
  private requestAnimationFrame: number = 0

  constructor(props: any) {
    super(props)

    this.state = {
      shapes: this.generateShapes(),
    }
  }

  public componentDidMount() {
    this.requestAnimationFrame = requestAnimationFrame(this.animate)
  }

  public componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrame)
  }

  public render = () => {
    return <Canvas {...this.props} {...this.state} />
  }

  private animate = () => {
    this.setState({
      shapes: this.state.shapes.map(this.updateShape),
    })
    this.requestAnimationFrame = requestAnimationFrame(this.animate)
  }

  private generateShapes = () => {
    const shapes = []
    for (let i = 0; i < ANIMATION_TOTAL_SHAPES; i++) {
      shapes.push(this.generateShape())
    }

    return shapes
  }

  private generateShape = () => {
    const { height, width } = this.props
    return generateShapeFactory(height, width)
  }

  private updateShape = (shape: Shape) => {
    const {
      fill: [red, green, blue, opacity],
      height,
      width,
      x,
      y,
    } = shape

    const shapeAnimationComplete = height <= 1 || opacity >= 1 || width <= 1

    if (shapeAnimationComplete) {
      return this.generateShape()
    }

    return {
      fill: [red, green, blue, opacity + ANIMATION_OPACITY_SPEED],
      height: height - ANIMATION_RESIZE_SPEED,
      width: width - ANIMATION_RESIZE_SPEED,
      x: x + ANIMATION_REPOSITION_SPEED,
      y: y + ANIMATION_REPOSITION_SPEED,
    }
  }
}

export default Animation
