import {Mask} from './Mask'

const createFilterMask = (pattern: RegExp): Mask => {
  return (value: string) => {
    return value
      .split('')
      .concat('')
      .map(() => pattern)
  }
}

export default createFilterMask
