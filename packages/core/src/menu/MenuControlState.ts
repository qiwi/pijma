import {RefObject} from 'react'

export default interface SuggestControlState {
  refs: RefObject<HTMLDivElement>[]
  focused: number | undefined
}
