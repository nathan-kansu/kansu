import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Shape } from '../interfaces'

interface CanvasProps {
  height: number
  shapes: Shape[]
  width: number
}

const StyledCanvas = styled.canvas``

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(
    () => {
      if (canvasRef.current) {
        const { height: propsHeight, width: propsWidth } = props

        canvasRef.current.height = propsHeight
        canvasRef.current.width = propsWidth
      }
    },
    [props.height, props.width]
  )

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        const { height: canvasHeight, shapes, width: canvasWidth } = props
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)

        shapes.map(({ fill, height, width, x, y }: Shape) => {
          ctx.fillStyle = `rgba(${fill.join(',')})`
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + width, y)
          ctx.lineTo(x + width, y + height)
          ctx.lineTo(x, y + height)
          ctx.lineTo(x, y)
          ctx.closePath()
          ctx.fill()
        })
      }
    }
  })

  return <StyledCanvas ref={canvasRef} />
}

export default Canvas
