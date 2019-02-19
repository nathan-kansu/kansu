import GatsbyImg, { FluidObject } from 'gatsby-image'
import React from 'react'

interface ClientProps {
  alt: string
  src?: string
  imgStyle?: object
  sizes?: FluidObject
}

const Client = ({ alt, imgStyle, sizes, src }: ClientProps) =>
  sizes ? (
    <GatsbyImg alt={alt} imgStyle={imgStyle} sizes={sizes} />
  ) : (
    <img alt={alt} src={src} />
  )

export default Client
