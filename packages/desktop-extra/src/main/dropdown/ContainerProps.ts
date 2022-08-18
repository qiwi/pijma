import { ReactNode } from 'react'
export interface DropdownItem {
  name: string | number
  value: string | number
}

export type TRenderItem = (el: DropdownItem) => ReactNode
export default interface ContainerProps {
  items: Array<DropdownItem>
  value?: any
  onSelect: (el: DropdownItem | Array<any>) => void
  multiSelect?: boolean
  renderItem?: TRenderItem
}
