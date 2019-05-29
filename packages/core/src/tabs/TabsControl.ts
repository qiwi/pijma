import React from 'react'

import {isTab, isTabList, isTabPanel} from './helpers'

export interface TabsControlProps {
  selected?: number
  onSelect?: (selected: number) => void
  children: React.ReactNode
}

export interface TabsControlState {
  selected: number
}

export class TabsControl extends React.Component<
  TabsControlProps,
  TabsControlState
> {

  public state: TabsControlState = {
    selected: this.props.selected || 0,
  }

  private onSelect = (selected: number) => {
    this.setState({
      selected,
    })
    if (this.props.onSelect) {
      this.props.onSelect(selected)
    }
  }

  private getChild: () => React.ReactNode = () => {
    const children: React.ReactNode = React.Children.map(
      this.props.children,
      (element: React.ReactNode) => {
        if (!element) {
          return null
        }
        if (React.isValidElement(element) && isTabList(element)) {
          return React.Children.map(element, element => {
            if (isTab(element)) {
              return React.cloneElement(element, {
                selected: !!this.state.selected,
                onSelect: this.onSelect,
              })
            }

            return null
          })
        }
        if (React.isValidElement(element) && isTabPanel(element)) {
          return React.cloneElement(element, {
            selected: !!this.state.selected,
          })
        }
      },
    )

    return children
  }

  public render() {
    return this.getChild()
  }

}
