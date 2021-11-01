import React, {createRef, RefObject, FC} from 'react'

import {OptionModel} from '../option'

export interface SelectFieldControlProps<O extends OptionModel<V>, V> {
  items: O[]
  value: V
  disabled?: boolean
  onChange: (value: V) => void
  onHide?: () => void
  equals?: (a: V, b: V) => boolean
  onFocus?: () => void
  onBlur?: () => void
  children: FC<{
    modalRef: RefObject<HTMLDivElement>
    targetRef: RefObject<HTMLDivElement>
    containerRef: RefObject<HTMLDivElement>
    focused: boolean
    show: boolean
    select?: number
    onHide: () => void
    onItemSelect: (index: number) => void
    onActive?: React.MouseEventHandler
    onFocus?: React.FocusEventHandler
    onBlur?: React.FocusEventHandler
    onMobileBlur?: React.FocusEventHandler
    onKeyDown?: React.KeyboardEventHandler
  }>
}

export interface SelectFieldControlState {
  focus: boolean
  show: boolean
  select?: number
}

export class SelectFieldControl<O extends OptionModel<V>, V> extends React.Component<SelectFieldControlProps<O, V>, SelectFieldControlState> {

  private modalRef: RefObject<HTMLDivElement> = createRef()

  private targetRef: RefObject<HTMLDivElement> = createRef()

  private containerRef: RefObject<HTMLDivElement> = createRef()

  public state: SelectFieldControlState = {
    focus: false,
    show: false,
    select: undefined,
  }

  public componentDidMount() {
    this.setState({
      select: this.findItemIndex(),
    })
  }

  public componentDidUpdate(prevProps: Readonly<SelectFieldControlProps<O, V>>) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        select: this.findItemIndex(),
      })
    }
  }

  private onFocus: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focus: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focus: false,
      show: false,
    })
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onMobileBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    if (!this.modalRef.current) {
      this.setState({
        show: false,
        focus: false,
      })
    }
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onActive: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      show: !this.state.show,
    }, () => {
      if (this.modalRef.current) {
        this.modalRef.current!.focus({preventScroll: true})
      }
    })
  }

  private onKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        show: true,
      })
    }
    if (event.key === 'Escape') {
      this.setState({
        show: false,
      })
    }
  }

  private onSelect: (index: number) => void = (index: number) => {
    const item = this.props.items[index]
    this.props.onChange(item.value)
    this.setState({
      show: false,
    })
  }

  private equals(a: V, b: V): boolean {
    return this.props.equals ? this.props.equals(a, b) : a === b
  }

  private findItemIndex(): number | undefined {
    const index = this.props.items.findIndex(item => this.equals(this.props.value, item.value))
    return index === -1 ? undefined : index
  }

  private onHide: () => void = () => {
    this.setState({
      show: false,
    })
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  public render() {
    return this.props.children({
      modalRef: this.modalRef,
      targetRef: this.targetRef,
      containerRef: this.containerRef,
      focused: this.state.focus,
      show: this.state.show,
      select: this.state.select,
      onItemSelect: this.onSelect,
      onHide: this.onHide,
      onFocus: this.props.disabled ? undefined : this.onFocus,
      onBlur: this.props.disabled ? undefined : this.onBlur,
      onMobileBlur: this.props.disabled ? undefined : this.onMobileBlur,
      onKeyDown: this.props.disabled ? undefined : this.onKeyDown,
      onActive: this.props.disabled ? undefined : this.onActive,
    })
  }

}
