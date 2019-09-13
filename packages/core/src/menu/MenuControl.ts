import {Component, RefObject, createRef} from 'react'
import {findDOMNode} from 'react-dom'
import MenuControlProps from './MenuControlProps'
import MenuControlState from './MenuControlState'

export default class MenuControl<I> extends Component<MenuControlProps<I>, MenuControlState<I>> {

  public componentDidUpdate(props: MenuControlProps<I>, _state: MenuControlState<I>) {
    if (props.items !== this.props.items) {
      this.itemsRefs = new Map(
        this.props.items.map((item => [item, createRef()])),
      )
    }
  }

  public state: MenuControlState<I> = {
    selectedItem: null,
    focusedItem: null,
  }

  private itemsRefs: Map<I, RefObject<HTMLDivElement>> = new Map(
    this.props.items.map((item => [item, createRef()])),
  )

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private onItemClick = (item: I) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.selectItem(item)
    if (this.props.onItemClick) {
      this.props.onItemClick(item)
    }
  }

  private onItemEnter = (item: I) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focusedItem: item,
    })
  }

  private onItemLeave = () => (event: React.MouseEvent) => {
    event.preventDefault()
    this.setState({
      focusedItem: null,
    })
  }

  private selectItem: (item: I) => void = (item) => {
    this.setState({
      selectedItem: item,
    })
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
    // if (!this.state.showCountries && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
    //   event.preventDefault()
    //   this.setState({
    //     showCountries: true,
    //   })
    //   return
    // }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextItem = this.nextItem
      this.setState({
        focusedItem: nextItem,
      })
      const itemRef = this.itemsRefs.get(nextItem || this.state.selectedItem || this.props.items[0])
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this.setState({
        focusedItem: this.prevItem,
      })
      const itemRef = this.itemsRefs.get(this.prevItem || this.state.selectedItem || this.props.items[this.props.items.length - 1])
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      this.selectItem(this.state.focusedItem || this.state.selectedItem || this.props.items[0])
    }
  }

  private get nextItem(): I | null {
    const {items} = this.props
    const focusedId: number = items.findIndex(item => this.state.focusedItem === null ? item === this.state.selectedItem : item === this.state.focusedItem)
    const nextId = focusedId + 1 >= items.length ? 0 : focusedId + 1
    return items[nextId]
  }

  private get prevItem(): I | null {
    const {items} = this.props
    const focusedId: number = items.findIndex(item => this.state.focusedItem === null ? item === this.state.selectedItem : item === this.state.focusedItem)
    const prevId = focusedId <= 0 ? items.length - 1 : focusedId - 1
    return items[prevId]
  }

  public render() {
    return this.props.children({
      items: this.props.items.map((item) => ({
        ...item,
        ref: this.itemsRefs.get(item)!,
        selected: item === this.state.selectedItem,
        focused: item === this.state.focusedItem,
        onClick: this.onItemClick(item),
        onMouseEnter: this.onItemEnter(item),
        onMouseLeave: this.onItemLeave(),
      })),
      containerRef: this.containerRef,
      onKeyDown: this.onKeyDown,
    })
  }

}
