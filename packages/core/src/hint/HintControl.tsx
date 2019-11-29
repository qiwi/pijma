import React from 'react'
import RenderChild from '../RenderChild'

export interface HintControlProps {
  show: boolean
  onClick: (show: boolean) => void
  children: RenderChild<{
    onClick: React.MouseEventHandler
    show: boolean
  }>
}

export class HintControl extends React.Component<HintControlProps> {

  private onItemClick: (show: boolean) => React.MouseEventHandler = () => (event) => {
    event.preventDefault()
    this.props.onClick(!this.props.show)

  }

  public render() {
    return this.props.children({
      show: this.props.show,
      onClick: this.onItemClick(this.props.show),
    })
  }

}
