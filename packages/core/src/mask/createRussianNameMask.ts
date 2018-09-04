const createRussianNameMask = (value: string) => {
  return value
    .split('')
    .concat('')
    .map(() => /[а-яА-ЯЁё\s-]/)
}

export default createRussianNameMask
