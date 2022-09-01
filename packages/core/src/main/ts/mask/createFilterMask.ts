import { Mask } from './MaskedInput'

export const createFilterMask = (pattern: RegExp): Mask => {
  return (value: string) => {
    return value
      .split('')
      .concat('')
      .map(() => pattern)
  }
}
