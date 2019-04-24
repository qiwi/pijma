import {MouseEventHandler} from 'react'

export default interface SwitchProps {
  disabled?: boolean
  checked: boolean
  reverse?: boolean
  label: string
  onChange: MouseEventHandler
}
