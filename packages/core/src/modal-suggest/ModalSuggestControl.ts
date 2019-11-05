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

  private modalInputRef: RefObject<HTMLInputElement> = createRef()

  private onRequest: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    this.setState({show: true})
    if (this.state.show && this.props.onRequest) {
      this.props.onRequest(event.currentTarget.value)
    }
  }

  private onChange: (index: number) => void = (index: number) => {
    const item = this.props.items[index]
    if (!item.suggest) {
      this.hide()
    }
    if (this.props.onChange) {
      this.props.onChange(this.props.items[index].value, item.suggest)
    }
  }

  private onFocus: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    this.setState({
      show: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onModalInputBlur: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    if (this.modalInputRef && this.modalInputRef.current) {
      this.modalInputRef.current.focus()
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

  private show: () => void = () => {
    this.setState({
      show: true,
    })
    if (this.props.onRequest && this.props.suggest && this.props.suggest !== '') {
      this.props.onRequest(this.props.suggest)
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

  private cancel: () => void = () => {
    this.setState({
      show: false,
    })
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  private submit: () => void = () => {
    this.setState({
      show: false,
    })
    if (this.props.onSubmit && this.modalInputRef.current) {
      this.props.onSubmit(this.modalInputRef.current.value)
    }
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
      modalInputRef: this.modalInputRef,
      onRequest: this.onRequest,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onModalInputBlur: this.onModalInputBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onKeyDown: this.onKeyDown,
      onShow: this.show,
      onHide: this.hide,
      onCancel: this.cancel,
      onSubmit: this.submit,
    })
  }

}
