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
  onLoad?: () => void
  onReady?: () => void
  children: RenderChild<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    ready: boolean
    onIntersect: (inView: boolean, intersectionRatio: number) => void
    onLoad: () => void
  }>
}

export interface ImageControlState {
  entered: boolean
  shown: boolean
  viewed: boolean
  loaded: boolean
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    delay: 1000,
  }

  public componentWillUnmount: () => void = () => {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
    }
  }

  public state: ImageControlState = {
    entered: false,
    shown: false,
    viewed: false,
    loaded: false,
  }

  private delayTimer: number | undefined

  private onIntersect: (inView: boolean, intersectionRatio: number) => void = (inView, intersectionRatio) => {
    if (!inView) {
      this.onLeave()
      return
    }
    if (!this.state.entered) {
      this.onEnter()
    }
    this.onViewedChanged(intersectionRatio > 0.8)
  }

  private onEnter: () => void = () => {
    this.setState({
      entered: true,
    })
    this.delayTimer = setTimeout(() => {
      this.setState({
        shown: true,
      })
    }, this.props.delay)
  }

  private onLoad: () => void = () => {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
    if (this.state.viewed && this.props.onReady) {
      this.props.onReady()
    }
    this.setState({
      loaded: true,
    })
  }

  private onViewedChanged: (inside: boolean) => void = (inside) => {
    if (inside && this.state.loaded && this.props.onReady) {
      this.props.onReady()
    }
    this.setState({
      viewed: inside,
    })
  }

  private onLeave: () => void = () => {
    this.setState({
      entered: false,
    })
    clearTimeout(this.delayTimer)
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.shown) {
      return src
    }
    if (typeof stub === 'string') {
      return stub
    }
  }

  private get srcSet(): string | undefined {
    const {srcSet} = this.props
    if (this.state.shown) {
      return srcSet
    }
  }

  private get ready(): boolean {
    return this.state.loaded && this.state.viewed
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.loaded,
      ready: this.ready,
      onIntersect: this.onIntersect,
      onLoad: this.onLoad,
    })
  }

}
