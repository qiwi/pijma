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
  view: boolean
  load: boolean
  done: boolean
  cache: boolean | undefined
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    cachedDelay: 50,
    viewedDelay: 1000,
  }

  public state: ImageControlState = {
    view: false,
    load: false,
    done: false,
    cache: undefined,
  }

  public componentWillUnmount: () => void = () => {
    clearTimeout(this.viewedTimer)
    clearTimeout(this.cachedTimer)
  }

  private viewedTimer: number | undefined

  private cachedTimer: number | undefined

  private onChange: (inView: boolean) => void = (inView) => {
    this.setState({
      view: inView,
    })
    clearTimeout(this.viewedTimer)
    if (!inView) {
      return
    }
    if (this.state.cache === undefined) {
      this.setState({
        cache: true,
      })
      const image = document.createElement('img')
      image.src = this.props.src
      image.srcset = this.props.srcSet || ''
      image.onload = () => {
        clearTimeout(this.viewedTimer)
        this.setState({
          load: true,
          cache: false,
        })
      }
      this.cachedTimer = setTimeout(() => {
        image.onload = null
        image.src = ''
        image.srcset = ''
        this.setState({
          cache: false,
        })
      }, this.props.cachedDelay)
    }
    this.viewedTimer = setTimeout(() => {
      this.setState({
        load: true,
      })
    }, this.props.viewedDelay)
  }

  private onLoad: () => void = () => {
    if (!this.state.load) {
      return
    }
    if (this.props.onLoad) {
      this.props.onLoad()
    }
    this.setState({
      done: true,
    })
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.load) {
      return src
    }
    if (this.state.cache || !this.state.view) {
      return undefined
    }
    if (typeof stub === 'string') {
      return stub
    }
    return undefined
  }

  private get srcSet(): string | undefined {
    if (this.state.load) {
      return this.props.srcSet
    }
    return undefined
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.done,
      onChange: this.onChange,
      onLoad: this.onLoad,
    })
  }

}
