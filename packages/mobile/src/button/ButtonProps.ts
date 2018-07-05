import React from 'react'

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
  icon?: React.ReactNode
  loading?: boolean
}
