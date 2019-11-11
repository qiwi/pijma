import {RefObject} from 'react'
import ModalSuggestOptionModel from './ModalSuggestOptionModel'
import RenderChild from '../RenderChild'

export default interface ModalSuggestControlProps<O extends ModalSuggestOptionModel<V>, V> {
  items: O[]
  value?: V
  suggest?: string
  total?: {
    text?: string
    link?: {
      text: string
      suggest: string
    }
  }
  empty?: {
    text?: string
    link?: {
      text: string
      suggest: string
    }
  }
  equals: (a: V, b: V) => boolean
  onChange: (value: V) => void
  onRequest: (suggest: string) => void
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
    inputRef: RefObject<HTMLInputElement>
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onModalInputBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    onRequest: React.ChangeEventHandler
    onBack: React.MouseEventHandler
    onSearchClick: React.MouseEventHandler
    onSelect: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onShow: () => void
    onHide: () => void
    onEscape: () => void
  }>
}
