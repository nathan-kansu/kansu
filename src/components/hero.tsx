import { rem } from 'polished'
import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import Animation from './animation'

interface HeroState {
  height: number
  width: number
}

const StyledWrapper = styled.div`
  height: ${rem(424)};
  width: 100%;
`

class Hero extends Component<{}, HeroState> {
  private wrapperRef = createRef<HTMLDivElement>()

  constructor(props: {}) {
    super(props)

    this.state = {
      height: 424,
      width: 980,
    }
  }

  public componentDidMount() {
    this.updateCanvasDimensions()
    window.addEventListener('resize', this.updateCanvasDimensions)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateCanvasDimensions)
  }

  public render = () => {
    return (
      <StyledWrapper ref={this.wrapperRef}>
        <Animation {...this.state} />
      </StyledWrapper>
    )
  }

  private updateCanvasDimensions = () => {
    if (!this.wrapperRef.current) {
      return
    }

    const { offsetHeight: height, offsetWidth: width } = this.wrapperRef.current

    this.setState({
      height,
      width,
    })
  }
}

export default Hero
