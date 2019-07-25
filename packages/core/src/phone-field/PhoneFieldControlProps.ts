import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import CountryCode from './CountryCode'
import Country from './Country'
import {maskArray} from '../mask'

export default interface PhoneFieldControlProps {
  countries: Country[]
  optionsRefs: Map<CountryCode, RefObject<HTMLDivElement> | null>
  countryFallback?: CountryCode
  value?: string
  inputRef?: () => RefObject<MaskedInput> | null
  dropdownRef?: () => RefObject<HTMLDivElement> | null
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  onFlagClick?: () => void
  onFlagMouseDown?: () => void
  onSelectCountry?: () => void
  onCountriesShow?: () => void
  onCountriesHide?: () => void
  onCountryEnter?: (contryCode: CountryCode) => void
  onCountryLeave?: (contryCode: CountryCode) => void
  children: RenderChild<{
    focused: boolean
    selected: CountryCode | null
    showCountries: boolean
    countryCode: CountryCode
    options: Country[]
    value: string
    mask: (value: string) => maskArray
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onKeyUp: React.KeyboardEventHandler
    onFlagClick: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    onCountryEnter: (countryCode: CountryCode) => void
    onCountryLeave: (countryCode: CountryCode) => void
    selectCountry: (countryCode: CountryCode) => void
    onSelectCountry: () => void
    onCountriesShow: () => void
    onCountriesHide: () => void
  }>
}
