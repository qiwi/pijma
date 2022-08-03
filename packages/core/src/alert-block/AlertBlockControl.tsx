import React, { FC } from 'react'

export interface AlertBlockControlProps {
  onHide?: () => void
  children: FC<{
    closeHover: boolean
    onCloseClick: React.MouseEventHandler
    onCloseMouseEnter: React.MouseEventHandler
    onCloseMouseLeave: React.MouseEventHandler
  }>
}

export interface AlertBlockControlState {
  closeHover: boolean
}

export class AlertBlockControl extends React.Component<AlertBlockControlProps> {
  public static displayName = 'AlertBlockControl'

  public state: AlertBlockControlState = {
    closeHover: false,
  }

  private onCloseClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  private onCloseMouseEnter: React.MouseEventHandler = () => {
    this.setState({
      closeHover: true,
    })
  }

  private onCloseMouseLeave: React.MouseEventHandler = () => {
    this.setState({
      closeHover: false,
    })
  }

  public render () {
    return this.props.children({
      closeHover: this.state.closeHover,
      onCloseClick: this.onCloseClick,
      onCloseMouseEnter: this.onCloseMouseEnter,
      onCloseMouseLeave: this.onCloseMouseLeave,
    })
  }
}
