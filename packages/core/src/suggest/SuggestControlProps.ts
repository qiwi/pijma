import React, {RefObject} from 'react'
import RenderChild from '../RenderChild'
import SuggestOptionModel from './SuggestOptionModel'

export default interface SuggestControlProps <O extends SuggestOptionModel<V>, V> {
  modal?: boolean
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
  onCancel?: () => void
  onFocus?: () => void
  onBlur?: () => void
  onHide?: () => void
  onSubmit?: (value: string) => void
  children: RenderChild<{
    focused: boolean
    hovered: boolean
    selected: number | undefined
    show: boolean
    inputRef: RefObject<HTMLInputElement>
    // onFocus: React.FocusEventHandler
    onShowFocus?: React.FocusEventHandler
    onInputFocus?: React.FocusEventHandler
    onInputBlur?: React.FocusEventHandler
    onShowClick?: React.MouseEventHandler
    onModalInputBlur?: React.FocusEventHandler
    onSearchMouseDown?: React.MouseEventHandler
    onSearchClick: React.MouseEventHandler
    onBack?: React.MouseEventHandler
    onMouseInputEnter: React.MouseEventHandler
    onMouseInputLeave: React.MouseEventHandler
    // onKeyDown: React.KeyboardEventHandler
    onModalItemKeyDown?: React.KeyboardEventHandler,
    onItemKeyDown?: React.KeyboardEventHandler,
    onRequest: React.ChangeEventHandler
    onResultItemsMouseDown?: React.MouseEventHandler
    onItemSelect: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onHide: () => void
    // onShow?: () => void
    onEscapeInputModal?: () => void
  }>
}
