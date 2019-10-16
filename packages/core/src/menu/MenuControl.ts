import {Component, RefObject, createRef} from 'react'
import {findDOMNode} from 'react-dom'
import MenuControlProps from './MenuControlProps'
import MenuControlState from './MenuControlState'

export default class MenuControl extends Component<MenuControlProps, MenuControlState> {

  public static getDerivedStateFromProps(nextProps: MenuControlProps, prevState: MenuControlState): Partial<MenuControlState> {
    const {focused} = prevState
    const {itemsLength} = nextProps
    return {
      focused: itemsLength === 0 ? (
        undefined
      ) : focused !== undefined && itemsLength <= focused ? (
        itemsLength - 1
      ) : (
        focused
      ),
    }
  }

  public componentDidUpdate(prevProps: MenuControlProps) {
    if (prevProps.itemsLength !== this.props.itemsLength) {
      this.itemsRefs = new Map(
        Array(this.props.itemsLength).fill(1).map((_value, index) => [index, createRef()]),
      )
    }
  }

  public state: MenuControlState = {
    focused: undefined,
  }

  private itemsRefs: Map<number, RefObject<HTMLDivElement>> = new Map(
    Array(this.props.itemsLength).fill(1).map((_value, index) => [index, createRef()]),
  )

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private onItemClick = (index: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.selectItem(index)
  }

  private onItemEnter = (index: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focused: index,
    })
  }

  private onItemLeave = () => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focused: undefined,
    })
  }

  private selectItem: (index: number) => void = (item) => {
    this.setState({
      focused: undefined,
    })
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
      if (nextItem === undefined) {
        return
      }
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
      if (prevItem === undefined) {
        return
      }
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

  private get nextItem(): number | undefined {
    const {itemsLength} = this.props
    const {focused} = this.state
    const {selected} = this.props
    if (focused === undefined && selected === undefined) {
      return 0
    }
    const currentId = focused !== undefined ? focused : selected!
    return currentId + 1 >= itemsLength ? 0 : currentId + 1
  }

  private get prevItem(): number | undefined {
    const {itemsLength} = this.props
    const {focused} = this.state
    const {selected} = this.props
    if (focused === undefined && selected === undefined) {
      return itemsLength - 1
    }
    const currentId = focused !== undefined ? focused : selected!
    return currentId === 0 ? itemsLength - 1 : currentId - 1
  }

  public render() {
    const {focused} = this.state
    const {selected, itemsLength} = this.props
    return this.props.children({
      items: Array(itemsLength).fill(1).map((_item, index) => ({
        ref: this.itemsRefs.get(index)!,
        focused: focused !== undefined ? focused === index : false,
        selected: selected !== undefined ? selected === index : false,
        onClick: this.onItemClick(index),
        onMouseEnter: this.onItemEnter(index),
        onMouseLeave: this.onItemLeave(),
      })),
      focused,
      selected,
      containerRef: this.containerRef,
      onKeyDown: this.onKeyDown,
    })
  }

}
