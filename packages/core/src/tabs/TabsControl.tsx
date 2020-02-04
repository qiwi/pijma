import React, {createRef, RefObject} from 'react'

import RenderChild from '../RenderChild'

export interface TabsControlProps {
  length: number
  selected?: number
  onChange?: (selected: number) => void
  children: RenderChild<{
    items: Array<{
      select: boolean
      focus: boolean
      ref: RefObject<HTMLDivElement>
      onMouseEnter?: React.MouseEventHandler
      onMouseLeave?: React.MouseEventHandler
      onClick?: React.MouseEventHandler
    }>
  }>
}

export interface TabsControlState {
  focused: number
  refs: RefObject<HTMLDivElement>[]
}

export class TabsControl extends React.Component<TabsControlProps> {

  public state: TabsControlState = {
    focused: -1,
    refs: Array(this.props.length).fill(1).map(() => createRef()),
  }

  private onItemMouseEnter: (focus: number) => React.MouseEventHandler = (focus) => (event) => {
    event.preventDefault()
    this.setState({
      focused: focus,
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

  public render() {
    return this.props.children({
      items: Array(this.props.length).fill(0).map((_item, index) => ({
        select: index === this.props.selected,
        ref: this.state.refs[index],
        focus: index === this.state.focused,
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onClick: this.onItemClick(index),
      })),
    })
  }

}
