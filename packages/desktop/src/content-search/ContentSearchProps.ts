import {ReactNode} from 'react'

import SearchItem from './SearchItem'

export default interface ContentSearchProps {
  value: string
  items: SearchItem[]
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
  onShow?: () => void
  onHide?: () => void
  onCancel?: () => void
  onSubmit?: () => void
  onItemSelect?: (item: SearchItem) => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
