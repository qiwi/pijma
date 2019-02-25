import {ReactNode, KeyboardEvent} from 'react'


export default interface TextAreaProps {
  value: string
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}
