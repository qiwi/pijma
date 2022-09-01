import { ReactNode } from 'react'

export default interface NavigationMenuProps {
  active?: string
  items: Array<{
    name?: string
    path?: string
    node?: ReactNode
    value?: string | number
  }>
  link?: any
  isItemSelected?: () => void
  onChange?: () => void
}
