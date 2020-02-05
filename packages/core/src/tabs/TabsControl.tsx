import React from 'react'

import RenderChild from '../RenderChild'

export interface TabsControlProps {
  select: number
  length: number
  onChange?: (selected: number) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    items: Array<{
      select: boolean
      focus: boolean
      onMouseEnter: React.MouseEventHandler
      onMouseLeave: React.MouseEventHandler
      onFocus: React.FocusEventHandler
      onBlur: React.FocusEventHandler
      onClick: React.MouseEventHandler
    }>
  }>
}

export interface TabsControlState {
  focused: number
}

export class TabsControl extends React.Component<TabsControlProps> {

  public state: TabsControlState = {
    focused: -1,
  }

  private onItemFocus: (index: number) => React.FocusEventHandler = (index) => (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      focused: index,
    })
  }

  private onItemBlur: React.FocusEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      focused: -1,
    })
  }

  private onItemMouseEnter: (index: number) => React.MouseEventHandler = (index) => (event) => {
    event.preventDefault()
    this.setState({
      focused: index,
    })
  }

  private onItemMouseLeave: React.MouseEventHandler = (event) => {
    event.preventDefault()
    this.setState({
      focused: -1,
    })
  }

  private onItemClick: (select: number) => React.MouseEventHandler = (select) => (event) => {
    event.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(select)
    }
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused !== -1 && this.props.onChange) {
          this.props.onChange(this.state.focused)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      items: Array(this.props.length).fill(0).map((_item, index) => ({
        select: index === this.props.select,
        focus: index === this.state.focused,
        onFocus: this.onItemFocus(index),
        onBlur: this.onItemBlur,
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onClick: this.onItemClick(index),
      })),
    })
  }

}
