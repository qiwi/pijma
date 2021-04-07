import React from 'react'
import RenderChild from '../RenderChild'

export interface AlertControlProps {
  onHide?: () => void
  children: RenderChild<{
    hover: boolean
    onClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
  }>
}

export interface AlertControlState {
  hover: boolean
}

export class AlertControl extends React.Component<AlertControlProps> {

  public state: AlertControlState = {
    hover: false,
  }

  private onClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  private onItemMouseEnter: React.MouseEventHandler = () => {
    this.setState({
      hover: true,
    })
  }

  private onItemMouseLeave: React.MouseEventHandler = () => {
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
