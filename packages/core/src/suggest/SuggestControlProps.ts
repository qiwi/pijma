import {RefObject} from 'react'
import RenderChild from '../RenderChild'
import SuggestOptionModel from './SuggestOptionModel'
import SuggestResult from './SuggestResult'

export default interface SuggestControlProps <O extends SuggestOptionModel<V>, V> {
  items: O[]
  value?: V
  suggest?: string
  total?: SuggestResult
  empty?: SuggestResult
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
    onKeyDown: React.KeyboardEventHandler
    onRequest: React.ChangeEventHandler
    onResultMouseDown: React.MouseEventHandler
    onChange: (index: number) => void
    onTotalClick: () => void
    onEmptyClick: () => void
    onHide: () => void
    onSubmit: () => void
  }>
}
