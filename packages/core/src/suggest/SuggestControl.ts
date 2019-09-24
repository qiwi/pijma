import {Component, RefObject, createRef} from 'react'
import SuggestControlProps from './SuggestControlProps'
import SuggestControlState from './SuggestControlState'

export default class SuggestControl<I> extends Component<SuggestControlProps<I>, SuggestControlState> {

  public state: SuggestControlState = {
    show: !!this.props.show,
    focused: false,
    hovered: false,
  }

  private inputRef: RefObject<HTMLInputElement> = createRef()

  public componentDidUpdate(props: SuggestControlProps<I>) {
    if (props.show !== this.props.show) {
      this.setState({show: !!this.props.show})
    }
    if (props.items !== this.props.items) {
      this.setState({show: this.props.items.length > 0})
    }
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value)
    }
  }

  private onSubmit: () => void = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit()
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

  private show: () => void = () => {
    this.setState({
      show: true,
    })
    if (this.props.onShow) {
      this.props.onShow()
    }
  }

  private hide: () => void = () => {
    this.setState({
      show: false,
    })
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hovered: this.state.hovered,
      show: this.state.show,
      inputRef: this.inputRef,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onShow: this.show,
      onHide: this.hide,
      onSubmit: this.onSubmit,
    })
  }

}
