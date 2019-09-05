import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import PhoneFieldCountry from './PhoneFieldCountry'
import Phone from './Phone'
import {maskArray} from '../mask'

export default interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  optionsRefs: Map<PhoneFieldCountry, RefObject<HTMLDivElement> | null>
  countryFallback: PhoneFieldCountry
  value?: Phone
  inputRef?: () => RefObject<MaskedInput> | null
  dropdownRef?: () => RefObject<HTMLDivElement> | null
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
    focused: boolean
    selected: PhoneFieldCountry | null
    showCountries: boolean
    value: Phone
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: (event: React.FocusEvent, hideOnBlur?: boolean) => void
    onKeyDown: React.KeyboardEventHandler
    onFlagClick: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    getMask: (phoneNumber: string) => maskArray
    onCountryEnter: (country: PhoneFieldCountry) => void
    onCountryLeave: (country: PhoneFieldCountry) => void
    selectCountry: (country: PhoneFieldCountry) => void
    onSelectCountry: () => void
    onCountriesShow: () => void
    onCountriesHide: () => void
  }>
}
