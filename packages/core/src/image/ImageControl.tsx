import React, {Component, FC, RefObject, ReactNode, isValidElement} from 'react'
import {Value, Box, Card, Pos} from '../primitive'
import {Waypoint} from '../waypoint'
import RenderChild from '../RenderChild'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  display?: 'block' | 'inline-block'
  stub?: string | ReactNode
  imageRef: () => RefObject<HTMLImageElement>
  children: RenderChild<{
    src: string | undefined
    onImageLoaded: () => void
    Wrapper: FC
  }>
}

export interface ImageControlState {
  shown: boolean
  loaded: boolean
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public state: ImageControlState = {
    shown: false,
    loaded: false,
  }

  private onEnter: () => void = () => {
    this.setState({
      shown: true,
    })
  }

  private onImageLoaded: () => void = () => {
    this.setState({
      loaded: true,
    })
  }

  private Wrapper: FC = ({children}) => {
    const {width, height, display, stub} = this.props
    const {loaded} = this.state
    return (
      <Waypoint
        topOffset={-40}
        bottomOffset={-40}
        onEnter={this.onEnter}
      >
        <Box display={display} width={width} height={height}>
          {!loaded && isValidElement(stub) ? (
            <Pos type="absolute" width={width} height={height}>
              {stub}
            </Pos>
          ) : (
            null
          )}
          <Card opacity={typeof stub === 'string' || loaded ? 1 : 0}>
            {children}
          </Card>
        </Box>
      </Waypoint>
    )
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.shown) {
      return src
    }
    return typeof stub === 'string' ? stub : undefined
  }

  public render() {
    return this.props.children({
      src: this.src,
      Wrapper: this.Wrapper,
      onImageLoaded: this.onImageLoaded,
    })
  }

}
