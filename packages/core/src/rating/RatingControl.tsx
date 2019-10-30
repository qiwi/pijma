import React from 'react'
import RenderChild from '../RenderChild'

export interface RatingControlProps {
  value: number
  count: number
  onChange: (value: number) => void
  disabled?: boolean
  children: RenderChild<{
    items: Array<& {
      onClick: React.MouseEventHandler
      onMouseEnter: React.MouseEventHandler
      onMouseLeave: React.MouseEventHandler
      active: boolean
      hovered: boolean
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

  private onItemMouseLeave = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onItemClick = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    this.onChange(index)
  }

  private onItemMouseEnter = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    this.setState({
      hovered: index,
    })
  }

  public render() {
    let item: any
    return this.props.children({
      items: Array.from(Array(this.props.count).keys()).map((_item, index) => ({
        ...item,
        active: (this.props.value >= (index + 1)) && ((index + 1) <= (this.state.hovered) || this.state.hovered === -1),
        hovered: this.state.hovered >= index,
        onClick: this.props.disabled ? undefined : this.onItemClick(index),
        onMouseEnter: this.props.disabled ? undefined : this.onItemMouseEnter(index),
        onMouseLeave: this.props.disabled ? undefined : this.onItemMouseLeave,
      })),
    })
  }

}
