import { Component, FC, MouseEventHandler } from 'react'

export interface AlertBlockControlProps {
  onHide?: () => void
  children: FC<{
    closeHover: boolean
    onCloseClick: MouseEventHandler
    onCloseMouseEnter: MouseEventHandler
    onCloseMouseLeave: MouseEventHandler
  }>
}

export interface AlertBlockControlState {
  closeHover: boolean
}

export class AlertBlockControl extends Component<AlertBlockControlProps> {
  public static displayName = 'AlertBlockControl'

  public state: AlertBlockControlState = {
    closeHover: false,
  }

  private onCloseClick: MouseEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  private onCloseMouseEnter: MouseEventHandler = () => {
    this.setState({
      closeHover: true,
    })
  }

  private onCloseMouseLeave: MouseEventHandler = () => {
    this.setState({
      closeHover: false,
    })
  }

  public render() {
    return this.props.children({
      closeHover: this.state.closeHover,
      onCloseClick: this.onCloseClick,
      onCloseMouseEnter: this.onCloseMouseEnter,
      onCloseMouseLeave: this.onCloseMouseLeave,
    })
  }
}
