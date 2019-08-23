import {Component, ReactNode} from 'react'
import {Value} from '../primitive'
import RenderChild from '../RenderChild'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  srcSet?: string
  stub?: string | ReactNode
  delay?: number
  onEnter?: () => void
  onLeave?: () => void
  onLoad?: () => void
  children: RenderChild<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    onEnter: () => void
    onLeave: () => void
    onLoad: () => void
  }>
}

export interface ImageControlState {
  shown: boolean
  loaded: boolean
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    delay: 1000,
  }

  public state: ImageControlState = {
    shown: false,
    loaded: false,
  }

  private delayTimer: number | undefined

  private onLoad: () => void = () => {
    this.setState({
      loaded: true,
    })
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  private onEnter: () => void = () => {
    this.delayTimer = setTimeout(() => {
      this.setState({
        shown: true,
      })
      if (this.props.onEnter) {
        this.props.onEnter()
      }
    }, this.props.delay)
  }

  private onLeave: () => void = () => {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
    }
    if (this.props.onLeave) {
      this.props.onLeave()
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
    const {srcSet} = this.props
    return this.state.shown ? srcSet : undefined
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.loaded,
      onEnter: this.onEnter,
      onLeave: this.onLeave,
      onLoad: this.onLoad,
    })
  }

}
