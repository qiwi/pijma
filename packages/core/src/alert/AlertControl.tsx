import React from 'react'
import RenderChild from '../RenderChild'

export interface AlertControlProps {
  onHide?: () => void
  children: RenderChild<{
    hovered: boolean
    onClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
  }>
}

export interface AlertControlState {
  hovered: boolean
}

export class AlertControl extends React.Component<AlertControlProps> {

  public state: AlertControlState = {
    hovered: false,
  }

  private onClick: React.MouseEventHandler = (event) => {
    event.preventDefault()
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  private onItemMouseEnter: React.MouseEventHandler = () => {
    this.setState({
      hovered: true,
    })
  }

  private onItemMouseLeave: React.MouseEventHandler = () => {
    this.setState({
      hovered: false,
    })
  }

  public render() {
    return this.props.children({
      hovered: this.state.hovered,
      onClick: this.onClick,
      onMouseEnter: this.onItemMouseEnter,
      onMouseLeave: this.onItemMouseLeave,
    })
  }

}
