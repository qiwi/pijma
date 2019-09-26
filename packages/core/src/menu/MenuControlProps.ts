import {RefObject, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps<I> {
  items: I[]
  show?: boolean
  onKeyDown?: KeyboardEventHandler
  onItemSelect?: (item: I) => void
  onSubmit?: () => void
  equals?: (a: I, b: I) => boolean
  children: RenderChild<{
    items: Array<
      I & {
        ref: RefObject<HTMLDivElement>
        selected: boolean
        focused: boolean
        onClick: React.MouseEventHandler
        onMouseEnter: React.MouseEventHandler
        onMouseLeave: React.MouseEventHandler
      }
    >
    containerRef: RefObject<HTMLDivElement>
    onKeyDown: React.KeyboardEventHandler
  }>
}
