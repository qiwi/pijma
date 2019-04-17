import {MouseEventHandler} from 'react'

export default interface SwitchProps {
  disabled?: boolean
  focused?: boolean
  checked?: boolean
  reverse?: boolean
  label: string
  onClick: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}
