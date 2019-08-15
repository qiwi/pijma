import {Component, RefObject, ReactNode} from 'react'
import {Value} from '../primitive'
import RenderChild from '../RenderChild'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  srcSet?: string
  display?: 'block' | 'inline-block'
  stub?: string | ReactNode
  onEnter?: () => void
  onLoad?: () => void
  imageRef: () => RefObject<HTMLImageElement>
  children: RenderChild<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    onEnter: () => void
    onLoad: () => void
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

  private onLoad: () => void = () => {
    this.setState({
      loaded: true,
    })
    if (typeof this.props.onLoad === 'function') {
      this.props.onLoad()
    }
  }

  private onEnter: () => void = () => {
    this.setState({
      shown: true,
    })
    if (typeof this.props.onEnter === 'function') {
      this.props.onEnter()
    }
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.shown) {
      return src
    }
    return typeof stub === 'string' ? stub : undefined
  }

  private get srcSet(): string | undefined {
    const {stub, srcSet} = this.props
    if (this.state.shown) {
      return srcSet
    }
    return typeof stub === 'string' ? stub : undefined
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.loaded,
      onEnter: this.onEnter,
      onLoad: this.onLoad,
    })
  }

}
