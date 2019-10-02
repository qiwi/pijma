import {ReactNode} from 'react'

import SearchItemOptionModel from './SearchItemOptionModel'

export default interface ContentSearchProps<O extends SearchItemOptionModel<V>, V> {
  value: string
  items: O[]
  tabIndex: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  show?: boolean
  stub?: boolean
  error?: boolean
  loading?: boolean
  result?: ReactNode
  equals?: (a: O, b: O) => boolean
  onShow?: () => void
  onHide?: () => void
  onCancel?: () => void
  onSubmit?: () => void
  onItemSelect?: (item: O) => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
