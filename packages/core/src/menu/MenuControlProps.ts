import {RefObject, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps {
  itemsLength: number
  selected?: number | undefined
  onKeyDown?: KeyboardEventHandler
  onItemSelect?: (index: number) => void
  children: RenderChild<{
    items: Array<{
      ref: RefObject<HTMLDivElement>
      selected: boolean
      focused: boolean
      onClick: React.MouseEventHandler
      onMouseEnter: React.MouseEventHandler
      onMouseLeave: React.MouseEventHandler
    }>
    focused: number | undefined
    selected: number | undefined
    containerRef: RefObject<HTMLDivElement>
    onKeyDown: React.KeyboardEventHandler
  }>
}
