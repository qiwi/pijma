import React from 'react'
import RenderChild from '../RenderChild'

const startsWith = (path1: number[], path2: number[]) => {
  for (let index = 0; index < path2.length; index++) {
    if (path1[index] !== path2[index]) return false
  }
  return true
}

export type NestedItem<I> = I & {
  items?: NestedItem<I>[]
}
export type AccordionChildItem<I> = NestedItem<I> & {
  opened: boolean
  hovered: boolean
  focused: boolean
  onClick: React.MouseEventHandler
  onMouseEnter: React.MouseEventHandler
  onMouseLeave: React.MouseEventHandler
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
  items?: AccordionChildItem<I>[]
}
export interface AccordionRenderChild<I> {
  onKeyDown: React.KeyboardEventHandler
  items: AccordionChildItem<I>[]
}
export interface AccordionControlProps<I> {
  items: NestedItem<I>[]
  opened: string[]
  onChange: (opened: string[]) => void
  children: RenderChild<AccordionRenderChild<I>>
}

export interface AccordionControlState {
  hovered: number[]
  focused: number[]
}

export class AccordionControl<I> extends React.Component<
  AccordionControlProps<I>,
  AccordionControlState
> {

  public state: AccordionControlState = {
    hovered: [],
    focused: [],
  }

  private onFocus = (path: number[]) => () => {
    this.setState({
      focused: path,
    })
  }

  private onBlur = () => {
    this.setState({
      focused: [],
    })
  }

  private onChange = (path: number[]) => {
    const {opened} = this.props
    const pathStr = path.join('.')
    this.props.onChange(
      opened.includes(pathStr)
        ? opened.filter(x => x !== pathStr)
        : opened.concat(pathStr),
    )
  }

  private onItemClick = (path: number[]) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    this.onChange(path)
  }

  private onItemMouseEnter = (path: number[]) => () => {
    this.setState({
      hovered: path,
    })
  }

  private onItemMouseLeave = () => {
    this.setState({
      hovered: [],
    })
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused.length) {
          this.onChange(this.state.focused)
        }
        break
    }
  }

  private getItems = (items: NestedItem<I>[], previousPath: number[]): AccordionChildItem<I>[] =>
    items.map((item, index) => {
      const currentPath = previousPath.concat(index)
      return ({
        ...item,
        opened: this.props.opened.includes(currentPath.join('.')),
        hovered: startsWith(this.state.hovered, currentPath),
        focused: startsWith(this.state.focused, currentPath),
        onClick: this.onItemClick(currentPath),
        onMouseEnter: this.onItemMouseEnter(currentPath),
        onMouseLeave: this.onItemMouseLeave,
        onFocus: this.onFocus(currentPath),
        onBlur: this.onBlur,
        items: item.items && this.getItems(item.items, currentPath),
      })
    })

  public render() {
    return this.props.children({
      onKeyDown: this.onKeyDown,
      items: this.getItems(this.props.items, []),
    })
  }

}
