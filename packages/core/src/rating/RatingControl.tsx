import React from 'react'
import RenderChild from '../RenderChild'

export interface RatingControlProps<I> {
  value: number
  count: number
  statical: boolean
  children: RenderChild<{
    change: number
    items: Array<I & {
      onClick: React.MouseEventHandler
      active: boolean
    }>
  }>
}

export interface RatingControlState {
  value: number
}

export class RatingControl<I> extends React.Component<RatingControlProps<I>,
  RatingControlState> {

  public state: RatingControlState = {
    value: this.props.value,
  }

  private onItemClick = (index: number) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.setState({
      value: index + 1,
    })
  }

  public render() {
    let item: any
    return this.props.children({
      change: this.state.value,
      items: Array.from(Array(this.props.count).keys()).map((_item, index) => ({
        ...item,
        active: this.state.value >= (index + 1),
        onClick: this.props.statical ? undefined : this.onItemClick(index),
      })),
    })
  }

}
