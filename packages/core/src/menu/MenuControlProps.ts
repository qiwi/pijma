import {RefObject, KeyboardEventHandler, MouseEventHandler, FC} from 'react'

export default interface MenuControlProps {
  count: number
  selected?: number | undefined
  onKeyDown?: KeyboardEventHandler
  onSelect?: (index: number) => void
  children: FC<{
    items: Array<{
      ref: RefObject<HTMLDivElement>
      selected: boolean
      focused: boolean
      onClick: MouseEventHandler
      onMouseDown: MouseEventHandler
      onMouseEnter: MouseEventHandler
    }>
    focused: number | undefined
    selected: number | undefined
    containerRef: RefObject<HTMLDivElement>
    onKeyDown: KeyboardEventHandler
  }>
}
