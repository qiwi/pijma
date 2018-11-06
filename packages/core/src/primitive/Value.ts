export type Value = number | string | undefined

export const pxValue = (value: number | undefined): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  return `${value}px`
}

export const pcValue = (value: number | undefined): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  return `${value}%`
}

export const cssValue = (value: Value | undefined): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  if (typeof value === 'string') {
    return value
  }
  if (typeof value !== 'number' || isNaN(value)) {
    return undefined
  }
  if (value === 0 || Math.abs(value) > 1) {
    return pxValue(value)
  }
  return pcValue(100 * value)
}
