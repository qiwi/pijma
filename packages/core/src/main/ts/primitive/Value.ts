export type Value = number | string | undefined

export const pxValue = (
  value: number | undefined,
  scale = 1,
): string | undefined => {
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

export const cssValue = (
  value: Value | undefined,
  scale = 1,
  relative = true,
): string | undefined => {
  if (value === undefined) {
    return undefined
  }
  if (typeof value === 'string') {
    return value
  }
  if (isNaN(value)) {
    return undefined
  }
  if (!relative || value === 0 || Math.abs(value) > 1) {
    return pxValue(value, scale)
  }
  return pcValue(100 * value)
}

export const customScroll = (() => {
  try {
    const element = document.createElement('div')
    document.body.appendChild(element)
    element.style.overflow = 'scroll'
    const result = element.offsetWidth !== element.clientWidth
    document.body.removeChild(element)
    return result
  } catch (e) {}
})()
