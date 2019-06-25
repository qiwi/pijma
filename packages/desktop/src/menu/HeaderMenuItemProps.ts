import {Value} from '@qiwi/pijma-core'

export interface HeaderMenuItemProps {
  onClick?: (id: number) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  ml?: Value
  active: boolean
  id: number
}
