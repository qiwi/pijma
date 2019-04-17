import {MouseEventHandler} from 'react'

export default interface CheckboxProps {
  disabled?: boolean
  focused?: boolean
  checked?: boolean
  reverse?: boolean
  label: string
  description?: string
  onClick: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}
