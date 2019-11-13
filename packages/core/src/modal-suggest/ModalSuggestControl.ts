import {Component, RefObject, createRef} from 'react'
import ModalSuggestControlProps from './ModalSuggestControlProps'
import ModalSuggestControlState from './ModalSuggestControlState'
import ModalSuggestOptionModel from './ModalSuggestOptionModel'

export default class ModalSuggestControl<V> extends Component<ModalSuggestControlProps<ModalSuggestOptionModel<V>, V>, ModalSuggestControlState> {

  public state: ModalSuggestControlState = {
    show: false,
    focused: false,
    hovered: false,
  }

  private inputRef: RefObject<HTMLInputElement> = createRef()

  private onRequest: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    if (this.state.show && this.props.onRequest) {
      this.props.onRequest(event.currentTarget.value)
    }
  }

  private onSelect: (index: number) => void = (index: number) => {
    const item = this.props.items[index]
    if (item.suggest) {
      this.request(item.suggest)
    }
    else {
      this.change(item.value)
    }
    this.inputRef.current!.focus({preventScroll: true})
  }

  private onFocus: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      show: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      show: true,
    })
  }

  private onBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onModalInputBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus({preventScroll: true})
    }
  }

  private onMouseEnter: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      hovered: true,
    })
  }

  private onMouseLeave: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      hovered: false,
    })
  }

  private onKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      this.submit()
    }
  }

  private onTotalClick: () => void = () => {
    if (this.props.total && this.props.total.link) {
      this.submit(this.props.total.link.suggest)
    }
  }

  private onEmptyClick: () => void = () => {
    if (this.props.empty && this.props.empty.link) {
      this.request(this.props.empty.link.suggest)
    }
  }

  private onSearchClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.submit()
  }

  private onEscape: () => void = () => {
    this.cancel()
  }

  private onBack: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.cancel()
  }

  private onHide: () => void = () => {
    this.hide()
  }

  private onShow: () => void = () => {
    this.show()
  }

  private show: () => void = () => {
    this.setState({
      show: true,
    })
    if (this.props.suggest) {
      this.request(this.props.suggest)
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

  private submit: (value?: string) => void = (value) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(value ? value : this.inputRef.current!.value)
    }
    this.setState({
      show: false,
    })
  }

  private request: (value: string) => void = (value) => {
    if (this.props.onRequest) {
      this.props.onRequest(value)
    }
  }

  private change: (value: V) => void = (value) => {
    this.setState({
      show: false,
    })
    this.props.onChange(value)
  }

  private cancel: () => void = () => {
    if (this.props.onCancel) {
      this.props.onCancel()
    }
    this.setState({
      show: false,
    })
  }

  private get selected(): number | undefined {
    if (!this.props.value) {
      return undefined
    }
    const index = this.props.items.findIndex(item => this.props.equals(item.value, this.props.value!))
    return index !== -1 ? index : undefined
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hovered: this.state.hovered,
      selected: this.selected,
      show: this.state.show,
      inputRef: this.inputRef,
      onRequest: this.onRequest,
      onSelect: this.onSelect,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      onModalInputBlur: this.onModalInputBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onKeyDown: this.onKeyDown,
      onShow: this.onShow,
      onHide: this.onHide,
      onBack: this.onBack,
      onEscape: this.onEscape,
      onSearchClick: this.onSearchClick,
      onTotalClick: this.onTotalClick,
      onEmptyClick: this.onEmptyClick,
    })
  }

}
