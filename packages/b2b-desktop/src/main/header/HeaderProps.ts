import { ReactNode } from 'react'

interface NavItem {
  name: string
  path: string
  node?: ReactNode
  value?: string | number
}

export default interface HeaderProps {
  isLoading: boolean
  title: string
  selectorData: object
  link: ReactNode
  navItems: Array<NavItem>
  navActiveItem?: {
    pathname: string
  }
  userName?: string
  onItemChange?: (value: any) => void
  onLogout?: (event: any) => void
}
