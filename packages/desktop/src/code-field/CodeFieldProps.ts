import { ReactNode } from 'react'

export interface CodeFieldProps {
  value: string[]
  type?: 'number' | 'text'
  error?: ReactNode
  disabled?: boolean
  autoFocus?: boolean
  stub?: boolean
  loading?: boolean
  length?: number
  onChange?: (value: string[]) => void
  onFocus?: () => void
  onBlur?: () => void
  onReady?: (value?: string) => string
}
