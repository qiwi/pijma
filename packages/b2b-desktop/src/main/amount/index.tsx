import { formatMoney } from '@qiwi/common-formatters'
import React from 'react'

import AmountProps from './AmountProps'

export const Amount = ({
  value,
  currency,
  symbol,
  sign,
  fractionLength = 2,
  digitDelimiter = ' ',
  fractionDelimiter,
}: AmountProps) => {
  return (
    <span>
      {formatMoney(value, {
        currencyCode: currency,
        currencySymbol: symbol,
        sign,
        fractionLength,
        digitDelimiter,
        fractionDelimiter,
      })}
    </span>
  )
}
