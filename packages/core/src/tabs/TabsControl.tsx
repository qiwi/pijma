import React, {createRef, RefObject} from 'react'
import {findDOMNode} from 'react-dom'

import RenderChild from '../RenderChild'

export interface TabsControlProps {
  select: number
  length: number
  onChange?: (selected: number) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    borderLeft: number
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
  borderLeft: number
  borderWidth: number
  refs: RefObject<HTMLDivElement>[]
}

export class TabsControl extends React.Component<TabsControlProps> {

  public state: TabsControlState = {
    focused: -1,
    borderLeft: 0,
    borderWidth: 0,
    refs: Array(this.props.length).fill(1).map(() => createRef()),
  }

  private calculateBorder() {
    const element = findDOMNode(this.state.refs[this.props.select].current) as HTMLDivElement
    this.setState({
      borderLeft: element.offsetLeft,
      borderWidth: element.offsetWidth,
    })
  }

  public static getDerivedStateFromProps(nextProps: TabsControlProps): Partial<TabsControlState> {
    const {length} = nextProps
    return {
      refs: Array(length).fill(1).map(() => createRef<HTMLDivElement>()),
    }
  }

  public componentDidMount() {
    this.calculateBorder()
  }

  public componentDidUpdate(props: TabsControlProps) {
    if (props.select !== this.props.select) {
      this.calculateBorder()
    }
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
      borderLeft: this.state.borderLeft,
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
