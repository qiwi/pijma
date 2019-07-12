import React from 'react'

import RenderChild from '../RenderChild'

export interface TabsControlProps {
  selected?: number
  vertical?: boolean
  border?: boolean
  tab?: 'long' | 'short'
  center?: boolean
  bottom?: number
  onSelect?: (selected: number) => void
  children: RenderChild<{
    tabs: {
      tab?: 'long' | 'short'
      icon?: React.ReactNode
      title: React.ReactNode
      content: React.ReactNode
      vertical?: boolean
      selected: boolean
      focused: boolean
      onSelect: (selected: number) => void
      onMouseEnter: () => void
      onMouseLeave: () => void
    }[]
    tabList: {
      indent?: 's' | 'm' | 'l'
      border?: boolean
      center?: boolean
      vertical?: boolean
      bottom?: number
      onKeyDown: React.KeyboardEventHandler
    }
    content: React.ReactNode
  }>
  indent?: 's' | 'm' | 'l'
  items: {
    icon?: React.ReactNode
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export interface TabsControlState {
  selected: number
  focused: number
}

export class TabsControl extends React.Component<
  TabsControlProps,
  TabsControlState
> {

  private tabsCount: number = 0

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
          this.state.selected + 1 < this.tabsCount
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
    return this.props.children({
      tabList: {
        onKeyDown: this.onKeyDown,
        indent: this.props.indent,
        border: this.props.border,
        vertical: this.props.vertical,
        center: this.props.center,
        bottom: this.props.bottom,
      },
      content: this.props.items[this.state.selected].content,
      tabs: this.props.items.map(
        (
          item: {
            icon?: React.ReactNode
            title: React.ReactNode
            content: React.ReactNode
          },
          index: number,
        ) => {
          const onSelect = () => this.onSelect(index)
          const onMouseEnter = () => this.onMouseEnter(index)

          ++this.tabsCount

          return {
            tab: this.props.tab,
            icon: item.icon,
            title: item.title,
            content: item.content,
            vertical: this.props.vertical,
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
