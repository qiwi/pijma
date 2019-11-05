import {RefObject, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps {
  count: number
  selected?: number | undefined
  onKeyDown?: KeyboardEventHandler
  onItemSelect?: (index: number) => void
  children: RenderChild<{
    items: Array<{
      ref: RefObject<HTMLDivElement>
      selected: boolean
      focused: boolean
      onClick: React.MouseEventHandler
      onMouseDown: React.MouseEventHandler
      onMouseEnter: React.MouseEventHandler
    }>
    focused: number | undefined
    selected: number | undefined
    containerRef: RefObject<HTMLDivElement>
    onKeyDown: React.KeyboardEventHandler
  }>
}
