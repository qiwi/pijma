import {RefObject, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps<I extends {id: string}> {
  items: I[]
  show?: boolean
  onKeyDown?: KeyboardEventHandler
  onItemSelect?: (item: I) => void
  onSubmit?: () => void
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
