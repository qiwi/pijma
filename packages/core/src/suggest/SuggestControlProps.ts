import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react'

import { SuggestOptionModel } from './SuggestOptionModel'

export interface SuggestControlProps<O extends SuggestOptionModel<V>, V> {
  items?: O[]
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
  onSubmit?: (value: string) => boolean
  children: FC<{
    focused: boolean
    hovered: boolean
    selected: number | undefined
    show: boolean
    inputRef: RefObject<HTMLInputElement>
    containerRef: RefObject<HTMLDivElement>
    items: O[]
    onShowFocus?: FocusEventHandler
    onInputFocus?: FocusEventHandler
    onInputBlur?: FocusEventHandler
    onShowClick?: MouseEventHandler
    onModalInputBlur?: FocusEventHandler
    onSearchClick: MouseEventHandler
    onBack?: MouseEventHandler
    onInputMouseEnter: MouseEventHandler
    onInputMouseLeave: MouseEventHandler
    onItemKeyDown?: KeyboardEventHandler
    onModalItemKeyDown?: KeyboardEventHandler
    onRequest: ChangeEventHandler
    onResultItemsMouseDown?: MouseEventHandler
    onItemSelect: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onShow: () => void
    onHide: () => void
    onEscapeInputModal?: () => void
  }>
}
