import React, {createRef, RefObject} from 'react'

import RenderChild from '../RenderChild'
import {findDOMNode} from 'react-dom'

export interface TabsControlProps {
  select: number
  length: number
  onChange?: (selected: number) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    borderOffSetLeft: number
    borderWidth: number
    items: Array<{
      select: boolean
      focus: boolean
      ref: RefObject<HTMLDivElement>
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
  borderOffSetLeft: number
  borderWidth: number
  refs: RefObject<HTMLDivElement>[]
}

export class TabsControl extends React.Component<TabsControlProps> {

  public static getDerivedStateFromProps(nextProps: TabsControlProps): Partial<TabsControlState> {
    const {length} = nextProps
    return {
      refs: Array(length).fill(1).map(() => createRef()),
    }
  }

  public state: TabsControlState = {
    focused: -1,
    borderOffSetLeft: 0,
    borderWidth: 0,
    refs: Array(this.props.length).fill(1).map(() => createRef()),
  }

  public componentDidMount(): void {
    this.settingBorder(this.props.select)
  }

  private settingBorder(index: number) {
    const refItem = findDOMNode(this.state.refs[index].current) as HTMLDivElement
    this.setState({
      borderOffSetLeft: refItem.offsetLeft,
      borderWidth: refItem.offsetWidth,
    })
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
    this.settingBorder(select)
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
          this.settingBorder(this.state.focused)
          this.props.onChange(this.state.focused)
        }
        break
    }
  }

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      borderOffSetLeft: this.state.borderOffSetLeft,
      borderWidth: this.state.borderWidth,
      items: Array(this.props.length).fill(0).map((_item, index) => ({
        select: index === this.props.select,
        focus: index === this.state.focused,
        ref: this.state.refs[index],
        onFocus: this.onItemFocus(index),
        onBlur: this.onItemBlur,
        onMouseEnter: this.onItemMouseEnter(index),
        onMouseLeave: this.onItemMouseLeave,
        onClick: this.onItemClick(index),
      })),
    })
  }

}
