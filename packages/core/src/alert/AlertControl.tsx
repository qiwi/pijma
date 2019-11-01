import React from 'react'
import RenderChild from '../RenderChild'

export interface AlertControlProps {
  onHide?: () => void
  children: RenderChild<{
    onClick: React.MouseEventHandler
  }>
}

export class AlertControl extends React.Component<AlertControlProps> {

  private onClick: React.MouseEventHandler = () => {
    if (this.props.onHide) {
      this.props.onHide()
    }
  }

  public render() {
    return this.props.children({
      onClick: this.onClick,
    })
  }

}
