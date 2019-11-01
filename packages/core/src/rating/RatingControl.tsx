import React from 'react'
import RenderChild from '../RenderChild'

export interface RatingControlProps {
  value: number
  count: number
  disabled?: boolean
  onChange: (value: number) => void
  children: RenderChild<{
    items: Array<{
      active: boolean
      onClick?: React.MouseEventHandler
      onMouseEnter?: React.MouseEventHandler
      onMouseLeave?: React.MouseEventHandler
    }>
  }>
}

export interface RatingControlState {
  hovered: number
}

export class RatingControl extends React.Component<RatingControlProps, RatingControlState> {

  public state: RatingControlState = {
    hovered: -1,
  }

  private onChange = (index: number) => {
    this.props.onChange(index + 1)
  }

  private onItemClick = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    this.onChange(index)
  }

  private onItemMouseLeave: React.MouseEventHandler = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onItemMouseEnter = (index: number) => () => {
    this.setState({
      hovered: index,
    })
  }

  public render() {
    return this.props.children({
      items: Array(this.props.count).fill(0).map((_item, index) => ({
        active: this.state.hovered === -1 ? (this.props.value >= (index + 1)) : (this.state.hovered >= index),
        onClick: this.props.disabled ? undefined : this.onItemClick(index),
        onMouseEnter: this.props.disabled ? undefined : this.onItemMouseEnter(index),
        onMouseLeave: this.props.disabled ? undefined : this.onItemMouseLeave,
      })),
    })
  }

}
