import React from 'react'

import {isTab, isTabList, isTabPanel} from './helpers'

export interface TabsControlProps {
  selected?: number
  onSelect?: (selected: number) => void
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
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

  private renderChild: () => React.ReactNode = () => {
    const self = this
    const children: React.ReactNode = React.Children.map(
      this.props.children,
      (element: React.ReactNode) => {
        if (!element) {
          return null
        }
        if (React.isValidElement(element) && isTabList(element)) {
          const tabList = element

          self.tabsCount = 0

          return React.cloneElement(tabList, {
            ...tabList.props,
            onKeyDown: this.onKeyDown,
            size: this.props.size,
            children: React.Children.map(
              tabList.props.children,
              (element: React.ReactNode, index: number) => {
                if (React.isValidElement(element) && isTab(element)) {
                  const tab = element
                  const onSelect = () => this.onSelect(index)
                  const onMouseEnter = () => this.onMouseEnter(index)

                  ++self.tabsCount

                  return React.cloneElement(tab, {
                    ...tab.props,
                    tab: tabList.props.tab,
                    icon: tab.props.icon,
                    vertical: tabList.props.vertical,
                    selected: this.state.selected === index,
                    focused: this.state.focused === index,
                    onSelect,
                    onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                  })
                }

                return null
              },
            ),
          })
        }
        if (React.isValidElement(element) && isTabPanel(element)) {
          return React.cloneElement(element, {
            ...element.props,
            children: React.Children.map(
              element.props.children,
              (element: React.ReactNode, index: number) => {
                if (
                  React.isValidElement(element) &&
                  index === this.state.selected
                ) {
                  return element
                }

                return null
              },
            ),
          })
        }
      },
    )

    return children
  }

  public render() {
    return this.renderChild()
  }

}
