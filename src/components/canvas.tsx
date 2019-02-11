import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Shape } from '../interfaces'

interface CanvasProps {
  height: number
  shapes: Shape[]
  width: number
}

const StyledCanvas = styled.canvas``

class Canvas extends Component<CanvasProps, {}> {
  private canvas: HTMLCanvasElement | null = null
  private canvasRef = createRef<HTMLCanvasElement>()
  private ctx: CanvasRenderingContext2D | null = null

  constructor(props: CanvasProps) {
    super(props)
  }

  public componentDidMount() {
    this.initCanvas()
    this.resizeCanvas()
    this.updateCanvas()
  }

  public componentDidUpdate() {
    this.resizeCanvas()
    this.updateCanvas()
  }

  public render() {
    return <StyledCanvas ref={this.canvasRef} />
  }

  private initCanvas() {
    if (this.canvasRef.current) {
      this.canvas = this.canvasRef.current
      this.ctx = this.canvas.getContext('2d')
    }
  }

  private drawShape = ({ fill, height, width, x, y }: Shape) => {
    if (this.ctx) {
      this.ctx.fillStyle = `rgba(${fill.join(',')})`
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x + width, y)
      this.ctx.lineTo(x + width, y + height)
      this.ctx.lineTo(x, y + height)
      this.ctx.lineTo(x, y)
      this.ctx.closePath()
      this.ctx.fill()
    }
  }

  private resizeCanvas = () => {
    if (this.canvas) {
      const { height: propsHeight, width: propsWidth } = this.props
      const { height: canvasHeight, width: canvasWidth } = this.canvas

      if (propsHeight + propsWidth !== canvasHeight + canvasWidth) {
        this.canvas.height = propsHeight
        this.canvas.width = propsWidth
      }
    }
  }

  private updateCanvas = () => {
    if (this.ctx) {
      const { height, shapes, width } = this.props

      this.ctx.clearRect(0, 0, width, height)
      shapes.forEach(this.drawShape)
    }
  }
}

export default Canvas
