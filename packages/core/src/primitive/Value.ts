export type Value = number | string | undefined

export const pxValue = (value: number | undefined, scale: number = 1): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  return `${scale * value}px`
}

export const pcValue = (value: number | undefined): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  return `${value}%`
}

export const cssValue = (value: Value | undefined, scale: number = 1): string | undefined => {
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
    return pxValue(value, scale)
  }
  return pcValue(100 * value)
}
