import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import PhoneFieldCountry from './PhoneFieldCountry'
import Phone from './Phone'
import {Mask} from '../mask'

export default interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  countryFallback: PhoneFieldCountry
  value?: Phone
  hideOnBlur?: boolean
  onChange?: (value: Phone) => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<{
    country: PhoneFieldCountry
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
    value: Phone
    containerRef: RefObject<HTMLDivElement>
    inputRef: RefObject<MaskedInput>
    dropdownRef: RefObject<HTMLDivElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onFlagMouseUp: React.MouseEventHandler
    onFlagMouseDown: React.MouseEventHandler
    mask: Mask
    onCountriesShow: () => void
    onCountriesHide: () => void
  }>
}
