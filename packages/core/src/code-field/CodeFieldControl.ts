import React, {createRef, RefObject} from 'react'

import RenderChild from '../RenderChild'

export interface CodeFieldControlProps {
  autoFocus: boolean
  value: string[]
  loading: boolean
  onChange?: (value: string[]) => void
  onFocus?: () => void
  onBlur?: () => void
  onReady?: (value?: string) => void
  children: RenderChild<{
    onKeyDown: (e: React.KeyboardEvent, index: number) => void
    values: Array<{
      focused: boolean
      ref: RefObject<HTMLInputElement>
      onChange: (e: React.ChangeEvent, index: number) => React.ChangeEventHandler
      onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => React.MouseEventHandler
      onFocus: (e: React.FocusEvent, index: number) => React.FocusEventHandler
      onBlur: (e: React.FocusEvent, index: number) => React.FocusEventHandler
    }>
  }>
}

export interface CodeFieldControlState {
  focus: number
  refs: RefObject<HTMLInputElement>[]
}

export class CodeFieldControl extends React.Component<CodeFieldControlProps, CodeFieldControlState> {

  private preventBlur = false

  private focused = false

  private onReadyTimeout: any

  public state: CodeFieldControlState = {
    focus: this.props.autoFocus ? 0 : -1,
    refs: Array(this.props.value.length).fill(1).map(() => createRef()),
  }

  public componentDidMount () {
    this.focused = this.props.autoFocus
    document.addEventListener('mousedown', this.onMouseDown)
  }

  public componentWillUnmount () {
    document.removeEventListener('mousedown', this.onMouseDown)
  }

  public componentDidUpdate (props: CodeFieldControlProps, state: CodeFieldControlState) {
    if (props.loading && state.focus !== -1) {
      this.setState({
        focus: -1,
      })
      this.focused = false
    }
  }

  private onFieldChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault()
    const value = e.target.value
    if (value.length > 1) {
      return
    }
    clearTimeout(this.onReadyTimeout)
    const newValue = this.props.value.map((item, i) => index === i ? value : item)
    if (newValue.includes('')) {
      if ((this.props.value.length - 1) === index) {
        const current = this.state.refs[index]
        if (current && current.current) {
          current.current.select()
        }
      }
      const next = this.state.refs[index + 1]
      if (value !== '' && next && next.current) {
        this.preventBlur = false
        next.current.focus()
      }
    }
    if (this.props.onChange) {
      this.props.onChange(newValue)
    }
    this.onReadyTimeout = setTimeout(() => {
      if (this.props.onReady && !newValue.includes('')) {
        this.props.onReady(newValue.join(''))
      }
    }, 200)
  }

  private onFieldClick: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void = (e: React.ChangeEvent<HTMLInputElement>, _index: number) => {
    e.preventDefault()
  }

  private onKeyDown: (e: React.KeyboardEvent, index: number) => void = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        const prev = this.state.refs[index - 1]
        if (prev && prev.current) {
          this.preventBlur = false
          prev.current.focus()
        }
        break
      case 'ArrowRight':
        e.preventDefault()
        const next = this.state.refs[index + 1]
        if (next && next.current) {
          this.preventBlur = false
          next.current.focus()
        }
        break
      case 'Backspace':
        if (this.props.value[index] === '') {
          const prev = this.state.refs[index - 1]
          if (prev && prev.current) {
            this.preventBlur = false
            prev.current.focus()
          }
        }
        break
      default:
        if (this.props.value[index] === e.key) {
          e.preventDefault()
          const next = this.state.refs[index + 1]
          if (next && next.current) {
            this.preventBlur = false
            next.current.focus()
          }
        }
    }
  }
  private onFieldFocus: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault()
    this.setState({
      focus: index,
    })
    const field = this.state.refs[index]
    if (field && field.current && field.current.value) {
      field.current.select()
    }
    if (this.props.onFocus && !this.focused) {
      this.props.onFocus()
    }
    this.focused = true
    this.preventBlur = true
  }

  private onFieldBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    e.preventDefault()
    this.setState({
      focus: -1,
    })
    if (this.props.onBlur && this.preventBlur) {
      this.props.onBlur()
    }
    if (this.preventBlur) {
      this.focused = false
    }
  }

  private onMouseDown: EventListenerOrEventListenerObject = (e: any) => {
    this.preventBlur = !this.state.refs.map(item => item.current).includes(e.target)
  }

  public render () {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      values: Array(this.props.value.length).fill(0).map((item, index) => ({
        ...item,
        focused: this.state.focus === index,
        ref: this.state.refs[index],
        onChange: this.onFieldChange,
        onClick: this.onFieldClick,
        onFocus: this.onFieldFocus,
        onBlur: this.onFieldBlur,
      })),
    })
  }

}
