import React from 'react'
import RenderChild from '../RenderChild'

export interface RatingControlProps {
  value: number
  count: number
  onChange: (value: number) => void
  disabled?: boolean
  children: RenderChild<{
    items: Array<{
      onClick: React.MouseEventHandler
      onMouseEnter: React.MouseEventHandler
      onMouseLeave: React.MouseEventHandler
      active: boolean
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
    return this.props.children({
      items: Array(this.props.count).fill(0).map((item, index) => ({
        ...item,
        active: (this.state.hovered >= index) || (this.props.value >= (index + 1) && this.state.hovered === -1),
        onClick: this.props.disabled ? undefined : this.onItemClick(index),
        onMouseEnter: this.props.disabled ? undefined : this.onItemMouseEnter(index),
        onMouseLeave: this.props.disabled ? undefined : this.onItemMouseLeave,
      })),
    })
  }

}
