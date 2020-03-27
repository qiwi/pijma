import React from 'react'
import RenderChild from '../RenderChild'

export interface AccordionOpenedNestedItem {
  [key: number]: (number | AccordionOpenedNestedItem)[]
}
export type AccordionOpenedItem = number | AccordionOpenedNestedItem
const openedItemIsNestedItem = (openedItem: AccordionOpenedItem): openedItem is AccordionOpenedNestedItem =>
  typeof openedItem === 'object'

const startsWith = (path1: number[], path2: number[]) => {
  for (let index = 0; index < path2.length; index++) {
    if (path1[index] !== path2[index]) return false
  }
  return true
}

const isOpened = (opened: AccordionOpenedItem[], path: number[]): boolean => {
  if (path.length === 0) return false
  if (path.length === 1) return opened.includes(path[0])

  const [rootIndex] = path
  const nestedItem = opened.find(openedItemIsNestedItem)

  return !!nestedItem && !!nestedItem[rootIndex] && isOpened(nestedItem[rootIndex], path.slice(1))
}

const toggleOpened = (opened: AccordionOpenedItem[], path: number[]): AccordionOpenedItem[] => {
  console.log('toggleOpened', opened, path)
  if (path.length === 0) return opened
  if (path.length === 1) {
    const index = path[0]
    return opened.includes(index)
      ? opened.filter(i => i !== index)
      : opened.concat(index)
  }

  const [rootIndex] = path
  const nestedItem = opened.find(openedItemIsNestedItem) || {}

  return [{...nestedItem, [rootIndex]: toggleOpened(nestedItem[rootIndex] || [], path.slice(1))}, ...opened.filter(x => !openedItemIsNestedItem(x))]
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
  opened: AccordionOpenedItem[]
  onChange: (opened: AccordionOpenedItem[]) => void
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
    this.props.onChange(toggleOpened(opened, path))
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
        opened: isOpened(this.props.opened, currentPath),
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
