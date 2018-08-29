import React from 'react'

import OptionControlProps from './OptionControlProps'

export default class OptionControl<V> extends React.Component<OptionControlProps<V>, {}> {

  private onClick: React.MouseEventHandler<HTMLElement> = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
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

  public render() {
    return this.props.children({
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
    })
  }

}
