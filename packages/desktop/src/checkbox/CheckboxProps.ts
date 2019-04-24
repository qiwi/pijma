import {MouseEventHandler} from 'react'

export default interface CheckboxProps {
  disabled?: boolean
  checked: boolean
  label: string
  tabIndex: number
  description?: string
  onClick: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}
