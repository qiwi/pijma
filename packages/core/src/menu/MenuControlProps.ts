import {RefObject, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps<V> {
  items: V[]
  selected?: V
  onKeyDown?: KeyboardEventHandler
  onItemSelect?: (item: V) => void
  equals?: (a: V, b: V) => boolean
  children: RenderChild<{
    items: Array<{
      ref: RefObject<HTMLDivElement>
      selected: boolean
      focused: boolean
      onClick: React.MouseEventHandler
      onMouseEnter: React.MouseEventHandler
      onMouseLeave: React.MouseEventHandler
    }>
    focused: V | undefined
    selected: V | undefined
    containerRef: RefObject<HTMLDivElement>
    onKeyDown: React.KeyboardEventHandler
  }>
}
