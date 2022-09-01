import { Component, FC, MouseEventHandler } from 'react'

export interface RatingControlProps {
  value: number
  count: number
  disabled?: boolean
  onChange?: (value: number) => void
  children: FC<{
    items: Array<{
      active: boolean
      onClick?: MouseEventHandler
      onMouseEnter?: MouseEventHandler
      onMouseLeave?: MouseEventHandler
    }>
  }>
}

export interface RatingControlState {
  hovered: number
}

export class RatingControl extends Component<
  RatingControlProps,
  RatingControlState
> {
  public static displayName = 'RatingControl'

  public state: RatingControlState = {
    hovered: -1,
  }

  private onItemClick: (index: number) => MouseEventHandler =
    (index) => (event) => {
      event.preventDefault()
      if (this.props.onChange) {
        this.props.onChange(index + 1)
      }
    }

  private onItemMouseLeave: MouseEventHandler = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onItemMouseEnter: (index: number) => MouseEventHandler =
    (index) => () => {
      this.setState({
        hovered: index,
      })
    }

  public render() {
    return this.props.children({
      items: new Array(this.props.count).fill(0).map((_item, index) => ({
        active:
          this.state.hovered === -1
            ? this.props.value >= index + 1
            : this.state.hovered >= index,
        onClick: this.props.disabled ? undefined : this.onItemClick(index),
        onMouseEnter: this.props.disabled
          ? undefined
          : this.onItemMouseEnter(index),
        onMouseLeave: this.props.disabled ? undefined : this.onItemMouseLeave,
      })),
    })
  }
}
