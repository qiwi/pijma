import { Mask } from './MaskedInput'

const emptyString = ''
const space = ' '
const comma = ','
const period = '.'
const minus = '-'
const minusRegExp = /-/
const nonDigitsRegExp = /\D+/g
const digitRegExp = /\d/
const decimalRegExp = /[,.]/
const caretTrap = '[]'

export interface NumberMaskOpts {
  prefix?: string
  suffix?: string
  includeThousandsSeparator?: boolean
  thousandsSeparatorSymbol?: string
  allowDecimal?: boolean
  decimalLimit?: number
  requireDecimal?: boolean
  allowNegative?: boolean
  allowLeadingZeroes?: boolean
  integerLimit?: number
}

export function createNumberMask({
  prefix = '',
  suffix = emptyString,
  includeThousandsSeparator = true,
  thousandsSeparatorSymbol = space,
  allowDecimal = true,
  decimalLimit = 2,
  requireDecimal = false,
  allowNegative = false,
  allowLeadingZeroes = false,
  integerLimit = 6,
}: NumberMaskOpts = {}): Mask {
  const prefixLength = (prefix && prefix.length) || 0
  const suffixLength = (suffix && suffix.length) || 0
  const thousandsSeparatorSymbolLength =
    (thousandsSeparatorSymbol && thousandsSeparatorSymbol.length) || 0

  function numberMask(rawValue = emptyString) {
    const rawValueLength = rawValue.length

    if (
      rawValue === emptyString ||
      (rawValue[0] === prefix[0] && rawValueLength === 1)
    ) {
      return [
        ...prefix.split(emptyString),
        digitRegExp,
        ...suffix.split(emptyString),
      ]
    }

    if ((rawValue === period || rawValue === comma) && allowDecimal) {
      return [
        ...prefix.split(emptyString),
        '0',
        decimalRegExp,
        digitRegExp,
        ...suffix.split(emptyString),
      ]
    }

    const isNegative = rawValue[0] === minus && allowNegative

    if (isNegative) {
      rawValue = rawValue.toString().substr(1)
    }

    const indexOfLastDecimal1 = rawValue.lastIndexOf(period)
    const indexOfLastDecimal2 = rawValue.lastIndexOf(comma)
    const indexOfLastDecimal =
      indexOfLastDecimal1 === -1 ? indexOfLastDecimal2 : indexOfLastDecimal1
    const hasDecimal = indexOfLastDecimal !== -1
    const decimalSymbol = hasDecimal ? rawValue[indexOfLastDecimal] : null

    let integer
    let fraction
    let mask

    if (rawValue.slice(suffixLength * -1) === suffix) {
      rawValue = rawValue.slice(0, suffixLength * -1)
    }

    if (hasDecimal && (allowDecimal || requireDecimal)) {
      integer = rawValue.slice(
        rawValue.slice(0, prefixLength) === prefix ? prefixLength : 0,
        indexOfLastDecimal,
      )
      fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength)
      fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString))
    } else {
      if (rawValue.slice(0, prefixLength) === prefix) {
        integer = rawValue.slice(prefixLength)
      } else {
        integer = rawValue
      }
    }

    if (integerLimit) {
      const thousandsSeparatorRegex =
        thousandsSeparatorSymbol === '.' ? '[.]' : `${thousandsSeparatorSymbol}`
      const numberOfThousandSeparators = (
        integer.match(new RegExp(thousandsSeparatorRegex, 'g')) || []
      ).length
      integer = integer.slice(
        0,
        integerLimit +
          numberOfThousandSeparators * thousandsSeparatorSymbolLength,
      )
    }

    integer = integer.replace(nonDigitsRegExp, emptyString)

    if (!allowLeadingZeroes) {
      integer = integer.replace(/^0+(0$|[^0])/, '$1')
    }

    integer = includeThousandsSeparator
      ? addThousandsSeparator(integer, thousandsSeparatorSymbol)
      : integer

    mask = convertToMask(integer)

    if ((hasDecimal && allowDecimal) || requireDecimal === true) {
      if (rawValue[indexOfLastDecimal - 1] !== decimalSymbol) {
        mask.push(caretTrap)
      }
      if (decimalSymbol !== null) {
        mask.push(decimalSymbol, caretTrap)
      }
      if (fraction) {
        if (decimalLimit) {
          fraction = fraction.slice(0, decimalLimit)
        }
        mask = mask.concat(fraction)
      }
      if (
        requireDecimal === true &&
        rawValue[indexOfLastDecimal - 1] === decimalSymbol
      ) {
        mask.push(digitRegExp)
      }
    }

    if (prefixLength > 0) {
      mask = [...prefix.split(emptyString), ...mask]
    }

    if (isNegative) {
      if (mask.length === prefixLength) {
        mask.push(digitRegExp)
      }
      mask = [minusRegExp, ...mask]
    }

    if (suffix.length > 0) {
      mask = mask.concat(suffix.split(emptyString))
    }

    return mask
  }

  return numberMask
}

function convertToMask(strNumber: string): Array<string | RegExp> {
  return strNumber
    .split(emptyString)
    .map((char) => (digitRegExp.test(char) ? digitRegExp : char))
}

function addThousandsSeparator(n: string, thousandsSeparatorSymbol: string) {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol)
}
