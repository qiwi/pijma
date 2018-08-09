import {ReactNode, KeyboardEvent} from 'react'
import {MaskedInputProps} from 'react-text-mask'

export default interface MaskTextFieldProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel'
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  mask?: MaskedInputProps['mask']
  pipe?: MaskedInputProps['pipe']
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}
