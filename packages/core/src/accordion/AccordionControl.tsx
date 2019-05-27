import React from 'react'
import RenderChild from '../RenderChild'

export interface AccordionControlProps<I> {
  items: I[]
  opened: number[]
  onChange: (opened: number[]) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    items: Array<
      I & {
        opened: boolean
        hovered: boolean
        focused: boolean
        onClick: React.MouseEventHandler
        onMouseEnter: React.MouseEventHandler
        onMouseLeave: React.MouseEventHandler
        onFocus: React.FocusEventHandler
        onBlur: React.FocusEventHandler
      }
    >
  }>
}

export interface AccordionControlState {
  hovered: number
  focused: number
}

export class AccordionControl<I> extends React.Component<
  AccordionControlProps<I>,
  AccordionControlState
> {

  public state: AccordionControlState = {
    hovered: -1,
    focused: -1,
  }

  private onFocus = (index: number) => () => {
    this.setState({
      focused: index,
    })
  }

  private onBlur = () => {
    this.setState({
      focused: -1,
    })
  }

  private onChange = (index: number) => {
    const {opened} = this.props
    this.props.onChange(opened.includes(index)
    ? opened.filter(i => i !== index)
    : opened.concat(index))
  }

  private onItemClick = (index: number) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.onChange(index)
  }

  private onItemMouseEnter = (index: number) => () => {
    this.setState({
      hovered: index,
    })
  }

  private onItemMouseLeave = () => {
    this.setState({
      hovered: -1,
    })
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case 'Tab':
        event.preventDefault()
        event.stopPropagation()
        const next =
          this.state.focused === -1 ||
          this.state.focused === this.props.items.length - 1
            ? 0
            : this.state.focused + 1
        this.setState({
          focused: next,
        })
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused !== -1) {
          this.onChange(this.state.focused)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      items: this.props.items.map((item, index) => ({
        ...item,
        opened: this.props.opened.findIndex(i => i === index) !== -1,
        hovered: index === this.state.hovered,
        focused: index === this.state.focused,
        onClick: this.onItemClick(index),
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onFocus: this.onFocus(index),
        onBlur: this.onBlur,
      })),
    })
  }

}
