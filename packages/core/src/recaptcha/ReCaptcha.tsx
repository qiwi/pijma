import React, {PureComponent, RefObject} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import {keyframes} from '../styled'
import {Pos, Card} from '../primitive'

export interface ReCaptchaProps {
  siteKey: string
  tabIndex?: number
  value?: string
  onChange: (token: string | undefined) => void
}

const width = 304

const height = 78

const placeholder = keyframes({
  '0%': {
    opacity: 0.04,
  },
  '50%': {
    opacity: 0.10,
  },
  '100%': {
    opacity: 0.04,
  },
})

export class ReCaptcha extends PureComponent<ReCaptchaProps> {

  private element: RefObject<ReCAPTCHA> = React.createRef()

  private wrapper: RefObject<HTMLDivElement> = React.createRef()

  private onChange = (token: string | null) => {
    this.props.onChange(token === null ? undefined : token)
  }

  private resize = () => {
    const wrapper = this.wrapper.current
    if (!wrapper) {
      return
    }
    wrapper.style.height = 'auto'
    wrapper.style.transform = wrapper.style.webkitTransform = 'scale(1)'
    const size = wrapper.getBoundingClientRect()
    const scale = size.width / width
    if (scale >= 1) {
      return
    }
    wrapper.style.height = `${height * scale}px`
    wrapper.style.transform = wrapper.style.webkitTransform = `scale(${scale})`
    wrapper.style.transformOrigin = wrapper.style.webkitTransformOrigin = '0 0'
  }

  public componentDidMount() {
    this.resize()
  }

  public componentDidUpdate(prevProps: Readonly<ReCaptchaProps>): void {
    if (!this.element.current) {
      return
    }
    if (prevProps.value === undefined) {
      return
    }
    if (this.props.value !== undefined) {
      return
    }
    this.element.current.reset()
  }

  public render() {
    return (
      <Pos type="relative" ref={this.wrapper}>
        <Pos type="absolute" top={0} left={0} width={`${width}px`} height={`${height}px`} overflow="hidden">
          <Card width="302px" height="76px" bg="#f9f9f9" b="1px solid #d3d3d3" r="3px"/>
          <Pos type="absolute" top="22px" left="13px">
            <Card width="28px" height="28px" bg="#fff" b="2px solid #c1c1c1" r="2px"/>
          </Pos>
          <Pos type="absolute" top="26px" left="52px">
            <Card width="128px" height="20px" bg="#000" r="4px" animation={`${placeholder} 1800ms ease-in-out infinite`}/>
          </Pos>
        </Pos>
        <Pos type="relative" width={`${width}px`} height={`${height}px`}>
          <ReCAPTCHA
            ref={this.element}
            sitekey={this.props.siteKey}
            tabindex={this.props.tabIndex}
            theme="light"
            size="normal"
            type="image"
            onChange={this.onChange}
          />
        </Pos>
      </Pos>
    )
  }

}
