import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import Country from './Country'
import Phone from './Phone'
import {maskArray} from '../mask'

export default interface PhoneFieldControlProps {
  countries: Country[]
  optionsRefs: Map<Country, RefObject<HTMLDivElement> | null>
  countryFallback: Country
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
  onCountryEnter?: (contry: Country) => void
  onCountryLeave?: (contry: Country) => void
  children: RenderChild<{
    country: Country
    focused: boolean
    selected: Country | null
    showCountries: boolean
    value: Phone
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: (event: React.FocusEvent, hideOnBlur?: boolean) => void
    onKeyDown: React.KeyboardEventHandler
    onFlagClick: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    getMask: (phoneNumber: string) => maskArray
    onCountryEnter: (country: Country) => void
    onCountryLeave: (country: Country) => void
    selectCountry: (country: Country) => void
    onSelectCountry: () => void
    onCountriesShow: () => void
    onCountriesHide: () => void
  }>
}
