import {Component, ReactNode, FC} from 'react'

import {Value} from '../primitive'

export interface ImageControlProps {
  width: Value
  height: Value
  src: string
  srcSet?: string
  stub?: string | ReactNode
  cachedDelay?: number
  viewedDelay?: number
  onLoad?: () => void
  children: FC<{
    src: string | undefined
    srcSet: string | undefined
    loaded: boolean
    onChange: (inView: boolean) => void
    onLoad: () => void
  }>
}

enum Step {
  NONE,
  CHECK_CACHE,
  NO_CACHE,
  LOAD,
  DONE,
}

export interface ImageControlState {
  step: Step
}

export class ImageControl extends Component<ImageControlProps, ImageControlState> {

  public static defaultProps = {
    cachedDelay: 50,
    viewedDelay: 1000,
  }

  public state: ImageControlState = {
    step: Step.NONE,
  }

  public componentWillUnmount: () => void = () => {
    clearTimeout(this.viewedTimer)
    clearTimeout(this.cachedTimer)
  }

  private viewedTimer: number | undefined

  private cachedTimer: number | undefined

  private onChange: (inView: boolean) => void = (inView) => {
    clearTimeout(this.viewedTimer)
    if (!inView) {
      return
    }
    if (this.state.step === Step.NONE) {
      this.setState({
        step: Step.CHECK_CACHE,
      })
      const image = document.createElement('img')
      image.src = this.props.src
      image.srcset = this.props.srcSet || ''
      image.onload = () => {
        clearTimeout(this.viewedTimer)
        clearTimeout(this.cachedTimer)
        this.setState({
          step: Step.LOAD,
        })
      }
      this.cachedTimer = setTimeout(() => {
        image.onload = null
        image.src = ''
        image.srcset = ''
        this.setState({
          step: Step.NO_CACHE,
        })
      }, this.props.cachedDelay)
    }
    this.viewedTimer = setTimeout(() => {
      this.setState({
        step: Step.LOAD,
      })
    }, this.props.viewedDelay)
  }

  private onLoad: () => void = () => {
    if (this.state.step !== Step.LOAD) {
      return
    }
    if (this.props.onLoad) {
      this.props.onLoad()
    }
    this.setState({
      step: Step.DONE,
    })
  }

  private get src(): string | undefined {
    const {stub, src} = this.props
    if (this.state.step === Step.LOAD || this.state.step === Step.DONE) {
      return src
    }
    if (this.state.step === Step.NONE || this.state.step === Step.CHECK_CACHE) {
      return undefined
    }
    if (typeof stub === 'string') {
      return stub
    }
    return undefined
  }

  private get srcSet(): string | undefined {
    if (this.state.step === Step.LOAD || this.state.step === Step.DONE) {
      return this.props.srcSet
    }
    return undefined
  }

  public render() {
    return this.props.children({
      src: this.src,
      srcSet: this.srcSet,
      loaded: this.state.step === Step.DONE,
      onChange: this.onChange,
      onLoad: this.onLoad,
    })
  }

}
