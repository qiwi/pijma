import React from 'react'

import RenderChild from '../RenderChild'

import {TabProps} from './Tab'
import {TabListProps} from './TabList'

export interface TabsControlProps {
  selected?: number
  vertical?: boolean
  border?: boolean
  center?: boolean
  indent?: 's' | 'm' | 'l'
  items: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
  onSelect?: (selected: number) => void
  children: RenderChild<{
    tabs: (TabProps & {content: React.ReactNode})[]
    tabList: TabListProps
  }>
}

export interface TabsControlState {
  selected: number
  focused: number
}

export class TabsControl extends React.Component<
  TabsControlProps,
  TabsControlState
> {

  public state: TabsControlState = {
    selected: this.props.selected || 0,
    focused: -1,
  }

  private onSelect = (selected: number) => {
    this.setState({
      selected,
    })
    if (this.props.onSelect) {
      this.props.onSelect(selected)
    }
  }

  private onMouseLeave = () => {
    this.setState({
      focused: -1,
    })
  }

  private onMouseEnter = (value: number) => {
    this.setState({
      focused: value,
    })
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused === -1) {
          break
        }

        let next =
          this.state.selected + 1 < this.props.items.length
            ? this.state.selected + 1
            : this.state.selected

        this.setState({
          selected: next,
        })
        break
      case 'ArrowLeft':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused === -1) {
          break
        }
        let prev = this.state.selected === 0 ? 0 : this.state.selected - 1

        this.setState({
          selected: prev,
        })
        break
    }
  }

  public render() {
    const {children, indent, border, vertical, center, items} = this.props

    return children({
      tabList: {
        onKeyDown: this.onKeyDown,
        indent,
        border,
        center,
      },
      tabs: items.map(
        (
          item: {
            icon?: React.ReactNode
            title: React.ReactNode
            content: React.ReactNode
          },
          index: number,
        ) => {
          const {icon, title, content} = item
          const onSelect = () => this.onSelect(index)
          const onMouseEnter = () => this.onMouseEnter(index)

          return {
            icon,
            content,
            children: title,
            vertical,
            selected: this.state.selected === index,
            focused: this.state.focused === index,
            onSelect,
            onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }
        },
      ),
    })
  }

}
