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
  onReady?: () => void
  children: RenderChild<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    ready: boolean
    onChange: (inView: boolean, entry: IntersectionObserverEntry) => void
    onLoad: () => void
  }>
}

export interface ImageControlState {
  viewed: boolean
  marked: boolean
  loaded: boolean
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    viewedDelay: 1000,
  }

  public componentDidUpdate: () => void = () => {
    if (this.ready && this.props.onReady) {
      this.props.onReady()
    }
  }

  public componentWillUnmount: () => void = () => {
    if (this.viewedTimer) {
      clearTimeout(this.viewedTimer)
      this.viewedTimer = undefined
    }
  }

  public state: ImageControlState = {
    viewed: false,
    marked: false,
    loaded: false,
  }

  private viewedTimer: number | undefined

  private onChange: (inView: boolean, entry: IntersectionObserverEntry) => void = (inView, entry) => {
    if (!inView) {
      clearTimeout(this.viewedTimer)
      this.viewedTimer = undefined
      return
    }
    if (!this.viewedTimer && !this.state.viewed) {
      this.viewedTimer = setTimeout(() => {
        this.setState({
          viewed: true,
        })
      }, this.props.viewedDelay)
    }
    this.setState({
      marked: entry.intersectionRatio > 0.8,
    })
  }

  private onLoad: () => void = () => {
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
    const {srcSet} = this.props
    if (this.state.viewed) {
      return srcSet
    }
  }

  private get ready(): boolean {
    return this.state.loaded && this.state.marked
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.loaded,
      ready: this.ready,
      onChange: this.onChange,
      onLoad: this.onLoad,
    })
  }

}
