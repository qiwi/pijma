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
  active: boolean
  id: number
}
