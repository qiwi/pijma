import { ReactNode } from 'react'

export interface CheckboxProps {
  disabled?: boolean
  checked: boolean
  label: ReactNode
  tabIndex?: number
  description?: string
  autoFocus?: boolean
  onChange: (value: boolean) => void
}
