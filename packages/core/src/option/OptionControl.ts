import { Component, MouseEventHandler } from 'react'

import { OptionControlProps } from './OptionControlProps'

export class OptionControl<V> extends Component<OptionControlProps<V>, {}> {
  public static displayName = 'OptionControl'

  private onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (this.props.disabled) {
      return
    }
    this.props.onClick(this.props.value)
  }

  private onMouseEnter: MouseEventHandler = () => {
    if (this.props.disabled) {
      return
    }
    this.props.onMouseEnter(this.props.value)
  }

  private onMouseLeave: MouseEventHandler = (event) => {
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
