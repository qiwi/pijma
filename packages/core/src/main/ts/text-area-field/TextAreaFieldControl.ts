import {
  ChangeEventHandler,
  Component,
  createRef,
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
} from 'react'

import { TextAreaFieldControlProps } from './TextAreaFieldControlProps'
import { TextAreaFieldControlState } from './TextAreaFieldControlState'

export class TextAreaFieldControl extends Component<
  TextAreaFieldControlProps,
  TextAreaFieldControlState
> {
  public static displayName = 'TextAreaFieldControl'

  public state = {
    focused: false,
    rows: 1,
    animate: false,
  }

  private field: RefObject<HTMLTextAreaElement> =
    createRef<HTMLTextAreaElement>()

  public componentDidMount(): void {
    this.resize(false)
  }

  public componentDidUpdate(prevProps: TextAreaFieldControlProps): void {
    if (this.props.value !== prevProps.value) {
      this.resize(!this.props.value.endsWith('\n'))
    }
  }

  private resize(animate: boolean): void {
    if (!this.field.current) {
      return
    }
    const cloned = this.field.current.cloneNode(true) as HTMLTextAreaElement
    document.body.append(cloned)
    const style = getComputedStyle(cloned)
    const lineHeight = Number.parseInt(style.lineHeight || '0', 10)
    const paddingTop = Number.parseInt(style.paddingTop || '0', 10)
    const paddingBottom = Number.parseInt(style.paddingBottom || '0', 10)
    cloned.style.transition = 'none'
    cloned.style.width = `${this.field.current.getBoundingClientRect().width}px`
    cloned.style.height = `${lineHeight}px`
    cloned.value = cloned.value + '¯_(ツ)_/¯'
    const scrollHeight = cloned.scrollHeight - paddingTop - paddingBottom
    cloned.remove()
    this.setState({
      rows: Math.ceil(scrollHeight / lineHeight),
      animate,
    })
  }

  private onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value)
    }
  }

  private onFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    this.setState({
      focused: true,
    })
    event.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    this.setState({
      focused: false,
    })
    event.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  public render() {
    return this.props.children({
      rows: this.state.rows,
      ref: this.field,
      focused: this.state.focused,
      animate: this.state.animate,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
    })
  }
}
