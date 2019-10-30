import {RefObject} from 'react'
import {OptionModel} from '../option'
import RenderChild from '../RenderChild'

export default interface ModalSuggestControlProps<O extends OptionModel<V>, V> {
  items: O[]
  value?: V
  equals: (a: V, b: V) => boolean
  onChange?: (value: V) => void
  onRequest?: (suggest: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onShow?: () => void
  onHide?: () => void
  onCancel?: () => void
  onSubmit?: (suggest: string) => void
  children: RenderChild<{
    focused: boolean
    hovered: boolean
    selected: number | undefined
    show: boolean
    modalInputRef: RefObject<HTMLInputElement>
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onModalInputBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    onRequest: React.ChangeEventHandler
    onChange: (index: number) => void
    onShow: () => void
    onHide: () => void
    onCancel: () => void
    onSubmit: () => void
  }>
}
