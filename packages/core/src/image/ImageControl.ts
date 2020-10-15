import {Component, ReactNode} from 'react'

import {Value} from '../primitive'
import RenderChild from '../RenderChild'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  srcSet?: string
  stub?: string | ReactNode
  cachedDelay?: number
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
  cached: boolean | undefined
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    cachedDelay: 50,
    viewedDelay: 1000,
  }

  public state: ImageControlState = {
    viewed: false,
    loaded: false,
    cached: undefined,
  }

  public componentWillUnmount: () => void = () => {
    clearTimeout(this.viewedTimer)
    clearTimeout(this.cachedTimer)
  }

  private viewedTimer: number | undefined

  private cachedTimer: number | undefined

  private image: HTMLImageElement | undefined

  private onChange: (inView: boolean) => void = (inView) => {
    clearTimeout(this.viewedTimer)
    if (!inView) {
      if (this.image) {
        this.image.src = ''
        this.image.srcset = ''
      }
      return
    }
    if (this.state.cached === undefined) {
      this.image = document.createElement('img')
      this.image.src = this.props.src
      if (this.props.srcSet) {
        this.image.srcset = this.props.srcSet
      }
      this.image.onload = () => {
        this.setState({
          cached: true,
          viewed: true,
        })
      }
      this.cachedTimer = setTimeout(() => {
        if (!this.state.cached && this.image) {
          this.image.onload = null
          this.setState({
            cached: false,
          })
          this.onView()
        }
      }, this.props.cachedDelay)
      return
    }
    this.onView()
  }

  private onView: () => void = () => {
    this.viewedTimer = setTimeout(() => {
      this.setState({
        viewed: true,
      })
    }, this.props.viewedDelay)
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
    if (this.state.cached === undefined) {
      return undefined
    }
    if (this.state.viewed) {
      return src
    }
    if (typeof stub === 'string') {
      return stub
    }
    return undefined
  }

  private get srcSet(): string | undefined {
    if (!this.state.viewed || this.state.cached === undefined) {
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
