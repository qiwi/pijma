import { RefObject } from 'react'

export interface MenuControlState {
  refs: RefObject<HTMLDivElement>[]
  focused: number | undefined
}
