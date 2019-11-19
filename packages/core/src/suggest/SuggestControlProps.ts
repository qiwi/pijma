import {RefObject} from 'react'
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
  show?: boolean
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
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onSearchMouseDown: React.MouseEventHandler
    onSearchClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onClick: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    onRequest: React.ChangeEventHandler
    onResultMouseDown: React.MouseEventHandler
    onSelect: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onHide: () => void
  }>
}
