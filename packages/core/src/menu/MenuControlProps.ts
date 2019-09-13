import {RefObject} from 'react'
import RenderChild from '../RenderChild'

export default interface MenuControlProps<I> {
  items: I[]
  // onChange?: (value: string) => void
  // onFocus?: () => void
  // onBlur?: () => void
  // onHide?: () => void
  onItemClick?: (item: I) => void
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
  //   focused: boolean
  //   hovered: boolean
  //   show: boolean
  //   onChange: React.ChangeEventHandler
  //   onFocus: React.FocusEventHandler
  //   onBlur: React.FocusEventHandler
  //   onMouseEnter: React.MouseEventHandler
  //   onMouseLeave: React.MouseEventHandler
  //   onHide: () => void
  }>
}
