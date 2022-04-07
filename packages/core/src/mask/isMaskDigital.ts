import {Mask} from './MaskedInput'

const digits = [/\d/, /[0-9]/, /0/, /1/, /2/, /3/, /4/, /5/, /6/, /7/, /8/, /9/].map(r => r.toString())

export const isMaskDigital = (mask: Mask): boolean => {
  if (!Array.isArray(mask)) {
    return false
  }
  return mask
    .filter(s => s instanceof RegExp)
    .map(r => r.toString())
    .every(s => digits.includes(s))
}
