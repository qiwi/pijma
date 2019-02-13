import {ReactNode, KeyboardEvent} from 'react'

import {Pipe} from '@qiwi/pijma-core'

export default interface TextFieldProps {
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
  pipe?: Pipe
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}
