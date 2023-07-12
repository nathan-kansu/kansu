import React, { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Shape } from "../types";

interface CanvasProps {
  height: number;
  shapes: Shape[];
  width: number;
}

const StyledCanvas = styled.canvas``;

const _Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasContext, setCanvasContext] =
    useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const { height: propsHeight, width: propsWidth } = props;
      const scale = window.devicePixelRatio;
      const ctx = canvasRef.current.getContext("2d");

      canvasRef.current.style.height = `${propsHeight}px`;
      canvasRef.current.style.width = `${propsWidth}px`;
      canvasRef.current.height = propsHeight * scale;
      canvasRef.current.width = propsWidth * scale;

      if (ctx) {
        ctx.scale(scale, scale);
        setCanvasContext(ctx);
      }
    }
  }, [props.height, props.width]);

  useEffect(() => {
    if (canvasContext) {
      const { height: canvasHeight, shapes, width: canvasWidth } = props;
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

      shapes.map(({ fill, height, width, x, y }: Shape) => {
        if (canvasContext) {
          canvasContext.fillStyle = `rgba(${fill.join(",")})`;
          canvasContext.beginPath();
          canvasContext.moveTo(x, y);
          canvasContext.lineTo(x + width, y);
          canvasContext.lineTo(x + width, y + height);
          canvasContext.lineTo(x, y + height);
          canvasContext.lineTo(x, y);
          canvasContext.closePath();
          canvasContext.fill();
        }
      });
    }
  }, [props.shapes]);

  return <StyledCanvas ref={canvasRef} />;
};

export const Canvas = memo(_Canvas);
