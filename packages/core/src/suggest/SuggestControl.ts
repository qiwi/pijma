import {Component, RefObject, createRef} from 'react'
import SuggestControlProps from './SuggestControlProps'
import SuggestControlState from './SuggestControlState'
import SuggestOptionModel from './SuggestOptionModel'

export default class SuggestControl<V> extends Component<SuggestControlProps<SuggestOptionModel<V>, V>, SuggestControlState> {

  public state: SuggestControlState = {
    show: false,
    focused: false,
    hovered: false,
    result: false,
  }

  private inputRef: RefObject<HTMLInputElement> = createRef()

  public componentDidUpdate(props: SuggestControlProps<SuggestOptionModel<V>, V>) {
    if (props.items !== this.props.items) {
      this.setState({
        result: this.props.items.length > 0 || this.props.empty !== undefined,
      })
    }
  }

  private onRequest: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    this.request(event.currentTarget.value)
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

  private onShowFocus: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      show: true,
    })
  }

  private onInputFocus: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focused: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onInputBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.hide()
    this.setState({
      focused: false,
    })
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onModalInputBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus({preventScroll: true})
    }
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onMouseInputEnter: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      hovered: true,
    })
  }

  private onMouseInputLeave: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      hovered: false,
    })
  }

  private onItemKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      this.submit()
    }
    if (event.key === 'Escape') {
      this.cancel()
    }
  }

  private onModalItemKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      this.submit()
    }
  }

  private onResultItemsMouseDown: React.MouseEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
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

  private onSearchMouseDown: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.inputRef.current!.focus({preventScroll: true})
  }

  private onEscapeInputModal: () => void = () => {
    this.cancel()
  }

  private onHide: () => void = () => {
    this.hide()
  }

  private change: (value: V) => void = (value) => {
    this.setState({
      show: false,
      result: false,
    })
    this.props.onChange(value)
  }

  private submit: (value?: string) => void = (value) => {
    this.setState({
      show: false,
      result: false,
    })
    if (this.props.onSubmit) {
      this.props.onSubmit(value ? value : this.inputRef.current!.value)
    }
  }

  private request: (value: string) => void = (value) => {
    if (this.props.onRequest) {
      this.props.onRequest(value)
    }
  }

  private cancel: () => void = () => {
    this.setState({
      show: false,
      result: false,
    })
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  private get selected(): number | undefined {
    if (!this.props.value) {
      return undefined
    }
    const index = this.props.items.findIndex(item => this.props.equals(item.value, this.props.value!))
    return index !== -1 ? index : undefined
  }

  private onBack: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.cancel()
  }

  private onShowClick: () => void = () => {
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

  private hide = () => {
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
      selected: this.selected,
      show: this.state.show,
      result: this.state.result,
      inputRef: this.inputRef,
      onItemSelect: this.onSelect,
      onRequest: this.onRequest,
      onShowFocus: this.onShowFocus,
      onInputFocus: this.onInputFocus,
      onInputBlur: this.onInputBlur,
      onModalInputBlur: this.onModalInputBlur,
      onShowClick: this.onShowClick,
      onSearchMouseDown: this.onSearchMouseDown,
      onSearchClick: this.onSearchClick,
      onMouseInputEnter: this.onMouseInputEnter,
      onMouseInputLeave: this.onMouseInputLeave,
      onItemKeyDown: this.onItemKeyDown,
      onModalItemKeyDown: this.onModalItemKeyDown,
      onEscapeInputModal: this.onEscapeInputModal,
      onBack: this.onBack,
      onHide: this.onHide,
      onTotalClick: this.onTotalClick,
      onEmptyClick: this.onEmptyClick,
      onResultItemsMouseDown: this.onResultItemsMouseDown,
    })
  }

}
