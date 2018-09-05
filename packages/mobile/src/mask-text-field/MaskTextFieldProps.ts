import {ReactNode, KeyboardEvent} from 'react'
import {MaskedInputProps} from 'react-text-mask'
import {Mask} from '@qiwi/pijma-core'

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
  mask?: Mask
  pipe?: MaskedInputProps['pipe']
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}
