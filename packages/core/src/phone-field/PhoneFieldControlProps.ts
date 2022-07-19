import React, { FC, RefObject } from 'react'

import { FlagProps } from '../flag'
import { Mask } from '../mask'
import { PhoneFieldCountry } from './PhoneFieldCountry'

export interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  value?: string
  hideOnBlur?: boolean
  onChange?: (phone: string, code: FlagProps['code'] | undefined) => void
  onFocus?: () => void
  onBlur?: () => void
  children: FC<{
    value: string
    code: FlagProps['code'] | undefined
    countries: Array<
      PhoneFieldCountry & {
        ref: RefObject<HTMLDivElement>
        selected: boolean
        focused: boolean
        onClick: React.MouseEventHandler
        onMouseEnter: React.MouseEventHandler
        onMouseLeave: React.MouseEventHandler
      }
    >
    focused: boolean
    showCountries: boolean
    containerRef: RefObject<HTMLDivElement>
    inputRef: RefObject<HTMLInputElement>
    dropdownRef: RefObject<HTMLDivElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onFlagClick: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    mask: Mask
    onCountriesHide: () => void
    onSelectCountry: (index: number) => void
  }>
}
