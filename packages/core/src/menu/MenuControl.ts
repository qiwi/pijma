import {Component, RefObject, createRef} from 'react'
import {findDOMNode} from 'react-dom'
import MenuControlProps from './MenuControlProps'
import MenuControlState from './MenuControlState'

export default class MenuControl<V> extends Component<MenuControlProps<V>, MenuControlState<V>> {

  public componentDidUpdate(prevProps: MenuControlProps<V>) {
    if (prevProps.items !== this.props.items) {
      this.itemsRefs = new Map(
        this.props.items.map((item => [item, createRef()])),
      )
    }
  }

  public state: MenuControlState<V> = {
    focused: undefined,
  }

  private itemsRefs: Map<V, RefObject<HTMLDivElement>> = new Map(
    this.props.items.map((item => [item, createRef()])),
  )

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private equals = (a: V, b: V): boolean => {
    if (this.props.equals) {
      return (this.props.equals(a, b))
    }
    return a === b
  }

  private onItemClick = (item: V) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.selectItem(item)
  }

  private onItemEnter = (item: V) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focused: item,
    })
  }

  private onItemLeave = () => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focused: undefined,
    })
  }

  private selectItem: (item: V) => void = (item) => {
    if (this.props.onItemSelect) {
      this.props.onItemSelect(item)
    }
  }

  private scrollToItem: (item: RefObject<HTMLDivElement>) => void = (item) => {
    const containerElement = findDOMNode(this.containerRef.current) as HTMLDivElement
    const itemElement = findDOMNode(item.current) as HTMLDivElement
    if (!containerElement || !itemElement) {
      return
    }
    const containerBoundingRect = containerElement.getBoundingClientRect()
    const itemBoundingRect = itemElement.getBoundingClientRect()
    const itemOffset = itemElement.offsetTop
    const scrollOffset = containerElement.scrollTop
    const itemHeigher = itemOffset < scrollOffset
    const itemLower = itemOffset + itemBoundingRect.height > scrollOffset + containerBoundingRect.height
    if (itemHeigher) {
      containerElement.scrollTo({top: itemOffset})
    }
    if (itemLower) {
      containerElement.scrollTo({top: itemOffset + itemBoundingRect.height - containerBoundingRect.height})
    }
  }

  private onKeyDown: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    const {focused} = this.state
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event)
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextItem = this.nextItem
      this.setState({
        focused: nextItem,
      })
      const itemRef = this.itemsRefs.get(nextItem)
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevItem = this.prevItem
      this.setState({
        focused: prevItem,
      })
      const itemRef = this.itemsRefs.get(prevItem)
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      const item = focused !== undefined ? focused : this.props.selected
      if (item !== undefined) {
        this.selectItem(item)
      }
    }
  }

  private get nextItem(): V {
    const {items} = this.props
    const {focused} = this.state
    const {selected} = this.props
    if (focused === undefined && selected === undefined) {
      return items[0]
    }
    const currentId = this.props.items.findIndex(item => this.equals(item, focused || selected!))
    const nextId = currentId + 1 >= items.length ? 0 : currentId + 1
    return items[nextId]
  }

  private get prevItem(): V {
    const {items} = this.props
    const {focused} = this.state
    const {selected} = this.props
    if (focused === undefined && selected === undefined) {
      return items[items.length - 1]
    }
    const currentId = this.props.items.findIndex(item => this.equals(item, focused || selected!))
    const prevId = currentId === 0 ? items.length - 1 : currentId - 1
    return items[prevId]
  }

  public render() {
    const {focused} = this.state
    const {selected} = this.props
    return this.props.children({
      items: this.props.items.map(item => ({
        ref: this.itemsRefs.get(item)!,
        focused: focused ? this.equals(item, focused) : false,
        selected: selected ? this.equals(item, selected) : false,
        onClick: this.onItemClick(item),
        onMouseEnter: this.onItemEnter(item),
        onMouseLeave: this.onItemLeave(),
      })),
      focused,
      selected,
      containerRef: this.containerRef,
      onKeyDown: this.onKeyDown,
    })
  }

}
