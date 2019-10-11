
import {RefObject} from 'react'
import RenderChild from '../RenderChild'

export default interface SuggestControlProps<I> {
  items: I[]
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onShow?: () => void
  onHide?: () => void
  onSubmit?: (value: string) => void
  children: RenderChild<{
    focused: boolean
    hovered: boolean
    show: boolean
    inputRef: RefObject<HTMLInputElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onSearchMouseDown: React.MouseEventHandler
    onSearchClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    onHide: () => void
    onSubmit: () => void
  }>
}
