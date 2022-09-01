import {
  ChangeEventHandler,
  Component,
  createRef,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react'

export interface CodeFieldControlProps {
  autoFocus: boolean
  value: string[]
  loading: boolean
  type?: 'text' | 'tel'
  onChange?: (value: string[]) => void
  onFocus?: () => void
  onBlur?: () => void
  onReady?: (value?: string) => void
  children: FC<{
    values: Array<{
      focused: boolean
      ref: RefObject<HTMLInputElement>
      onKeyDown: KeyboardEventHandler
      onChange: ChangeEventHandler
      onClick: MouseEventHandler
      onFocus: FocusEventHandler
      onBlur: FocusEventHandler
    }>
  }>
}

export interface CodeFieldControlState {
  focus: number
  refs: RefObject<HTMLInputElement>[]
}

export class CodeFieldControl extends Component<
  CodeFieldControlProps,
  CodeFieldControlState
> {
  public static displayName = 'CodeFieldControl'

  private preventBlur = true

  private preventFocus = true

  private onReadyTimeout: any

  public state: CodeFieldControlState = {
    focus: this.props.autoFocus ? 0 : -1,
    refs: new Array(this.props.value.length).fill(1).map(() => createRef()),
  }

  public componentDidMount() {
    this.preventFocus = !this.props.autoFocus
    document.addEventListener('mousedown', this.onMouseDown)
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown)
    clearTimeout(this.onReadyTimeout)
  }

  public componentDidUpdate(
    props: CodeFieldControlProps,
    state: CodeFieldControlState,
  ) {
    if (props.loading && state.focus !== -1) {
      this.setState({
        focus: -1,
      })
      this.preventFocus = true
    }
  }

  private onFieldChange: (
    index: number,
  ) => ChangeEventHandler<HTMLInputElement> = (index) => (e) => {
    e.preventDefault()
    const value = e.target.value
    if (
      value.length > 1 ||
      (this.props.type === 'tel' && !/^\d?$/.test(value))
    ) {
      return
    }
    clearTimeout(this.onReadyTimeout)
    const newValue = this.props.value.map((item, i) =>
      index === i ? value : item,
    )
    if (newValue.includes('')) {
      if (this.props.value.length - 1 === index) {
        const current = this.state.refs[index]
        if (current && current.current) {
          current.current.select()
        }
      }
      const next = this.state.refs[index + 1]
      if (value !== '' && next && next.current) {
        this.preventBlur = true
        next.current.focus()
      }
    }
    if (this.props.onChange) {
      this.props.onChange(newValue)
    }
    if (this.props.onReady && !newValue.includes('')) {
      this.onReadyTimeout = setTimeout(() => {
        if (this.props.onReady && !newValue.includes('')) {
          this.props.onReady(newValue.join(''))
        }
      }, 200)
    }
  }

  private onFieldClick: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
  }

  private onFieldKeyDown: (index: number) => KeyboardEventHandler =
    (index) => (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          const prev = this.state.refs[index - 1]
          if (prev && prev.current) {
            this.preventBlur = true
            prev.current.focus()
          }
          break
        case 'ArrowRight':
          e.preventDefault()
          const next = this.state.refs[index + 1]
          if (next && next.current) {
            this.preventBlur = true
            next.current.focus()
          }
          break
        case 'Backspace':
          if (this.props.value[index] === '') {
            const prev = this.state.refs[index - 1]
            if (prev && prev.current) {
              this.preventBlur = true
              prev.current.focus()
            }
          }
          break
        default:
          if (this.props.value[index] === e.key) {
            e.preventDefault()
            const next = this.state.refs[index + 1]
            if (next && next.current) {
              this.preventBlur = true
              next.current.focus()
            }
          }
      }
    }

  private onFieldFocus: (index: number) => FocusEventHandler =
    (index) => (e) => {
      e.preventDefault()
      this.setState({
        focus: index,
      })
      const field = this.state.refs[index]
      if (field && field.current && field.current.value) {
        field.current.select()
      }
      if (this.props.onFocus && this.preventFocus) {
        this.props.onFocus()
      }
      this.preventFocus = false
      this.preventBlur = false
    }

  private onFieldBlur: FocusEventHandler = (e) => {
    e.preventDefault()
    this.setState({
      focus: -1,
    })
    if (this.props.onBlur && !this.preventBlur) {
      this.props.onBlur()
    }
    if (!this.preventBlur) {
      this.preventFocus = true
    }
  }

  private onMouseDown: EventListenerOrEventListenerObject = (e) => {
    this.preventBlur = this.state.refs
      .map((item) => item.current)
      .includes(e.target as HTMLInputElement)
  }

  public render() {
    return this.props.children({
      values: new Array(this.props.value.length).fill(0).map((item, index) => ({
        ...item,
        focused: this.state.focus === index,
        ref: this.state.refs[index],
        onKeyDown: this.onFieldKeyDown(index),
        onChange: this.onFieldChange(index),
        onClick: this.onFieldClick,
        onFocus: this.onFieldFocus(index),
        onBlur: this.onFieldBlur,
      })),
    })
  }
}
