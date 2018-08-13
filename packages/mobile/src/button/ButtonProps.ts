import {ReactNode} from 'react'

import ButtonKind from './ButtonKind'
import ButtonType from './ButtonType'

export default interface ButtonProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  disabled?: boolean
  kind: ButtonKind
  type: ButtonType
  text?: string
  icon?: ReactNode
  loading?: boolean
}
