import {MouseEventHandler} from 'react'

export default interface SwitcherProps {
  disabled?: boolean
  focused?: boolean
  checked?: boolean
  label: string
  onClick: MouseEventHandler
  onMouseEnter?: MouseEventHandler
}
