import {Component, RefObject, createRef} from 'react'
import SuggestControlProps from './SuggestControlProps'
import SuggestControlState from './SuggestControlState'
import SuggestOptionModel from './SuggestOptionModel'

export default class SuggestControl<V> extends Component<SuggestControlProps<SuggestOptionModel<V>, V>, SuggestControlState> {

  public state: SuggestControlState = {
    show: false,
    focused: false,
    hovered: false,
  }

  private inputRef: RefObject<HTMLInputElement> = createRef()

  public componentDidUpdate(props: SuggestControlProps<SuggestOptionModel<V>, V>) {
    if (props.items !== this.props.items) {
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
    const item = this.props.items[index]
    if (!item.suggest) {
      this.hide()
    }
    if (this.props.onChange) {
      this.props.onChange(this.props.items[index].value)
    }
    if (this.inputRef.current) {
      this.inputRef.current.focus({preventScroll: true})
    }
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
    console.log('BLUR', event)
    // if (this.inputRef.current) {
    //   this.inputRef.current.focus()
    // }
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
    if (event.key === 'Tab' && this.inputRef.current) {
      this.inputRef.current.blur()
    }
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
      this.inputRef.current.focus({preventScroll: true})
    }
  }

  private submit: () => void = () => {
    if (this.props.onSubmit && this.inputRef.current) {
      this.props.onSubmit(this.inputRef.current.value)
    }
    this.hide()
  }

  private get selected(): number | undefined {
    if (!this.props.value) {
      return undefined
    }
    const index = this.props.items.findIndex(item => this.props.equals(item.value, this.props.value!))
    return index !== -1 ? index : undefined
  }

  private hide = () => {
    if (this.props.onHide) {
      this.props.onHide()
    }
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
