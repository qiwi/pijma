import { TMenuItem } from './interfaces'

export default interface MenuProps {
  default?: string
  onChange?: (params: any) => void
  isItemSelected?: (params: any) => void
  items: Array<undefined | string | TMenuItem>
  flexProps?: object
}
