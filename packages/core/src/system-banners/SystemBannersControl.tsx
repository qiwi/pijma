import React from 'react'
import RenderChild from '../RenderChild'

export interface SystemBannersControlProps {
  onHide: () => any
  children: RenderChild<{
    onClick: React.MouseEventHandler
  }>
}

export class SystemBannersControl extends React.Component<SystemBannersControlProps> {

  private onItemClick = () => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    this.onHide()
  }
  private onHide = () => {
    this.props.onHide()
  }

  public render() {
    return this.props.children({
      onClick: this.onItemClick(),
    })
  }

}
