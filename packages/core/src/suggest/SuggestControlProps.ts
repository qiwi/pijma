
import {RefObject} from 'react'
import RenderChild from '../RenderChild'

export default interface SuggestControlProps<I> {
  show?: boolean
  items: I[]
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onShow?: () => void
  onHide?: () => void
  onSubmit?: () => void
  children: RenderChild<{
    focused: boolean
    hovered: boolean
    show: boolean
    inputRef: RefObject<HTMLInputElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onShow: () => void
    onHide: () => void
    onSubmit: () => void
  }>
}
