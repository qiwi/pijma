const createLatinNameMask = (value: string) => {
  return value
    .split('')
    .concat('')
    .map(() => /[a-zA-Z\s-]/)
}

export default createLatinNameMask
