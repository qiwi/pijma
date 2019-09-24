import {Component, RefObject, createRef} from 'react'
import {findDOMNode} from 'react-dom'
import MenuControlProps from './MenuControlProps'
import MenuControlState from './MenuControlState'

export default class MenuControl<I extends {id: string}> extends Component<MenuControlProps<I>, MenuControlState<I>> {

  public componentDidUpdate(props: MenuControlProps<I>) {
    if (props.items !== this.props.items) {
      this.itemsRefs = new Map(
        this.props.items.map((item => [item, createRef()])),
      )
      this.setState({
        selectedItem: this.props.items.find(item => this.state.selectedItem && this.state.selectedItem.id === item.id),
        focusedItem: this.props.items.find(item => this.state.selectedItem && this.state.selectedItem.id === item.id),
      })
    }
    if (
      props.show !== this.props.show &&
      this.props.show &&
      (this.state.selectedItem || this.state.focusedItem)
    ) {
      const itemRef = this.itemsRefs.get(this.state.focusedItem! || this.state.selectedItem!)
      if (itemRef) {
        this.scrollToItem(itemRef)
      }
    }
  }

  public state: MenuControlState<I> = {
    selectedItem: undefined,
    focusedItem: undefined,
  }

  private itemsRefs: Map<I, RefObject<HTMLDivElement>> = new Map(
    this.props.items.map((item => [item, createRef()])),
  )

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private onItemClick = (item: I) => (event: React.MouseEvent) => {
    event.preventDefault()
    this.selectItem(item)
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
      focusedItem: undefined,
    })
  }

  private selectItem: (item: I) => void = (item) => {
    this.setState({
      selectedItem: item,
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
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event)
    }
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
      const item = this.state.focusedItem || this.state.selectedItem
      if (item) {
        this.selectItem(item)
      }
      else {
        this.onSubmit()
      }
    }
  }

  private onSubmit: () => void = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  private get nextItem(): I | undefined {
    const {items} = this.props
    if (!this.state.focusedItem && !this.state.selectedItem) {
      return items[0]
    }
    const focusedId: number = items.findIndex(({id}) => (
      this.state.focusedItem ? id === this.state.focusedItem.id : id === this.state.selectedItem!.id
    ))
    return items[focusedId + 1 >= items.length ? 0 : focusedId + 1]
  }

  private get prevItem(): I | undefined {
    const {items} = this.props
    if (!this.state.focusedItem && !this.state.selectedItem) {
      return items[items.length - 1]
    }
    const focusedId: number = items.findIndex(({id}) => (
      this.state.focusedItem ? id === this.state.focusedItem.id : id === this.state.selectedItem!.id
    ))
    return items[focusedId === 0 ? items.length - 1 : focusedId - 1]
  }

  public render() {
    return this.props.children({
      items: this.props.items.map((item) => ({
        ...item,
        ref: this.itemsRefs.get(item)!,
        selected: !!this.state.selectedItem && this.state.selectedItem.id === item.id,
        focused: !!this.state.focusedItem && this.state.focusedItem.id === item.id,
        onClick: this.onItemClick(item),
        onMouseEnter: this.onItemEnter(item),
        onMouseLeave: this.onItemLeave(),
      })),
      containerRef: this.containerRef,
      onKeyDown: this.onKeyDown,
    })
  }

}
