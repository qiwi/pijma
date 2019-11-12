import React, {RefObject} from 'react'
import MaskedInput from 'react-text-mask'

import RenderChild from '../RenderChild'

import PhoneFieldCountry from './PhoneFieldCountry'
import {FlagProps} from '../flag'
import {Mask} from '../mask'

export default interface PhoneFieldControlProps {
  countries: PhoneFieldCountry[]
  value?: string
  hideOnBlur?: boolean
  onChange?: (phone: string, code: FlagProps['code'] | undefined) => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<{
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
    inputRef: RefObject<MaskedInput>
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
