import {RefObject} from 'react'

import {RenderChild, OptionModel} from '@qiwi/pijma-core'

export interface MenuOptionModel<V> extends OptionModel<V> {
  ref: RefObject<HTMLElement>
}

export interface MenuChildren<V> {
  ref: RefObject<HTMLElement>
  scrollable: boolean
  options: MenuOptionModel<V>[]
}

export default interface MenuControlProps<V> {
  focused?: number
  selected?: number
  onOptionClick: (index: number) => void
  onOptionMouseEnter: (index: number) => void
  options: MenuOptionModel<V>[]
  children: RenderChild<MenuChildren<V>>
}
