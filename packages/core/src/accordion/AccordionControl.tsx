import React from 'react'
import RenderChild from '../RenderChild'

export interface AccordionControlProps<I> {
  items: I[]
  opened?: number[]
  onChange?: (opened: number[]) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    items: Array<
      I & {
        opened: boolean
        hovered: boolean
        onClick: (event: React.MouseEvent<HTMLElement>) => void
        onMouseEnter: () => void
        onMouseLeave: React.MouseEventHandler
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

  constructor(props: AccordionControlProps<I>) {
    super(props)
    this.state = {
      hovered: -1,
      opened: props.opened || [],
    }
  }

  componentDidUpdate(prevProps: AccordionControlProps<I>) {
    if (this.props.opened && this.props.opened !== prevProps.opened) {
      this.setState({opened: this.props.opened})
    }
  }

  private onChange = (index: number) => {
    this.setState(({opened}) => ({
      opened: opened.includes(index)
        ? opened.filter(i => i !== index)
        : opened.concat(index),
    }), () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.opened)
      }
    })
  }

  private onItemClick = (index: number) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.onChange(index)
  }

  private onItemMouseEnter = (index: number) => {
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
          this.state.hovered === -1 ||
          this.state.hovered === this.props.items.length - 1
            ? 0
            : this.state.hovered + 1
        this.setState({
          hovered: next,
        })
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.hovered !== -1) {
          this.onChange(this.state.hovered)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      items: this.props.items.map((item, index) => ({
        ...item,
        opened: this.state.opened.findIndex(i => i === index) !== -1,
        hovered: index === this.state.hovered,
        onClick: this.onItemClick(index),
        onMouseEnter: () => this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
      })),
    })
  }

}
