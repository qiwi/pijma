import {Component, RefObject, createRef} from 'react'
import SuggestControlProps from './SuggestControlProps'
import SuggestControlState from './SuggestControlState'

export default class SuggestControl<V> extends Component<SuggestControlProps<V>, SuggestControlState> {

  public state: SuggestControlState = {
    show: this.props.items.length > 0,
    focused: false,
    hovered: false,
  }

  private inputRef: RefObject<HTMLInputElement> = createRef()

  public componentDidUpdate(props: SuggestControlProps<V>) {
    if (
      props.items.length !== this.props.items.length
      || props.items.some((item, index) => !this.equals(item, this.props.items[index]))
    ) {
      this.setState({show: this.props.items.length > 0})
    }
  }

  private onRequest: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (this.props.onRequest) {
      this.props.onRequest(event.currentTarget.value)
    }
  }

  private onChange: (index: number) => void = (index: number) => {
    if (this.props.onChange) {
      this.props.onChange(this.props.items[index])
    }
    this.hide()
  }

  private onFocus: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    this.setState({focused: true})
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    this.hide()
    this.setState({focused: false})
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onMouseEnter: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({hovered: true})
  }

  private onMouseLeave: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({hovered: false})
  }

  private onKeyDown: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onSubmit && event.key === 'Enter') {
      this.submit()
    }
  }

  private onSearchClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    this.submit()
  }

  private onSearchMouseDown: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    if (this.inputRef.current) {
      this.inputRef.current.focus()
    }
  }

  private submit: () => void = () => {
    if (this.props.onSubmit && this.inputRef.current) {
      this.props.onSubmit(this.inputRef.current.value)
    }
    this.hide()
  }

  private equals: (a: V, b: V) => boolean = (a, b) => {
    if (this.props.equals) {
      return this.props.equals(a, b)
    }
    return a === b
  }

  private get selected(): number | undefined {
    const index = this.props.items.findIndex(item => {
      if (this.props.equals && this.props.value) {
        return this.props.equals(item, this.props.value)
      }
      return item === this.props.value
    })
    return index !== -1 ? index : undefined
  }

  private hide: () => void = () => {
    this.setState({
      show: false,
    })
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hovered: this.state.hovered,
      selected: this.selected,
      show: this.state.show,
      inputRef: this.inputRef,
      onChange: this.onChange,
      onRequest: this.onRequest,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onSearchMouseDown: this.onSearchMouseDown,
      onSearchClick: this.onSearchClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onKeyDown: this.onKeyDown,
      onSubmit: this.submit,
      onHide: this.hide,
    })
  }

}
