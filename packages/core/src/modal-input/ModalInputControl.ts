import {Component, RefObject, createRef} from 'react'
import ModalInputControlProps from './ModalInputControlProps'
import ModalInputControlState from './ModalInputControlState'

export default class ModalInputControl extends Component<ModalInputControlProps, ModalInputControlState> {

  public state: ModalInputControlState = {
    show: !!this.props.show,
    focused: false,
    hovered: false,
  }

  private modalInputRef: RefObject<HTMLInputElement> = createRef()

  public componentDidUpdate(props: ModalInputControlProps) {
    if (props.show !== this.props.show) {
      this.setState({show: !!this.props.show})
    }
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value)
    }
  }

  private onFocus: React.FocusEventHandler = (event: React.FocusEvent) => {
    event.preventDefault()
    this.show()
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
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hovered: this.state.hovered,
      show: this.state.show,
      modalInputRef: this.modalInputRef,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onModalInputBlur: this.onModalInputBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onShow: this.show,
      onHide: this.hide,
      onCancel: this.cancel,
      onSubmit: this.submit,
    })
  }

}
