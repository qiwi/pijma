import React from 'react'

import RenderChild from '../RenderChild'

export interface TabsControlProps {
  selected?: number
  onChange?: (selected: number) => void
  children: RenderChild<{
    onKeyDown: React.KeyboardEventHandler
    selected: number
    focused: number
    onChange: (selected: number) => void
    onMouseEnter: (selected: number) => void
    onMouseLeave: React.MouseEventHandler
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

  private onChange = (selected: number) => {
    this.setState({
      selected,
    })
    if (this.props.onChange) {
      this.props.onChange(selected)
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
          this.state.selected + 1 < event.currentTarget.children.length
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
      onKeyDown: this.onKeyDown,
      selected: this.state.selected,
      focused: this.state.focused,
      onChange: this.onChange,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    })
  }

}
