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
    value: string[]
    onKeyDown: (e: React.KeyboardEvent, index: number) => void
    values: Array<{
      focused: boolean
      ref: RefObject<HTMLInputElement>
      onChange: (e: React.ChangeEvent, index: number) => React.ChangeEventHandler
      onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => React.MouseEventHandler
      onFocus: (e: React.FocusEvent, index: number) => React.FocusEventHandler
    }>
  }>
}

export interface CodeFieldControlState {
  focus: number
  refs: RefObject<HTMLInputElement>[]
}

export class CodeFieldControl extends React.Component<CodeFieldControlProps, CodeFieldControlState> {

  public state: CodeFieldControlState = {
    focus: this.props.autoFocus ? 0 : -1,
    refs: Array(this.props.value.length).fill(1).map(() => createRef()),
  }

  public componentDidUpdate(props: CodeFieldControlProps, state: CodeFieldControlState) {
    if (props.loading && state.focus !== -1) {
      this.setState({
        focus: -1,
      })
    }
  }

  private onFieldChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault()
    const value = e.target.value
    if ((this.props.value.length - 1) === index) {
      const current = this.state.refs[index]
      if (current && current.current) {
        current.current.select()
      }
    }
    const next = this.state.refs[index + 1]
    if (value !== '' && next && next.current) {
      next.current.focus()
    }
    const newValue = this.props.value.map((item, i) => index === i ? value : item)
    if (this.props.onChange) {
      this.props.onChange(newValue)
    }
    if (this.props.onReady && !newValue.includes('')) {
      this.props.onReady(newValue.join(''))
    }
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
          prev.current.focus()
        }
        break
      case 'ArrowRight':
        e.preventDefault()
        const next = this.state.refs[index + 1]
        if (next && next.current) {
          next.current.focus()
        }
        break
      case 'Backspace':
        if (this.props.value[index] === '') {
          const prev = this.state.refs[index - 1]
          if (prev && prev.current) {
            prev.current.focus()
          }
        }
        break
      default:
        if (this.props.value[index] === e.key) {
          e.preventDefault()
          const next = this.state.refs[index + 1]
          if (next && next.current) {
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
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onFieldBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focus: -1,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  public render() {
    return this.props.children({
      value: this.props.value,
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
