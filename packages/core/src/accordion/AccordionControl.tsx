import React from 'react'

import AccordionControlProps from './AccordionControlProps'
import AccordionControlState from './AccordionControlState'

export default class AccordionControl<I> extends React.Component<AccordionControlProps<I>, AccordionControlState> {

  public state: AccordionControlState = {
    hovered: -1,
    opened: [],
  }

  private onMouseLeave = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onItemClick = (index: number) => {
    this.setState(({opened}: AccordionControlState) => ({
      hovered: index,
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
      onMouseLeave: this.onMouseLeave,
      items: this.props.items.map((item, index) => ({
        ...item,
        isOpened: this.state.opened.findIndex(i => i === index) !== -1,
        isHovered: index === this.state.hovered,
        isNextHovered: index + 1 === this.state.hovered || index + 1 === this.props.items.length,
        index,
        onClick: this.onItemClick,
        onMouseEnter: this.onItemMouseEnter,
      })),
    })
  }

}
