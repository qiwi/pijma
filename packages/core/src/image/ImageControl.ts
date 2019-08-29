import {Component, ReactNode} from 'react'
import {Value} from '../primitive'
import RenderChild from '../RenderChild'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  srcSet?: string
  stub?: string | ReactNode
  viewedDelay?: number
  onLoad?: () => void
  children: RenderChild<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    onChange: (inView: boolean) => void
    onLoad: () => void
  }>
}

export interface ImageControlState {
  viewed: boolean
  loaded: boolean
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    viewedDelay: 1000,
  }

  public state: ImageControlState = {
    viewed: false,
    loaded: false,
  }

  private viewedTimer: number | undefined

  public componentWillUnmount: () => void = () => {
    clearTimeout(this.viewedTimer)
  }

  private onChange: (inView: boolean) => void = (inView) => {
    clearTimeout(this.viewedTimer)
    if (inView) {
      this.viewedTimer = setTimeout(() => {
        this.setState({
          viewed: true,
        })
      }, this.props.viewedDelay)
    }
  }

  private onLoad: () => void = () => {
    if (!this.state.viewed) {
      return
    }
    if (this.props.onLoad) {
      this.props.onLoad()
    }
    this.setState({
      loaded: true,
    })
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.viewed) {
      return src
    }
    if (typeof stub === 'string') {
      return stub
    }
    return undefined
  }

  private get srcSet(): string | undefined {
    if (!this.state.viewed) {
      return undefined
    }
    return this.props.srcSet
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.loaded,
      onChange: this.onChange,
      onLoad: this.onLoad,
    })
  }

}
