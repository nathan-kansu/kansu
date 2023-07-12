export interface Shape {
  fill: number[]
  height: number
  width: number
  x: number
  y: number
}

export interface SeoProps {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: []
  ogImgUrl?: string
  siteUrl?: string
  title: string
}
