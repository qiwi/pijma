import {
  Component,
  createRef,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react'
import { findDOMNode } from 'react-dom'

import { MenuControlProps } from './MenuControlProps'
import { MenuControlState } from './MenuControlState'

export class MenuControl extends Component<MenuControlProps, MenuControlState> {
  public static displayName = 'MenuControl'

  public static getDerivedStateFromProps(
    nextProps: MenuControlProps,
    prevState: MenuControlState,
  ): Partial<MenuControlState> {
    const { focused } = prevState
    const { count } = nextProps
    return {
      focused:
        count === 0
          ? undefined
          : focused !== undefined && count <= focused
          ? count - 1
          : focused,
      refs: new Array(count).fill(1).map(() => createRef()),
    }
  }

  public componentDidUpdate() {
    const { selected } = this.props
    const { focused, refs } = this.state
    if (selected !== undefined && focused === undefined) {
      this.scrollToItem(refs[selected])
    }
  }

  public state: MenuControlState = {
    refs: new Array(this.props.count).fill(1).map(() => createRef()),
    focused: undefined,
  }

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private onItemMouseDown: MouseEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  private onItemClick: (index: number) => MouseEventHandler =
    (index) => (event) => {
      event.preventDefault()
      this.selectItem(index)
    }

  private onItemEnter: (index: number) => MouseEventHandler =
    (index) => (event) => {
      event.preventDefault()
      this.setState({
        focused: index,
      })
    }

  private selectItem: (index: number) => void = (index) => {
    this.setState({
      focused: undefined,
    })
    if (this.props.onSelect) {
      this.props.onSelect(index)
    }
  }

  private scrollToItem: (item: RefObject<HTMLDivElement>) => void = (item) => {
    const containerElement = findDOMNode(
      this.containerRef.current,
    ) as HTMLDivElement
    const itemElement = findDOMNode(item.current) as HTMLDivElement
    if (!containerElement || !itemElement) {
      return
    }
    const containerBoundingRect = containerElement.getBoundingClientRect()
    const itemBoundingRect = itemElement.getBoundingClientRect()
    const itemOffset = itemElement.offsetTop
    const scrollOffset = containerElement.scrollTop
    const itemHeigher = itemOffset < scrollOffset
    const itemLower =
      itemOffset + itemBoundingRect.height >
      scrollOffset + containerBoundingRect.height
    if (itemHeigher) {
      containerElement.scrollTo({ top: itemOffset })
    }
    if (itemLower) {
      containerElement.scrollTo({
        top:
          itemOffset + itemBoundingRect.height - containerBoundingRect.height,
      })
    }
  }

  private onKeyDown: KeyboardEventHandler = (event) => {
    const { focused, refs } = this.state
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const next = this.next
      if (next === undefined) {
        return
      }
      this.setState({
        focused: next,
      })
      const itemRef = refs[next]
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prev = this.prev
      if (prev === undefined) {
        return
      }
      this.setState({
        focused: prev,
      })
      const itemRef = refs[prev]
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      const item = focused !== undefined ? focused : this.props.selected
      if (item !== undefined) {
        return this.selectItem(item)
      }
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event)
    }
  }

  private get next(): number | undefined {
    const { count, selected } = this.props
    const { focused } = this.state
    if (focused === undefined && selected === undefined) {
      return 0
    }
    const current = focused !== undefined ? focused : selected!
    return current + 1 >= count ? 0 : current + 1
  }

  private get prev(): number | undefined {
    const { count, selected } = this.props
    const { focused } = this.state
    if (focused === undefined && selected === undefined) {
      return count - 1
    }
    const current = focused !== undefined ? focused : selected!
    return current === 0 ? count - 1 : current - 1
  }

  public render() {
    const { focused, refs } = this.state
    const { selected, count } = this.props
    return this.props.children({
      items: new Array(count).fill(1).map((_item, index) => ({
        ref: refs[index],
        focused: focused !== undefined ? focused === index : false,
        selected: selected !== undefined ? selected === index : false,
        onClick: this.onItemClick(index),
        onMouseDown: this.onItemMouseDown,
        onMouseEnter: this.onItemEnter(index),
      })),
      focused,
      selected,
      containerRef: this.containerRef,
      onKeyDown: this.onKeyDown,
    })
  }
}
