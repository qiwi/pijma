import React, {RefObject} from 'react'
import RenderChild from '../RenderChild'
import SuggestOptionModel from './SuggestOptionModel'

export default interface SuggestControlProps <O extends SuggestOptionModel<V>, V> {
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
    result: boolean
    inputRef: RefObject<HTMLInputElement>
    onShowFocus?: React.FocusEventHandler
    onInputFocus?: React.FocusEventHandler
    onInputBlur?: React.FocusEventHandler
    onShowClick?: React.MouseEventHandler
    onModalInputBlur?: React.FocusEventHandler
    onSearchMouseDown?: React.MouseEventHandler
    onSearchClick: React.MouseEventHandler
    onBack?: React.MouseEventHandler
    onInputMouseEnter: React.MouseEventHandler
    onInputMouseLeave: React.MouseEventHandler
    onItemKeyDown?: React.KeyboardEventHandler,
    onModalItemKeyDown?: React.KeyboardEventHandler,
    onRequest: React.ChangeEventHandler
    onResultItemsMouseDown?: React.MouseEventHandler
    onItemSelect: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onHide: () => void
    onEscapeInputModal?: () => void
  }>
}
