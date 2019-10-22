import {RefObject} from 'react'
import RenderChild from '../RenderChild'

import {OptionModel} from '@qiwi/pijma-core'

export default interface SuggestControlProps <O extends OptionModel<V>, V> {
  items: O[]
  value?: V
  show?: boolean
  equals: (a: V, b: V) => boolean
  onChange?: (value: V) => void
  onRequest?: (suggest: string) => void
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
    onChange: (index: number) => void
    onHide: () => void
    onSubmit: () => void
  }>
}
