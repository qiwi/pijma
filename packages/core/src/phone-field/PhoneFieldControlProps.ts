import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import PhoneFieldCountry from './PhoneFieldCountry'
import Phone from './Phone'
import {maskArray} from '../mask'

export default interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  countryFallback: PhoneFieldCountry
  value?: Phone
  hideOnBlur?: boolean
  onChange?: (value: Phone) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  onFlagClick?: () => void
  onFlagMouseDown?: () => void
  onSelectCountry?: () => void
  onCountriesShow?: () => void
  onCountriesHide?: () => void
  onCountryEnter?: (contry: PhoneFieldCountry) => void
  onCountryLeave?: (contry: PhoneFieldCountry) => void
  children: RenderChild<{
    country: PhoneFieldCountry
    countries: Array<
      PhoneFieldCountry & {
        ref: RefObject<HTMLDivElement>
        current: boolean
        selected: boolean
        onClick: React.MouseEventHandler
        onMouseEnter: React.MouseEventHandler
        onMouseLeave: React.MouseEventHandler
      }
    >
    focused: boolean
    showCountries: boolean
    value: Phone
    containerRef: RefObject<HTMLDivElement>
    inputRef: RefObject<MaskedInput>
    dropdownRef: RefObject<HTMLDivElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onFlagClick: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    getMask: (phoneNumber: string) => maskArray
    onCountriesShow: () => void
    onCountriesHide: () => void
  }>
}
