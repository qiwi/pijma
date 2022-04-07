import React, {ChangeEvent, FocusEvent} from 'react'
import {createTextMaskInputElement} from 'text-mask-core'

function isNil(value: any) {
  return typeof value === 'undefined' || value === null
}

export type MaskArray = (string | RegExp)[] | boolean

export type Mask = MaskArray | ((value: string) => MaskArray)

export type Pipe = (conformedValue: string, config: any) => false | string | { value: string, indexesOfPipedChars: number[] }

export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: Mask
  guide?: boolean
  placeholderChar?: string
  keepCharPositions?: boolean
  pipe?: Pipe
  showMask?: boolean
}

export class MaskedInput extends React.PureComponent<MaskedInputProps, {}> {

  private inputElement: HTMLInputElement | undefined
  private textMaskInputElement: any

  constructor(props: MaskedInputProps) {
    super(props)
    this.setRef = this.setRef.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  setRef(inputElement: HTMLInputElement) {
    this.inputElement = inputElement
  }

  initTextMask() {
    const {props, props: {value}} = this
    this.textMaskInputElement = createTextMaskInputElement({
      inputElement: this.inputElement,
      ...props,
    })
    this.textMaskInputElement.update(value)
  }

  componentDidMount() {
    this.initTextMask()
  }

  componentDidUpdate(prevProps: MaskedInputProps) {
    const {value, pipe, mask, guide, placeholderChar, showMask} = this.props
    const isPipeChanged = typeof pipe === 'function' && typeof prevProps.pipe === 'function' ? pipe.toString() !== prevProps.pipe.toString() : isNil(pipe) && !isNil(prevProps.pipe) || !isNil(pipe) && isNil(prevProps.pipe)
    const isMaskChanged = typeof mask === 'function' && typeof prevProps.mask === 'function' ? mask.toString() !== prevProps.mask.toString() : isNil(mask) && !isNil(prevProps.mask) || !isNil(mask) && isNil(prevProps.mask)
    const isSettingChanged = guide !== prevProps.guide || placeholderChar !== prevProps.placeholderChar || showMask !== prevProps.showMask
    const isValueChanged = value !== this.inputElement?.value
    if (isValueChanged || isSettingChanged || isPipeChanged || isMaskChanged) {
      this.initTextMask()
    }
  }

  render() {
    const exclude = ['mask', 'guide', 'pipe', 'placeholderChar', 'keepCharPositions', 'value', 'onBlur', 'onChange', 'showMask']
    const props = Object.fromEntries(Object.entries(this.props).filter(([key]) => !exclude.includes(key)))
    return (
      <input
        ref={this.setRef}
        onBlur={this.onBlur}
        onChange={this.onChange}
        defaultValue={this.props.value}
        {...props}
      />
    )
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.textMaskInputElement.update()
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }

  onBlur(event: FocusEvent<HTMLInputElement>) {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event)
    }
  }

}
