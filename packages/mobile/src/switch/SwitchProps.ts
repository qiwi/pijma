import {ReactNode} from 'react'

export default interface SwitchProps {
  disabled?: boolean
  checked: boolean
  reverse?: boolean
  tabIndex?: number
  description?: ReactNode
  label: string
  onChange: (value: boolean) => void
}
