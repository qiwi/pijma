const createFilterMask = (pattern: RegExp) => {

  return (value: string) => {
    return value
      .split('')
      .concat('')
      .map(() => pattern)
  }
}

export default createFilterMask
