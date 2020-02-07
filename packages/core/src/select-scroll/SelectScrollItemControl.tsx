import React, {RefObject, createRef} from 'react'
import debounce from 'just-debounce-it'
import RenderChild from '../RenderChild'

export interface SelectScrollItem {
  value: number
  text: string
}

export interface ItemWithRef extends SelectScrollItem {
  ref: RefObject<HTMLDivElement>
  selected?: boolean
}

export interface SelectScrollItemProps {
  index: number
  items: ItemWithRef[]
  blockHeight: number
  onSelect?: (item: ItemWithRef, index: number) => void
  children: RenderChild<{
    containerRef: RefObject<HTMLDivElement>
    onScroll: () => void
    onItemClick: (index: ItemWithRef) => () => void
  }>
}

export class SelectScrollItemControl extends React.Component<SelectScrollItemProps> {

  public componentDidMount() {
    const selectedItem = this.props.items.find(item => item.selected)!
    this.selectItem(selectedItem, false)
  }

  private containerRef: RefObject<HTMLDivElement> = createRef()

  private selectItem = (item: ItemWithRef, smooth: boolean = true) => {
    if (this.props.onSelect) {
      this.props.onSelect(item, this.props.index)
    }
    item.ref.current!.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'center',
    })
  }

  private onItemClick = (item: ItemWithRef) => () => {
    this.selectItem(item)
  }

  private onScroll = () => {
    const containerPadding = 3 * this.props.blockHeight * 4
    const currentScrollTop = this.containerRef.current!.scrollTop + containerPadding
    const absItems = this.props.items.map(
      item => Math.abs(currentScrollTop - item.ref.current!.offsetTop),
    )
    const min = Math.min(...absItems)
    const index = absItems.indexOf(min)
    this.selectItem(this.props.items[index])
  }

  public render() {
    return this.props.children({
      containerRef: this.containerRef,
      onScroll: debounce(this.onScroll, 50),
      onItemClick: this.onItemClick,
    })
  }

}
