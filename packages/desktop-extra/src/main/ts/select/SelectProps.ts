import { ReactNode } from 'react'

import { TRenderItem } from '../dropdown/ContainerProps'

export default interface SelectProps {
  value: string | Array<any>
  emptyValue?: string
  multiSelect?: boolean
  mapping?: any
  items: Array<any>
  onChange?: (value: any) => void
  title?: string
  defaultItem?: string
  error?: ReactNode
  disabled?: boolean
  renderItem?: TRenderItem
}
