import {RefObject} from 'react'
import RenderChild from '../RenderChild'

export default interface ModalInputControlProps {
  show?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onShow?: () => void
  onHide?: () => void
  onCancel?: () => void
  onSubmit?: (value: string) => void
  children: RenderChild<{
    focused: boolean
    hovered: boolean
    show: boolean
    modalInputRef: RefObject<HTMLInputElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onModalInputBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    onShow: () => void
    onHide: () => void
    onCancel: () => void
    onSubmit: () => void
  }>
}
