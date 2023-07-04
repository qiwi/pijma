import React, {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PureComponent,
} from 'react'
import {
  conformToMask as tmcConformToMask,
  createTextMaskInputElement as tmcCreateTextMaskInputElement,
} from 'text-mask-core'

export interface TextMaskInputElement {
  update: (rawValue?: string) => void
}

export interface CreateTextMaskConfig {
  inputElement: HTMLInputElement
  mask?: Mask
  guide?: boolean
  pipe?: Pipe
  placeholderChar?: string
  keepCharPositions?: boolean
  showMask?: boolean
}

export function createTextMaskInputElement(
  config: CreateTextMaskConfig,
): TextMaskInputElement {
  return tmcCreateTextMaskInputElement(config)
}

export interface ConformToMaskResult {
  conformedValue: string
  meta: {
    someCharsRejected: boolean
  }
}

export interface ConformToMaskConfig {
  placeholder?: string
  placeholderChar?: string
  currentCaretPosition?: number
  keepCharPositions?: boolean
  guide?: boolean
  previousConformedValue?: string
}

export function conformToMask(
  text: string,
  mask: Mask,
  config?: ConformToMaskConfig,
): ConformToMaskResult {
  return tmcConformToMask(text, mask, config)
}

function isNil(value: any) {
  return typeof value === 'undefined' || value === null
}

export type MaskArray = (string | RegExp)[] | boolean

export type Mask = MaskArray | ((value: string) => MaskArray)

export interface PipeConfig {
  rawValue: string
  placeholder: string
  placeholderChar: string
  currentCaretPosition: number
  keepCharPositions: boolean
  guide: boolean
  previousConformedValue: string
}

export type PipeResult =
  | false
  | string
  | {
      value: string
      indexesOfPipedChars: number[]
    }

export type Pipe = (conformedValue: string, config: PipeConfig) => PipeResult

export interface MaskedInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  mask: Mask
  value?: string
  pipe?: Pipe
  guide?: boolean
  placeholderChar?: string
  keepCharPositions?: boolean
  showMask?: boolean
  inputRef?: ForwardedRef<HTMLInputElement>
}

class MaskedInputComponent extends PureComponent<MaskedInputProps, {}> {
  public static displayName = 'MaskedInputComponent'

  private inputElement!: HTMLInputElement

  private textMaskInputElement!: TextMaskInputElement

  constructor(props: MaskedInputProps) {
    super(props)
    this.setRef = this.setRef.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  setRef(inputElement: HTMLInputElement) {
    this.inputElement = inputElement

    const { inputRef } = this.props
    if (typeof inputRef === 'function') {
      inputRef(inputElement)
    } else if (inputRef) {
      inputRef.current = inputElement
    }
  }

  initTextMask() {
    const {
      mask,
      guide,
      value,
      pipe,
      placeholderChar,
      keepCharPositions,
      showMask,
    } = this.props
    this.textMaskInputElement = createTextMaskInputElement({
      inputElement: this.inputElement,
      mask,
      guide,
      pipe,
      placeholderChar,
      keepCharPositions,
      showMask,
    })
    this.textMaskInputElement.update(value)
  }

  componentDidMount() {
    this.initTextMask()
  }

  componentDidUpdate(prevProps: MaskedInputProps) {
    const { value, pipe, mask, guide, placeholderChar, showMask } = this.props
    const isPipeChanged =
      typeof pipe === 'function' && typeof prevProps.pipe === 'function'
        ? pipe.toString() !== prevProps.pipe.toString()
        : (isNil(pipe) && !isNil(prevProps.pipe)) ||
          (!isNil(pipe) && isNil(prevProps.pipe))
    const isMaskChanged =
      typeof mask === 'function' && typeof prevProps.mask === 'function'
        ? mask.toString() !== prevProps.mask.toString()
        : (isNil(mask) && !isNil(prevProps.mask)) ||
          (!isNil(mask) && isNil(prevProps.mask))
    const isSettingChanged =
      guide !== prevProps.guide ||
      placeholderChar !== prevProps.placeholderChar ||
      showMask !== prevProps.showMask
    const isValueChanged = value !== this.inputElement.value
    if (isValueChanged || isSettingChanged || isPipeChanged || isMaskChanged) {
      this.initTextMask()
    }
  }

  render() {
    const exclude = [
      'mask',
      'guide',
      'pipe',
      'placeholderChar',
      'keepCharPositions',
      'showMask',
      'value',
      'onBlur',
      'onChange',
      'inputRef',
    ]
    const props = Object.fromEntries(
      Object.entries(this.props).filter(([key]) => !exclude.includes(key)),
    )
    return (
      <input
        ref={this.setRef}
        onBlur={this.onBlur}
        onChange={this.onChange}
        defaultValue=''
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

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (props, ref) => <MaskedInputComponent {...props} inputRef={ref} />,
)

MaskedInput.displayName = 'MaskedInput'
