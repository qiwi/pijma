import React from 'react'
import RenderChild from '../RenderChild'

export interface AccordionControlProps<I> {
  items: I[]
  children: RenderChild<{
    onMouseLeave: React.MouseEventHandler
    items: Array<
      I & {
        opened: boolean
        hovered: boolean
        onClick: (event: React.MouseEvent<HTMLElement>) => void
        onMouseEnter: () => void
      }
    >
  }>
}

export interface AccordionControlState {
  hovered: number
  opened: number[]
}

export class AccordionControl<I> extends React.Component<
  AccordionControlProps<I>,
  AccordionControlState
> {

  public state: AccordionControlState = {
    hovered: -1,
    opened: [],
  }

  private onItemClick = (index: number) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.setState(({opened}) => ({
      opened: opened.includes(index)
        ? opened.filter(i => i !== index)
        : opened.concat(index),
    }))
  }

  private onItemMouseEnter = (index: number) => {
    this.setState({
      hovered: index,
    })
  }

  public render() {
    return this.props.children({
      onMouseLeave: () => this.onItemMouseEnter(-1),
      items: this.props.items.map((item, index) => ({
        ...item,
        opened: this.state.opened.findIndex(i => i === index) !== -1,
        hovered: index === this.state.hovered,
        onClick: this.onItemClick(index),
        onMouseEnter: () => this.onItemMouseEnter(index),
      })),
    })
  }

}
