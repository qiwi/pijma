import React from 'react'

import OptionControlProps from './OptionControlProps'

export default class OptionControl<V> extends React.Component<
  OptionControlProps<V>,
  {}
> {
  private onClick: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    if (this.props.disabled) {
      return
    }
    this.props.onClick(this.props.value)
  }

  private onMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
    if (this.props.disabled) {
      return
    }
    this.props.onMouseEnter(this.props.value)
  }

  private onMouseLeave: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    if (this.props.disabled) {
      return
    }
    this.props.onMouseLeave(event)
  }

  public render() {
    return this.props.children({
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    })
  }
}
