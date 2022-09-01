import { TRenderItem } from './ContainerProps'
export default interface DropdownProps {
  value?: string | Array<any>
  multiSelect?: boolean
  items: Array<any>
  show?: boolean
  onChange?: (value: any) => void
  focus?: () => void
  renderItem?: TRenderItem
}
