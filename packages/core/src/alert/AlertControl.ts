import { Component, FC, MouseEventHandler } from 'react'

export interface AlertControlProps {
  onHide?: () => void
  children: FC<{
    hover: boolean
    onClick: MouseEventHandler
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
  }>
}

export interface AlertControlState {
  hover: boolean
}

export class AlertControl extends Component<AlertControlProps> {
  public static displayName = 'AlertControl'

  public state: AlertControlState = {
    hover: false,
  }

  private onClick: MouseEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  private onItemMouseEnter: MouseEventHandler = () => {
    this.setState({
      hover: true,
    })
  }

  private onItemMouseLeave: MouseEventHandler = () => {
    this.setState({
      hover: false,
    })
  }

  public render() {
    return this.props.children({
      hover: this.state.hover,
      onClick: this.onClick,
      onMouseEnter: this.onItemMouseEnter,
      onMouseLeave: this.onItemMouseLeave,
    })
  }
}
